---
reference: maîtrise-eloquent-migrations-seeders
slug: migrations-seeders
module_reference: back-end
part_reference: maîtrise-eloquent
concept_reference: ''
title: Tuto5 - Migrations et Seeders
description: ''
order: 64
global_order: '49'
directory: maîtrise-eloquent
permalink: maîtrise-eloquent/migrations-seeders
layout: chapters
---


# Les Seeders en Laravel : Préparez votre base de données en un clin d'œil

## Qu'est-ce qu'un Seeder ?

Un Seeder en Laravel est un outil permettant de remplir votre base de données avec des données initiales. Ces données peuvent être utilisées pour :

* **Les tests unitaires:** Créer des environnements de test réalistes.
* **Les démonstrations:** Préremplir votre application avec du contenu pour des présentations.
* **Les migrations de données:** Migrer des données d'une ancienne base de données vers une nouvelle.

## Création d'un Seeder

Pour créer un nouveau Seeder, utilisez la commande Artisan suivante :

```bash
php artisan make:seeder PostsTableSeeder
```

Cette commande va générer un nouveau fichier de Seeder dans le répertoire `database/seeders`.

## Le contenu du Seeder

Un Seeder est une classe PHP simple qui contient une méthode `run()` où vous définissez les données à insérer.

```php
use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Category;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Créer quelques catégories
        $categories = [
            ['name' => 'Technologie'],
            ['name' => 'Sport'],
            ['name' => 'Cuisine'],
        ];

        foreach ($categories as $categoryData) {
            Category::create($categoryData);
        }

        // Créer quelques posts
        $posts = [
            ['title' => 'Mon premier post', 'body' => 'Contenu du premier post', 'category_id' => 1],
            // ... d'autres posts
        ];

        foreach ($posts as $postData) {
            Post::create($postData);
        }
    }
}
```

## Exécution des Seeders

Pour exécuter tous les Seeders, utilisez la commande :

```bash
php artisan db:seed
```

Pour exécuter un Seeder spécifique :

```bash
php artisan db:seed --class=PostsTableSeeder
```

## Bonnes pratiques

* **Structurez vos Seeders:** Créez des Seeders séparés pour différentes tables ou ensembles de données.
* **Utilisez des factories:** Pour générer des données de manière plus flexible et reproductible.
* **Gérer les dépendances:** Si un Seeder dépend d'un autre, assurez-vous qu'il est exécuté en premier.


## En résumé

Les Seeders sont un outil essentiel pour préparer votre base de données de développement et de test. Ils vous permettent de gagner du temps et d'automatiser la création de données initiales. En suivant les bonnes pratiques, vous pouvez créer des Seeders efficaces et maintenables.

**Points clés à retenir:**

* Les Seeders permettent de remplir votre base de données avec des données initiales.
* Ils sont utilisés pour les tests, les démonstrations et les migrations de données.
* Vous pouvez créer des Seeders spécifiques pour chaque table ou ensemble de données.
* Utilisez des factories pour générer des données de manière plus flexible.

**Pour approfondir:**

* **Documentation officielle Laravel:** Consultez la documentation pour plus de détails sur les Seeders et les options disponibles.
* **Factories:** Découvrez comment utiliser les factories pour générer des données de manière plus efficace.
* **Seeders et migrations:** Comprenez comment les Seeders interagissent avec les migrations pour gérer la structure de votre base de données.

En maîtrisant les Seeders, vous serez en mesure de préparer rapidement et efficacement votre environnement de développement Laravel.
