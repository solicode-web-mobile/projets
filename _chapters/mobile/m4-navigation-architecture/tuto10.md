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
# **Tutoriel 10 : Navigation dans Jetpack Compose (Version Révisée)**

---

## **Objectif pédagogique**  
Apprendre à mettre en place une navigation multi-écrans dans une application Android avec Jetpack Compose, tout en structurant le code suivant une architecture modulaire et maintenable.

---

## **1. Notions théoriques**

Avant de plonger dans le code, voici les concepts à comprendre :  

1. **Jetpack Navigation Compose :**  
   - Une bibliothèque officielle d'Android pour gérer la navigation dans les applications Jetpack Compose.  
   - Elle simplifie la navigation entre les écrans (ou *composables*).  

2. **Routes et arguments :**  
   - Les *routes* définissent les chemins entre les écrans.  
   - Les arguments permettent de transmettre des données entre les écrans.  

3. **NavHost et NavGraph :**  
   - **NavHost** : Conteneur principal où sont définies les différentes routes.  
   - **NavGraph** : Décrit la structure de navigation (écrans et transitions).  

4. **Structure de l’application :**  
   - Une organisation modulaire facilite l’évolution de l’application et améliore la lisibilité.  

---

## **2. Organisation du projet**

Dans le dossier `src/main/java/com/votreprojet/`, créez la structure suivante :  

```
com.votreprojet  
├── navigation  
│   ├── NavGraph.kt  
│   └── Routes.kt  
├── ui  
│   ├── home  
│   │   └── HomeScreen.kt  
│   ├── details  
│   │   └── DetailsScreen.kt  
└── MainActivity.kt  
```

**Explications :**  
1. **`navigation/`** : Contient la logique de navigation.  
2. **`ui/`** : Contient les écrans regroupés par fonctionnalité (par exemple, `home` pour l’écran principal).  
3. **`MainActivity.kt`** : Point d’entrée de l’application.

---

## **3. Configuration initiale**

### Dépendances à ajouter dans `build.gradle` :  

```kotlin
implementation(libs.androidx.navigation.compose)
```

---

## **4. Création des fichiers**

### **4.1. `Routes.kt` : Définir les routes**

Ce fichier centralise les noms des routes pour éviter les erreurs.  

```kotlin
package com.votreprojet.navigation

object Routes {
    const val Home = "home"
    const val Details = "details/{itemId}"
}
```

### **4.2. `NavGraph.kt` : Gestion des transitions**

Ce fichier définit les écrans et la navigation entre eux.  

```kotlin
package com.votreprojet.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.votreprojet.ui.details.DetailsScreen
import com.votreprojet.ui.home.HomeScreen

@Composable
fun NavGraph(navController: NavHostController) {
    NavHost(
        navController = navController,
        startDestination = Routes.Home
    ) {
        composable(Routes.Home) { HomeScreen(navController) }
        composable(Routes.Details) { backStackEntry ->
            val itemId = backStackEntry.arguments?.getString("itemId")
            DetailsScreen(navController, itemId)
        }
    }
}
```

---

## **5. Création des écrans**

### **5.1. `HomeScreen.kt` : Écran principal**  

Cet écran contient un bouton permettant de naviguer vers l’écran des détails.  

```kotlin
package com.votreprojet.ui.home

import androidx.compose.foundation.layout.*  
import androidx.compose.material.*  
import androidx.compose.runtime.Composable  
import androidx.navigation.NavController  
import com.votreprojet.navigation.Routes

@Composable
fun HomeScreen(navController: NavController) {
    Scaffold(
        topBar = { TopAppBar(title = { Text("Écran principal") }) }
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp)
        ) {
            Text("Bienvenue sur l'écran principal !", style = MaterialTheme.typography.h5)
            Spacer(modifier = Modifier.height(16.dp))
            Button(onClick = { navController.navigate("details/42") }) {
                Text("Voir les détails de l'élément 42")
            }
        }
    }
}
```

---

### **5.2. `DetailsScreen.kt` : Écran de détails**

Cet écran affiche les informations transmises depuis `HomeScreen`.  

```kotlin
package com.votreprojet.ui.details

import androidx.compose.foundation.layout.*  
import androidx.compose.material.*  
import androidx.compose.runtime.Composable  
import androidx.navigation.NavController  

@Composable
fun DetailsScreen(navController: NavController, itemId: String?) {
    Scaffold(
        topBar = { TopAppBar(title = { Text("Écran de détails") }) }
    ) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp)
        ) {
            Text("Détails pour l'élément : $itemId", style = MaterialTheme.typography.h5)
            Spacer(modifier = Modifier.height(16.dp))
            Button(onClick = { navController.popBackStack() }) {
                Text("Retour à l'écran principal")
            }
        }
    }
}
```

---

## **6. Intégration dans l’application**

Modifiez `MainActivity.kt` pour intégrer la navigation.  

```kotlin
package com.votreprojet

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material.MaterialTheme
import androidx.navigation.compose.rememberNavController
import com.votreprojet.navigation.NavGraph

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                val navController = rememberNavController()
                NavGraph(navController = navController)
            }
        }
    }
}
```

---

## **7. Exercices pratiques**  

1. **Ajout d’un écran supplémentaire :**  
   - Créez un écran `ProfileScreen` et ajoutez-le au système de navigation.  

2. **Transmission de données complexes :**  
   - Modifiez `DetailsScreen` pour accepter un objet JSON contenant plusieurs propriétés.  

3. **Création d’un menu de navigation :**  
   - Implémentez un menu permettant de passer d’un écran à l’autre.  

---

## **8. Résultats attendus**  

- Navigation fonctionnelle entre plusieurs écrans.  
- Structure modulaire du projet.  
- Meilleure compréhension de l’organisation et de la navigation dans une application Jetpack Compose.  

---

## **9. Questions d’évaluation**  

1. Pourquoi utiliser une architecture modulaire dans un projet Android ?  
2. Quels sont les avantages d’utiliser des objets pour définir les routes ?  
3. Comment gérer les erreurs liées aux arguments manquants lors de la navigation ?