---
reference: m4-navigation-architecture-tuto12
slug: tuto12
module_reference: mobile
part_reference: m4-navigation-architecture
concept_reference: ''
title: tuto12
description: ''
order: 135
directory: mobile/m4-navigation-architecture
permalink: mobile/m4-navigation-architecture/tuto12
layout: chapters
---

# **Tutoriel 12 : Utilisation de ViewModel et gestion d'état dans Jetpack Compose (Mise à jour)**  

---

## **Introduction**  

Dans ce tutoriel, nous allons approfondir l’utilisation de **ViewModel** et **StateFlow** pour gérer l’état dans une application Jetpack Compose. Nous introduirons également une architecture de fichiers adaptée au projet final de To-Do List, afin d’habituer les apprenants à une structure professionnelle et évolutive.  

---

## **Objectifs**  

1. Comprendre pourquoi utiliser ViewModel avec StateFlow pour une gestion efficace de l’état.  
2. Mettre en œuvre une architecture modulaire basée sur une séparation claire des responsabilités.  
3. Intégrer et expliquer le fonctionnement d’un modèle de flux de données unidirectionnel (**UDF**) avec immutabilité.  
4. Développer une application réactive où l'état persiste lors des changements de configuration.  

---

## **Architecture des fichiers et dossiers**  

Adoptons une structure modulaire dès maintenant :  

```
app/
│
├── ui/                  # Interface utilisateur  
│   ├── screens/         # Écrans composables  
│   └── components/      # Composants réutilisables  
│
├── data/                # Données et logique métier  
│   ├── models/          # Modèles de données  
│   └── repositories/    # Gestion des données (API, DB)  
│
├── viewmodel/           # Gestion d’état  
│   └── TaskViewModel.kt # ViewModel pour les tâches  
│
└── MainActivity.kt      # Activité principale  
```  

**Pourquoi cette organisation ?**  
- **Séparation des responsabilités :** Chaque dossier gère un aspect spécifique (UI, données, logique).  
- **Évolutivité :** Plus facile d’ajouter des fonctionnalités sans introduire de chaos.  

---

## **Concepts Clés**  


### **1. Rôle de ViewModel**
ViewModel est une classe spéciale qui conserve les données d’une application lors des changements de configuration (par exemple, une rotation d’écran). Elle permet :

- De séparer la logique métier de l’interface utilisateur.
- De préserver l’état des données pendant la durée de vie d’une activité ou d’un fragment.

### **2. StateFlow pour l’état réactif**
StateFlow est une API de Kotlin Coroutines qui permet de suivre les changements d’état et de les notifier à l’interface utilisateur. Il est idéal pour une application Compose car :

- Il gère automatiquement les abonnements.
- Il est compatible avec les cycles de vie des composants Android.


### **3. Pourquoi ViewModel et StateFlow ?**  
**Problèmes sans ViewModel :**  
- Les états ne sont pas persistés lors des changements de configuration (rotation d’écran).  
- Un simple `remember` ou `mutableStateOf` ne suffit pas pour gérer des données complexes ou persistantes.  

**Avantages de ViewModel et StateFlow :**  
- **Persistance des données :** Les données survivent aux changements de configuration.  
- **Réactivité :** StateFlow met automatiquement à jour l'interface en cas de modification de l'état.  
- **Sécurité :** L’immuabilité garantit une source de vérité unique et réduit les bugs.  


### **4. Flux de données unidirectionnel (UDF)**  
Dans UDF :  
1. **Événements utilisateur :** Transmis à la logique métier via des fonctions (ex. `addTask`).  
2. **Mise à jour de l'état :** Effectuée dans le ViewModel.  
3. **Exposition de l'état :** L’état final est transmis de manière immuable à l'interface.  

Dans UDF, l’état est généré par la logique métier et exposé à l’interface utilisateur via une source unique (ex. `StateFlow`). Ce modèle garantit :

- Une meilleure prévisibilité des états.
- Une immuabilité pour minimiser les erreurs.

---

## **Mise en œuvre**  

### **0. Dépendances**

Ajoutez les dépendances suivantes dans le fichier `build.gradle` :

````
implementation(libs.androidx.lifecycle.viewmodel.compose)
````

