# 📋 **Module 1 : Mini-projet — Carte de visite interactive**  

---

### **🎯 Objectif pédagogique :**  
Créer une application simple de carte de visite interactive en utilisant **Jetpack Compose**. Ce mini-projet introduira les concepts de base liés à l'interface utilisateur et à la mise en page, essentiels pour le projet final (To-Do List).

---

### **📝 Description du projet :**  
Développer une application Android qui affiche une carte de visite numérique contenant les informations suivantes :  
- **Nom complet**  
- **Photo de profil**  
- **Titre professionnel**  
- **Email et numéro de téléphone**  
- **Lien vers un profil LinkedIn ou site personnel**  

Les utilisateurs pourront également **cliquer** sur les liens pour ouvrir les applications correspondantes.

---

### **🔗 Compétences développées :**  
1. Manipulation des composants **Jetpack Compose**.  
2. Gestion de la mise en page avec **Row**, **Column** et **Box**.  
3. Utilisation de **Modifier** pour styliser et espacer les éléments.  
4. Gestion des **intentions explicites** pour ouvrir des liens externes.

---

### **🛠️ Prérequis techniques :**  
- Kotlin de base  
- Familiarité avec l’environnement Android Studio  
- Connaissance des composants simples de Jetpack Compose (Button, Text, Image, etc.)

---

## 🏗️ **Plan de développement du projet :**  

### **1. Configuration initiale :**  
1. **Créer un nouveau projet** dans Android Studio avec une activité **Compose Activity**.  
2. Ajouter les dépendances nécessaires (Jetpack Compose).

### **2. Création de l’interface utilisateur :**  
Implémentez l'interface avec les composants **Compose** suivants :  
- **`Column`** pour organiser les éléments verticalement.  
- **`Image`** pour afficher la photo de profil.  
- **`Text`** pour le nom, le titre, l'email, et le numéro de téléphone.  
- **`Button` ou `ClickableText`** pour les liens externes.

---

### **🖥️ Exemple de code :**  

```kotlin
import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.clickable
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.platform.LocalContext

@Composable
fun BusinessCard() {
    val context = LocalContext.current  // Permet d’accéder au contexte actuel

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(16.dp),
        verticalArrangement = Arrangement.Center,
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Affichage de la photo de profil
        val image: Painter = painterResource(id = R.drawable.profile_picture)
        Image(painter = image, contentDescription = "Photo de profil", modifier = Modifier.size(100.dp))

        Spacer(modifier = Modifier.height(16.dp))  // Espacement

        // Nom et titre professionnel
        Text("John Doe", fontSize = 24.sp)
        Text("Développeur Mobile", fontSize = 18.sp, textAlign = TextAlign.Center)

        Spacer(modifier = Modifier.height(8.dp))

        // Email clickable
        Text(
            text = "john.doe@example.com",
            color = MaterialTheme.colorScheme.primary,
            modifier = Modifier.clickable {
                val emailIntent = Intent(Intent.ACTION_SENDTO, Uri.parse("mailto:john.doe@example.com"))
                context.startActivity(emailIntent)
            }
        )

        // Lien LinkedIn
        Text(
            text = "LinkedIn",
            color = MaterialTheme.colorScheme.secondary,
            modifier = Modifier.clickable {
                val linkedInIntent = Intent(Intent.ACTION_VIEW, Uri.parse("https://www.linkedin.com/in/johndoe"))
                context.startActivity(linkedInIntent)
            }
        )
    }
}
```

---

### **🎨 Personnalisation :**  
- **Modifier les couleurs** à l'aide du thème Material Design.  
- Utiliser des **icônes personnalisées** pour le téléphone et l'email.  
- Expérimenter avec des **animations simples** (ex. : fond changeant).

---

### **🔗 Lien avec le projet final :**  
Ce mini-projet introduit les bases de **Jetpack Compose**, de la gestion des composants d'interface, et des interactions utilisateur. Ces compétences seront cruciales pour développer l'application To-Do List finale.

---

### **📝 Livrables :**  
- Code source complet.  
- Rapport décrivant l'architecture de l'interface et les choix techniques.  
- Capture d'écran ou démonstration vidéo de l'application en fonctionnement.  

---

🚀 **Prochaine étape :** Apprendre à gérer les états et les listes dynamiques dans Compose pour le prochain mini-projet.