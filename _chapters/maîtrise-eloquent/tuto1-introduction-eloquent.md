---
reference: maîtrise-eloquent-introduction-eloquent
slug: introduction-eloquent
module_reference: back-end
part_reference: maîtrise-eloquent
concept_reference: ''
title: Tuto4 - Introduction à Eloquent ORM
description: ''
order: 63
global_order: '49'
directory: maîtrise-eloquent
permalink: maîtrise-eloquent/introduction-eloquent
layout: chapters
---

### **Introduction à Eloquent ORM : Modélisez vos données avec élégance**

Eloquent ORM est un outil puissant fourni par Laravel pour interagir avec votre base de données de manière intuitive et orientée objet. Au lieu d'écrire des requêtes SQL complexes, vous définissez des modèles qui correspondent à vos tables de base de données et vous utilisez des méthodes fluides pour effectuer des opérations CRUD (Créer, Lire, Mettre à jour, Supprimer).

**Structure de la base de données :**

* **Table `posts`:** id, title, body, category_id
* **Table `categories`:** id, name

#### **Configuration de la base de données**
Avant de commencer, assurez-vous d'avoir configuré correctement votre base de données dans le fichier `.env` de votre application Laravel. Les informations à renseigner sont généralement :

* **DB_CONNECTION:** Le pilote de votre base de données (mysql, postgres, etc.)
* **DB_HOST:** L'hôte de votre base de données
* **DB_DATABASE:** Le nom de votre base de données
* **DB_USERNAME:** Le nom d'utilisateur de votre base de données
* **DB_PASSWORD:** Le mot de passe de votre base de données

#### **Migrations**

Les migrations sont des fichiers qui contiennent les instructions pour créer et mettre à jour votre base de données. Chaque migration représente un changement spécifique à apporter à votre schéma.

* **Création d'une migration:**
  
  ```bash
  php artisan make:migration create_posts_table
  ```

* **Contenu d'une migration:**

  ```php
  use Illuminate\Database\Migrations\Migration;
  use Illuminate\Database\Schema\Blueprint;
  use Illuminate\Support\Facades\Schema;

  class CreatePostsTable extends Migration
  {
      public function up()
      {
          Schema::create('posts', function (Blueprint $table) {
              $table->id();
              $table->string('title');
              $table->text('body');
              $table->unsignedBigInteger('category_id');
              $table->foreign('category_id')->references('id')->on('categories');
              $table->timestamps();
          });
      }

      public function down()
      {
          Schema::dropIfExists('posts');
      }
  }
  ```
* **Exécution des migrations:**
  ```bash
  php artisan migrate
  ```

#### **Modèles**

```php
// App/Models/Post.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = ['title', 'body', 'category_id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}

// App/Models/Category.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name'];

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
```

#### **Relations**
* **Un post appartient à une catégorie (one-to-many):**
  * `category()` dans le modèle `Post` définit la relation.
* **Une catégorie peut avoir plusieurs posts (one-to-many):**
  * `posts()` dans le modèle `Category` définit la relation inverse.

#### **Requêtes Eloquent**
* **Récupérer tous les posts d'une catégorie:**
  ```php
  $category = Category::find(1);
  $posts = $category->posts;
  ```
* **Créer un nouveau post dans une catégorie:**
  ```php
  $category = Category::find(1);
  $post = new Post([
      'title' => 'Mon premier post',
      'body' => 'Contenu du post',
      'category_id' => $category->id,
  ]);
  $post->save();
  ```

#### **Tester vos modèles avec Tinker**

Tinker est un REPL (Read-Eval-Print Loop) interactif fourni par Laravel qui vous permet d'exécuter du code PHP directement dans votre terminal. C'est un outil très utile pour tester rapidement vos modèles et vos requêtes Eloquent.

Pour lancer Tinker :
```bash
php artisan tinker
```

Une fois dans Tinker, vous pouvez interagir avec vos modèles comme ceci :

```php
// Créer une nouvelle catégorie
$category = new App\Models\Category;
$category->name = 'Technologie';
$category->save();

// Trouver une catégorie par son ID
$category = App\Models\Category::find(1);

// Créer un nouveau post dans cette catégorie
$post = new App\Models\Post;
$post->title = 'Mon premier post';
$post->body = 'Contenu du post';
$post->category()->associate($category);
$post->save();

// Récupérer tous les posts d'une catégorie
$posts = $category->posts;
foreach ($posts as $post) {
    echo $post->title . PHP_EOL;
}
```

**Pourquoi utiliser Tinker ?**

* **Expérimentation rapide:** Testez rapidement de nouvelles fonctionnalités ou résolvez des problèmes.
* **Débogage:** Identifiez les erreurs dans votre code plus facilement.
* **Apprentissage:** Familiarisez-vous avec Eloquent en exécutant du code directement.

**Conseils pour utiliser Tinker:**
* **Utilisez les complétions de code:** Votre IDE peut vous aider à autocompléter les noms de classes, de méthodes et de propriétés.
* **Explorez les méthodes disponibles:** Utilisez la méthode `getMethods()` pour voir les méthodes disponibles sur un objet.
* **Utilisez les expressions lambda:** Pour des requêtes plus complexes.


* **Autres requêtes:**
  * **Trouver un enregistrement par son ID:** `$post = Post::find(1);`
  * **Mettre à jour un enregistrement:** `$post->title = 'Nouveau titre'; $post->save();`
  * **Supprimer un enregistrement:** `$post->delete();`
  * **Et bien d'autres encore...**

#### **Avantages d'Eloquent**
* **Syntaxe intuitive:** Les méthodes d'Eloquent sont faciles à comprendre et à utiliser.
* **Productivité:** Eloquent vous permet de travailler avec votre base de données de manière plus rapide et efficace.
* **Flexibilité:** Eloquent offre de nombreuses fonctionnalités pour gérer des relations complexes et des requêtes avancées.

**En résumé**

Cet article vous a guidé à travers les bases d'Eloquent ORM, en vous montrant comment définir des modèles, établir des relations et effectuer des requêtes sur votre base de données. En respectant la structure de base de données spécifiée, vous pouvez maintenant commencer à développer des applications Laravel plus complexes et efficaces.

**Cet article vous permet de :**

* **Comprendre les bases d'Eloquent ORM**
* **Définir des modèles en relation**
* **Effectuer des requêtes simples**
* **Préparer le terrain pour des développements plus avancés**




