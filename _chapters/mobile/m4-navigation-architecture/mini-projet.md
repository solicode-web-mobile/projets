---
reference: m4-navigation-architecture-mini-projet
slug: mini-projet
module_reference: mobile
part_reference: m4-navigation-architecture
concept_reference: ''
title: Mini-Projet
description: ''
order: 131
directory: mobile/m4-navigation-architecture
permalink: mobile/m4-navigation-architecture/mini-projet
layout: chapters
---

# Mini-Projet 4 : Application Multi-écrans **My City**

---

## **Description**
Concevoir une application mobile interactive qui présente votre ville préférée (**My City**) à travers plusieurs écrans, en utilisant **Jetpack Compose** et les notions de navigation multi-écrans abordées dans les tutoriels précédents.

---

## **Objectifs**
1. Maîtriser la navigation entre plusieurs écrans dans une application Compose.
2. Structurer et transmettre des données entre des écrans.
3. Appliquer des concepts de design et d’interaction utilisateur pour une navigation fluide.

---

## **Fonctionnalités demandées**
1. **Écran d’accueil :**
   - Présente le nom de l’application et un bouton pour entrer dans l’exploration de la ville.

2. **Écran des points d’intérêt :**
   - Liste les points d’intérêt (POIs) de la ville (ex. monuments, musées, parcs).
   - Ajoute une navigation vers un écran de détails pour chaque POI.

3. **Écran de détails d’un point d’intérêt :**
   - Présente des informations détaillées sur un POI (nom, description, image, emplacement, etc.).
   - Inclut un bouton pour revenir à la liste des POIs.

4. **Navigation conditionnelle :**
   - Si l’utilisateur clique sur un bouton "Explorer encore", il est redirigé vers un écran de **suggestions d’activités**.

---

## **Étapes de réalisation**

### **1. Configurer la navigation**
Ajoutez la dépendance pour la navigation dans `build.gradle` :
```kotlin
implementation "androidx.navigation:navigation-compose:2.7.0"
```

### **2. Créer les données**
Définissez une liste de points d’intérêt dans un fichier Kotlin :
```kotlin
data class PointOfInterest(val id: Int, val name: String, val description: String, val imageRes: Int)

val poiList = listOf(
    PointOfInterest(1, "Tour Eiffel", "Une tour emblématique de Paris.", R.drawable.eiffel_tower),
    PointOfInterest(2, "Louvre", "Le célèbre musée avec la Joconde.", R.drawable.louvre),
    PointOfInterest(3, "Parc des Buttes-Chaumont", "Un parc pittoresque de Paris.", R.drawable.buttes_chaumont)
)
```

### **3. Implémenter les écrans**
1. **Écran d’accueil** :
   ```kotlin
   @Composable
   fun HomeScreen(navController: NavHostController) {
       Column(
           modifier = Modifier.fillMaxSize(),
           horizontalAlignment = Alignment.CenterHorizontally,
           verticalArrangement = Arrangement.Center
       ) {
           Text("Bienvenue à My City", style = MaterialTheme.typography.titleLarge)
           Spacer(modifier = Modifier.height(16.dp))
           Button(onClick = { navController.navigate("points_of_interest") }) {
               Text("Explorer la ville")
           }
       }
   }
   ```

2. **Écran des points d’intérêt** :
   ```kotlin
   @Composable
   fun POIScreen(navController: NavHostController, pois: List<PointOfInterest>) {
       LazyColumn {
           items(pois) { poi ->
               Row(
                   modifier = Modifier
                       .fillMaxWidth()
                       .clickable { navController.navigate("details/${poi.id}") }
                       .padding(16.dp)
               ) {
                   Text(poi.name, style = MaterialTheme.typography.bodyLarge)
               }
               Divider()
           }
       }
   }
   ```

3. **Écran de détails** :
   ```kotlin
   @Composable
   fun POIDetailsScreen(navController: NavHostController, poi: PointOfInterest) {
       Column(
           modifier = Modifier.fillMaxSize().padding(16.dp),
           horizontalAlignment = Alignment.CenterHorizontally
       ) {
           Image(
               painter = painterResource(id = poi.imageRes),
               contentDescription = poi.name,
               modifier = Modifier.size(200.dp)
           )
           Spacer(modifier = Modifier.height(16.dp))
           Text(poi.name, style = MaterialTheme.typography.titleLarge)
           Text(poi.description, style = MaterialTheme.typography.bodyMedium)
           Spacer(modifier = Modifier.height(16.dp))
           Button(onClick = { navController.navigateUp() }) {
               Text("Retour")
           }
       }
   }
   ```

4. **Écran de suggestions d’activités** :
   ```kotlin
   @Composable
   fun SuggestionsScreen() {
       Column(
           modifier = Modifier.fillMaxSize(),
           horizontalAlignment = Alignment.CenterHorizontally,
           verticalArrangement = Arrangement.Center
       ) {
           Text("Suggestions d'activités", style = MaterialTheme.typography.titleLarge)
           Spacer(modifier = Modifier.height(16.dp))
           Text("Profitez de balades, dégustez la cuisine locale, ou explorez d'autres villes !")
       }
   }
   ```

### **4. Configurer le graphique de navigation**
Ajoutez un graphique de navigation dans `NavHost` :
```kotlin
@Composable
fun MyCityApp() {
    val navController = rememberNavController()

    NavHost(navController = navController, startDestination = "home") {
        composable("home") { HomeScreen(navController) }
        composable("points_of_interest") { POIScreen(navController, poiList) }
        composable("details/{poiId}") { backStackEntry ->
            val poiId = backStackEntry.arguments?.getString("poiId")?.toIntOrNull()
            val poi = poiList.find { it.id == poiId }
            if (poi != null) {
                POIDetailsScreen(navController, poi)
            }
        }
        composable("suggestions") { SuggestionsScreen() }
    }
}
```

### **5. Ajouter une logique conditionnelle**
Dans l’écran de détails, ajoutez un bouton pour explorer encore :
```kotlin
Button(onClick = { navController.navigate("suggestions") }) {
    Text("Explorer encore")
}
```

---

## **Critères d’évaluation**
1. **Code complet et fonctionnel** : Le projet doit être exécutable dans Android Studio.
2. **Navigation fluide** : Les transitions entre écrans doivent fonctionner sans bugs.
3. **Design** : Les composants doivent suivre les principes de **Material Design**.
4. **Données dynamiques** : Les détails des POIs doivent être générés à partir des données définies.

Souhaitez-vous des précisions sur une partie du mini-projet ou des suggestions pour le compléter ?


