---
reference: m4-navigation-architecture-tuto11
slug: tuto11
module_reference: mobile
part_reference: m4-navigation-architecture
concept_reference: ''
title: tuto11
description: ''
order: 134
directory: mobile/m4-navigation-architecture
permalink: mobile/m4-navigation-architecture/tuto11
layout: chapters
---

# Tutoriel 11 : Introduction à l'architecture MVVM

---

## **Objectif pédagogique**
Familiariser les apprenants avec l'architecture MVVM (**Model-View-ViewModel**) pour concevoir des applications Android modulaires, testables et maintenables en utilisant Jetpack Compose.

---

## **Prérequis**
- Connaître les bases de Kotlin et Jetpack Compose.
- Comprendre les principes de gestion d’état dans Compose.
- Avoir suivi le Tutoriel 10 : Navigation dans Jetpack Compose.

---

## **Concepts abordés**
1. Présentation de l'architecture MVVM.
2. Utilisation de `ViewModel` pour la gestion d'état.
3. Introduction à `StateFlow` pour un flux réactif.
4. Implémentation de l'architecture dans une application simple.

---

### **Étape 1 : Comprendre MVVM**
L'architecture MVVM repose sur trois composants :
- **Model** : Gestion des données (API, base de données, etc.).
- **View** : Interface utilisateur (composables Jetpack Compose).
- **ViewModel** : Relie la View au Model. Gère la logique métier et fournit des données réactives.

---

### **Étape 2 : Ajouter les dépendances nécessaires**
Ajoutez les dépendances pour `ViewModel` et `StateFlow` dans le fichier `build.gradle` :
```kotlin
implementation "androidx.lifecycle:lifecycle-viewmodel-compose:2.6.0"
implementation "androidx.lifecycle:lifecycle-runtime-ktx:2.6.0"
```
Synchronisez votre projet.

---

### **Étape 3 : Création d’un ViewModel**

1. **Définissez une classe `ViewModel` :**
   - Créez une classe pour gérer les données et l'état.

**Code :**
```kotlin
import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow

class TaskViewModel : ViewModel() {
    private val _tasks = MutableStateFlow<List<String>>(emptyList())
    val tasks: StateFlow<List<String>> = _tasks

    fun addTask(task: String) {
        _tasks.value = _tasks.value + task
    }
}
```

**Explications :**
- `_tasks` : Utilisé pour modifier les données.
- `tasks` : Exposé à la View sous forme d'état immuable.
- `addTask` : Ajoute une tâche à la liste.

---

### **Étape 4 : Intégrer le ViewModel dans Jetpack Compose**

1. **Instanciez le ViewModel dans un composable :**
   Utilisez `viewModel()` pour obtenir une instance du ViewModel.

**Code :**
```kotlin
import androidx.lifecycle.viewmodel.compose.viewModel

@Composable
fun TaskScreen(viewModel: TaskViewModel = viewModel()) {
    val tasks = viewModel.tasks.collectAsState()

    Column(modifier = Modifier.padding(16.dp)) {
        TaskInput(onAddTask = { task -> viewModel.addTask(task) })
        TaskList(tasks.value)
    }
}
```

2. **Composables pour l’interface utilisateur :**

**Ajout de tâche :**
```kotlin
@Composable
fun TaskInput(onAddTask: (String) -> Unit) {
    var text by remember { mutableStateOf("") }

    Row(verticalAlignment = Alignment.CenterVertically) {
        TextField(
            value = text,
            onValueChange = { text = it },
            label = { Text("Nouvelle tâche") },
            modifier = Modifier.weight(1f)
        )
        Spacer(modifier = Modifier.width(8.dp))
        Button(onClick = {
            if (text.isNotBlank()) {
                onAddTask(text)
                text = ""
            }
        }) {
            Text("Ajouter")
        }
    }
}
```

**Liste des tâches :**
```kotlin
@Composable
fun TaskList(tasks: List<String>) {
    LazyColumn {
        items(tasks) { task ->
            Text(
                text = task,
                modifier = Modifier.padding(vertical = 4.dp),
                fontSize = 18.sp
            )
        }
    }
}
```

---

### **Étape 5 : Lier Navigation et MVVM**
Ajoutez le ViewModel à un écran dans le graphique de navigation.

**Code :**
```kotlin
NavHost(navController = navController, startDestination = "tasks") {
    composable("tasks") { TaskScreen() }
}
```

---

### **Étape 6 : Exercice pratique**

**Objectif :** Implémenter une application avec deux écrans :
1. **Écran de création de tâches** : Ajouter des tâches.
2. **Écran d’affichage des tâches** : Afficher les tâches sous forme de liste.

---

## **Conclusion**
Ce tutoriel a introduit l'architecture MVVM avec Jetpack Compose. Vous savez maintenant structurer votre application en séparant clairement l'interface utilisateur, la logique métier, et les données. Vous pouvez explorer des fonctionnalités avancées comme la gestion des erreurs ou l’intégration de sources de données externes.

Souhaitez-vous approfondir un aspect ou passer à l’étape suivante ?