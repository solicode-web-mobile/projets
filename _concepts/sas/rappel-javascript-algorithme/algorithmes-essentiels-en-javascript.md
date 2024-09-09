---
reference: algorithmes-essentiels-en-javascript
slug: algorithmes-essentiels-en-javascript
order: 2
module_reference: sas
unit_reference: sas-rappel-javascript-algorithme
part: rappel-javascript-algorithme
concept_categories: ''
title: Les Algorithmes Essentiels en JavaScript
topics: ''
description: ''
tutorials: ''
Todo: ''
directory: sas/rappel-javascript-algorithme
permalink: sas/algorithmes-essentiels-en-javascript
layout: concepts
---

# Les Algorithmes Essentiels en JavaScript

## Structures de contrôle

**Conditionnelles (if, else, else if):**

```javascript
let age = 25;

if (age < 18) {
  console.log("Vous êtes mineur.");
} else if (age >= 18 && age < 65) {
  console.log("Vous êtes adulte.");
} else {
  console.log("Vous êtes retraité.");
}
```

**Boucles (for, while):**

```javascript
// Boucle for : afficher les nombres de 1 à 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Boucle while : calculer la factorielle d'un nombre
let nombre = 5;
let factorielle = 1;
let i = 1;
while (i <= nombre) {
  factorielle *= i;
  i++;
}
console.log("La factorielle de", nombre, "est", factorielle);
```

## Structures de données

**Tableaux:**

```javascript
let fruits = ["pomme", "banane", "cerise"];
console.log(fruits[1]); // Affiche "banane"
```

**Objets:**

```javascript
let personne = {
  nom: "Dupont",
  age: 30,
  ville: "Paris"
};
console.log(personne.nom + " a " + personne.age + " ans.");
```

## Algorithmes de recherche

**Recherche linéaire:**

```javascript
function rechercheLineaire(tableau, valeur) {
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === valeur) {
      return i;
    }
  }
  return -1; // Élément non trouvé
}
```

**Recherche dichotomique:**

```javascript
function rechercheDichotomique(tableauTrie, valeur) {
  let gauche = 0;
  let droite = tableauTrie.length - 1;

  while (gauche <= droite) {
    let milieu = Math.floor((gauche + droite) / 2);
    if (tableauTrie[milieu] === valeur) {
      return milieu;
    } else if (tableauTrie[milieu] < valeur) {
      gauche = milieu + 1;
    } else {
      droite = milieu - 1;
    }
  }
  return -1; // Élément non trouvé
}
```

## Algorithmes de tri

**Tri à bulles:**

```javascript
function triABulles(tableau) {
  for (let i = 0; i < tableau.length; i++) {
    for (let j = 0; j < tableau.length - i - 1; j++) {
      if (tableau[j] > tableau[j + 1]) {
        // Échange des éléments
        let temp = tableau[j];
        tableau[j] = tableau[j + 1];
        tableau[j + 1] = temp;
      }
    }
  }
  return tableau;
}
```

**Tri par insertion:**

```javascript
function triParInsertion(tableau) {
  for (let i = 1; i < tableau.length; i++) {
    let valeurCourante = tableau[i];
    let j = i - 1;
    while (j >= 0 && tableau[j] > valeurCourante) {
      tableau[j + 1] = tableau[j];
      j--;
    }
    tableau[j + 1] = valeurCourante;
  }
  return tableau;
}
```

**Tri par sélection:**

```javascript
function triParSelection(tableau) {
  for (let i = 0; i < tableau.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < tableau.length; j++) {
      if (tableau[j] < tableau[minIndex]) {
        minIndex = j;
      }
    }
    // Échange du plus petit élément avec l'élément courant
    let temp = tableau[i];
    tableau[i] = tableau[minIndex];
    tableau[minIndex] = temp;
  }
  return tableau;
}
```

**Tri fusion et tri rapide:** Ces algorithmes sont un peu plus complexes et nécessitent une compréhension plus approfondie de la récursivité.

## Récursivité

```javascript
function factorielle(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorielle(n - 1);
  }
}
```

**Note:** Ces exemples couvrent les algorithmes de base les plus courants. Il existe de nombreux autres algorithmes et optimisations possibles. 

**Pour aller plus loin:**

* **Visualisation:** Utilisez des outils comme Visualgo ou CodePen pour visualiser le fonctionnement de ces algorithmes.
* **Pratique:** Résolvez des problèmes sur des plateformes comme LeetCode, HackerRank ou Codewars.
* **Approfondissement:** Étudiez les algorithmes de tri plus efficaces comme le tri fusion et le tri rapide.
