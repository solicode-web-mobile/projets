---
reference: m1-première-application-android-tuto1
slug: tuto1
module_reference: mobile
part_reference: m1-première-application-android
concept_reference: ''
title: tuto1
description: ''
order: 83
directory: m1-première-application-android
permalink: m1-première-application-android/tuto1
layout: chapters
---


# Tutoriel 1 : Introduction à Kotlin

## Objectif pédagogique
Familiariser les apprenants avec les bases du langage Kotlin en explorant sa syntaxe et ses concepts fondamentaux, préparant ainsi le terrain pour le développement mobile sous Android.

---

## Prérequis
- Connaissances de base en programmation (variables, conditions, boucles).
- Installation de Kotlin sur votre machine. (Vous pouvez utiliser un IDE comme IntelliJ IDEA ou un compilateur en ligne comme [Kotlin Playground](https://play.kotlinlang.org/)).

---

## Concepts abordés
- Syntaxe de base de Kotlin.
- Variables et types de données.
- Structures conditionnelles.
- Boucles et fonctions simples.

---

## Partie 1 : Premiers pas avec Kotlin

1. **Créez votre premier programme Kotlin :**

   ```kotlin
   fun main() {
       println("Bonjour, Kotlin !")
   }
   ```
   **Explications :**
   - `fun main()`: Point d'entrée de tout programme Kotlin.
   - `println`: Fonction pour afficher du texte dans la console.

2. **Exécutez le programme :**
   - Utilisez l'IDE ou Kotlin Playground pour exécuter le code.

   **Objectif :** Comprendre le flux de base d'un programme Kotlin.

---

## Partie 2 : Variables et types de données

1. **Déclarer des variables :**

   ```kotlin
   fun main() {
       val nom = "Solicode" // Variable immuable
       var age = 5          // Variable mutable

       println("Nom : $nom")
       println("Age : $age")

       age = 6 // Modification possible avec var
       println("Nouvel Age : $age")
   }
   ```

   **Explications :**
   - `val` : Déclare une variable constante.
   - `var` : Déclare une variable modifiable.
   - `$nom` : Interpolation pour inclure des variables dans des chaînes de caractères.

2. **Types de données courants :**

   ```kotlin
   val entier: Int = 42
   val decimal: Double = 3.14
   val caractere: Char = 'A'
   val chaine: String = "Bonjour"
   val boolean: Boolean = true
   ```

   **Objectif :** Identifier et utiliser les types de données de base en Kotlin.

---

## Partie 3 : Conditions et contrôle de flux

1. **Structure conditionnelle :**

   ```kotlin
   fun main() {
       val age = 18

       if (age >= 18) {
           println("Vous êtes majeur.")
       } else {
           println("Vous êtes mineur.")
       }
   }
   ```

   **Explications :**
   - `if`/`else` : Structure conditionnelle pour évaluer des expressions.

2. **Expression when :**

   ```kotlin
   fun main() {
       val jour = 3

       when (jour) {
           1 -> println("Lundi")
           2 -> println("Mardi")
           3 -> println("Mercredi")
           else -> println("Autre jour")
       }
   }
   ```

   **Objectif :** Simplifier la logique conditionnelle avec `when`.

---

## Partie 4 : Boucles et fonctions

1. **Boucles :**

   ```kotlin
   fun main() {
       for (i in 1..5) {
           println("Itération : $i")
       }

       var compteur = 0
       while (compteur < 3) {
           println("Compteur : $compteur")
           compteur++
       }
   }
   ```

   **Explications :**
   - `for (i in 1..5)` : Boucle qui parcourt une plage de valeurs.
   - `while` : Boucle conditionnelle.

2. **Fonctions simples :**

   ```kotlin
   fun addition(a: Int, b: Int): Int {
       return a + b
   }

   fun main() {
       val resultat = addition(4, 5)
       println("Résultat : $resultat")
   }
   ```

   **Explications :**
   - `fun addition(a: Int, b: Int): Int` : Définition d'une fonction avec des paramètres et un type de retour.
   - `return` : Renvoie une valeur.

---

## Exercice pratique
**Objectif :** Mettre en pratique les notions abordées.

1. **Développez un programme Kotlin qui :**
   - Déclare une variable `nom` (chaîne de caractères) et une variable `age` (entier).
   - Affiche un message personnalisé basé sur l'âge (majeur ou mineur).
   - Utilise une fonction pour calculer l'année de naissance à partir de l'âge et de l'année actuelle.

2. **Exemple de sortie attendue :**

   ```
   Bonjour, [Votre nom] !
   Vous êtes majeur.
   Vous êtes né(e) en 2005.
   ```

---

## Conclusion
Félicitations, vous avez appris les bases de Kotlin ! Vous êtes maintenant prêt à explorer des concepts plus avancés et à commencer votre parcours en développement mobile Android.