---
reference: m1-première-application-android-tuto3plus
slug: tuto3plus
module_reference: mobile
part_reference: m1-première-application-android
concept_reference: ''
title: Tutoriel 3Plus
description: ''
order: 85
directory: m1-première-application-android
permalink: m1-première-application-android/tuto3plus
layout: chapters
---


# **Tutoriel 3Plus : Boutons Interactifs avec Jetpack Compose**

## **Objectif pédagogique :**  
Créer des boutons interactifs permettant d’exécuter des actions simples (ouvrir un site web, envoyer un email ou appeler un numéro de téléphone) tout en explorant les concepts d’intents et de gestion des actions utilisateur dans Android.

---

## **Partie Théorique**

### **1. Notion d'intentions (Intents) dans Android :**  
Les **intents** (ou intentions) permettent de déclencher des actions dans Android, comme naviguer entre activités, ouvrir un navigateur, ou lancer une application externe. Il existe deux types principaux :  
- **Intent explicite** : pour lancer une activité ou composant spécifique au sein de l'application.  
- **Intent implicite** : pour demander au système de lancer une action sans spécifier précisément le composant, par exemple ouvrir un site web.  

#### **Exemples d’intentions implicites courantes :**  
1. **Ouvrir un site web :**  
   ```kotlin
   val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://www.example.com"))
   startActivity(intent)
   ```
2. **Envoyer un email :**  
   ```kotlin
   val intent = Intent(Intent.ACTION_SENDTO).apply {
       data = Uri.parse("mailto:example@example.com")
       putExtra(Intent.EXTRA_SUBJECT, "Sujet de l'email")
   }
   startActivity(intent)
   ```
3. **Appeler un numéro de téléphone :**  
   ```kotlin
   val intent = Intent(Intent.ACTION_DIAL, Uri.parse("tel:+123456789"))
   startActivity(intent)
   ```

---

### **2. Utilisation des boutons dans Jetpack Compose :**
Les **boutons** sont des composants interactifs permettant d’effectuer des actions lorsqu’ils sont cliqués. Avec Jetpack Compose, les boutons se créent à l'aide de la fonction `Button`.  

#### **Propriétés principales d’un bouton :**  
- **`onClick` :** Une fonction déclenchée lorsque le bouton est cliqué.  
- **`Modifier` :** Permet de styliser et positionner le bouton.  

#### **Exemple d’un bouton simple :**  
```kotlin
Button(onClick = { /* Action à exécuter */ }) {
    Text("Cliquez-moi")
}
```

---

### **3. Actions utilisateur avec les intents dans Jetpack Compose :**  
Pour exécuter une action au clic d’un bouton, il faut appeler une méthode ou exécuter un intent dans le bloc `onClick`. Dans une application Compose, cela nécessite parfois de passer un contexte (comme `this` dans une activité).

---

## **Code Pratique**

### **Objectif :** Créer trois boutons dans une interface Compose permettant de :  
1. Ouvrir un site web.  
2. Envoyer un email.  
3. Appeler un numéro de téléphone.

---

### **Code Complet de MainActivity**
```kotlin
package com.example.interactivebuttons

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Button
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            InteractiveButtonsApp()
        }
    }

    @Composable
    fun InteractiveButtonsApp() {
        MaterialTheme {
            Box(
                modifier = Modifier.fillMaxSize(),
                contentAlignment = Alignment.Center
            ) {
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    OpenWebsiteButton()
                    SendEmailButton()
                    DialPhoneNumberButton()
                }
            }
        }
    }

    @Composable
    fun OpenWebsiteButton() {
        Button(onClick = {
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com"))
            startActivity(intent)
        }) {
            Text("Ouvrir un site web")
        }
    }

    @Composable
    fun SendEmailButton() {
        Button(onClick = {
            val intent = Intent(Intent.ACTION_SENDTO).apply {
                data = Uri.parse("mailto:test@example.com")
                putExtra(Intent.EXTRA_SUBJECT, "Sujet de l'email")
            }
            startActivity(intent)
        }) {
            Text("Envoyer un email")
        }
    }

    @Composable
    fun DialPhoneNumberButton() {
        Button(onClick = {
            val intent = Intent(Intent.ACTION_DIAL, Uri.parse("tel:+123456789"))
            startActivity(intent)
        }) {
            Text("Appeler un numéro")
        }
    }
}
```

---

### **Organisation du Code**
- **Fichiers :** Un seul fichier `MainActivity.kt` est utilisé.  
- **Structure :**  
  - **Fonctions Compose :** Chaque bouton est encapsulé dans une fonction distincte (`OpenWebsiteButton`, `SendEmailButton`, `DialPhoneNumberButton`).  
  - **Clarté :** Chaque fonction représente une action indépendante, facilitant la compréhension et la réutilisation.

---

## **Exercices Complémentaires**
1. Modifier les boutons pour ajouter des icônes et personnaliser leur apparence (taille, couleur).  
2. Ajouter une vérification pour s'assurer qu'une application compatible est installée avant de lancer l'intent.  
3. Créer un quatrième bouton qui ouvre une carte dans Google Maps à un emplacement précis.  