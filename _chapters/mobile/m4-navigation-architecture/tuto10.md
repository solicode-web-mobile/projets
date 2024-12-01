---
reference: m4-navigation-architecture-tuto10
slug: tuto10
module_reference: mobile
part_reference: m4-navigation-architecture
concept_reference: ''
title: tuto10
description: ''
order: 133
directory: mobile/m4-navigation-architecture
permalink: mobile/m4-navigation-architecture/tuto10
layout: chapters
---

# **Tutoriel 10 : Navigation dans Jetpack Compose**

## **Objectif pédagogique**
Apprendre à gérer la navigation multi-écrans dans une application Android avec Jetpack Compose, en transmettant des données entre différents écrans et en personnalisant les transitions.

---

## **Prérequis**
- Avoir une bonne compréhension des bases de Jetpack Compose (layouts, états).
- Disposer d’un projet Android avec Jetpack Compose configuré.

---

## **Concepts abordés**
1. Configuration de la bibliothèque de navigation Jetpack Compose.
2. Création d’un graphique de navigation.
3. Passage de paramètres entre écrans.
4. Gestion des transitions et navigation conditionnelle.

---

### **Étape 1 : Configuration initiale**

Ajoutez la dépendance de navigation dans votre fichier `build.gradle` :
```kotlin
implementation "androidx.navigation:navigation-compose:2.7.0"
```

Synchronisez votre projet pour télécharger la bibliothèque.

---

### **Étape 2 : Définir un graphique de navigation**

Dans Jetpack Compose, la navigation est gérée via un `NavHost` et des `NavGraph`.

**Code :**
```kotlin
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

@Composable
fun NavigationApp() {
    val navController = rememberNavController()

    NavHost(navController = navController, startDestination = "home") {
        composable("home") { HomeScreen(navController) }
        composable("details") { DetailsScreen() }
    }
}
```

---

### **Étape 3 : Création des écrans**

1. **Écran d’accueil (`HomeScreen`)** :
   Ajoutez un bouton permettant de naviguer vers l’écran suivant.

**Code :**
```kotlin
@Composable
fun HomeScreen(navController: NavHostController) {
    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(text = "Écran d'accueil", style = MaterialTheme.typography.titleLarge)
        Spacer(modifier = Modifier.height(16.dp))
        Button(onClick = { navController.navigate("details") }) {
            Text("Aller à l'écran Détails")
        }
    }
}
```

2. **Écran des détails (`DetailsScreen`)** :
   Affiche simplement un message pour cet exemple.

**Code :**
```kotlin
@Composable
fun DetailsScreen() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text("Bienvenue sur l'écran Détails", style = MaterialTheme.typography.titleLarge)
    }
}
```

---

### **Étape 4 : Passage de paramètres entre écrans**

Modifiez le graphique pour transmettre des données avec des arguments :
```kotlin
NavHost(navController = navController, startDestination = "home") {
    composable("home") { HomeScreen(navController) }
    composable("details/{userId}") { backStackEntry ->
        val userId = backStackEntry.arguments?.getString("userId")
        DetailsScreen(userId)
    }
}
```

**Écran d’accueil :**
```kotlin
Button(onClick = { navController.navigate("details/123") }) {
    Text("Afficher les détails de l'utilisateur 123")
}
```

**Écran des détails :**
```kotlin
@Composable
fun DetailsScreen(userId: String?) {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text("Utilisateur ID : $userId", style = MaterialTheme.typography.titleLarge)
    }
}
```

---

### **Étape 5 : Navigation conditionnelle**

Ajoutez une logique conditionnelle avant de naviguer :
```kotlin
Button(onClick = {
    if (isLoggedIn) {
        navController.navigate("details/123")
    } else {
        navController.navigate("login")
    }
}) {
    Text("Naviguer")
}
```

---

## **Exercice pratique**

1. **Création d’un workflow multi-écrans :**
   - Un écran de connexion.
   - Un écran de tableau de bord.
   - Un écran de détails d’une tâche.

2. **Passage de paramètres :**
   - Transmettre les détails d’une tâche sélectionnée depuis l’écran de tableau de bord.

---

## **Conclusion**

Ce tutoriel vous a permis de comprendre comment naviguer entre différents écrans dans une application Jetpack Compose. Vous pouvez désormais gérer des workflows complets, transmettre des données, et personnaliser vos interfaces utilisateur avec des transitions dynamiques.

Souhaitez-vous explorer un aspect particulier ou approfondir ce tutoriel avec des fonctionnalités avancées ?