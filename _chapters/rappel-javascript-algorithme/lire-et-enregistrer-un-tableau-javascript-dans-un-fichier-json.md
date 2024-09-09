---
reference: rappel-javascript-algorithme-lire-et-enregistrer-un-tableau-javascript-dans-un-fichier-json
slug: lire-et-enregistrer-un-tableau-javascript-dans-un-fichier-json
module_reference: sas-rappel-javascript-algorithme
part_reference: rappel-javascript-algorithme
concept_reference: lire-et-enregistrer-un-tableau-javascript-dans-un-fichier-json
title: Lire et enregistrer un tableau JavaScript dans un fichier JSON
description: ''
order: 5
global_order: '30'
directory: rappel-javascript-algorithme
permalink: rappel-javascript-algorithme/lire-et-enregistrer-un-tableau-javascript-dans-un-fichier-json
layout: chapter_with_concept
---


## Lire et enregistrer un tableau JavaScript dans un fichier JSON

### Introduction
JSON (JavaScript Object Notation) est un format de texte léger utilisé pour le stockage et l'échange de données. Il est particulièrement utile pour stocker des données structurées, comme des tableaux JavaScript. Dans ce tutoriel, nous allons voir comment enregistrer un tableau JavaScript dans un fichier JSON et comment le lire par la suite.

### 1. Créer un tableau JavaScript
Commençons par créer un tableau simple :

```javascript
const monTableau = [
    "pomme",
    "banane",
    "orange",
    42
];
```

### 2. Enregistrer le tableau dans un fichier JSON
Pour enregistrer ce tableau dans un fichier JSON, nous allons utiliser le module `fs` (File System) de Node.js et la méthode `JSON.stringify()` pour convertir le tableau en une chaîne de caractères JSON.

```javascript
const fs = require('fs');
const monTableau = [
    "pomme",
    "banane",
    "orange",
    42
];

const data = JSON.stringify(monTableau);

fs.writeFile('monTableau.json', data, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Le tableau a été enregistré dans monTableau.json');
    }
});
```

**Explication:**

* `fs.writeFile`: Cette méthode permet d'écrire des données dans un fichier.
* `'monTableau.json'`: C'est le nom du fichier que nous voulons créer.
* `data`: C'est la chaîne de caractères JSON que nous voulons écrire dans le fichier.
* `(err) => { ... }`: C'est une fonction de rappel qui sera exécutée lorsque l'opération d'écriture sera terminée ou en cas d'erreur.

### 3. Lire le fichier JSON et récupérer le tableau
Pour lire le fichier JSON et récupérer le tableau, nous utiliserons la méthode `fs.readFile()` et `JSON.parse()` pour convertir la chaîne de caractères JSON en un objet JavaScript.

```javascript
const fs = require('fs');

fs.readFile('monTableau.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const monTableau = JSON.parse(data);
        console.log(monTableau);
    }
});
```

**Explication:**

* `fs.readFile`: Cette méthode permet de lire un fichier.
* `'utf8'`: C'est l'encodage utilisé pour lire le fichier.
* `data`: C'est la chaîne de caractères lue à partir du fichier.
* `JSON.parse`: Cette méthode permet de convertir une chaîne de caractères JSON en un objet JavaScript.

### Exemple complet
```javascript
const fs = require('fs');

// Écriture dans le fichier
const monTableau = [
    "pomme",
    "banane",
    "orange",
    42
];

const data = JSON.stringify(monTableau);

fs.writeFile('monTableau.json', data, (err) => {
    if (err) {
        console.error(err);
    }
});

// Lecture du fichier
fs.readFile('monTableau.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const tableauLu = JSON.parse(data);
        console.log(tableauLu);
    }
});
```

**Important:**

* **Asynchronisme:** Les opérations d'écriture et de lecture de fichiers sont asynchrones en Node.js. Cela signifie que le code suivant ne sera pas exécuté immédiatement après l'appel à `fs.writeFile` ou `fs.readFile`.
* **Gestion des erreurs:** Il est important de gérer les erreurs potentielles qui peuvent se produire lors des opérations de fichier.
* **Format JSON:** Assurez-vous que vos données sont au format JSON valide.

### Conclusion
En suivant ces étapes, vous pouvez facilement enregistrer et récupérer des tableaux JavaScript dans des fichiers JSON. Cette technique est très utile pour stocker des données de manière persistante ou pour échanger des données entre différentes applications.

