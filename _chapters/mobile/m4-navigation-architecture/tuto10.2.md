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


# **Tutoriel : Navigation dans Jetpack Compose avec Android Studio**

## **1. Création du projet Android**

1. **Créez un nouveau projet Android** avec une activité vide en sélectionnant **Jetpack Compose** comme moteur d'interface utilisateur.
2. Assurez-vous que Jetpack Compose est activé dans votre projet (`build.gradle`) avec les dépendances nécessaires.

Ajoutez cette dépendance dans le fichier `build.gradle` du module `app` :
```kotlin
implementation("androidx.navigation:navigation-compose:2.7.0")
```

Synchronisez votre projet.

---

## **2. Configuration de la navigation**

### **Étape 1 : Créez une classe principale pour la navigation**
Ajoutez une fonction composable nommée `NavigationApp` dans un nouveau fichier nommé `Navigation.kt`. Ce fichier centralisera votre navigation.

```kotlin
import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

@Composable
fun NavigationApp() {
    val navController = rememberNavController()
    
    NavHost(navController = navController, startDestination = "home") {
        composable("home") { HomeScreen(navController) }
        composable("details/{userId}") { backStackEntry ->
            val userId = backStackEntry.arguments?.getString("userId")
            DetailsScreen(userId)
        }
    }
}
```

---

## **3. Création des écrans**

### **3.1. Écran d'accueil (`HomeScreen`)**

Ajoutez une fonction `HomeScreen` dans un fichier nommé `HomeScreen.kt`. Cet écran comprend un bouton pour naviguer vers l'écran des détails tout en passant un paramètre (`userId`).

```kotlin
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController

@Composable
fun HomeScreen(navController: NavHostController) {
    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(text = "Écran d'accueil", style = MaterialTheme.typography.titleLarge)
        Spacer(modifier = Modifier.height(16.dp))
        Button(onClick = { navController.navigate("details/123") }) {
            Text("Voir les détails de l'utilisateur 123")
        }
    }
}
```

---

### **3.2. Écran des détails (`DetailsScreen`)**

Ajoutez une fonction `DetailsScreen` dans un fichier nommé `DetailsScreen.kt`. Cet écran affiche les détails de l'utilisateur, récupérés via le paramètre passé depuis l'écran d'accueil.

```kotlin
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun DetailsScreen(userId: String?) {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = "Détails de l'utilisateur : $userId",
            style = MaterialTheme.typography.titleLarge
        )
    }
}
```

---

## **4. Intégration dans `MainActivity`**

Modifiez le fichier `MainActivity.kt` pour utiliser `NavigationApp` comme point d'entrée de l'application.

```kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import com.example.navigationtutorial.ui.theme.NavigationTutorialTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            NavigationTutorialTheme {
                Surface(color = MaterialTheme.colorScheme.background) {
                    NavigationApp()
                }
            }
        }
    }
}
```

---

## **5. Ajout de la navigation conditionnelle**

Voici un exemple où la navigation est conditionnée par un état `isLoggedIn` (simulé ici). Si l'utilisateur est connecté, il est redirigé vers l'écran des détails, sinon vers un écran de connexion (`LoginScreen`).

Ajoutez cette logique dans l'écran d'accueil :

```kotlin
val isLoggedIn = true // Changez selon la logique de votre application

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

Créez une fonction `LoginScreen` dans un fichier `LoginScreen.kt` si nécessaire.

```kotlin
@Composable
fun LoginScreen() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Text("Écran de connexion", style = MaterialTheme.typography.titleLarge)
    }
}
```

Ajoutez une destination `composable("login")` dans votre `NavHost`.

---

## **6. Conclusion**

Vous avez créé une application Android avec navigation multi-écrans, passage de paramètres, et navigation conditionnelle. L'application est prête à être déployée ou enrichie avec des fonctionnalités avancées comme les animations de transitions.

N'hésitez pas à me demander si vous souhaitez ajouter des fonctionnalités supplémentaires ou simplifier des étapes ! 😊