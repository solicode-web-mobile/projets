### **Tutoriel 1 : Introduction au développement Android avec Kotlin**  
---

#### **Objectif pédagogique :**  
Découvrir les bases du développement d'applications Android avec Kotlin et créer une première application simple.

---

### **1. Prérequis :**  
- **Outils requis :** Android Studio installé  
- **Langage :** Kotlin  
- **Connaissances de base en programmation orientée objet (POO)**  

---

### **2. Créer un projet Android avec Kotlin**  

#### **Étapes de création :**  
1. **Ouvrez Android Studio.**  
2. **Créez un nouveau projet :**  
   - Cliquez sur **"Start a new Android Studio project"**.  
   - Sélectionnez le modèle **"Empty Activity"**.  
3. **Configurez le projet :**  
   - **Name :** PremièreApplication  
   - **Language :** Kotlin  
   - **Minimum API Level :** API 21 (Android 5.0) ou supérieur  

---

### **3. Structure d'un projet Android**  

Les dossiers importants du projet Android sont :  
- **`app/src/main/java` :** Contient le code source Kotlin.  
- **`app/src/main/res` :** Contient les ressources (layouts, images, strings, etc.).  
- **`AndroidManifest.xml` :** Fichier de configuration de l'application.  

---

### **4. Comprendre l'activité principale**  

L'activité principale est le point d'entrée de votre application.

**Code par défaut dans `MainActivity.kt` :**  

```kotlin
package com.example.premiereapplication

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}
```

**Explication :**  
- **`AppCompatActivity`** : Classe de base pour les activités.  
- **`onCreate`** : Méthode appelée lors de la création de l'activité.  
- **`setContentView`** : Définit le layout de l'activité (fichier XML).  

---

### **5. Créer une interface utilisateur simple**  

#### **Modifier le fichier `activity_main.xml` :**  

**Ajoutez un `TextView` et un `Button` :**  
```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <TextView
        android:id="@+id/textView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Bonjour, Solicodes !"
        android:textSize="24sp"
        android:layout_centerInParent="true"/>

    <Button
        android:id="@+id/button"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Cliquez-moi"
        android:layout_below="@id/textView"
        android:layout_centerHorizontal="true"
        android:layout_marginTop="16dp"/>
</RelativeLayout>
```

---

### **6. Ajouter une interaction avec Kotlin**  

#### **Modifier `MainActivity.kt` pour gérer le clic du bouton :**  

```kotlin
package com.example.premiereapplication

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Référence aux éléments de l'UI
        val textView: TextView = findViewById(R.id.textView)
        val button: Button = findViewById(R.id.button)

        // Gestionnaire d'événements pour le bouton
        button.setOnClickListener {
            textView.text = "Bouton cliqué !"
        }
    }
}
```

**Explication :**  
- **`findViewById`** : Permet d'accéder aux éléments de l'UI définis dans le layout.  
- **`setOnClickListener`** : Ajoute un gestionnaire d'événements pour les clics sur le bouton.  

---

### **7. Tester l'application**  

1. **Exécutez l'application sur un émulateur ou un appareil physique.**  
2. **Cliquez sur le bouton et observez le changement de texte.**  

---

### **Conclusion**  

Ce premier tutoriel vous a permis de créer votre première application Android simple en Kotlin, en comprenant les bases de la structure d'un projet Android et l'interaction avec une interface utilisateur. Vous êtes maintenant prêt à explorer des concepts plus avancés dans les prochains tutoriels.