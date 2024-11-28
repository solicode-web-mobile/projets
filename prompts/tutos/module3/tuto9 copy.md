### **Tutoriel 9 : Introduction à Material Design**

---

#### **Objectif pédagogique :**
Découvrir et appliquer les principes de **Material Design** dans une application Android utilisant **Jetpack Compose**. Les apprenants apprendront à concevoir une interface moderne et attrayante en intégrant des thèmes, des couleurs, des formes, des typographies, et des pratiques d'accessibilité.

---

### **Concepts abordés :**
- Introduction à **Material Design**
- Création et personnalisation des thèmes Material
- Utilisation des composants Material (boutons, cartes, etc.)
- Intégration de couleurs et de formes
- Bonnes pratiques en matière d'accessibilité

---

### **Tags :**
Material Design, UI/UX, Jetpack Compose, Accessibilité

---

### **Résumé :**
Apprenez à utiliser **Material Design** pour créer des interfaces utilisateur modernes et intuitives. Ce tutoriel vous guidera à travers les étapes pour appliquer un thème, personnaliser les composants visuels, et garantir une meilleure expérience utilisateur.

---

### **Niveau 1 : Présentation de Material Design**

**Material Design** est un ensemble de principes et de composants développé par Google pour créer des interfaces cohérentes et esthétiques. Il repose sur la lumière, la profondeur et le mouvement pour offrir une expérience utilisateur engageante.

#### **Étapes :**
1. **Comprendre les composants de base de Material Design :**
   - Boutons, cartes, barres d'applications, champs de texte.
   - Chaque composant possède des variantes spécifiques pour respecter l'esthétique Material.

2. **Intégrer Material Design dans Compose :**
   Compose fournit une bibliothèque de composants prêts à l'emploi qui suivent les directives Material. Utilisez les composants tels que `Button`, `Card`, et `TextField`.

---

### **Niveau 2 : Création et personnalisation des thèmes Material**

Les thèmes permettent de définir les couleurs, la typographie et les formes utilisées dans votre application.

#### **Code Kotlin complet :**

```kotlin
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.tooling.preview.Preview

// Définition du thème Material personnalisé
@Composable
fun MyAppTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = lightColorScheme(
            primary = Color(0xFF6200EE),
            onPrimary = Color.White,
            secondary = Color(0xFF03DAC6),
            onSecondary = Color.Black,
            background = Color(0xFFF5F5F5),
            surface = Color.White,
            onSurface = Color.Black,
        ),
        typography = Typography(
            titleLarge = MaterialTheme.typography.titleLarge.copy(color = Color(0xFF6200EE))
        ),
        content = content
    )
}

// Utilisation des composants Material Design avec le thème
@Composable
fun MyAppScreen() {
    MyAppTheme {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = MaterialTheme.colorScheme.background
        ) {
            Column(
                modifier = Modifier.padding(16.dp)
            ) {
                Text(
                    text = "Bienvenue dans Material Design",
                    style = MaterialTheme.typography.titleLarge,
                    color = MaterialTheme.colorScheme.primary
                )

                Spacer(modifier = Modifier.height(16.dp))

                Button(
                    onClick = { /* Action au clic */ },
                    colors = ButtonDefaults.buttonColors(containerColor = MaterialTheme.colorScheme.primary)
                ) {
                    Text("Appuyer ici", color = MaterialTheme.colorScheme.onPrimary)
                }

                Spacer(modifier = Modifier.height(16.dp))

                Card(
                    modifier = Modifier.fillMaxWidth(),
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    elevation = CardDefaults.cardElevation(defaultElevation = 8.dp)
                ) {
                    Text(
                        text = "Ceci est une carte Material",
                        modifier = Modifier.padding(16.dp),
                        color = MaterialTheme.colorScheme.onSurface
                    )
                }
            }
        }
    }
}

// Aperçu dans Android Studio
@Preview(showBackground = true)
@Composable
fun MyAppScreenPreview() {
    MyAppScreen()
}
```

---

### **Explications du code :**

1. **Thème personnalisé :**
   - Utilise `MaterialTheme` pour définir un jeu de couleurs et une typographie spécifique.
   - `lightColorScheme` permet de personnaliser les couleurs pour différents éléments (arrière-plan, boutons, etc.).

2. **Utilisation de composants Material :**
   - `Text`, `Button`, et `Card` sont personnalisés avec les couleurs et styles du thème.
   - Les composants utilisent les couleurs du thème grâce à `MaterialTheme.colorScheme`.

3. **Accessibilité :**
   - L'accessibilité est assurée en utilisant des contrastes de couleurs appropriés et en suivant les bonnes pratiques de conception.

---

### **Activité pratique :**
**Objectif :** Modifier les couleurs et les composants pour créer une interface qui respecte le thème de votre application To-Do List.

1. Créez un thème personnalisé avec vos propres couleurs.
2. Intégrez un bouton et une carte utilisant ce thème.
3. Assurez-vous que l'interface respecte les principes d'accessibilité (contraste, tailles de texte).

---

### **Conclusion :**
Ce tutoriel vous a introduit aux fondamentaux de **Material Design** avec Jetpack Compose. Vous avez appris à créer un thème personnalisé, à utiliser des composants stylisés et à concevoir des interfaces modernes et accessibles.