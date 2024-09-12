---
reference: sérialisation-php
slug: sérialisation-php
order: 12
module_reference: sas
unit_reference: sas-maîtrisez-poo-php
part: maîtrisez-poo-php
concept_categories: ''
title: 'Sérialisation PHP '
topics: ''
description: Sérialisation et Désérialisation d'Objets PHP en JSON avec Gestion de
  Fichier
tutorials: ''
Todo: ''
directory: sas/maîtrisez-poo-php
permalink: sas/sérialisation-php
layout: concepts
---

## Tutoriel Complet : Sérialisation et Désérialisation d'Objets PHP en JSON avec Gestion de Fichier

### Introduction
Dans ce tutoriel, nous allons explorer en profondeur la sérialisation d'objets PHP en format JSON et leur stockage dans un fichier. Nous verrons comment convertir un objet en une chaîne de caractères JSON, l'enregistrer dans un fichier, puis le récupérer et le reconstituer en objet.

### 1. Définition des Classes
Commençons par définir deux classes, `Livre` et `Auteur`, pour représenter nos données :

```php
class Livre {
    public $titre;
    public $isbn;
    public $auteurs; // Un tableau d'objets Auteur
}

class Auteur {
    public $nom;
    public $prenom;
}
```

### 2. Création d'un Objet
Créons un objet `Livre` pour illustrer notre exemple :

```php
$livre1 = new Livre();
$livre1->titre = "Le Petit Prince";
$livre1->isbn = "9782266000016";
$livre1->auteurs = [
    new Auteur("Saint-Exupéry", "Antoine de")
];
```

### 3. Sérialisation en JSON
Pour convertir cet objet en format JSON, nous utilisons la fonction `json_encode` :

```php
$json = json_encode($livre1, JSON_PRETTY_PRINT);
echo $json;
```
Cela produira une sortie JSON formatée :
```json
{
    "titre": "Le Petit Prince",
    "isbn": "9782266000016",
    "auteurs": [
        {
            "nom": "Saint-Exupéry",
            "prenom": "Antoine de"
        }
    ]
}
```

### 4. Enregistrement dans un Fichier
Pour enregistrer cette chaîne JSON dans un fichier, nous utilisons la fonction `file_put_contents` :

```php
file_put_contents('ma_bibliotheque.json', $json);
```

### 5. Lecture du Fichier et Désérialisation
Pour récupérer les données du fichier et reconstituer l'objet PHP, nous utilisons `file_get_contents` puis `json_decode` :

```php
$json = file_get_contents('ma_bibliotheque.json');
$livreLu = json_decode($json);
echo $livreLu->titre; // Affichera "Le Petit Prince"
```

### Code Complet

```php
<?php

class Livre {
    // ...
}

class Auteur {
    // ...
}

// Fonction pour enregistrer un objet Livre dans un fichier JSON
function enregistrerLivreDansFichier(Livre $livre, string $fichier) {
    $json = json_encode($livre, JSON_PRETTY_PRINT);
    file_put_contents($fichier, $json);
}

// Fonction pour lire un objet Livre depuis un fichier JSON
function lireLivreDepuisFichier(string $fichier) : Livre {
    $json = file_get_contents($fichier);
    return json_decode($json);
}

// ... (code pour créer un objet Livre et l'enregistrer/lire)
```

### Scénarios Avancés

* **Tableau d'objets:** Vous pouvez enregistrer un tableau d'objets dans un fichier JSON. Par exemple, un tableau de livres.
* **Customisation:** Les méthodes magiques `__sleep` et `__wakeup` permettent de personnaliser le processus de sérialisation et de désérialisation.
* **Sécurité:** Soyez prudent lors de la désérialisation de données provenant de sources externes pour éviter les injections de code.
* **Performance:** Pour de grandes quantités de données, envisagez des solutions plus performantes comme Redis ou Memcached.

### En Résumé

La sérialisation en JSON est un outil puissant pour stocker et transporter des données en PHP. En comprenant les bases de la sérialisation et de la désérialisation, vous pouvez créer des applications robustes et flexibles.

**Points clés à retenir:**

* `json_encode` convertit un objet PHP en JSON.
* `json_decode` convertit un JSON en objet PHP.
* `file_put_contents` écrit une chaîne dans un fichier.
* `file_get_contents` lit le contenu d'un fichier.

