---
reference: m2-créer-interface-utilisateur-tuto4
slug: tuto4
module_reference: mobile
part_reference: m2-créer-interface-utilisateur
concept_reference: ''
title: tuto4
description: ''
order: 93
directory: m2-créer-interface-utilisateur
permalink: m2-créer-interface-utilisateur/tuto4
layout: chapters
---

### **Tutoriel 4 : Principes avancés de Kotlin**  

**Objectif pédagogique :**  
Approfondir les connaissances des apprenants sur des concepts avancés de Kotlin afin qu’ils puissent écrire un code robuste, lisible et maintenable.

**Prérequis :**  
Les apprenants doivent avoir une compréhension des bases de Kotlin, notamment les variables, types, fonctions et structures de contrôle.

---

### **Concepts abordés :**  
1. Instructions conditionnelles avancées (when et expressions ternaires).  
2. Nullabilité et gestion des nulls (safe calls, Elvis operator).  
3. Programmation orientée objet en Kotlin (classes, objets, héritage).  
4. Lambdas et fonctions d’ordre supérieur.  

---

### **Plan du tutoriel :**  

#### **1. Instructions conditionnelles avancées : `when`**  

Dans Kotlin, l'instruction `when` remplace les multiples blocs `if-else`. Elle est plus lisible et puissante.  

##### **Exemple de code :**  
```kotlin
fun determineCategory(age: Int): String {
    return when {
        age < 13 -> "Enfant"
        age in 13..19 -> "Adolescent"
        age in 20..64 -> "Adulte"
        else -> "Sénior"
    }
}
```

**Explication :**  
- L’instruction `when` permet d’évaluer plusieurs conditions sans répéter `if`.  
- Le bloc retourne directement une valeur.

#### **2. Nullabilité et gestion des nulls**  

En Kotlin, les variables peuvent être nullables (`String?`) ou non-nullables (`String`). Kotlin fournit des outils pour gérer les valeurs nulles sans risquer une `NullPointerException`.  

##### **Exemple de code :**  
```kotlin
fun printName(name: String?) {
    println(name?.uppercase() ?: "Nom inconnu")
}
```

**Explication :**  
- `name?.uppercase()` : Appelle la méthode uniquement si `name` n’est pas null.  
- `?:` (Elvis operator) : Fournit une valeur par défaut si `name` est null.

---

#### **3. Programmation orientée objet**  

##### **Classes et objets simples :**  
```kotlin
class Person(val name: String, var age: Int) {
    fun introduce() {
        println("Je m'appelle $name et j'ai $age ans.")
    }
}
```

**Explication :**  
- `val` et `var` dans le constructeur déclarent des propriétés.  
- La méthode `introduce` utilise les propriétés de l’objet.  

##### **Héritage :**  
```kotlin
open class Animal(val species: String) {
    open fun sound() {
        println("Cet animal fait un bruit.")
    }
}

class Dog : Animal("Chien") {
    override fun sound() {
        println("Woof woof!")
    }
}
```

**Explication :**  
- `open` permet une classe ou une méthode d’être héritée.  
- `override` redéfinit une méthode de la classe parente.

---

#### **4. Lambdas et fonctions d’ordre supérieur**  

Une fonction d'ordre supérieur est une fonction qui prend une autre fonction comme paramètre ou retourne une fonction. Les lambdas sont des fonctions anonymes, idéales dans ce cas.  

##### **Exemple de code :**  
```kotlin
fun calculate(x: Int, y: Int, operation: (Int, Int) -> Int): Int {
    return operation(x, y)
}

fun main() {
    val sum = calculate(5, 10) { a, b -> a + b }
    println("Somme : $sum")
}
```

**Explication :**  
- `(Int, Int) -> Int` est le type de la fonction passée en paramètre.  
- `{ a, b -> a + b }` est une lambda qui retourne la somme de `a` et `b`.  

---

### **Exercice pratique :**  

1. **Conditionnelle avec `when`** :  
   Écrire une fonction qui prend une note d'examen (0-100) et retourne une mention :  
   - "Échec" pour une note inférieure à 50.  
   - "Passable" pour une note entre 50 et 65.  
   - "Bien" pour une note entre 66 et 85.  
   - "Très bien" pour une note supérieure à 85.  

2. **Gestion des nulls :**  
   Implémentez une fonction qui prend une chaîne de caractères nullable et retourne la longueur de la chaîne ou zéro si elle est null.  

3. **Programmation orientée objet :**  
   - Créez une classe `Voiture` avec les propriétés `marque` et `année`.  
   - Ajoutez une méthode `afficherInfo()` qui imprime les informations de la voiture.  
   - Créez une sous-classe `VoitureSport` avec une propriété supplémentaire `vitesseMax`.  

4. **Lambdas et fonctions d’ordre supérieur :**  
   Écrire une fonction qui applique une transformation à une liste d'entiers (par exemple, doubler les valeurs).  

---

### **Livrable attendu :**  
Un fichier Kotlin contenant :  
- Le code des exemples.  
- Les solutions aux exercices pratiques avec des commentaires détaillés.  