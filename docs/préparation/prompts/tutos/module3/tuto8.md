### **Tutoriel 8 : Création de listes avec Jetpack Compose**

---

#### **Concepts abordés :**  
- Affichage de listes déroulantes  
- Recycler les vues efficacement  
- Gestion des clics sur les éléments de la liste  

**Tags :** Lists, Jetpack Compose  

---

### **Objectif :**  
Créer une liste dynamique d'éléments en utilisant Jetpack Compose, afficher des images et du texte, et gérer les interactions utilisateur (clics sur les éléments).

---

### **Code Kotlin complet :**  

```kotlin
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.painter.Painter
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import androidx.compose.ui.tooling.preview.Preview
import com.example.todoapp.R // Assurez-vous d'importer correctement votre package

// Modèle de données représentant un élément de la liste
data class ListItem(val title: String, val imageRes: Int)

// Liste de données factices pour l'exemple
val sampleItems = listOf(
    ListItem("Tâche 1", R.drawable.ic_task),  // Remplacez par des icônes appropriées
    ListItem("Tâche 2", R.drawable.ic_task),
    ListItem("Tâche 3", R.drawable.ic_task)
)

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                ListScreen(items = sampleItems)
            }
        }
    }
}

@Composable
fun ListScreen(items: List<ListItem>) {
    LazyColumn(modifier = Modifier.fillMaxSize().padding(16.dp)) {
        items(items) { item ->
            ListItemRow(item = item)
            Divider() // Séparateur entre les éléments
        }
    }
}

@Composable
fun ListItemRow(item: ListItem) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable { /* Action à exécuter lors du clic */ }
            .padding(8.dp),
        horizontalArrangement = Arrangement.Start
    ) {
        // Affiche l'image
        val image: Painter = painterResource(id = item.imageRes)
        Image(
            painter = image,
            contentDescription = item.title,
            modifier = Modifier.size(40.dp)
        )
        Spacer(modifier = Modifier.width(16.dp))  // Espacement entre l'image et le texte
        // Affiche le texte
        Text(
            text = item.title,
            style = MaterialTheme.typography.bodyLarge
        )
    }
}

@Preview(showBackground = true)
@Composable
fun PreviewListScreen() {
    MaterialTheme {
        ListScreen(items = sampleItems)
    }
}
```

---

### **Explications du code :**

#### **1. Modèle de données (`ListItem`)** :
- Représente chaque élément de la liste avec un titre et une ressource d'image.
  
#### **2. Données factices (`sampleItems`)** :
- Une liste statique de `ListItem` servant d'exemple.

#### **3. `MainActivity`** :
- Configure la mise en page principale en utilisant `setContent` pour afficher l'écran de liste.

#### **4. `ListScreen` (Composant principal)** :
- Utilise `LazyColumn` pour afficher une liste déroulante optimisée.
- Chaque élément est rendu par la fonction `ListItemRow`.

#### **5. `ListItemRow`** :
- Définit l'apparence de chaque élément de la liste.
- Utilise une `Row` pour aligner horizontalement l'image et le texte.
- Ajoute un comportement de clic sur l'élément avec `clickable`.

#### **6. Aperçu (`PreviewListScreen`)** :
- Permet d'afficher un aperçu de l'interface dans Android Studio.

---

### **Lien avec le projet final :**  
- Ce tutoriel introduit la création et l'affichage de listes, un élément essentiel pour la gestion des tâches dans une application To-Do List.
- Les apprenants pourront réutiliser cette structure pour afficher une liste de tâches, ajouter des actions de clic pour modifier ou supprimer des tâches, et intégrer des icônes pour chaque état de tâche.

