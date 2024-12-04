---
reference: m2-créer-interface-utilisateur-tuto5
slug: tuto5
module_reference: mobile
part_reference: m2-créer-interface-utilisateur
concept_reference: ''
title: Tutoriel 5 - Interaction avec UI v1.1
description: ''
order: 94
directory: m2-créer-interface-utilisateur
permalink: m2-créer-interface-utilisateur/tuto5
layout: chapters
---

# Tutoriel 5 : Interaction avec l'interface utilisateur  

## Objectif pédagogique 
 
**Apprendre à créer des interfaces interactives dans Jetpack Compose** en maîtrisant la gestion des événements utilisateur et l'utilisation de l'état pour des applications réactives et dynamiques.

---

## Concepts abordés  
1. **État dans Jetpack Compose** :  
   - Définitions et concepts clés (immutabilité, recomposition).  
   - Utilisation de `remember` et `mutableStateOf`.  

2. **Gestion des interactions utilisateur** :  
   - Capturer des événements tels que les clics, la saisie de texte, et les changements de valeur d’un composant interactif.  

3. **Composants interactifs courants** :  
   - Boutons, TextFields, Checkboxes.  

---

## Explication théorique  

### **1. L’état dans Jetpack Compose**  
Jetpack Compose repose sur un **modèle déclaratif** où l'interface utilisateur est générée en fonction de l'état. Lorsque l'état change, l'interface est automatiquement **recomposée** pour refléter ces modifications.

#### **Définir un état mutable**  
- Utilisez `mutableStateOf` pour créer un état observable.  
- Associez-le à `remember` pour conserver cet état lors des recompositions.  

Exemple :  
```kotlin  
@Composable  
fun Counter() {  
    var count by remember { mutableStateOf(0) }  
    Button(onClick = { count++ }) {  
        Text("Cliquez : $count")  
    }  
}  
```  

#### **Pourquoi `remember` est essentiel ?**  
- Sans `remember`, les valeurs d'état seraient réinitialisées à chaque recomposition, entraînant une perte de données.  
- Exemples de problèmes :  
  - Un compteur qui se réinitialise après chaque clic.  
  - Une saisie utilisateur qui disparaît.  

### **2. Gestion des événements utilisateur**  
Compose utilise des lambdas pour capturer les interactions :  
- `onClick` pour les boutons.  
- `onValueChange` pour les champs de texte.  
- `onCheckedChange` pour les cases à cocher.  

### **3. Composants interactifs courants**  
1. **Button** : Déclenche une action au clic.  
2. **TextField** : Capture du texte.  
3. **Checkbox** : Gestion d’options activables.

---

## Étapes pratiques  

### **Étape 1 : Ajouter un bouton interactif**  
1. Créez un fichier `InteractiveButton.kt`.  
2. Implémentez un bouton avec un compteur de clics.  

Code :  
```kotlin  
@Composable  
fun InteractiveButton() {  
    var count by remember { mutableStateOf(0) }  
    Column(horizontalAlignment = Alignment.CenterHorizontally) {  
        Text("Clics : $count")  
        Button(onClick = { count++ }) {  
            Text("Cliquez-moi")  
        }  
    }  
}  
```  

---

### **Étape 2 : Capturer du texte avec TextField**  
Ajoutez une fonctionnalité permettant de capturer et d'afficher du texte saisi.  

Code :  
```kotlin  
@Composable  
fun TextInputExample() {  
    var text by remember { mutableStateOf("") }  
    Column {  
        TextField(value = text, onValueChange = { text = it }, label = { Text("Entrez un texte") })  
        Text("Vous avez écrit : $text")  
    }  
}  
```  

---

### **Étape 3 : Combiner des composants interactifs**  
Créez un formulaire combinant plusieurs composants (TextField, Checkbox, Button).  

Code :  
```kotlin  
@Composable  
fun InteractiveForm() {  
    var name by remember { mutableStateOf("") }  
    var isSubscribed by remember { mutableStateOf(false) }  
    var message by remember { mutableStateOf("") }  
  
    Column {  
        TextField(value = name, onValueChange = { name = it }, label = { Text("Votre nom") })  
        Row(verticalAlignment = Alignment.CenterVertically) {  
            Checkbox(checked = isSubscribed, onCheckedChange = { isSubscribed = it })  
            Text("Recevoir des notifications")  
        }  
        Button(onClick = {  
            message = if (isSubscribed) "Bienvenue, $name !" else "Merci $name, cochez pour des notifications."  
        }) {  
            Text("Valider")  
        }  
        if (message.isNotEmpty()) {  
            Text(message)  
        }  
    }  
}  
```  

---

## Exercice pratique  

### **Création d’un formulaire d’inscription**  
**Objectif :** Développer une interface qui capture un nom et gère une validation conditionnelle.  

#### **Étapes requises :**  
1. Utilisez un `TextField` pour capturer un nom.  
2. Ajoutez une `Checkbox` pour confirmer une action.  
3. Implémentez un `Button` qui affiche un message conditionnel basé sur les entrées.

---

## Conclusion  
Ce tutoriel vous a permis de :  
1. Comprendre le rôle de l’état (`State`) dans Jetpack Compose.  
2. Créer des composants interactifs en réponse aux événements utilisateur.  
3. Construire des interfaces dynamiques en combinant plusieurs composants.  

Vous êtes maintenant prêt pour des applications plus complexes intégrant des états multiples et une navigation avancée.  

---