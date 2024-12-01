---
reference: formulaires-et-sessions-projet-final-mini-projet
slug: mini-projet
module_reference: back-end
part_reference: formulaires-et-sessions-projet-final
concept_reference: ''
title: Mini-Projet
description: ''
order: 141
directory: back-end/formulaires-et-sessions-projet-final
permalink: back-end/formulaires-et-sessions-projet-final/mini-projet
layout: chapters
---


# **Mini-Projet : Blog Minimaliste avec Gestion des Articles**

## **Objectifs Pédagogiques :**
- Appliquer les concepts de routage pour gérer les URL et les requêtes.
- Créer des contrôleurs pour organiser la logique métier.
- Passer des données dynamiques aux vues en utilisant Blade.
- Introduire des middleware simples pour gérer l'accès.


## **Description du Projet :**
Développer une application de blog minimaliste où les utilisateurs peuvent : 
1. Afficher une liste d'articles.
2. Consulter le détail d'un article.
3. Créer un nouvel article.
4. Modifier ou supprimer un article existant.

### **Fonctionnalités :**
1. **Affichage des articles :**
   - Route GET `/articles` pour afficher la liste des articles.
   - Contrôleur `ArticleController@index` pour récupérer les articles et les passer à une vue `articles.index`.

2. **Consultation d'un article :**
   - Route GET `/articles/{id}` pour afficher un article spécifique.
   - Contrôleur `ArticleController@show` pour récupérer un article par son ID et le passer à une vue `articles.show`.

3. **Création d'un article :**
   - Route GET `/articles/create` pour afficher un formulaire.
   - Route POST `/articles` pour soumettre un nouvel article.
   - Contrôleur `ArticleController@store` pour valider et sauvegarder les données.

4. **Modification d'un article :**
   - Route GET `/articles/{id}/edit` pour afficher un formulaire pré-rempli.
   - Route PUT `/articles/{id}` pour enregistrer les modifications.
   - Contrôleur `ArticleController@update` pour mettre à jour un article.

5. **Suppression d'un article :**
   - Route DELETE `/articles/{id}` pour supprimer un article.
   - Contrôleur `ArticleController@destroy` pour supprimer l'article.


### **Étapes de Réalisation :**

#### **1. Configuration de la base de données**
- Création d'une table `articles` avec les colonnes suivantes : 
  - `id` (clé primaire)
  - `title` (string, obligatoire)
  - `content` (text, obligatoire)
  - `created_at`, `updated_at`.

#### **2. Définition des routes**
Dans le fichier `web.php` :
{% raw %}
```php
Route::get('/articles', [ArticleController::class, 'index'])->name('articles.index');
Route::get('/articles/{id}', [ArticleController::class, 'show'])->name('articles.show');
Route::get('/articles/create', [ArticleController::class, 'create'])->name('articles.create');
Route::post('/articles', [ArticleController::class, 'store'])->name('articles.store');
Route::get('/articles/{id}/edit', [ArticleController::class, 'edit'])->name('articles.edit');
Route::put('/articles/{id}', [ArticleController::class, 'update'])->name('articles.update');
Route::delete('/articles/{id}', [ArticleController::class, 'destroy'])->name('articles.destroy');
```

#### **3. Création du contrôleur**
Génération avec la commande artisan :
```bash
php artisan make:controller ArticleController
```

Exemple d'implémentation de méthodes :


{% raw %}
```php
public function index() {
    $articles = Article::all();
    return view('articles.index', compact('articles'));
}

public function show($id) {
    $article = Article::findOrFail($id);
    return view('articles.show', compact('article'));
}

```
{% endraw %}


#### **4
. Création des vues**
Dans le dossier `resources/views/articles` :
- `index.blade.php` : pour la liste des articles.
- `show.blade.php` : pour afficher un article spécifique.
- `create.blade.php` et `edit.blade.php` : pour les formulaires.

Utilisation de Blade pour les sections et les composants :
{% raw %}
```php
@extends('layouts.app')

@section('content')
    <h1>{{ $article->title }}</h1>
    <p>{{ $article->content }}</p>
    <a href="{{ route('articles.index') }}">Retour à la liste</a>
@endsection
```
{% endraw %}

#### **5. Middleware simple (bonus)**
Créer un middleware pour restreindre certaines actions (comme la suppression) à des utilisateurs authentifiés :
```bash
php artisan make:middleware AuthMiddleware
```

Dans `handle` :
{% raw %}
```php
if (!auth()->check()) {
    return redirect('/login');
}
return $next($request);
```
```
{% endraw %}

Appliquer le middleware à des routes spécifiques dans `web.php` :

{% raw %}
```php
Route::delete('/articles/{id}', [ArticleController::class, 'destroy'])->middleware('auth');
```
{% endraw %}

## **Livrables :**
1. Une base de données fonctionnelle.
2. Des routes testées.
3. Des vues ergonomiques.
4. Un système CRUD complet pour les articles.
5. Documentation de toutes les étapes.


Ce projet permet d'explorer des concepts clés tout en livrant une application fonctionnelle. 😊