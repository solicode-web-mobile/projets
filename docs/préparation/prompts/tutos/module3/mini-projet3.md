### **Mini-projet : Application de liste d'affirmations**

---

#### **Description :**
Dans ce mini-projet, vous allez développer une application Android avec **Jetpack Compose** qui affiche une liste de citations inspirantes (affirmations positives). Chaque citation sera présentée dans une **carte Material Design**. L'application devra utiliser un thème personnalisé pour garantir une apparence moderne et cohérente.

---

### **Objectifs pédagogiques :**
- Pratiquer la création et l'affichage de listes avec **Jetpack Compose**.
- Appliquer un thème **Material Design** personnalisé.
- Gérer les clics sur les éléments de la liste.
- Comprendre l'organisation des composants Material (texte, cartes, boutons).

---

### **Concepts abordés :**
- **Listes déroulantes** avec Jetpack Compose.
- Utilisation de **LazyColumn** pour des listes optimisées.
- Implémentation de **thèmes Material**.
- Interaction avec les éléments de la liste (gestion des clics).

---

### **Lien avec le projet final (To-Do List) :**
Ce mini-projet permet aux apprenants de se familiariser avec les concepts clés qu'ils utiliseront dans l'application To-Do List finale :
1. **Création de listes** : afficher et gérer dynamiquement des éléments.
2. **Thèmes personnalisés** : appliquer un thème global cohérent.
3. **Interaction utilisateur** : gérer les événements de clic sur chaque élément de la liste.

---

### **Étapes de réalisation :**

#### **1. Préparation des données**
Créez une liste de citations inspirantes sous forme de données statiques.

```kotlin
val affirmations = listOf(
    "Crois en toi-même et en toutes tes capacités.",
    "Chaque jour est une nouvelle opportunité.",
    "Tu es plus fort que tu ne le penses.",
    "N'abandonne jamais, les miracles prennent du temps.",
    "Le succès commence par la volonté de l'atteindre."
)
```

---

#### **2. Mise en place de l'interface (UI)**
Utilisez **LazyColumn** pour afficher les citations dans une liste déroulante.

```kotlin
@Composable
fun AffirmationList(affirmations: List<String>) {
    LazyColumn(
        modifier = Modifier.padding(16.dp)
    ) {
        items(affirmations) { affirmation ->
            AffirmationCard(affirmation)
        }
    }
}
```

---

#### **3. Création de la carte Material**
Développez un composant `Card` pour chaque citation.

```kotlin
@Composable
fun AffirmationCard(affirmation: String) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 8.dp),
        elevation = CardDefaults.cardElevation(defaultElevation = 8.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
    ) {
        Text(
            text = affirmation,
            style = MaterialTheme.typography.bodyLarge,
            modifier = Modifier.padding(16.dp),
            color = MaterialTheme.colorScheme.onSurface
        )
    }
}
```

---

#### **4. Application du thème personnalisé**
Appliquez un thème global à l'application.

```kotlin
@Composable
fun AffirmationApp() {
    MaterialTheme(
        colorScheme = lightColorScheme(
            primary = Color(0xFF6200EE),
            onPrimary = Color.White,
            background = Color(0xFFF5F5F5),
            surface = Color.White,
            onSurface = Color.Black
        )
    ) {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = MaterialTheme.colorScheme.background
        ) {
            AffirmationList(affirmations)
        }
    }
}
```

---

### **Activité pratique :**
1. **Ajout dynamique** : Permettre aux utilisateurs d'ajouter leurs propres affirmations via un champ de texte.
2. **Gestion des clics** : Afficher un message `Toast` ou changer la couleur de fond d'une carte lorsqu'elle est cliquée.
3. **Personnalisation du thème** : Modifier les couleurs et la typographie pour une meilleure lisibilité.

---

### **Conclusion :**
Ce mini-projet vous permettra de maîtriser les bases des listes avec Jetpack Compose et d'appliquer les principes de Material Design dans une application concrète. Ces compétences seront essentielles pour développer l'application **To-Do List** complète.