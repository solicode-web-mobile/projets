---
reference: univers-laravel-introduction-eloquent
slug: introduction-eloquent
module_reference: back-end
part_reference: univers-laravel
concept_reference: ''
title: Tuto4 - Introduction à Eloquent ORM
description: ''
order: 55
global_order: '49'
directory: univers-laravel
permalink: univers-laravel/introduction-eloquent
layout: chapters
---


## Introduction à Eloquent ORM : Modélisez vos données avec élégance

### Qu'est-ce qu'Eloquent ORM ?
Eloquent ORM est un outil puissant fourni par Laravel pour interagir avec votre base de données de manière intuitive et orientée objet. Au lieu d'écrire des requêtes SQL complexes, vous définissez des modèles qui correspondent à vos tables de base de données et vous utilisez des méthodes fluides pour effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer).

### Création de modèles

* **Génération de modèles:** Utilisez la commande Artisan pour générer des modèles :
  ```bash
  php artisan make:model User
  php artisan make:model Post
  ```
* **Définition des attributs:** Les attributs de votre modèle correspondent aux colonnes de votre table. Par exemple, le modèle `User` pourrait avoir les attributs `name`, `email`, `password`, etc.
* **Relations:** Eloquent facilite la définition des relations entre les modèles. Une relation one-to-many signifie qu'un utilisateur peut avoir plusieurs publications.

### Relation one-to-many
* **Définition de la relation dans le modèle Post:**
  ```php
  class Post extends Model
  {
      public function user()
      {
          return $this->belongsTo(User::class);
      }
  }
  ```
  La méthode `belongsTo` indique qu'un post appartient à un utilisateur.

### Récupération de données
* **Récupérer tous les posts d'un utilisateur:**
  ```php
  $user = User::find(1);
  $posts = $user->posts;
  ```
* **Créer un nouveau post:**
  ```php
  $user = User::find(1);
  $post = new Post;
  $post->title = 'Mon premier post';
  $post->body = 'Contenu du post';
  $user->posts()->save($post);
  ```

### Requêtes Eloquent
Eloquent fournit une interface fluide pour effectuer des requêtes :
* **Where:** Filtrer les résultats en fonction d'une condition.
* **OrderBy:** Trier les résultats.
* **Limit:** Limiter le nombre de résultats.
* **With:** Charger les relations avec les modèles.

### Exemple : Afficher tous les posts d'un utilisateur avec leurs détails
```php
$user = User::with('posts')->find(1);

foreach ($user->posts as $post) {
    echo $post->title;
    echo $post->body;
}
```

### Les avantages d'Eloquent
* **Syntaxe intuitive:** Les méthodes d'Eloquent sont faciles à comprendre et à utiliser.
* **Productivité:** Eloquent vous permet de travailler avec votre base de données de manière plus rapide et efficace.
* **Flexibilité:** Eloquent offre de nombreuses fonctionnalités pour gérer des relations complexes et des requêtes avancées.

### En résumé
Eloquent ORM est un outil essentiel pour tout développeur Laravel. Il simplifie considérablement la gestion de vos données et vous permet de vous concentrer sur la logique métier de votre application.

**Dans les prochains chapitres, nous approfondirons les fonctionnalités d'Eloquent, comme les migrations, les seeders, les relations plus complexes, et les requêtes avancées.**

