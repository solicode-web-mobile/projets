---
reference: m2-créer-interface-utilisateur-tuto5
slug: tuto5
module_reference: mobile
part_reference: m2-créer-interface-utilisateur
concept_reference: ''
title: tuto5
description: ''
order: 43
directory: m2-créer-interface-utilisateur
permalink: m2-créer-interface-utilisateur/tuto5
layout: chapters
---

### Tutoriel 5 : Interaction avec l'interface utilisateur dans Jetpack Compose  

#### Objectif pédagogique  
Apprendre à gérer les interactions utilisateur dans une application Android avec Jetpack Compose, notamment en utilisant des clics, des champs de texte interactifs, et en manipulant l'état pour créer une application réactive.

#### Concepts abordés  
- Gestion des clics sur les boutons.  
- Utilisation des champs de texte interactifs (`TextField`).  
- Modification de l'état local dans Jetpack Compose (`remember`, `mutableStateOf`).  

---

### Résumé du tutoriel  
Dans ce tutoriel, vous apprendrez à :  
1. Ajouter des boutons et gérer leurs actions.  
2. Créer des champs de saisie utilisateur avec `TextField`.  
3. Utiliser l'état pour mettre à jour l'interface de manière réactive.  
4. Construire une mini-application "Salut Utilisateur" qui affiche un message personnalisé en fonction du nom saisi.  

---

### Étape 1 : Configuration initiale  
#### Fichiers à modifier  
1. **MainActivity.kt** : Nous travaillerons dans ce fichier pour tout le tutoriel.  

#### Préparation du projet  
Assurez-vous que votre projet Android Studio utilise **Jetpack Compose**. Si ce n’est pas déjà fait, vérifiez les dépendances dans le fichier `build.gradle` de l’application :  

```kotlin
dependencies {
    implementation "androidx.compose.ui:ui:1.5.0"  
    implementation "androidx.compose.material:material:1.5.0"  
    implementation "androidx.compose.ui:ui-tooling-preview:1.5.0"  
    implementation "androidx.lifecycle:lifecycle-runtime-ktx:2.6.0"  
    implementation "androidx.activity:activity-compose:1.8.0"
}
```

Synchronisez votre projet pour inclure ces dépendances.

---

### Étape 2 : Création de l'interface utilisateur de base  

#### Ajouter un champ de texte et un bouton  
Nous allons maintenant construire une interface avec un champ de texte où l'utilisateur peut saisir son nom, et un bouton qui, lorsqu'il est cliqué, affiche un message personnalisé.  

Code complet :  

```kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApp()
        }
    }
}

@Composable
fun MyApp() {
    // Conteneur principal
    MaterialTheme {
        Surface(modifier = Modifier.fillMaxSize()) {
            UserInputApp()
        }
    }
}

@Composable
fun UserInputApp() {
    // Déclaration de l'état local
    var name by remember { mutableStateOf("") }
    var greetingMessage by remember { mutableStateOf("") }

    // Mise en page
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.Center
    ) {
        // Champ de texte pour la saisie
        TextField(
            value = name,
            onValueChange = { name = it },
            label = { Text("Entrez votre nom") },
            modifier = Modifier.fillMaxWidth()
        )
        
        Spacer(modifier = Modifier.height(16.dp))

        // Bouton
        Button(
            onClick = {
                greetingMessage = "Salut, $name !"
            },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text("Valider")
        }

        Spacer(modifier = Modifier.height(16.dp))

        // Affichage du message
        if (greetingMessage.isNotEmpty()) {
            Text(
                text = greetingMessage,
                style = MaterialTheme.typography.h6
            )
        }
    }
}
```

---

### Étape 3 : Explications  

1. **TextField** :  
   Le composant `TextField` est utilisé pour permettre la saisie de texte par l'utilisateur.  
   - `value` : La valeur actuelle du champ de texte.  
   - `onValueChange` : Une fonction appelée lorsque l'utilisateur modifie le texte.  

   ```kotlin
   TextField(
       value = name,
       onValueChange = { name = it },
       label = { Text("Entrez votre nom") },
       modifier = Modifier.fillMaxWidth()
   )
   ```

2. **Button** :  
   Le composant `Button` permet de capturer les clics de l'utilisateur.  
   - `onClick` : Définit l'action à effectuer lorsque le bouton est cliqué.  
   ```kotlin
   Button(
       onClick = {
           greetingMessage = "Salut, $name !"
       },
       modifier = Modifier.fillMaxWidth()
   ) {
       Text("Valider")
   }
   ```

3. **État local avec `remember`** :  
   - `mutableStateOf("")` initialise une variable réactive.  
   - `remember` s'assure que l'état persiste lors des recompositions du composable.  
   ```kotlin
   var name by remember { mutableStateOf("") }
   ```

4. **Affichage conditionnel** :  
   Le message de salutation n'est affiché que si la variable `greetingMessage` n'est pas vide.  
   ```kotlin
   if (greetingMessage.isNotEmpty()) {
       Text(
           text = greetingMessage,
           style = MaterialTheme.typography.h6
       )
   }
   ```

---

### Étape 4 : Personnalisation  

Proposez aux apprenants de :  
1. Ajouter une icône au bouton pour le rendre plus attrayant.  
2. Limiter la saisie à un certain nombre de caractères.  
3. Modifier le style du message avec des couleurs et des typographies personnalisées.  

---

### Étape 5 : Exercice

**Application : Devinez l’âge**  
- **Description** : Créez une application où l'utilisateur entre son année de naissance. Lorsqu'il clique sur un bouton, l'application calcule et affiche son âge.  
- **Lien avec le projet final** : Utilisation des champs de texte et des boutons pour interagir avec l'utilisateur.  

---

Avec ce tutoriel, les apprenants seront prêts à gérer les interactions de base dans une interface utilisateur Android avec Jetpack Compose.  