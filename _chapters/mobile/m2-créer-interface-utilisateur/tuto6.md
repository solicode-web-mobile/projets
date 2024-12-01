---
reference: m2-créer-interface-utilisateur-tuto6
slug: tuto6
module_reference: mobile
part_reference: m2-créer-interface-utilisateur
concept_reference: ''
title: tuto6
description: ''
order: 44
directory: m2-créer-interface-utilisateur
permalink: m2-créer-interface-utilisateur/tuto6
layout: chapters
---


# **Tutoriel 6 : Gestion de l’état dans Jetpack Compose**  

**Objectif pédagogique :**  
Apprendre à gérer l’état dans une application Android avec Jetpack Compose, en comprenant les concepts d’immuabilité et en créant des interfaces réactives.

---

## **1. Introduction à la gestion de l’état**

Dans Jetpack Compose, l’état représente une donnée mutable utilisée pour rendre une interface utilisateur interactive. Lorsqu’un état change, l’interface utilisateur associée se met à jour automatiquement.

- **État immuable :** La valeur de l’état ne change pas directement, mais un nouvel état est créé en fonction du précédent.  
- **Règle principale :** L’état dans Compose doit toujours être maintenu dans une source unique de vérité.

---

## **2. Concepts clés**

### **a. `remember` et `mutableStateOf`**

Jetpack Compose utilise `remember` et `mutableStateOf` pour stocker et observer les changements d'état.

- **`remember` :** Conserve un état pendant la durée de vie d’un composable.  
- **`mutableStateOf` :** Crée un état mutable qui permet de déclencher la recomposition lorsqu’il change.  

**Exemple simple :**  
```kotlin
@Composable
fun CounterApp() {
    var count by remember { mutableStateOf(0) }

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
        modifier = Modifier.fillMaxSize()
    ) {
        Text(text = "Count: $count", fontSize = 24.sp)
        Button(onClick = { count++ }) {
            Text(text = "Increment")
        }
    }
}
```

---

### **b. Gestion des états dans des fonctions d'ordre supérieur**

L’état peut être géré dans des composables parents et passé comme paramètre aux enfants.

**Exemple :**  
```kotlin
@Composable
fun CounterScreen() {
    var count by remember { mutableStateOf(0) }
    CounterDisplay(count)
    CounterButtons(onIncrement = { count++ }, onDecrement = { count-- })
}

@Composable
fun CounterDisplay(count: Int) {
    Text(text = "Count: $count", fontSize = 24.sp)
}

@Composable
fun CounterButtons(onIncrement: () -> Unit, onDecrement: () -> Unit) {
    Row {
        Button(onClick = onDecrement) { Text("Decrement") }
        Button(onClick = onIncrement) { Text("Increment") }
    }
}
```

---

## **3. Pratique guidée : Création d’une TODO liste simple**

### **Étape 1 : Définir l’état de la liste des tâches**

On commence par définir une liste mutable d’éléments pour la gestion des tâches.  
```kotlin
@Composable
fun TodoApp() {
    var tasks by remember { mutableStateOf(listOf<String>()) }

    Column(modifier = Modifier.padding(16.dp)) {
        TodoInput(onAddTask = { newTask ->
            tasks = tasks + newTask
        })
        TodoList(tasks)
    }
}
```

---

### **Étape 2 : Ajouter des tâches**

On crée un champ de saisie pour ajouter une nouvelle tâche.  
```kotlin
@Composable
fun TodoInput(onAddTask: (String) -> Unit) {
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
                text = "" // Réinitialiser le champ de saisie
            }
        }) {
            Text("Ajouter")
        }
    }
}
```

---

### **Étape 3 : Afficher les tâches**

On affiche les tâches sous forme de liste déroulante.  
```kotlin
@Composable
fun TodoList(tasks: List<String>) {
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

## **4. Étape finale : Application complète**

Voici le code complet de l’application TODO liste :  
```kotlin
@Composable
fun TodoApp() {
    var tasks by remember { mutableStateOf(listOf<String>()) }

    Column(modifier = Modifier.padding(16.dp)) {
        TodoInput(onAddTask = { newTask ->
            tasks = tasks + newTask
        })
        Spacer(modifier = Modifier.height(16.dp))
        TodoList(tasks)
    }
}

@Composable
fun TodoInput(onAddTask: (String) -> Unit) {
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

@Composable
fun TodoList(tasks: List<String>) {
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

## **5. Résumé des concepts abordés**

1. **Gestion de l’état avec `remember` et `mutableStateOf`.**  
2. **Passage d’état entre composables parents et enfants.**  
3. **Création d’une interface réactive avec Jetpack Compose.**

