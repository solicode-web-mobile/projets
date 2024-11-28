---
reference: m3-afficher-listes-utiliser-material-design-tuto7
slug: tuto7
module_reference: mobile
part_reference: m3-afficher-listes-utiliser-material-design
concept_reference: ''
title: Tuto7
description: ''
order: 113
directory: m3-afficher-listes-utiliser-material-design
permalink: m3-afficher-listes-utiliser-material-design/tuto7
layout: chapters
---


# **Tutoriel 7 : Concepts avancés de Kotlin (Collections et Génériques)**  
---

## **Objectif pédagogique :**  
Comprendre et manipuler les collections, génériques et extensions pour créer des applications Android plus robustes et modulaires.

---

# **1. Collections en Kotlin**  

Les collections sont des structures de données permettant de stocker et manipuler des groupes d'éléments. Kotlin propose des collections immuables (`List`, `Set`, `Map`) et des collections modifiables (`MutableList`, `MutableSet`, `MutableMap`).

---

## **Exemple 1 : Utilisation de `List` et `MutableList`**  

```kotlin
fun main() {
    // Liste immuable
    val fruits = listOf("Pomme", "Banane", "Orange")
    println("Liste des fruits : $fruits")

    // Parcourir une liste
    for (fruit in fruits) {
        println(fruit)
    }

    // Liste mutable
    val mutableFruits = mutableListOf("Pomme", "Banane")
    mutableFruits.add("Kiwi") // Ajouter un élément
    println("Liste mutable après ajout : $mutableFruits")

    // Supprimer un élément
    mutableFruits.remove("Banane")
    println("Liste mutable après suppression : $mutableFruits")
}
```

**Explication :**  
- `listOf` crée une liste immuable, tandis que `mutableListOf` crée une liste modifiable.
- Les opérations `add()` et `remove()` sont spécifiques aux collections modifiables.

---

## **Exemple 2 : Utilisation de `Map` et `MutableMap`**  

```kotlin
fun main() {
    // Map immuable
    val capitales = mapOf("France" to "Paris", "Espagne" to "Madrid", "Italie" to "Rome")
    println("Capitales : $capitales")

    // Accéder à une valeur
    println("Capitale de la France : ${capitales["France"]}")

    // Map mutable
    val mutableCapitales = mutableMapOf("France" to "Paris", "Espagne" to "Madrid")
    mutableCapitales["Italie"] = "Rome" // Ajouter une entrée
    println("Capitales après ajout : $mutableCapitales")

    // Modifier une valeur
    mutableCapitales["Espagne"] = "Barcelone"
    println("Capitales après modification : $mutableCapitales")
}
```

**Explication :**  
- `mapOf` crée une carte immuable. Les valeurs sont accédées via des clés.
- `mutableMapOf` permet d'ajouter, modifier ou supprimer des entrées.

---

# **2. Génériques en Kotlin**  

Les génériques permettent de créer des classes, interfaces ou fonctions paramétrées par type. Cela rend le code réutilisable et sûr.

---

## **Exemple 3 : Fonction générique**  

```kotlin
// Fonction générique qui retourne l'élément au milieu d'une liste
fun <T> trouverMilieu(liste: List<T>): T? {
    return if (liste.isNotEmpty()) liste[liste.size / 2] else null
}

fun main() {
    val nombres = listOf(1, 2, 3, 4, 5)
    println("Élément du milieu : ${trouverMilieu(nombres)}")

    val mots = listOf("Kotlin", "Java", "Swift")
    println("Élément du milieu : ${trouverMilieu(mots)}")
}
```

**Explication :**  
- `<T>` définit un paramètre de type générique.
- Cette fonction peut accepter une liste de n'importe quel type (`Int`, `String`, etc.).

---

# **3. Extensions en Kotlin**  

Les extensions permettent d'ajouter de nouvelles fonctionnalités aux classes existantes sans les modifier.

---

## **Exemple 4 : Fonction d'extension sur `List`**  

```kotlin
// Fonction d'extension pour inverser une liste
fun <T> List<T>.inverser(): List<T> {
    return this.reversed()
}

fun main() {
    val nombres = listOf(1, 2, 3, 4, 5)
    println("Liste inversée : ${nombres.inverser()}")

    val mots = listOf("Kotlin", "Java", "Swift")
    println("Liste inversée : ${mots.inverser()}")
}
```

**Explication :**  
- `List<T>.inverser()` ajoute une nouvelle méthode `inverser` à toutes les listes de type `T`.
- La fonction `reversed()` est une fonction standard de Kotlin pour inverser une liste.

---

# **4. Fonctions d'ordre supérieur et lambdas**  

Les fonctions d'ordre supérieur acceptent une ou plusieurs fonctions en paramètres, ou retournent une fonction.

---

## **Exemple 5 : Utilisation de `filter` et `map` avec des lambdas**  

```kotlin
fun main() {
    val nombres = listOf(1, 2, 3, 4, 5, 6)

    // Filtrer les nombres pairs
    val pairs = nombres.filter { it % 2 == 0 }
    println("Nombres pairs : $pairs")

    // Transformer les nombres en leurs carrés
    val carres = nombres.map { it * it }
    println("Nombres au carré : $carres")
}
```

**Explication :**  
- `filter` retourne une liste filtrée selon la condition lambda (`it % 2 == 0`).
- `map` applique une transformation à chaque élément de la liste.

---

# **Conclusion**  

Ce tutoriel vous a introduit aux concepts avancés de Kotlin, notamment les collections, les génériques, les extensions et les fonctions d'ordre supérieur. Ces compétences sont essentielles pour créer des applications Android performantes et modulaires.