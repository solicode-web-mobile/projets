---
reference: polymorphisme
slug: polymorphisme
order: 8
module_reference: sas
unit_reference: sas-maîtrisez-poo-php
part: maîtrisez-poo-php
concept_categories: ''
title: Polymorphisme
topics: ''
description: 'Le polymorphisme en PHP : Vers un code plus flexible'
tutorials: ''
Todo: ''
directory: sas/maîtrisez-poo-php
permalink: sas/polymorphisme
layout: concepts
---

## Le polymorphisme en PHP : Vers un code plus flexible

### Qu'est-ce que le polymorphisme ?

Le polymorphisme est un concept clé de la programmation orientée objet qui permet à des objets de différentes classes de répondre de manière différente à un même message. En d'autres termes, une même méthode peut avoir des comportements différents selon le type de l'objet sur lequel elle est appelée.

**Exemple concret :**

Imaginez une ferme avec différents animaux. Tous les animaux peuvent faire du bruit, mais chaque animal émet un son différent. Grâce au polymorphisme, on peut créer une méthode `faireDuBruit()` qui sera implémentée différemment dans chaque classe d'animal (chien, chat, poule, etc.).

### Les différents types de polymorphisme

* **Polymorphisme par surcharge** : Il consiste à définir plusieurs méthodes ayant le même nom mais des signatures différentes (nombre ou type d'arguments).
* **Polymorphisme par substitution** : C'est le cas le plus courant en POO. Il se produit lorsque une classe fille redéfinit une méthode héritée de sa classe mère.

### Le polymorphisme par substitution en pratique

```php
class Animal {
    public function faireDuBruit() {
        echo "L'animal fait du bruit.";
    }
}

class Chien extends Animal {
    public function faireDuBruit() {
        echo "Ouaf !";
    }
}

class Chat extends Animal {
    public function faireDuBruit() {
        echo "Miaou !";
    }
}

// Utilisation :
$animaux = [new Chien(), new Chat(), new Animal()];

foreach ($animaux as $animal) {
    $animal->faireDuBruit();
}
```

Dans cet exemple :

* Chaque animal a sa propre implémentation de la méthode `faireDuBruit()`.
* On peut itérer sur un tableau contenant des objets de différentes classes (chien, chat, animal) et appeler la méthode `faireDuBruit()` sur chacun d'eux sans avoir à connaître le type exact de l'objet.

### Les avantages du polymorphisme

* **Flexibilité** : Le code devient plus flexible et adaptable aux changements.
* **Réutilisabilité** : On peut écrire du code générique qui fonctionne avec différents types d'objets.
* **Lisibilité** : Le code devient plus lisible et plus facile à comprendre.

### Applications du polymorphisme

* **Les interfaces graphiques** : Les événements (clic, survol, etc.) peuvent être traités de manière différente selon le type de contrôle (bouton, liste déroulante, etc.).
* **Les collections** : On peut stocker des objets de différents types dans une même collection et les traiter de manière uniforme.
* **Les moteurs de jeux** : Les différents objets du jeu (personnages, ennemis, objets) peuvent hériter d'une classe de base et avoir des comportements spécifiques.

### En résumé

Le polymorphisme est un concept puissant qui permet de créer du code plus flexible, réutilisable et maintenable. Il est essentiel pour maîtriser la programmation orientée objet.

**Pour aller plus loin, vous pouvez explorer :**

* **Les interfaces** : Des contrats qui définissent un ensemble de méthodes que les classes doivent implémenter.
* **Les classes abstraites** : Des classes qui ne peuvent pas être instanciées mais qui servent de base pour d'autres classes.
* **Les design patterns** : Des solutions réutilisables à des problèmes de conception courants.


