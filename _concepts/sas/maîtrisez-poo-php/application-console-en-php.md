---
reference: application-console-en-php
slug: application-console-en-php
order: 10
module_reference: sas
unit_reference: sas-maîtrisez-poo-php
part: maîtrisez-poo-php
concept_categories: ''
title: 'Application console en PHP '
topics: ''
description: 'Création d''une application console en PHP '
tutorials: ''
Todo: ''
directory: sas/maîtrisez-poo-php
permalink: sas/application-console-en-php
layout: concepts
---

# Création d'une application console en PHP 

### Introduction

Dans ce tutoriel, nous allons créer une application console PHP simple : une calculatrice. 

### Structure de base

Une application console PHP est un script PHP qui s'exécute directement dans le terminal. Le point d'entrée est le script lui-même.

### Récupération des entrées utilisateur

Nous allons utiliser `fgets(STDIN)` pour lire les entrées de l'utilisateur depuis la ligne de commande.

### Réalisation de la calculatrice

```php
<?php
// Récupération des deux nombres
echo "Entrez le premier nombre : ";
$nombre1 = intval(fgets(STDIN));

echo "Entrez le deuxième nombre : ";
$nombre2 = intval(fgets(STDIN));

// Récupération de l'opération
echo "Choisissez l'opération (+, -, *, /) : ";
$operation = fgets(STDIN);

// Calcul en fonction de l'opération
switch ($operation) {
    case "+":
        $resultat = $nombre1 + $nombre2;
        break;
    case "-":
        $resultat = $nombre1 - $nombre2;
        break;
    case "*":
        $resultat = $nombre1 * $nombre2;
        break;
    case "/":
        if ($nombre2 == 0) {
            echo "Division par zéro impossible !\n";
        } else {
            $resultat = $nombre1 / $nombre2;
        }
        break;
    default:
        echo "Opération invalide.\n";
}

// Affichage du résultat
if (isset($resultat)) {
    echo "Le résultat est : " . $resultat . "\n";
}
```

### Explications

1. **Récupération des entrées :**
   * On demande à l'utilisateur de saisir les deux nombres et l'opération.
   * La fonction `intval()` convertit la chaîne de caractères en entier.

2. **Calcul :**
   * Un `switch` permet de sélectionner l'opération à effectuer en fonction du caractère saisi.
   * On vérifie une division par zéro pour éviter les erreurs.

3. **Affichage du résultat :**
   * Si un calcul a été effectué, on affiche le résultat.

### Utilisation

1. **Enregistrez le code** dans un fichier (par exemple `calculatrice.php`).
2. **Ouvrez votre terminal** et naviguez jusqu'au répertoire où vous avez enregistré le fichier.
3. **Exécutez le script :** `php calculatrice.php`
4. **Suivez les instructions** à l'écran pour effectuer vos calculs.

### Améliorations possibles

* **Boucle infinie :** Pour effectuer plusieurs calculs sans relancer le script.
* **Gestion des erreurs :** Vérifier si les entrées sont bien des nombres.
* **Fonctions personnalisées :** Créer des fonctions pour chaque opération.

### Conclusion

Cette calculatrice simple vous donne une base solide pour comprendre comment créer des applications en console avec PHP. Sans utiliser de framework, vous avez une meilleure compréhension des mécanismes sous-jacents. 
