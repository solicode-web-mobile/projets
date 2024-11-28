### 📘 **Tutoriel 4 : Principes avancés de Kotlin**  

---

#### **Objectif pédagogique :**  
Approfondir les concepts avancés de Kotlin, notamment les fonctions de haut niveau, la programmation fonctionnelle, les extensions, les corroutines et la gestion des collections.

#### **Tags :**  
Kotlin, Fonctions avancées, Corroutines, Extensions, Lambda, Collections.

---

## 🛠️ **Prérequis :**  
- Connaissance des bases de Kotlin (variables, fonctions, classes).  
- Familiarité avec la syntaxe de Kotlin et les structures de contrôle de base.

---

## 📚 **Partie 1 : Fonctions de haut niveau et lambdas**  

### **1.1 Fonctions de haut niveau**  
En Kotlin, les fonctions sont des citoyens de première classe, ce qui signifie qu'elles peuvent être :  
- Assignées à des variables  
- Passées en paramètres  
- Retourner une fonction depuis une autre fonction  

### **Exemple de fonction de haut niveau :**  
```kotlin
fun calculate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
    return operation(a, b)
}

fun main() {
    val sum = calculate(5, 3) { x, y -> x + y }  // Passe une lambda comme opération
    println("Résultat : $sum")  // Résultat : 8
}
```

### **1.2 Lambdas et expressions anonymes**  
Les lambdas sont des fonctions anonymes concises.  
**Syntaxe :**  
```kotlin
val lambda = { x: Int, y: Int -> x + y }
```

---

## 🔗 **Partie 2 : Fonctions d'extension**  

### **Définition :**  
Les extensions permettent d'ajouter de nouvelles fonctionnalités à une classe sans la modifier.  

### **Exemple d'extension :**  
```kotlin
fun String.reverseWords(): String {
    return this.split(" ").reversed().joinToString(" ")
}

fun main() {
    val phrase = "Bonjour à tous"
    println(phrase.reverseWords())  // "tous à Bonjour"
}
```

### **Explication :**  
- **`String.reverseWords`** ajoute une méthode à la classe `String` existante.  
- Les extensions sont utiles pour simplifier les manipulations courantes.

---

## ⚙️ **Partie 3 : Collections avancées**  

### **3.1 Manipulations des collections**  
Kotlin propose une API riche pour travailler avec les collections (`list`, `map`, `set`).

### **Fonctions courantes :**  
- **`filter`** : Filtrer les éléments selon une condition.  
- **`map`** : Transformer chaque élément.  
- **`reduce`** / **`fold`** : Réduire une collection en une valeur unique.

### **Exemple pratique :**  
```kotlin
val numbers = listOf(1, 2, 3, 4, 5, 6)
val evenNumbers = numbers.filter { it % 2 == 0 }  // [2, 4, 6]
val squaredNumbers = numbers.map { it * it }  // [1, 4, 9, 16, 25, 36]
```

---

## 🚀 **Partie 4 : Programmation asynchrone avec les corroutines**  

### **Pourquoi utiliser les corroutines ?**  
Les corroutines permettent d’exécuter des opérations asynchrones de manière non bloquante tout en conservant une syntaxe simple et lisible.

### **Ajouter les dépendances :**  
Dans `build.gradle`:  
```gradle
implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-core:1.5.2'
```

### **Exemple de coroutine simple :**  
```kotlin
import kotlinx.coroutines.*

fun main() {
    GlobalScope.launch {
        delay(1000L)  // Simulation d'une opération longue
        println("Hello, Coroutine!")
    }
    println("Processus principal en cours...")
    Thread.sleep(2000L)  // Attendre la fin de la coroutine
}
```

### **Explication :**  
- **`GlobalScope.launch`** démarre une nouvelle coroutine.  
- **`delay`** est une suspension non bloquante.

---

## 🔍 **Partie 5 : Programmation fonctionnelle**  

### **Principes clés :**  
- **Immutabilité** : Les données ne doivent pas changer après leur création.  
- **Fonctions pures** : Une fonction retourne toujours le même résultat pour les mêmes arguments.  
- **Expressions fonctionnelles** : Utilisation de `map`, `filter`, `reduce`.

### **Exemple de fonction pure :**  
```kotlin
fun add(a: Int, b: Int): Int = a + b  // Fonction pure, aucun effet secondaire
```

---

## 🎓 **Conclusion :**  
Vous avez exploré les concepts avancés de Kotlin, notamment les fonctions de haut niveau, les extensions, les corroutines, et les manipulations avancées des collections. Ces connaissances vous aideront à écrire un code plus concis, lisible et efficace pour vos projets Kotlin.