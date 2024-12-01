---
reference: m1-première-application-android-tuto3
slug: tuto3
module_reference: mobile
part_reference: m1-première-application-android
concept_reference: ''
title: tuto3
description: ''
order: 85
directory: m1-première-application-android
permalink: m1-première-application-android/tuto3
layout: chapters
---

# Tutoriel 3 : Création de l’interface avec Jetpack Compose

## Objectif pédagogique  
Ce tutoriel a pour objectif de guider les apprenants dans la création d'une interface utilisateur simple en utilisant Jetpack Compose. Ils apprendront à utiliser des composants de base comme **Text**, **Image**, et **Button**, tout en explorant la structuration de la mise en page.

---

## Prérequis  
- Avoir installé Android Studio et configuré l'environnement de développement.  
- Comprendre les bases de Kotlin.  

---

## Partie 1 : Création d'un projet Android Compose  

1. **Créer un nouveau projet Compose dans Android Studio :**  
   - Ouvrez Android Studio et cliquez sur **File > New > New Project**.  
   - Sélectionnez « Empty Compose Activity » comme modèle.  
   - Configurez les détails du projet (nom : `ComposeInterfaceApp`, langage : Kotlin, API minimale : 21).  
   - Cliquez sur **Finish** pour générer le projet.  

2. **Structure du projet :**  
   - Ouvrez le fichier `MainActivity.kt`. Ce fichier contient une fonction principale qui gère l'interface utilisateur.  

3. **Vérifiez la configuration initiale :**  
   - Exécutez l'application pour vérifier que l'interface prédéfinie ("Hello Android!") s'affiche correctement.

---

## Partie 2 : Utilisation des composants de base  

### **2.1 Afficher un texte**

1. Remplacez le contenu de la fonction `setContent` dans `MainActivity` par le code suivant :

```kotlin
setContent {
    Text(text = "Bonjour, Solicode !", style = MaterialTheme.typography.h4)
}
```

2. **Explications :**
   - `Text` : Un composant qui affiche du texte.
   - `text` : Propriété pour spécifier le contenu textuel.
   - `style` : Applique un style, ici celui défini dans `MaterialTheme.typography.h4`.

3. Lancez l'application pour voir le texte affiché.

### **2.2 Ajouter une image**

1. Ajoutez une image à votre interface :

```kotlin
setContent {
    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Image(
            painter = painterResource(id = R.drawable.ic_launcher_foreground),
            contentDescription = "Logo de l'application",
            modifier = Modifier.size(100.dp)
        )
        Text(text = "Bienvenue dans l'application Compose!")
    }
}
```

2. **Explications :**
   - `Column` : Un conteneur qui organise les éléments verticalement.
   - `painterResource` : Charge une image à partir des ressources.
   - `Modifier` : Permet de personnaliser l'apparence et le comportement d'un composant (ici, à l'aide de `size` et `fillMaxSize`).

3. Ajoutez une image à votre projet si nécessaire :  
   - Placez un fichier image dans le dossier `res/drawable`.  

4. Exécutez l'application pour afficher l'image et le texte.

### **2.3 Ajouter un bouton interactif**

1. Ajoutez un bouton à votre interface :

```kotlin
setContent {
    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Text(text = "Cliquez sur le bouton ci-dessous !")
        Spacer(modifier = Modifier.height(16.dp))
        Button(onClick = { println("Bouton cliqué") }) {
            Text(text = "Cliquez-moi")
        }
    }
}
```

2. **Explications :**
   - `Button` : Composant interactif pour capturer les clics.
   - `onClick` : Fonction lambda exécutée lorsqu'on clique sur le bouton.
   - `Spacer` : Ajoute un espace entre les éléments pour améliorer la mise en page.

3. Lancez l'application et ouvrez **Logcat** pour voir le message "Bouton cliqué" dans la console lors d'un clic.

---

## Partie 3 : Structuration de la mise en page

1. Combinez plusieurs composants dans une mise en page structurée :

```kotlin
setContent {
    Scaffold(
        topBar = {
            TopAppBar(title = { Text(text = "Application Compose") })
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Image(
                painter = painterResource(id = R.drawable.ic_launcher_foreground),
                contentDescription = null,
                modifier = Modifier.size(100.dp)
            )
            Text(text = "Créez facilement votre interface avec Compose!", style = MaterialTheme.typography.body1)
            Spacer(modifier = Modifier.height(16.dp))
            Button(onClick = { /* TODO */ }) {
                Text(text = "Démarrer")
            }
        }
    }
}
```

2. **Explications :**
   - `Scaffold` : Fournit une structure standard pour les applications, incluant une barre d'outils (`TopAppBar`).
   - `padding` : Gère les marges entre le contenu principal et les autres éléments de l'interface.

3. Testez l'application pour voir une interface propre et bien structurée.

---

## Exercice pratique : Carte de visite interactive

### **Objectif :** Créer une application affichant une carte de visite dynamique avec une photo, un nom, une profession et un bouton interactif.

1. **Structure suggérée :**
   - Une image pour la photo de profil.
   - Un texte pour le nom et la profession.
   - Un bouton permettant d’afficher un message dans la console.

2. **Code exemple :**

```kotlin
setContent {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        Image(
            painter = painterResource(id = R.drawable.ic_profile),
            contentDescription = "Photo de profil",
            modifier = Modifier.size(128.dp)
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(text = "Madani Ali", style = MaterialTheme.typography.h5)
        Text(text = "Développeur Android", style = MaterialTheme.typography.body1)
        Spacer(modifier = Modifier.height(16.dp))
        Button(onClick = { println("Carte de visite partagée !") }) {
            Text(text = "Partager")
        }
    }
}
```

3. **Extension :**
   - Ajoutez des informations de contact (email, téléphone) sous forme de texte.
   - Stylisez davantage avec `MaterialTheme`.

---

## Conclusion
Vous avez maintenant une bonne compréhension de la création d’interfaces avec Jetpack Compose. Vous êtes prêts à explorer des mises en page plus complexes et 

