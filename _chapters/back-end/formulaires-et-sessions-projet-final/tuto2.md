---
reference: formulaires-et-sessions-projet-final-tuto2
slug: tuto2
module_reference: back-end
part_reference: formulaires-et-sessions-projet-final
concept_reference: ''
title: Tuto 2 - Mise en Place d’un CRUD
description: ''
order: 134
directory: formulaires-et-sessions-projet-final
permalink: formulaires-et-sessions-projet-final/tuto2
layout: chapters
---
# **Tutoriel 2 : Mise en Place d’un CRUD - Gestion des Articles**

Dans ce tutoriel, nous allons créer un système CRUD complet pour gérer des articles. Cela inclut la création, la lecture, la mise à jour, et la suppression des articles.

---

## **Objectifs**
- Implémenter les opérations CRUD dans une application Laravel.
- Gérer des formulaires et valider les données.
- Interagir avec la base de données via le modèle Eloquent.

---

## **Étape 1 : Configuration de la base de données**

### **A. Création de la migration**
Exécutez la commande suivante pour créer une migration pour la table `articles` :
```bash
php artisan make:migration create_articles_table
```

Dans le fichier de migration généré (`database/migrations/yyyy_mm_dd_create_articles_table.php`), configurez les colonnes :
```php
public function up()
{
    Schema::create('articles', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('content');
        $table->timestamps();
    });
}
```

Appliquez la migration :
```bash
php artisan migrate
```

### **B. Création du modèle**
Créez un modèle pour interagir avec la table :
```bash
php artisan make:model Article
```

Dans `app/Models/Article.php`, ajoutez les propriétés suivantes :

```php
protected $fillable = ['title', 'content'];
```

---

## **Étape 2 : Mise en place des routes**

Dans le fichier `routes/web.php`, définissez les routes CRUD :
```php
use App\Http\Controllers\ArticleController;

Route::resource('articles', ArticleController::class);
```
La méthode `Route::resource` génère automatiquement les routes pour les opérations CRUD.

---

## **Étape 3 : Création du contrôleur**

Générez un contrôleur avec des méthodes CRUD :
```bash
php artisan make:controller ArticleController --resource
```

Le fichier généré dans `app/Http/Controllers/ArticleController.php` contiendra les méthodes suivantes :  
- `index` : Afficher la liste des articles.  
- `create` : Afficher le formulaire de création.  
- `store` : Enregistrer un nouvel article.  
- `show` : Afficher un article.  
- `edit` : Afficher le formulaire de modification.  
- `update` : Enregistrer les modifications.  
- `destroy` : Supprimer un article.

---

## **Étape 4 : Implémentation des méthodes**

### **A. Afficher la liste des articles**
Dans la méthode `index` :
```php
public function index() {
    $articles = Article::all();
    return view('articles.index', compact('articles'));
}
```

### **B. Créer un nouvel article**
Dans la méthode `create` :
```php
public function create() {
    return view('articles.create');
}
```

Dans la méthode `store` :
```php
public function store(Request $request) {
    $validated = $request->validate([
        'title' => 'required|max:255',
        'content' => 'required',
    ]);

    Article::create($validated);
    return redirect()->route('articles.index')->with('success', 'Article créé avec succès.');
}
```

### **C. Afficher un article**
Dans la méthode `show` :
```php
public function show(Article $article) {
    return view('articles.show', compact('article'));
}
```

### **D. Modifier un article**
Dans la méthode `edit` :
```php
public function edit(Article $article) {
    return view('articles.edit', compact('article'));
}
```

Dans la méthode `update` :
```php
public function update(Request $request, Article $article) {
    $validated = $request->validate([
        'title' => 'required|max:255',
        'content' => 'required',
    ]);

    $article->update($validated);
    return redirect()->route('articles.index')->with('success', 'Article mis à jour avec succès.');
}
```

### **E. Supprimer un article**
Dans la méthode `destroy` :
```php
public function destroy(Article $article) {
    $article->delete();
    return redirect()->route('articles.index')->with('success', 'Article supprimé avec succès.');
}
```

---

## **Étape 5 : Création des vues**

### **A. Vue pour afficher la liste des articles (`index.blade.php`)**
```blade
{% raw %}
@extends('layouts.app')

@section('content')
    <h1>Liste des Articles</h1>
    <a href="{{ route('articles.create') }}">Créer un nouvel article</a>
    <ul>
        @foreach ($articles as $article)
            <li>
                <a href="{{ route('articles.show', $article->id) }}">{{ $article->title }}</a>
                <a href="{{ route('articles.edit', $article->id) }}">Modifier</a>
                <form action="{{ route('articles.destroy', $article->id) }}" method="POST" style="display:inline;">
                    @csrf
                    @method('DELETE')
                    <button type="submit">Supprimer</button>
                </form>
            </li>
        @endforeach
    </ul>
@endsection
{% endraw %}
```

### **B. Vue pour créer/modifier un article (`create.blade.php` et `edit.blade.php`)**
```blade
{% raw %}
@extends('layouts.app')

@section('content')
    <h1>{{ isset($article) ? 'Modifier' : 'Créer' }} un Article</h1>
    <form action="{{ isset($article) ? route('articles.update', $article->id) : route('articles.store') }}" method="POST">
        @csrf
        @if(isset($article))
            @method('PUT')
        @endif
        <label for="title">Titre :</label>
        <input type="text" name="title" value="{{ $article->title ?? old('title') }}" required>
        <label for="content">Contenu :</label>
        <textarea name="content" required>{{ $article->content ?? old('content') }}</textarea>
        <button type="submit">{{ isset($article) ? 'Mettre à jour' : 'Créer' }}</button>
    </form>
@endsection
{% endraw %}
```

### **C. Vue pour afficher un article (`show.blade.php`)**
```blade
{% raw %}
@extends('layouts.app')

@section('content')
    <h1>{{ $article->title }}</h1>
    <p>{{ $article->content }}</p>
    <a href="{{ route('articles.index') }}">Retour à la liste</a>
@endsection
{% endraw %}
```

---

## **Étape 6 : Tester l’application**

1. Lancez le serveur Laravel :
   ```bash
   php artisan serve
   ```
2. Accédez aux routes suivantes :
   - `GET /articles` : Liste des articles.
   - `GET /articles/create` : Formulaire de création.
   - `POST /articles` : Enregistrer un article.
   - `GET /articles/{id}` : Afficher un article.
   - `GET /articles/{id}/edit` : Formulaire de modification.
   - `PUT /articles/{id}` : Mettre à jour un article.
   - `DELETE /articles/{id}` : Supprimer un article.

---

# **Conclusion**
Ce tutoriel vous a permis de mettre en place un CRUD complet avec Laravel. Vous avez appris à gérer les routes, les contrôleurs, les validations, et à interagir avec la base de données grâce à Eloquent. 🎉