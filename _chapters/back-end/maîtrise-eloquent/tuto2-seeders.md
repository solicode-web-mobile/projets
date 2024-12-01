---
reference: maîtrise-eloquent-migrations-seeders
slug: migrations-seeders
module_reference: back-end
part_reference: maîtrise-eloquent
concept_reference: ''
title: Tuto5 - Migrations et Seeders
description: ''
order: 104
global_order: '49'
directory: maîtrise-eloquent
permalink: maîtrise-eloquent/migrations-seeders
layout: chapters
---


# **Les Seeders en Laravel : Préparez votre base de données en un clin d'œil**

## **Introduction**

Les Seeders en Laravel sont des outils indispensables pour peupler rapidement votre base de données avec des données fictives ou réelles. Ils facilitent la mise en place d'environnements de développement, de tests et de production. Grâce aux Seeders, vous pouvez créer des jeux de données complexes et réalistes, ce qui est particulièrement utile pour :

  * **Les démonstrations :** Présenter les fonctionnalités de votre application avec des données concrètes (par exemple, des catégories de produits).
  * **Les tests unitaires :** Créer des scénarios de test variés et reproductibles (par exemple, des tests sur les fonctionnalités liées aux catégories).
  * **Les migrations de données :** Transférer des données d'une base de données existante vers une nouvelle (par exemple, migrer des catégories d'un ancien système).

## **Création et structure d'un Seeder**

Pour créer un nouveau Seeder, utilisez la commande Artisan suivante :

```bash
php artisan make:seeder CategoriesTableSeeder
```

Cela générera un fichier PHP dans le répertoire `database/seeders`. Un Seeder est essentiellement une classe PHP qui contient une méthode `run()` où vous définissez les données à insérer.

## **Exécution des Seeders**

Pour exécuter tous les Seeders, utilisez la commande :

```bash
php artisan db:seed
```

Pour exécuter un Seeder spécifique :

```bash
php artisan db:seed --class=CategoriesTableSeeder
```

## **Les Factories : Un outil puissant pour générer des données**

Les Factories en Laravel permettent de générer des instances de modèles avec des données aléatoires ou personnalisées. Elles sont souvent utilisées en combinaison avec les Seeders pour créer des jeux de données plus complexes.

**Exemple : Création de catégories avec des Factories**


```bash
php artisan make:factory CategoryFactory
```

```php
// database/factories/CategoryFactory.php
<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->word,
            'description' => $this->faker->paragraph,
        ];
    }

    public function active(): Factory
    {
        return $this->state(function (array $attributes) {
            return [
                'is_active' => true,
            ];
        });
    }
}
```

```php
// database/seeders/CategorySeeder.php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        \App\Models\Category::factory()->count(10)->create();
        \App\Models\Category::factory()->count(5)->active()->create();
    }
}
```

Le premier appel à la factory créera 10 catégories avec des données aléatoires, tandis que le second créera 5 catégories actives.

## **Charger des données depuis un fichier CSV**

Pour importer des données depuis un fichier CSV, vous pouvez utiliser une bibliothèque comme `League/Csv` ou `Maatwebsite/Excel`. Voici un exemple avec `League/Csv` :

```php
// ... (code du Seeder)

use League\Csv\Reader;

// ...

$csv = Reader::createFromPath(database_path('seeds/categories.csv'));
$csv->setHeaderOffset(0);

foreach ($csv as $record) {
    Category::create([
        'name' => $record['name'],
        'description' => $record['description'],
    ]);
}
```

## **Bonnes pratiques**

  * **Structurer vos Seeders:** Créez un Seeder par table ou par groupe de tables logiquement liées.
  * **Gérer les dépendances:** Si un Seeder dépend d'un autre, assurez-vous qu'il est exécuté en premier.
  * **Utiliser des commentaires:** Expliquez le but de chaque partie de votre code.
  * **Tester vos Seeders:** Écrivez des tests unitaires pour vérifier que vos Seeders fonctionnent correctement.

## **Conclusion**

Les Seeders sont un outil essentiel pour tout développeur Laravel. Ils permettent de gagner du temps et d'automatiser la création de données, ce qui est particulièrement utile pour les environnements de développement et de test. En maîtrisant les Seeders et les Factories, vous serez en mesure de créer des applications Laravel plus robustes et plus faciles à maintenir.

