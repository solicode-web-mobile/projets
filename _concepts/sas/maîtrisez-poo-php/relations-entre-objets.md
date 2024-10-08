---
reference: relations-entre-objets
slug: relations-entre-objets
order: 10
module_reference: sas
unit_reference: sas-maîtrisez-poo-php
part: maîtrisez-poo-php
concept_categories: ''
title: "Relations entre objets \n"
topics: ''
description: "Les relations entre objets en PHP : un guide complet avec exemples\r\n"
tutorials: ''
Todo: ''
directory: sas/maîtrisez-poo-php
permalink: sas/relations-entre-objets
layout: concepts
---

## Les relations entre objets en PHP : un guide complet avec exemples

### Comprendre les relations

Dans la programmation orientée objet, les relations entre objets sont fondamentales pour modéliser des concepts du monde réel. Ces relations permettent de structurer les données et les comportements d'une application.

Les principaux types de relations sont :

* **Un à un (One-to-One):** Un objet est associé à un et un seul autre objet.
* **Un à plusieurs (One-to-Many):** Un objet est associé à plusieurs instances d'un autre objet.
* **Plusieurs à un (Many-to-One):** L'inverse d'un à plusieurs.
* **Plusieurs à plusieurs (Many-to-Many):** Plusieurs instances d'un objet peuvent être associées à plusieurs instances d'un autre objet.

### Exemples de code en PHP

#### Relation Un à Un : Personne et Passeport

```php
class Personne {
    private $id;
    private $nom;
    private $passeport; // Un objet Passeport

    // ... getters et setters ...

    public function setPasseport(Passeport $passeport): void {
        $this->passeport = $passeport;
        $passeport->setPersonne($this); // Lien bidirectionnel
    }
}

class Passeport {
    private $numero;
    private $dateExpiration;
    private $personne; // Un objet Personne

    // ... getters et setters ...

    public function setPersonne(Personne $personne): void {
        $this->personne = $personne;
    }
}
```

#### Relation Un à Plusieurs : Auteur et Livre

```php
class Auteur {
    private $id;
    private $nom;
    /** @var Livre[] */
    private $livres = [];

    // ... getters et setters ...

    public function addLivre(Livre $livre): void {
        $this->livres[] = $livre;
        $livre->setAuteur($this);
    }
}

class Livre {
    private $id;
    private $titre;
    private $auteur; // Un objet Auteur

    // ... getters et setters ...
}
```

#### Relation Plusieurs à Plusieurs : Étudiant et Cours (avec table d'association)

```php
class Etudiant {
    private $id;
    private $nom;
    /** @var Cours[] */
    private $cours = [];

    // ... getters et setters ...

    public function ajouterCours(Cours $cours): void {
        $this->cours[] = $cours;
        $cours->ajouterEtudiant($this);
    }
}

class Cours {
    private $id;
    private $nom;
    /** @var Etudiant[] */
    private $etudiants = [];

    // ... getters et setters ...

    public function ajouterEtudiant(Etudiant $etudiant): void {
        $this->etudiants[] = $etudiant;
    }
}
```

**Note:** La table d'association `inscriptions` en base de données aura les colonnes `etudiant_id` et `cours_id` pour stocker les liens entre les étudiants et les cours.

### Utilisation d'un ORM (Doctrine)

```php
// Configuration de Doctrine (simplifiée)
use Doctrine\ORM\EntityManager;

$entityManager = EntityManager::create(/* ... paramètres de connexion ... */);

// Création d'un nouvel auteur et de livres associés
$auteur = new Auteur();
$auteur->setNom('Dumas');

$livre1 = new Livre();
$livre1->setTitre('Les Trois Mousquetaires');
$livre1->setAuteur($auteur);

$entityManager->persist($auteur);
$entityManager->persist($livre1);
$entityManager->flush();
```

### Points clés à retenir

* **Encapsulation:** Protégez les données internes des objets en utilisant des propriétés privées et des méthodes publiques (getters et setters).
* **Associations:** Utilisez des associations pour représenter les liens entre les objets.
* **Bidirectionalité:** Dans certains cas, il peut être utile d'avoir des liens bidirectionnels entre les objets.
* **ORM:** Un ORM comme Doctrine simplifie la gestion des relations entre objets et la base de données.

### Aller plus loin

* **Héritage:** Créez des hiérarchies de classes pour modéliser des concepts plus complexes.
* **Polymorphisme:** Utilisez des objets de différentes classes de manière interchangeable.
* **Interfaces:** Définissez des contrats que les classes doivent respecter.
* **Design Patterns:** Appliquez des patterns de conception pour résoudre des problèmes courants en programmation orientée objet.

**En conclusion,** la compréhension des relations entre objets est essentielle pour concevoir des applications robustes et maintenables. En combinant les concepts de la programmation orientée objet avec les outils appropriés (ORM, etc.), vous pourrez créer des modèles de données riches et expressifs.

