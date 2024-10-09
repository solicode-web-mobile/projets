---
reference: univers-laravel-migrations-seeders
slug: migrations-seeders
module_reference: back-end
part_reference: univers-laravel
concept_reference: ''
title: Tuto5 - Migrations et Seeders
description: ''
order: 55
global_order: '49'
directory: univers-laravel
permalink: univers-laravel/migrations-seeders
layout: chapters
---

## Migrations et Seeders : Structurer et peupler votre base de données Laravel

### Introduction

Les migrations et les seeders sont deux outils puissants fournis par Laravel pour gérer efficacement la structure et le contenu de votre base de données. Ils permettent de :

* **Définir la structure de vos tables** de manière déclarative, en utilisant un langage simple et intuitif.
* **Gérer les évolutions de votre base de données** en appliquant des modifications de manière incrémentale.
* **Peupler votre base de données** avec des données de test ou de production de manière reproductible.

### Les Migrations

Les migrations sont des fichiers PHP qui contiennent des méthodes pour créer, modifier ou supprimer des tables dans votre base de données. Chaque migration correspond à une modification spécifique de votre schéma.

**Création d'une migration :**

```bash
php artisan make:migration create_posts_table
```

**Structure d'une migration :**

```php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('body');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrationspublic function down()
     **/
    {
        Schema::dropIfExists('posts');
    }
}
```

**Exécution des migrations :**

```bash
php artisan migrate
```

**Les méthodes principales d'un Blueprint :**

* `create()`: Crée une nouvelle table.
* `drop()`: Supprime une table.
* `increments()`, `bigIncrements()`: Crée une colonne de type entier auto-incrémenté.
* `string()`: Crée une colonne de type chaîne de caractères.
* `text()`: Crée une colonne de type texte.
* `integer()`: Crée une colonne de type entier.
* `timestamp()`: Crée une colonne de type timestamp.
* `foreign()`: Crée une clé étrangère.
* `index()`: Crée un index.

### Les Seeders

Les seeders permettent de peupler votre base de données avec des données initiales. Ils sont souvent utilisés pour créer des utilisateurs de test, des catégories, des produits, etc.

**Création d'un seeder :**

```bash
php artisan make:seeder UsersTableSeeder
```

**Structure d'un seeder :**

```php
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
  
     public function run()
    {
        User::create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'password' => bcrypt('password'),
        ]);
    }
}
```

**Exécution des seeders :**

```bash
php artisan db:seed
```

### Avantages des migrations et des seeders

* **Contrôle de version:** Les migrations permettent de suivre les modifications de votre base de données au fil du temps.
* **Répétabilité:** Les migrations et les seeders peuvent être exécutés plusieurs fois sans perte de données.
* **Collaboration:** Les migrations et les seeders facilitent la collaboration entre les développeurs.
* **Tests:** Les migrations et les seeders peuvent être utilisés pour créer des environnements de test.

### Conclusion

Les migrations et les seeders sont des outils essentiels pour tout développeur Laravel. Ils permettent de gérer votre base de données de manière structurée, efficace et flexible. En maîtrisant ces outils, vous pourrez créer des applications web robustes et évolutives.

