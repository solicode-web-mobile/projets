# 🚀 **Tutoriel 7 : Concepts avancés de Kotlin (Collections et Génériques)**  

---

### **📚 Concepts abordés :**  
- **Collections** : List, Set, Map, Mutable vs Immutable.  
- **Génériques** : Utilisation des types génériques pour créer des classes, fonctions réutilisables et sûres.  
- **Extensions** : Ajouter des fonctionnalités aux classes sans les modifier.  
- **Fonctions d'ordre supérieur** : Utiliser des fonctions comme paramètres ou retours.  

---

### **🏷️ Tags :**  
- Collections, Génériques, Extensions, Kotlin avancé.  

---

### **📝 Résumé :**  
Ce tutoriel approfondit l’utilisation des collections et des génériques en Kotlin, essentiels pour gérer efficacement les données. Vous découvrirez également les extensions et les fonctions d’ordre supérieur pour écrire un code plus concis, modulaire et lisible.  

---

## **🔍 Objectifs pédagogiques :**  
- Maîtriser les collections Kotlin (List, Set, Map).  
- Comprendre et utiliser les types génériques.  
- Créer des extensions pour enrichir des classes existantes.  
- Manipuler des fonctions d’ordre supérieur.  

---

## **📦 Collections en Kotlin :**  

### **1. Les types de collections principales :**  
- **List** : Ordonnée, peut contenir des doublons.  
  ```kotlin
  val list = listOf("Pomme", "Banane", "Cerise")  // Immutable
  val mutableList = mutableListOf(1, 2, 3)  // Mutable
  ```

- **Set** : Unique, sans doublons.  
  ```kotlin
  val set = setOf(1, 2, 3, 3)  // Résultat : 1, 2, 3
  ```

- **Map** : Paires clé-valeur.  
  ```kotlin
  val map = mapOf("Clé1" to "Valeur1", "Clé2" to "Valeur2")
  ```

---

### **2. Manipulation des collections :**  
**Filtrer et transformer les données :**  
```kotlin
val nombres = listOf(1, 2, 3, 4, 5)
val pairs = nombres.filter { it % 2 == 0 }  // [2, 4]
val carrés = nombres.map { it * it }        // [1, 4, 9, 16, 25]
```

**Parcourir une collection :**  
```kotlin
nombres.forEach { println(it) }
```

---

## **🧩 Les génériques :**  

**Créer une fonction générique :**  
```kotlin
fun <T> afficherElement(element: T) {
    println(element)
}

afficherElement(42)         // Fonctionne avec un Int
afficherElement("Bonjour")  // Fonctionne avec un String
```

**Classe générique :**  
```kotlin
class Boîte<T>(val contenu: T) {
    fun afficherContenu() {
        println("Contenu : $contenu")
    }
}

val boîteInt = Boîte(123)
val boîteString = Boîte("Hello")
boîteInt.afficherContenu()     // Contenu : 123
boîteString.afficherContenu()  // Contenu : Hello
```

---

## **🚀 Extensions :**  
Les extensions ajoutent des fonctionnalités aux classes existantes sans modifier leur code source.  

**Exemple d’extension pour `String` :**  
```kotlin
fun String.inverser(): String {
    return this.reversed()
}

println("Kotlin".inverser())  // Résultat : "niltok"
```

---

## **🔧 Fonctions d’ordre supérieur :**  
Une fonction qui prend une autre fonction en paramètre ou retourne une fonction.  

**Exemple :**  
```kotlin
fun appliquerOperation(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

// Utilisation
val somme = appliquerOperation(5, 3) { x, y -> x + y }   // 8
val produit = appliquerOperation(5, 3) { x, y -> x * y } // 15
```

---

## **🛠️ Exercices pratiques :**  

1. **Manipulation des collections :**  
   - Créez une liste de nombres et filtrez ceux qui sont supérieurs à 10.  
   - Transformez une liste de chaînes en majuscules.  

2. **Fonctions génériques :**  
   - Créez une fonction générique qui retourne le dernier élément d’une liste.  

3. **Extension :**  
   - Créez une extension pour les listes qui renvoie le deuxième élément.  

---

## **🎯 Lien avec le projet final (To-Do List) :**  
- **Collections** : Vous utiliserez des listes pour stocker et manipuler les tâches.  
- **Génériques** : Assurez-vous que les données manipulées sont de types sûrs.  
- **Extensions** : Ajoutez des fonctionnalités spécifiques aux listes de tâches (ex. : tri, filtrage).  

---

### 🚀 **Prochain tutoriel : Gestion des événements et des listes dynamiques !**  