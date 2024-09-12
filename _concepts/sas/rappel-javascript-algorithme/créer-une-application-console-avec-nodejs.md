---
reference: créer-une-application-console-avec-nodejs
slug: créer-une-application-console-avec-nodejs
order: 2
module_reference: sas
unit_reference: sas-rappel-javascript-algorithme
part: rappel-javascript-algorithme
concept_categories: ''
title: Créer une application console avec Node.js
topics: ''
description: Créer une application console avec Node.js
tutorials: ''
Todo: ''
directory: sas/rappel-javascript-algorithme
permalink: sas/créer-une-application-console-avec-nodejs
layout: concepts
---


## Créer une application console avec Node.js : Un tutoriel complet

### Introduction

Node.js est un environnement d'exécution JavaScript qui permet de créer des applications serveur côté. Mais il ne se limite pas à cela ! Il est tout à fait possible de développer des applications console, c'est-à-dire des programmes qui interagissent directement avec l'utilisateur via la ligne de commande. 

Dans ce tutoriel, nous allons voir étape par étape comment créer une application console simple avec Node.js. 

### Prérequis

* **Node.js et npm installés:** Assurez-vous d'avoir installé Node.js sur votre machine. Vous pouvez le télécharger depuis le site officiel : [https://nodejs.org/](https://nodejs.org/)
* **Un éditeur de code:** Visual Studio Code, Sublime Text, Atom ou tout autre éditeur de votre choix.

### Création d'un nouveau projet
1. **Ouvrir un terminal:** Ouvrez votre terminal ou invite de commandes.
2. **Créer un nouveau répertoire:**
   ```bash
   mkdir mon-app-console
   cd mon-app-console
   ```
3. **Initialiser un projet npm:**
   ```bash
   npm init -y
   ```
   Cette commande va créer un fichier `package.json` qui va gérer les dépendances de votre projet.

### Écrire le code de l'application

1. **Créer un fichier JavaScript:**

   ```bash
    index.js
   ```
2. **Écrire le code de base:**
   ```javascript
   console.log("Hello, monde !");
   ```
   Cette ligne va simplement afficher le message "Hello, monde !" dans la console.

### Exécuter l'application
```bash
node index.js
```

### Créer une interaction avec l'utilisateur
Pour rendre votre application plus intéressante, vous pouvez demander à l'utilisateur de saisir des informations. Node.js fournit le module `readline` pour gérer les entrées utilisateur.

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Quel est votre nom ? ', (name) => {
  console.log(`Bonjour, ${name} !`);
  rl.close();
});
```

### Créer des fonctionnalités plus complexes
Vous pouvez utiliser des structures de contrôle (if, else, for, while), des fonctions, des modules, etc. pour créer des applications plus élaborées.

**Exemple : Une simple calculatrice**
```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Entrez le premier nombre : ', (num1) => {
  rl.question('Entrez le deuxième nombre : ', (num2) => {
    const result = Number(num1) + Number(num2);
    console.log(`Le résultat est : ${result}`);
    rl.close();
  });
});
```


### Solution 


````js

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const gestion_apprenants = async () => {

  var choix = ""

  while (choix != "q"){
    choix = await askQuestion("Menu :  \n \t a : Ajouter \n \t s: Supprimer \n \t q: Quitter \n");

    switch (choix) {
      case 'a':
        first_name = await askQuestion("Donner le nom: ");
        last_name = await askQuestion("Donnez le prénom: ");
        console.log("Ajouter");
        break;
      case 's':
        id = await askQuestion("Donner l'identifiant: ");
        console.log("Supprimer");
        break;
      case 'q':
        break;
      default:
        break;
    }
  }

  rl.close();
};

gestion_apprenants();

````

### Conclusion
Ce tutoriel vous a donné une introduction à la création d'applications console avec Node.js. Vous pouvez aller beaucoup plus loin en utilisant des modules supplémentaires, en créant des interfaces utilisateur plus complexes, ou en intégrant votre application avec d'autres systèmes.

**Quelques idées d'applications console à développer:**
* Un jeu de devinette
* Un convertisseur d'unités
* Un gestionnaire de tâches
* Un générateur de mot de passe

**Pour aller plus loin:**
* **La documentation officielle de Node.js:** [https://nodejs.org/api/](https://nodejs.org/api/)
* **Le module `readline`:** [https://nodejs.org/api/readline.html](https://nodejs.org/api/readline.html)
* **Les modules npm:** [https://www.npmjs.com/](https://www.npmjs.com/)

N'hésitez pas à poser des questions si vous rencontrez des difficultés. 

**Voulez-vous créer une application console plus spécifique ? Je peux vous aider à la concevoir.**

**Par exemple, aimeriez-vous créer un jeu de pendu, un générateur de nombres aléatoires, ou quelque chose de plus complexe ?**