Cette dépendance incluent l’intégration de ViewModel avec Jetpack Compose.

### **1. Création de ViewModel**  

Dans ce tutoriel, nous allons implémenter une liste simple d’éléments où les utilisateurs peuvent ajouter et supprimer des tâches.

Ajoutez le fichier `TaskViewModel.kt` dans le dossier `viewmodel/`.  

```kotlin
package com.example.todo.viewmodel

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

class TaskViewModel : ViewModel() {

    private val _tasks = MutableStateFlow<List<Task>>(emptyList())
    val tasks: StateFlow<List<Task>> get() = _tasks

    fun addTask(name: String) {
        val newTask = Task(name = name, isCompleted = false)
        _tasks.value = _tasks.value + newTask
    }

    fun toggleTaskCompletion(task: Task) {
        _tasks.value = _tasks.value.map {
            if (it.id == task.id) it.copy(isCompleted = !it.isCompleted) else it
        }
    }

    fun removeTask(task: Task) {
        _tasks.value = _tasks.value.filter { it.id != task.id }
    }
}

data class Task(
    val id: String = java.util.UUID.randomUUID().toString(),
    val name: String,
    val isCompleted: Boolean
)
```  

- **`StateFlow`** : Expose l'état immuable.  
- **`MutableStateFlow`** : Permet des mises à jour internes.  
- **Immutabilité :** Les listes sont recréées pour éviter des bugs liés aux modifications directes.  
- La propriété immuable `tasks` expose cet état à l’interface utilisateur.
---

### **2. Interface utilisateur avec Jetpack Compose**  

Créez un écran dans `ui/screens/TaskScreen.kt` :  

```kotlin
package com.example.todo.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.todo.viewmodel.TaskViewModel

@Composable
fun TaskScreen(viewModel: TaskViewModel = viewModel()) {
    val tasks by viewModel.tasks.collectAsState()
    var newTask by remember { mutableStateOf("") }

    Column(modifier = Modifier.padding(16.dp).verticalScroll(rememberScrollState())) {
        // Input field for new tasks
        Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceBetween) {
            BasicTextField(
                value = newTask,
                onValueChange = { newTask = it },
                modifier = Modifier.weight(1f).padding(end = 8.dp)
            )
            Button(onClick = {
                if (newTask.isNotBlank()) {
                    viewModel.addTask(newTask)
                    newTask = ""
                }
            }) {
                Text("Add Task")
            }
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Display tasks
        tasks.forEach { task ->
            Row(
                modifier = Modifier.fillMaxWidth().padding(vertical = 4.dp),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                Text(
                    text = if (task.isCompleted) "✔ ${task.name}" else task.name,
                    style = MaterialTheme.typography.body1
                )
                Row {
                    Button(onClick = { viewModel.toggleTaskCompletion(task) }) {
                        Text(if (task.isCompleted) "Undo" else "Complete")
                    }
                    Spacer(modifier = Modifier.width(8.dp))
                    Button(onClick = { viewModel.removeTask(task) }) {
                        Text("Delete")
                    }
                }
            }
        }
    }
}
```  

---

### **3. Analyse du code**  

-  **Collecte des états** : La méthode `collectAsState()` surveille les changements de `StateFlow` dans ViewModel.
- **Immuabilité :** Les données ne sont jamais modifiées directement.  
- **Actions utilisateur :** Ajout, modification, et suppression des tâches sont gérés par ViewModel.  

---


### **Code : MainActivity**

```kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.viewModels
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Create ViewModel instance
        val taskViewModel: TaskViewModel by viewModels()

        // Set the content to the TaskScreen Composable
        setContent {
            MaterialTheme { // Apply Material Design 3 styling
                Surface { // Use Surface to set background
                    TaskScreen(viewModel = taskViewModel)
                }
            }
        }
    }
}
```


### **Exercice Pratique**  

Ajoutez une fonctionnalité permettant de filtrer les tâches (par exemple, afficher uniquement les tâches terminées).  

---

### **Conclusion**  

Avec une architecture modulaire, ViewModel et StateFlow, la gestion de l’état dans Jetpack Compose devient simple et professionnelle. Ces concepts offrent une base solide pour le projet final de To-Do List.  