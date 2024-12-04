---
reference: m1-première-application-android-mini-projet
slug: mini-projet
module_reference: mobile
part_reference: m1-première-application-android
concept_reference: ''
title: Mini projet
description: ''
order: 81
directory: m1-première-application-android
permalink: m1-première-application-android/mini-projet
layout: chapters
---

### Mini-projet : Carte de visite interactive

#### **Description du mini-projet**

Dans ce mini-projet, les apprenants créeront une application interactive de carte de visite. L'application affichera des informations personnelles stylisées (nom, profession, coordonnées), avec des boutons interactifs permettant d'effectuer des actions simples, comme ouvrir un site web ou composer un numéro de téléphone.

---

### **Objectifs pédagogiques**
1. Mettre en pratique les notions de base de Jetpack Compose vues dans le tutoriel précédent.
2. Découvrir comment structurer une interface utilisateur simple.
3. Manipuler des composants interactifs comme les **Button** et les **ClickableText**.
4. Comprendre l'utilisation des actions pour interagir avec d'autres applications (exemple : ouvrir une page web ou composer un appel).

---

### **Fonctionnalités principales**
1. Affichage du nom, du métier, et des informations de contact (téléphone et email).
2. Boutons interactifs pour effectuer des actions :
   - Appeler un numéro.
   - Envoyer un email.
   - Ouvrir un site web.

---

### **Étapes de réalisation**

#### **Étape 1 : Configuration du projet**
1. **Créer un nouveau projet Android avec Jetpack Compose** :
   - Ouvrir Android Studio.
   - Sélectionner "New Project" > "Empty Compose Activity".
   - Nommer le projet : `CarteDeVisiteInteractive`.
   - Configurer les paramètres du projet (Minimum SDK : API 21).

2. **Vérifier la structure du projet** : S'assurer que le fichier `MainActivity.kt` contient un composable de base.

---

#### **Étape 2 : Conception de l'interface utilisateur**

1. **Structure de base de la carte de visite**  
   Ajouter les éléments principaux dans une fonction composable `CarteDeVisite` :
   ```kotlin
   @Composable
   fun CarteDeVisite() {
       Column(
           modifier = Modifier
               .fillMaxSize()
               .padding(16.dp),
           horizontalAlignment = Alignment.CenterHorizontally,
           verticalArrangement = Arrangement.Center
       ) {
           // Nom et profession
           Text(
               text = "John Doe",
               style = MaterialTheme.typography.h4,
               modifier = Modifier.padding(bottom = 8.dp)
           )
           Text(
               text = "Développeur Android",
               style = MaterialTheme.typography.subtitle1,
               color = Color.Gray
           )
           Spacer(modifier = Modifier.height(16.dp))

           // Coordonnées
           ContactInfo(
               label = "Téléphone :",
               value = "+33 6 12 34 56 78",
               onClick = { /* Appeler */ }
           )
           ContactInfo(
               label = "Email :",
               value = "johndoe@example.com",
               onClick = { /* Envoyer un email */ }
           )
           Spacer(modifier = Modifier.height(16.dp))

           // Bouton pour site web
           Button(onClick = { /* Ouvrir le site */ }) {
               Text("Visiter mon site")
           }
       }
   }
   ```

2. **Fonction composable pour les contacts interactifs**  
   Créer une fonction pour afficher les coordonnées interactives :
   ```kotlin
   @Composable
   fun ContactInfo(label: String, value: String, onClick: () -> Unit) {
       Row(
           modifier = Modifier
               .clickable(onClick = onClick)
               .padding(vertical = 4.dp)
       ) {
           Text(text = "$label ", fontWeight = FontWeight.Bold)
           Text(text = value, color = Color.Blue)
       }
   }
   ```

---

#### **Étape 3 : Ajouter les actions interactives**

1. **Appeler un numéro de téléphone**  
   Implémenter l'action pour ouvrir l'application d'appel :
   ```kotlin
   val context = LocalContext.current
   val callIntent = Intent(Intent.ACTION_DIAL).apply {
       data = Uri.parse("tel:+33612345678")
   }
   ContactInfo(
       label = "Téléphone :",
       value = "+33 6 12 34 56 78",
       onClick = { context.startActivity(callIntent) }
   )
   ```

2. **Envoyer un email**  
   Ajouter une action pour ouvrir l'application de messagerie électronique :
   ```kotlin
   val emailIntent = Intent(Intent.ACTION_SENDTO).apply {
       data = Uri.parse("mailto:johndoe@example.com")
   }
   ContactInfo(
       label = "Email :",
       value = "johndoe@example.com",
       onClick = { context.startActivity(emailIntent) }
   )
   ```

3. **Ouvrir un site web**  
   Ajouter un bouton pour naviguer vers un site web :
   ```kotlin
   val websiteIntent = Intent(Intent.ACTION_VIEW).apply {
       data = Uri.parse("https://www.johndoe.com")
   }
   Button(onClick = { context.startActivity(websiteIntent) }) {
       Text("Visiter mon site")
   }
   ```

---

#### **Étape 4 : Prévisualiser l'application**
1. Ajouter une fonction pour prévisualiser le composable :
   ```kotlin
   @Preview(showBackground = true)
   @Composable
   fun CarteDeVisitePreview() {
       CarteDeVisite()
   }
   ```

2. Ouvrir la fenêtre de prévisualisation dans Android Studio et vérifier que tout est correctement affiché.

---

### **Livrable attendu**
Une application Android simple et fonctionnelle qui affiche une carte de visite interactive. Les apprenants doivent être capables de personnaliser les informations affichées et d'exécuter les actions interactives (appel, email, navigation web).

---

#### **Prolongement possible**
1. Ajouter un thème personnalisé pour styliser l'application.
2. Introduire une image de profil en haut de la carte avec le composant **Image**.
3. Réorganiser l'interface pour utiliser des colonnes et des rangées de manière plus avancée.