### 📘 **Tutoriel 3 : Introduction à Jetpack Compose et création d'une UI de base**  

---

#### **Objectif pédagogique :**  
Découvrir les bases de Jetpack Compose pour créer une interface utilisateur simple dans une application Android.

#### **Tags :**  
Jetpack Compose, UI, Kotlin, Material Design.

---

## 🛠️ **Prérequis :**  
- Android Studio installé.  
- Projet Android Kotlin configuré (voir Tutoriel 2).  
- Notions de base en programmation Kotlin.

---

## 🚀 **Partie 1 : Comprendre Jetpack Compose**  

### **Qu'est-ce que Jetpack Compose ?**  
Jetpack Compose est un toolkit moderne pour créer des interfaces utilisateur (UI) en Android de manière déclarative. Il simplifie la création d'UI en utilisant du code Kotlin pur.

### **Avantages de Jetpack Compose :**  
- **Syntaxe déclarative** : Décrivez l’interface avec des fonctions Kotlin.  
- **Réactivité** : L’UI se met automatiquement à jour lorsque l’état change.  
- **Moins de code** : Comparé aux vues XML traditionnelles.  
- **Intégration avec Material Design** : Facile à appliquer.

---

## 📐 **Partie 2 : Structure de base d’un composable**  

Un composable est une fonction annotée avec `@Composable` qui génère une partie de l’interface.

### **Exemple simple :**  
```kotlin
@Composable
fun MessageCard(name: String) {
    Text(text = "Hello, $name!")
}
```

---

## 💻 **Partie 3 : Créer une UI simple avec Jetpack Compose**  

### **1. Ajouter des éléments de base : Texte et Bouton**  

Modifiez le fichier `MainActivity.kt` :

```kotlin
package com.example.myfirstapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.tooling.preview.Preview
import com.example.myfirstapp.ui.theme.MyFirstAppTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyFirstAppTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    SimpleUI()
                }
            }
        }
    }
}

@Composable
fun SimpleUI() {
    var count by remember { mutableStateOf(0) }  // Variable d'état

    Column(
        modifier = Modifier.fillMaxSize(),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(
            text = "Vous avez cliqué $count fois",
            style = MaterialTheme.typography.headlineMedium
        )
        Spacer(modifier = Modifier.height(16.dp))  // Espacement
        Button(onClick = { count++ }) {  // Bouton incrémente le compteur
            Text("Cliquez-moi")
        }
    }
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    MyFirstAppTheme {
        SimpleUI()
    }
}
```

---

## 📋 **Explications du code :**  

1. **Gestion d’état avec `remember`** :  
   La variable `count` est utilisée pour stocker l'état du compteur. `remember` conserve la valeur même après des recompositions.

2. **Composables de mise en page (`Column`, `Spacer`)** :  
   - **Column** : Aligne les éléments verticalement.  
   - **Spacer** : Crée un espace entre les éléments.

3. **Bouton avec `Button`** :  
   Incrémente la valeur du compteur lorsqu’on clique dessus.

4. **Preview** :  
   Affiche un aperçu de l’interface dans l’IDE sans exécuter l’application.

---

## ▶️ **Exécuter l'application**  
1. Lancez l'application sur un émulateur ou un appareil réel.  
2. Cliquez sur le bouton. Le texte devrait se mettre à jour dynamiquement.

---

## 🎨 **Personnalisation supplémentaire (optionnel)**  

### **Modifier les couleurs et les styles :**  
Personnalisez l'apparence du bouton et du texte en utilisant les thèmes Material 3 :

```kotlin
Button(
    onClick = { count++ },
    colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.primary)
) {
    Text("Cliquez-moi", color = MaterialTheme.colorScheme.onPrimary)
}
```

---

## 🎓 **Conclusion :**  
Vous avez appris les bases de Jetpack Compose en créant une interface utilisateur simple et interactive. Vous avez manipulé des composables de base comme `Text`, `Button` et géré l’état avec `remember`. Ces compétences seront essentielles pour vos futurs projets d’applications !