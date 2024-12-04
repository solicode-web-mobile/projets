---
reference: m2-créer-interface-utilisateur-mini-projet
slug: mini-projet
module_reference: mobile
part_reference: m2-créer-interface-utilisateur
concept_reference: ''
title: Mini-Projet 2 - Gestion d'une liste de tâches
description: ''
order: 91
directory: m2-créer-interface-utilisateur
permalink: m2-créer-interface-utilisateur/mini-projet
layout: chapters
---


# **Mini-Projet : Gestion d'une liste de tâches en mémoire**  

## **Description du Mini-Projet**  
Développer une application permettant de gérer une liste de tâches **simple** sans persistance locale, en appliquant les notions de **gestion d'état**, **gestion des interactions utilisateur**, et **réactivité** abordées dans les tutoriels précédents.  

L’application proposera les fonctionnalités suivantes :  
1. **Ajouter une tâche** : Les utilisateurs peuvent saisir une tâche et l’ajouter à une liste.  
2. **Marquer une tâche comme terminée** : Les tâches peuvent être cochées pour indiquer leur achèvement.  
3. **Supprimer une tâche terminée** : Les utilisateurs peuvent supprimer les tâches marquées comme terminées.  

---

## **Architecture des dossiers et fichiers**

```plaintext
src/main/java/com/example/todolist
├── MainActivity.kt            # Activité principale
├── ui/
│   ├── components/            # Composants UI réutilisables
│   │   ├── TaskItem.kt        # Composant pour afficher une tâche individuelle
│   │   └── TaskInputField.kt  # Composant pour le champ d'entrée de tâche
│   └── screens/
│       └── TaskScreen.kt      # Écran principal contenant la logique UI
├── model/
│   └── Task.kt                # Modèle de données représentant une tâche
```

---

## **Fichier : `MainActivity.kt`**  

```kotlin
package com.example.todolist

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.example.todolist.ui.screens.TaskScreen
import com.example.todolist.ui.theme.TodoListTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            TodoListTheme {
                // Écran principal de l'application
                TaskScreen()
            }
        }
    }
}
```

---

## **Fichier : `Task.kt` (Modèle de données)**  

```kotlin
package com.example.todolist.model

data class Task(
    val id: Int,
    val description: String,
    var isCompleted: Boolean = false
)
```

---

## **Fichier : `TaskInputField.kt`**  

```kotlin
package com.example.todolist.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.unit.dp

@Composable
fun TaskInputField(onAddTask: (String) -> Unit) {
    var text by remember { mutableStateOf(TextFieldValue("")) }

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(16.dp),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        OutlinedTextField(
            value = text,
            onValueChange = { text = it },
            label = { Text("Nouvelle tâche") },
            modifier = Modifier.weight(1f)
        )
        Spacer(modifier = Modifier.width(8.dp))
        Button(
            onClick = {
                if (text.text.isNotBlank()) {
                    onAddTask(text.text)
                    text = TextFieldValue("") // Réinitialiser le champ
                }
            }
        ) {
            Text("Ajouter")
        }
    }
}
```

---

## **Fichier : `TaskItem.kt`**  

```kotlin
package com.example.todolist.ui.components

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.BasicText
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.todolist.model.Task

@Composable
fun TaskItem(task: Task, onToggleComplete: (Task) -> Unit) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(8.dp),
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Column {
            Text(task.description)
        }
        Checkbox(
            checked = task.isCompleted,
            onCheckedChange = { onToggleComplete(task) }
        )
    }
}
```

---

## **Fichier : `TaskScreen.kt`**  

```kotlin
package com.example.todolist.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.todolist.model.Task
import com.example.todolist.ui.components.TaskInputField
import com.example.todolist.ui.components.TaskItem

@Composable
fun TaskScreen() {
    // Liste des tâches gérée dans un rememberSaveable
    var tasks by rememberSaveable { mutableStateOf(listOf<Task>()) }

    Scaffold(
        topBar = {
            TopAppBar(title = { Text("Liste de tâches") })
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .padding(padding)
                .fillMaxSize()
        ) {
            TaskInputField(onAddTask = { description ->
                tasks = tasks + Task(id = tasks.size + 1, description = description)
            })

            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(16.dp)
            ) {
                items(tasks.size) { index ->
                    TaskItem(
                        task = tasks[index],
                        onToggleComplete = { task ->
                            tasks = tasks.map {
                                if (it.id == task.id) it.copy(isCompleted = !it.isCompleted) else it
                            }
                        }
                    )
                }
            }

            Button(
                onClick = {
                    tasks = tasks.filter { !it.isCompleted }
                },
                modifier = Modifier.padding(16.dp)
            ) {
                Text("Supprimer les tâches terminées")
            }
        }
    }
}
```

---

## **Indications de Solution**  

1. **Champ d'entrée (`TaskInputField`)** : Gère l'ajout de nouvelles tâches.  
2. **Tâche individuelle (`TaskItem`)** : Utilise `Checkbox` pour indiquer l'état terminé/non terminé.  
3. **Écran principal (`TaskScreen`)** :  
   - Gère l'état global des tâches avec `rememberSaveable`.  
   - Implémente une liste réactive affichant les tâches.  
   - Fournit une action pour supprimer les tâches terminées.  

**Note pédagogique :** Ce mini-projet introduit une étape essentielle du projet final, permettant de gérer des données en mémoire et d’explorer la gestion réactive de l’état sans complexité additionnelle.