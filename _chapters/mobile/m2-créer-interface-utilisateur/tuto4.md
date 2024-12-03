---
reference: m2-créer-interface-utilisateur-tuto4
slug: tuto4
module_reference: mobile
part_reference: m2-créer-interface-utilisateur
concept_reference: ''
title: Tutoriel 4 - v1.1
description: ''
order: 93
directory: m2-créer-interface-utilisateur
permalink: m2-créer-interface-utilisateur/tuto4
layout: chapters
---

# Tutoriel 4 : Principes avancés de Kotlin


## Objectif pédagogique
Ce tutoriel vise à approfondir les concepts avancés de Kotlin pour permettre aux apprenants d'écrire un code plus robuste, réutilisable et élégant. Les notions abordées incluent les instructions conditionnelles, la gestion de la nullabilité, les classes et objets, ainsi que les expressions lambdas.

---

## Concepts abordés

### 1. Instructions conditionnelles
Kotlin permet d'écrire des conditions de manière concise et intuitive grâce à l'utilisation d'expressions `if` et de l'opérateur `when`.

#### Exemple :
```kotlin
val age = 18
val status = if (age >= 18) "Adulte" else "Mineur"
println(status)

val grade = 85
val result = when {
    grade >= 90 -> "Excellent"
    grade >= 75 -> "Bien"
    grade >= 50 -> "Passable"
    else -> "Insuffisant"
}
println(result)
```

### 2. Nullabilité
Kotlin gère la nullabilité en forçant les développeurs à traiter explicitement les valeurs nulles. Cela réduit les erreurs potentielles liées à des références nulles.

#### Exemple :
```kotlin
var name: String? = null
println(name?.length) // Utilisation de l'opérateur safe-call

name = "Solicode"
println(name?.length ?: 0) // Opérateur Elvis pour fournir une valeur par défaut
```

---

## 3. Classes et Objets
### a) Introduction
En Kotlin, une classe est une structure qui regroupe des données (propriétés) et des comportements (méthodes). Les classes facilitent la réutilisation du code et l'organisation des programmes.

### b) Constructeurs
Kotlin prend en charge les constructeurs primaires et secondaires pour faciliter l'initialisation des objets.

#### Exemple :
```kotlin
class Person(val name: String, val age: Int) {
    init {
        println("Création d'une personne : $name, $age ans")
    }

    // Constructeur secondaire
    constructor(name: String) : this(name, 0) {
        println("Création d'une personne avec un âge inconnu.")
    }
}

val person1 = Person("Alice", 25)
val person2 = Person("Bob")
```

### c) Propriétés et accesseurs
Les propriétés d'une classe peuvent inclure des accesseurs personnalisés pour contrôler la logique de lecture et d'écriture.

#### Exemple :
```kotlin
class Circle(val radius: Double) {
    val area: Double
        get() = Math.PI * radius * radius
}

val circle = Circle(5.0)
println("Aire du cercle : ${circle.area}")
```

### d) Méthodes
Les classes peuvent contenir des fonctions, appelées méthodes, pour définir des comportements spécifiques.

#### Exemple :
```kotlin
class Calculator {
    fun add(a: Int, b: Int): Int = a + b
    fun subtract(a: Int, b: Int): Int = a - b
}

val calculator = Calculator()
println("Addition : ${calculator.add(5, 3)}")
println("Soustraction : ${calculator.subtract(5, 3)}")
```

---

## 4. Expressions Lambdas
Les expressions lambdas sont des fonctions anonymes qui peuvent être stockées dans des variables, passées en paramètre ou utilisées directement.

### a) Définition et usage basique
Une lambda est définie entre accolades `{}`. Les paramètres sont placés avant `->`, et le corps suit.

#### Exemple :
```kotlin
val multiply: (Int, Int) -> Int = { a, b -> a * b }
println(multiply(4, 5))
```

### b) Utilisation dans des fonctions d'ordre supérieur
Les lambdas sont particulièrement utiles avec des fonctions comme `map`, `filter` et `reduce`.

#### Exemple :
```kotlin
val numbers = listOf(1, 2, 3, 4, 5)
val doubled = numbers.map { it * 2 }
println(doubled)

val evenNumbers = numbers.filter { it % 2 == 0 }
println(evenNumbers)
```

---

## Exercice pratique

Créez une classe `Task` avec les propriétés suivantes :
- `id` (entier),
- `title` (chaîne de caractères),
- `isCompleted` (booléen, valeur par défaut : `false`).

Ajoutez les méthodes suivantes :
1. `markAsCompleted()` : Marque une tâche comme complétée.
2. `toString()` : Retourne une description textuelle de la tâche.

#### Solution attendue :
```kotlin
class Task(val id: Int, val title: String, var isCompleted: Boolean = false) {
    fun markAsCompleted() {
        isCompleted = true
    }

    override fun toString(): String {
        return "Task(id=$id, title='$title', isCompleted=$isCompleted)"
    }
}

val task = Task(1, "Apprendre Kotlin")
println(task)
task.markAsCompleted()
println(task)
```

---

En complétant ce tutoriel, vous aurez exploré des notions essentielles pour structurer vos applications Android en Kotlin de manière efficace et lisible.

