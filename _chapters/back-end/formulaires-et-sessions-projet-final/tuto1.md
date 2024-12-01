---
reference: formulaires-et-sessions-projet-final-tuto1
slug: tuto1
module_reference: back-end
part_reference: formulaires-et-sessions-projet-final
concept_reference: ''
title: Tuto 1  Introduction au Routage et aux Contrôleurs dans Laravel
description: ''
order: 143
directory: formulaires-et-sessions-projet-final
permalink: formulaires-et-sessions-projet-final/tuto1
layout: chapters
---

# **Tutoriel 1 : Introduction au Routage et aux Contrôleurs dans Laravel**

Dans ce tutoriel, nous allons découvrir comment utiliser le routage et les contrôleurs pour construire les fonctionnalités de base d'un blog minimaliste.

---

## **Objectifs**
- Comprendre les routes et leurs rôles dans une application Laravel.
- Créer et utiliser un contrôleur pour gérer la logique métier.
- Passer des données dynamiques à une vue.

---

## **Pré-requis**
- Une installation fonctionnelle de Laravel (version récente).
- Configuration d'une base de données (SQLite, MySQL, etc.).
- Connaissance de base en PHP et MVC.


## **Étape 1 : Comprendre le routage**

### **A. Aperçu du routage**
Le fichier `routes/web.php` contient les routes web de l'application. Chaque route associe une **URL** à une **action** (contrôleur ou fonction). Exemple simple :
```php
Route::get('/articles', function () {
    return "Liste des articles";
});
```

### **B. Types de routes**
Laravel supporte plusieurs types de requêtes HTTP :
- **GET** : Récupérer des données (exemple : afficher une liste).
- **POST** : Envoyer des données (exemple : créer un article).
- **PUT/PATCH** : Mettre à jour des données.
- **DELETE** : Supprimer des données.


## **Étape 2 : Configuration d’une route vers un contrôleur**

### **A. Créer un contrôleur**
Exécutez la commande suivante pour générer un contrôleur :
```bash
php artisan make:controller ArticleController
```
Cela crée un fichier `ArticleController.php` dans `app/Http/Controllers`.

### **B. Ajouter des méthodes au contrôleur**
Ajoutez deux méthodes dans le fichier `ArticleController.php` :

```php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index() {
        // Simuler une liste d'articles
        $articles = [
            ['id' => 1, 'title' => 'Introduction à Laravel', 'content' => 'Lorem ipsum...'],
            ['id' => 2, 'title' => 'Pourquoi choisir Laravel ?', 'content' => 'Lorem ipsum...']
        ];
        return view('articles.index', compact('articles'));
    }

    public function show($id) {
        // Simuler un article unique
        $article = [
            'id' => $id,
            'title' => "Article $id",
            'content' => 'Contenu de l’article...'
        ];
        return view('articles.show', compact('article'));
    }
}
```

### **C. Définir les routes**
Ajoutez les routes dans `routes/web.php` :
```php
use App\Http\Controllers\ArticleController;

Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('articles.show');
```

---

## **Étape 3 : Créer les vues**

### **A. Configurer les dossiers des vues**
Dans le dossier `resources/views`, créez un dossier `articles`.

### **B. Vue pour la liste des articles**
Créez un fichier `index.blade.php` :
```php
{% raw %}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liste des Articles</title>
</head>
<body>
    <h1>Liste des Articles</h1>
    <ul>
        @foreach($articles as $article)
            <li>
                <a href="{{ route('articles.show', $article['id']) }}">
                    {{ $article['title'] }}
                </a>
            </li>
        @endforeach
    </ul>
</body>
</html>
{% endraw %}
```

### **C. Vue pour un article unique**
Créez un fichier `show.blade.php` :
```php
{% raw %}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>{{ $article['title'] }}</title>
</head>
<body>
    <h1>{{ $article['title'] }}</h1>
    <p>{{ $article['content'] }}</p>
    <a href="{{ route('articles.index') }}">Retour à la liste</a>
</body>
</html>
{% endraw %}
```

---

## **Étape 4 : Tester l’application**

1. Lancez le serveur Laravel :
   ```bash
   php artisan serve
   ```
2. Accédez à l’URL suivante pour afficher la liste des articles :
   ```
   http://127.0.0.1:8000/articles
   ```
3. Cliquez sur un article pour afficher ses détails.

---

## **Étape 5 : Bonus - Routes nommées**

Les **routes nommées** permettent de simplifier les URL dynamiques dans les vues.  
Exemple dans `index.blade.php` :
```php
{% raw %}
<a href="{{ route('articles.show', $article['id']) }}">
    {{ $article['title'] }}
</a>
{% endraw %}
```
Cela génère automatiquement une URL correspondant à la route.

---

## **Conclusion**

Dans ce tutoriel, vous avez appris : 
- À définir des routes.
- À créer un contrôleur pour gérer la logique métier.
- À passer des données dynamiques aux vues via Blade.

Avec cette base, vous êtes prêt à explorer le CRUD et d’autres fonctionnalités avancées dans les prochains tutoriels. 🎉