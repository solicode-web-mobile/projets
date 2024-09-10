---
reference: héritage
slug: héritage
order: 7
module_reference: sas
unit_reference: sas-maîtrisez-poo-php
part: maîtrisez-poo-php
concept_categories: ''
title: Héritage
topics: ''
description: 'L''héritage en PHP : Créer des classes filles'
tutorials: ''
Todo: ''
directory: sas/maîtrisez-poo-php
permalink: sas/héritage
layout: concepts
---



## L'héritage en PHP : Créer des classes filles

### Qu'est-ce que l'héritage ?

L'héritage est un mécanisme fondamental de la programmation orientée objet qui permet de créer de nouvelles classes (**classes filles**) à partir de classes existantes (**classes mères**). Ces classes filles héritent automatiquement des propriétés et des méthodes de leur classe mère, ce qui favorise la réutilisation de code et la création de hiérarchies de classes.

### Comment fonctionne l'héritage en PHP ?

Pour créer une classe fille qui hérite d'une classe mère, on utilise le mot-clé `extends`.

```php
class Animal {
    public $nom;
    public $age;

    public function manger() {
        echo "Je mange.";
    }
}

class Chat extends Animal {
    public function miauler() {
        echo "Miaou !";
    }
}
```

Dans cet exemple :

* **Animal** est la classe mère. Elle définit les propriétés `nom` et `age` ainsi que la méthode `manger()`.
* **Chat** est la classe fille. Elle hérite de toutes les propriétés et méthodes de la classe `Animal` et ajoute sa propre méthode `miauler()`.

### Les avantages de l'héritage

* **Réutilisation de code** : Évitez de réécrire du code en réutilisant les propriétés et les méthodes de la classe mère.
* **Hiérarchies de classes** : Créez des structures de classes organisées et hiérarchiques.
* **Polymorphisme** : Permet de traiter des objets de différentes classes de manière uniforme grâce à un mécanisme appelé le polymorphisme.

### Redéfinir des méthodes (Overriding)

Une classe fille peut redéfinir une méthode héritée de sa classe mère.

```php
class Chien extends Animal {
    public function faireDuBruit() {
        echo "Ouaf !";
    }
}
```

Ici, la méthode `faireDuBruit()` de la classe `Chien` redéfinie la méthode `manger()` de la classe `Animal`.

### Appeler le constructeur de la classe mère

Pour appeler le constructeur de la classe mère à partir du constructeur de la classe fille, on utilise le mot-clé `parent`.

```php
class Chat extends Animal {
    public function __construct($nom, $age, $race) {
        parent::__construct($nom, $age);
        $this->race = $race;
    }
}
```

### Accéder aux membres privés de la classe mère

Les membres privés d'une classe mère ne sont pas accessibles directement depuis une classe fille. Pour contourner cette limitation, on peut utiliser des méthodes publiques dans la classe mère pour accéder et modifier les propriétés privées.

### Le mot-clé `final`

Le mot-clé `final` peut être utilisé pour empêcher une classe d'être étendue ou pour empêcher une méthode d'être redéfinie.

### En résumé

L'héritage est un concept puissant en POO qui permet de modéliser des relations hiérarchiques entre les objets. Il facilite la réutilisation de code et la création de structures de classes flexibles et extensibles.

**En pratique, l'héritage doit être utilisé avec prudence.** Un excès d'héritage peut rendre le code complexe et difficile à maintenir. Il est important de trouver le bon équilibre entre l'héritage et la composition.


