# 🎓 **Tutoriel 5 : Interaction avec l'interface utilisateur**  

---

### **📚 Concepts abordés :**  
- Gestion des **clics** et des interactions utilisateur.  
- Introduction aux **boutons** et aux composants interactifs.  
- Gestion de l'**état** dans **Jetpack Compose**.

---

### **🏷️ Tags :**  
**UI**, **Gestion de l'état**, **Jetpack Compose**

---

### **📝 Résumé :**  
Ce tutoriel vous guide dans la création d'applications Android interactives en utilisant **Jetpack Compose**. Vous apprendrez à gérer les interactions utilisateur (comme les clics) et à gérer l'état pour créer des interfaces réactives.

---

## 🏗️ **Plan du tutoriel :**  

### **1. Ajout de boutons et gestion des clics**  
Les boutons permettent de déclencher des actions lorsqu'un utilisateur interagit avec l'interface. **Jetpack Compose** propose le composant **Button** pour gérer ces interactions.

---

### **🚀 Exemple de bouton simple :**  

```kotlin
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun SimpleButton() {
    Button(
        onClick = { 
            // Action à exécuter lors du clic
            println("Bouton cliqué !") 
        },
        modifier = Modifier.padding(16.dp)
    ) {
        Text("Cliquez-moi")
    }
}
```

---

### **2. Gestion de l'état dans Compose**  
**Compose** utilise un système réactif pour gérer l'état. Le **state** permet de mettre à jour l'interface utilisateur automatiquement lorsque les données changent.

---

### **🔄 Exemple avec gestion de l'état :**  

```kotlin
import androidx.compose.runtime.*
import androidx.compose.material3.Button
import androidx.compose.material3.Text

@Composable
fun CounterApp() {
    var count by remember { mutableStateOf(0) }  // État initial

    Button(onClick = { count++ }) {
        Text("Compteur : $count")
    }
}
```

**Explications :**  
- **`var count`** : Variable d'état qui stocke le compteur.  
- **`remember`** : Permet à Compose de mémoriser l'état entre les recompositions.  
- **`mutableStateOf`** : Crée une variable réactive. Toute modification de cet état redessine l'interface.  

---

### **3. Interaction avec plusieurs boutons**  
Vous pouvez ajouter plusieurs boutons pour gérer différentes actions.

```kotlin
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.*

@Composable
fun MultiButtonInteraction() {
    var message by remember { mutableStateOf("Appuyez sur un bouton") }

    Column {
        Button(onClick = { message = "Bonjour !" }) {
            Text("Dire Bonjour")
        }

        Button(onClick = { message = "Au revoir !" }) {
            Text("Dire Au revoir")
        }

        Text(message)
    }
}
```

---

### **🌟 Astuces pour la gestion de l'état :**  
1. **Stateless vs Stateful Composables :**  
   - **Stateless :** Ne gère pas directement l'état interne (utilise des paramètres).  
   - **Stateful :** Contient son propre état (utilise `remember`).

2. **Éviter les recompositions inutiles :**  
   - Utiliser **`derivedStateOf`** pour créer un état basé sur d'autres valeurs sans recalculer tout.

---

### **🔗 Lien avec le projet final :**  
La gestion des interactions et de l'état est essentielle pour le projet de **To-Do List**. Vous utiliserez ces concepts pour ajouter, supprimer et mettre à jour les tâches de manière dynamique.

---

### **🛠️ Exercices pratiques :**  
1. **Compteur :** Créez un compteur avec des boutons pour augmenter et diminuer la valeur.  
2. **Application de vote :** Implémentez une interface avec des boutons pour enregistrer des votes.  
3. **Toggle Button :** Créez un bouton qui change de texte (par exemple, "On" / "Off") à chaque clic.  

---

### **🎓 Conclusion :**  
Vous avez appris les bases de l’interaction avec l’interface utilisateur dans **Jetpack Compose**. Ces compétences vous permettront de créer des applications réactives et engageantes.

---

🚀 **Prochaine étape :** Apprenez à créer des listes dynamiques et gérer les événements complexes dans le prochain tutoriel !