---
reference: m2-créer-interface-utilisateur-mini-projet
slug: mini-projet
module_reference: mobile
part_reference: m2-créer-interface-utilisateur
concept_reference: ''
title: mini-projet
description: ''
order: 45
directory: m2-créer-interface-utilisateur
permalink: m2-créer-interface-utilisateur/mini-projet
layout: chapters
---

### Mini-projet : Application de calcul de pourboire  

#### **Objectif pédagogique**  
Ce mini-projet permettra aux apprenants d’appliquer les notions abordées dans le **Module 2**, notamment :  
- La gestion de l’état dans Jetpack Compose,  
- La création d’interfaces interactives,  
- La manipulation d'éléments comme les boutons, les champs de texte, et les sliders.  

#### **Description du projet**  
Les apprenants développeront une application simple permettant de :  
1. Saisir le montant de l’addition.  
2. Choisir un pourcentage de pourboire à l’aide d’un slider.  
3. Calculer et afficher le montant du pourboire et le total à payer.  

L'application comprendra :  
- Un champ de saisie pour l’addition,  
- Un slider pour sélectionner le pourcentage,  
- Une zone affichant les résultats (montant du pourboire et total).

---

### Étapes de réalisation  

#### 1. **Configuration initiale**
1. **Créer un nouveau projet Android dans Android Studio :**  
   - **Nom du projet :** `TipCalculator`.  
   - **Langage :** Kotlin.  
   - **API minimale :** 21 (Android 5.0).  
   - **Template :** `Empty Compose Activity`.

2. **Structure du projet :**  
   - Ouvrir le fichier `MainActivity.kt`.  
   - Vérifier que le fichier contient une fonction de départ comme suit :  
     ```kotlin
     @Composable
     fun TipCalculatorApp() {
         // Contenu de l'application
     }

     override fun onCreate(savedInstanceState: Bundle?) {
         super.onCreate(savedInstanceState)
         setContent {
             TipCalculatorApp()
         }
     }
     ```

---

#### 2. **Interface utilisateur (UI)**  
Créer une interface de base avec les éléments suivants :  

1. **Champ de saisie pour le montant de l’addition**  
   Utiliser le composant `TextField` :  
   ```kotlin
   var amountInput by remember { mutableStateOf("") }
   TextField(
       value = amountInput,
       onValueChange = { amountInput = it },
       label = { Text("Montant de l'addition") },
       keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
       modifier = Modifier.fillMaxWidth()
   )
   ```

2. **Slider pour sélectionner le pourcentage de pourboire**  
   Ajouter un `Slider` et afficher le pourcentage sélectionné :  
   ```kotlin
   var tipPercentage by remember { mutableStateOf(15f) }
   Column(horizontalAlignment = Alignment.CenterHorizontally) {
       Text("Pourcentage : ${tipPercentage.toInt()}%")
       Slider(
           value = tipPercentage,
           onValueChange = { tipPercentage = it },
           valueRange = 0f..30f,
           modifier = Modifier.fillMaxWidth()
       )
   }
   ```

3. **Affichage des résultats calculés**  
   Calculer et afficher le pourboire et le total :  
   ```kotlin
   val amount = amountInput.toFloatOrNull() ?: 0f
   val tipAmount = (amount * tipPercentage / 100)
   val totalAmount = amount + tipAmount

   Text("Pourboire : %.2f MAD".format(tipAmount))
   Text("Total : %.2f MAD".format(totalAmount))
   ```

4. **Assembler l'interface complète**  
   Structurer l'application avec une disposition en colonne :  
   ```kotlin
   @Composable
   fun TipCalculatorApp() {
       Column(
           modifier = Modifier
               .fillMaxSize()
               .padding(16.dp),
           verticalArrangement = Arrangement.spacedBy(16.dp)
       ) {
           // Champ de saisie
           var amountInput by remember { mutableStateOf("") }
           TextField(
               value = amountInput,
               onValueChange = { amountInput = it },
               label = { Text("Montant de l'addition") },
               keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Number),
               modifier = Modifier.fillMaxWidth()
           )

           // Slider
           var tipPercentage by remember { mutableStateOf(15f) }
           Column(horizontalAlignment = Alignment.CenterHorizontally) {
               Text("Pourcentage : ${tipPercentage.toInt()}%")
               Slider(
                   value = tipPercentage,
                   onValueChange = { tipPercentage = it },
                   valueRange = 0f..30f,
                   modifier = Modifier.fillMaxWidth()
               )
           }

           // Résultats
           val amount = amountInput.toFloatOrNull() ?: 0f
           val tipAmount = (amount * tipPercentage / 100)
           val totalAmount = amount + tipAmount

           Text("Pourboire : %.2f MAD".format(tipAmount))
           Text("Total : %.2f MAD".format(totalAmount))
       }
   }
   ```

---

#### 3. **Amélioration esthétique avec Material Design**  
- Ajouter des couleurs pour le texte (`TextStyle`) et ajuster les marges.  
- Intégrer des icônes ou des séparateurs (`Divider`) pour améliorer la lisibilité.  

---

#### 4. **Tests et finalisation**  
1. Exécuter l’application sur un émulateur ou un appareil réel.  
2. Tester les cas suivants :  
   - Saisie correcte (nombres uniquement).  
   - Gestion des erreurs pour les champs vides ou invalides.  
3. Ajouter des commentaires dans le code pour clarifier le fonctionnement.  

---

### Résultat attendu  
Une application fonctionnelle permettant de :  
- Saisir un montant.  
- Sélectionner un pourcentage de pourboire.  
- Voir les résultats calculés instantanément.  

---

#### **Lien avec le projet final**  
Ce mini-projet introduit les bases de la gestion de l’état et des interactions utilisateur, qui seront essentielles pour développer la **To-Do List** complète.