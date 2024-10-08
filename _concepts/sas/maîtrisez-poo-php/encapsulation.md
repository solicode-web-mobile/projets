---
reference: encapsulation
slug: encapsulation
order: 7
module_reference: sas
unit_reference: sas-maîtrisez-poo-php
part: maîtrisez-poo-php
concept_categories: ''
title: Encapsulation
topics: ''
description: 'Protéger les données internes d''une classe en PHP : L''encapsulation'
tutorials: ''
Todo: ''
directory: sas/maîtrisez-poo-php
permalink: sas/encapsulation
layout: concepts
---

## Protéger les données internes d'une classe en PHP : L'encapsulation

### Qu'est-ce que l'encapsulation ?

L'encapsulation est un pilier fondamental de la programmation orientée objet (POO). Elle consiste à regrouper les données (attributs) et les méthodes qui agissent sur ces données au sein d'une même classe, et à contrôler l'accès à ces données.

En termes simples, l'encapsulation permet de :

* **Protéger les données internes** d'une classe contre les modifications accidentelles ou malveillantes.
* **Améliorer la lisibilité** du code en masquant les détails d'implémentation.
* **Faciliter la maintenance** du code en réduisant les couplages entre les différentes parties de l'application.

### Comment mettre en œuvre l'encapsulation en PHP ?

En PHP, on utilise des **modificateurs d'accès** pour contrôler la visibilité des propriétés et des méthodes :

* **public** : Accessible de partout.
* **protected** : Accessible depuis la classe elle-même et ses classes filles.
* **private** : Accessible uniquement depuis la classe elle-même.

**Exemple:**

```php
class Utilisateur {
    private $nom;
    private $prenom;
    private $email;

    public function __construct($nom, $prenom, $email) {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->email = $email;
    }

    public function getNom() {
        return $this->nom;
    }

    public function setNom($nom) {
        $this->nom = $nom;
    }
}
```

Dans cet exemple :

* Les propriétés `$nom`, `$prenom` et `$email` sont déclarées comme `private`. Elles ne sont donc accessibles qu'à l'intérieur de la classe `Utilisateur`.
* Les méthodes `getNom()` et `setNom()` sont publiques. Elles permettent de lire et de modifier la valeur de la propriété `$nom` de manière contrôlée.

### Pourquoi utiliser des getters et des setters ?

Les **getters** et les **setters** sont des méthodes spéciales qui permettent d'accéder aux propriétés d'une classe de manière indirecte. Ils offrent plusieurs avantages :

* **Validation des données** : On peut ajouter des vérifications pour s'assurer que les données assignées à une propriété sont valides.
* **Calculs** : On peut effectuer des calculs avant de retourner la valeur d'une propriété.
* **Logique métier** : On peut encapsuler de la logique métier au sein des getters et des setters.

### Un exemple plus complexe

```php
class CompteBancaire {
    private $solde;

    public function __construct($soldeInitial) {
        $this->solde = $soldeInitial;
    }

    public function getSolde() {
        return $this->solde;
    }

    public function deposer($montant) {
        if ($montant > 0) {
            $this->solde += $montant;
        } else {
            echo "Le montant doit être positif.";
        }
    }

    public function retirer($montant) {
        if ($montant <= $this->solde) {
            $this->solde -= $montant;
        } else {
            echo "Solde insuffisant.";
        }
    }
}
```

Dans cet exemple, la méthode `deposer()` vérifie que le montant à déposer est positif avant de mettre à jour le solde. De même, la méthode `retirer()` vérifie que le solde est suffisant avant d'effectuer le retrait.

### En résumé

L'encapsulation est un concept fondamental de la POO qui permet de protéger les données internes d'une classe et d'améliorer la qualité de votre code. En utilisant des modificateurs d'accès et des getters et des setters, vous pouvez garantir la cohérence et la sécurité de vos applications.

**Pour aller plus loin, vous pouvez étudier :**

* **L'héritage** : Comment créer des classes filles qui héritent des propriétés et des méthodes d'une classe mère.
* **Le polymorphisme** : Comment faire en sorte qu'un même message soit interprété de manière différente selon l'objet qui le reçoit.
* **Les interfaces** : Des contrats qui définissent un ensemble de méthodes que les classes doivent implémenter.

