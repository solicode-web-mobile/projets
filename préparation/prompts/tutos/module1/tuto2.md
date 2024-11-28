### 📘 **Tutoriel 2 : Configuration d'Android Studio**  

---

#### **Objectif pédagogique :**  
Installer, configurer Android Studio et créer votre première application Android.

#### **Tags :**  
Android Studio, Environnement de développement, Kotlin.

---

## 🛠️ **Prérequis :**  
- Un ordinateur avec une connexion internet.  
- Compte administrateur pour l'installation.  
- Connaissances de base en programmation (idéalement en Kotlin).

---

## 🚀 **Partie 1 : Installation d’Android Studio**  

### **1. Télécharger Android Studio**  
1. Rendez-vous sur [le site officiel d'Android Studio](https://developer.android.com/studio).
2. Cliquez sur le bouton de téléchargement correspondant à votre système d'exploitation (Windows, macOS, ou Linux).
3. Acceptez les termes et conditions et commencez le téléchargement.

### **2. Installer Android Studio**  
1. Ouvrez le fichier téléchargé.
2. Suivez les instructions d'installation :
   - Sur Windows : Suivez l’assistant d’installation.
   - Sur macOS : Déplacez Android Studio dans le dossier Applications.
   - Sur Linux : Décompressez l’archive, puis exécutez `studio.sh`.

3. Lors du premier lancement, Android Studio vous propose d'installer les composants nécessaires (SDK, émulateurs, etc.). Acceptez toutes les options par défaut.

---

## 🖥️ **Partie 2 : Configuration de l'environnement**  

### **1. Configurer le SDK Android**  
1. Lancez Android Studio.
2. Allez dans **Settings** → **Appearance & Behavior** → **System Settings** → **Android SDK**.
3. Installez la dernière version du SDK et d'autres outils de développement recommandés.

### **2. Créer un émulateur Android**  
1. Allez dans **Tools** → **AVD Manager** (Android Virtual Device Manager).
2. Cliquez sur **Create Virtual Device**.
3. Choisissez un modèle d'appareil (ex. Pixel 4) et cliquez sur **Next**.
4. Sélectionnez une version d'Android (téléchargez-la si nécessaire) et suivez les étapes pour créer l’émulateur.

---

## 📱 **Partie 3 : Créer votre première application Android**  

### **1. Créer un nouveau projet Android**  
1. Lancez Android Studio.
2. Cliquez sur **New Project**.
3. Sélectionnez le template **Empty Compose Activity**.
4. Cliquez sur **Next**.
5. Configurez votre projet :
   - **Name:** `MyFirstApp`
   - **Package name:** `com.example.myfirstapp`
   - **Language:** `Kotlin`
   - **Minimum API level:** `API 21: Android 5.0 (Lollipop)`.

6. Cliquez sur **Finish**.

---

## 💻 **Partie 4 : Code de base pour une application Hello World**  

Ouvrez le fichier `MainActivity.kt` et remplacez son contenu par :

```kotlin
package com.example.myfirstapp

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
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
                    Greeting("World")
                }
            }
        }
    }
}

@Composable
fun Greeting(name: String) {
    Box(contentAlignment = Alignment.Center, modifier = Modifier.fillMaxSize()) {
        Text(text = "Hello, $name!")
    }
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    MyFirstAppTheme {
        Greeting("Android")
    }
}
```

---

## ▶️ **Exécuter l'application**  
1. Connectez un appareil Android ou lancez l’émulateur créé précédemment.
2. Cliquez sur le bouton **Run** (flèche verte) en haut de l'IDE.
3. Sélectionnez votre appareil/emulateur dans la liste.
4. Votre application s’exécute et affiche **Hello, World!**.

---

## 🎓 **Conclusion :**  
Vous avez installé Android Studio, configuré un émulateur, créé votre premier projet Android et exécuté une application simple avec Jetpack Compose. Vous êtes prêt pour les prochaines étapes !