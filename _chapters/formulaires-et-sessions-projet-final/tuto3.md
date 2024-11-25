---
reference: formulaires-et-sessions-projet-final-tuto3
slug: tuto3
module_reference: back-end
part_reference: formulaires-et-sessions-projet-final
concept_reference: ''
title: Tuto 3 - Organisation et Réutilisation du Code avec Blade
description: ''
order: 135
directory: formulaires-et-sessions-projet-final
permalink: formulaires-et-sessions-projet-final/tuto3
layout: chapters
---

# **Tutoriel 3 : Organisation et Réutilisation du Code avec Blade**

Laravel Blade est un puissant moteur de templates qui facilite la création de vues dynamiques et la réutilisation du code. Ce tutoriel explique comment structurer vos vues pour un blog minimaliste en utilisant les fonctionnalités avancées de Blade.

---

## **Objectifs**
- Comprendre et utiliser les mises en page (layouts) Blade.
- Réutiliser des blocs de code avec les sections.
- Créer des composants Blade pour modulariser le contenu.
- Organiser les vues pour un projet propre et maintenable.

---

## **Étape 1 : Mise en place d’un layout global**

### **A. Pourquoi un layout global ?**
Un **layout** Blade vous permet de définir une structure commune (par exemple, l’entête et le pied de page) partagée entre plusieurs pages.

### **B. Création du layout principal**
1. Dans le dossier `resources/views`, créez un sous-dossier `layouts`.
2. Ajoutez un fichier `app.blade.php` dans ce dossier :

```blade
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Mon Blog Minimaliste')</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <header>
        <h1>Mon Blog</h1>
        <nav>
            <a href="{{ route('articles.index') }}">Accueil</a>
            <a href="{{ route('articles.create') }}">Créer un Article</a>
        </nav>
    </header>

    <main>
        @yield('content')
    </main>

    <footer>
        <p>&copy; 2024 Mon Blog Minimaliste</p>
    </footer>
</body>
</html>
```

### **C. Utiliser le layout dans une vue**
Dans `resources/views/articles/index.blade.php` :

```blade
@extends('layouts.app')

@section('title', 'Liste des Articles')

@section('content')
    <h2>Liste des Articles</h2>
    <ul>
        @foreach ($articles as $article)
            <li>
                <a href="{{ route('articles.show', $article->id) }}">{{ $article->title }}</a>
            </li>
        @endforeach
    </ul>
@endsection
```

---

## **Étape 2 : Utilisation des sections**

### **A. Ajouter une section personnalisée**
Vous pouvez ajouter des blocs dynamiques spécifiques à chaque vue avec `@section` et `@yield`. Par exemple, pour ajouter une barre latérale :
1. Modifiez le layout `app.blade.php` :
   
```blade
<main>
    <div class="content">
        @yield('content')
    </div>
    <aside>
        @yield('sidebar')
    </aside>
</main>
```

1. Dans une vue, ajoutez la section :
   
```blade
@section('sidebar')
    <h3>Catégories</h3>
    <ul>
        <li>Laravel</li>
        <li>PHP</li>
        <li>Programmation Web</li>
    </ul>
@endsection
```

---

## **Étape 3 : Créer et utiliser des composants Blade**

### **A. Pourquoi utiliser des composants ?**
Les composants sont idéaux pour réutiliser des morceaux de code répétitifs, comme des cartes ou des boutons.

### **B. Création d’un composant Blade**
1. Exécutez la commande suivante pour créer un composant :
   
   ```bash
   php artisan make:component ArticleCard
   ```

2. Cela génère deux fichiers :
   - `app/View/Components/ArticleCard.php`
   - `resources/views/components/article-card.blade.php`

3. Modifiez le fichier `ArticleCard.php` :
   
```php
namespace App\View\Components;

use Illuminate\View\Component;

class ArticleCard extends Component
{
    public $article;

    public function __construct($article)
    {
        $this->article = $article;
    }

    public function render()
    {
        return view('components.article-card');
    }
}
```

1. Modifiez le fichier `article-card.blade.php` :
   
```blade
<div class="article-card">
    <h3>{{ $article['title'] }}</h3>
    <p>{{ Str::limit($article['content'], 100) }}</p>
    <a href="{{ route('articles.show', $article['id']) }}">Lire la suite</a>
</div>
```

1. Utilisez le composant dans une vue (`index.blade.php`) :
   
```blade
@extends('layouts.app')

@section('content')
    <h2>Liste des Articles</h2>
    @foreach ($articles as $article)
        <x-article-card :article="$article" />
    @endforeach
@endsection
```

## **Étape 4 : Inclure des sous-vues**

### **A. Quand utiliser `@include` ?**
`@include` est utile pour intégrer des sous-vues simples, comme des messages ou des formulaires partiels.

### **B. Exemple : Afficher un message de succès**
1. Créez un fichier `resources/views/partials/flash-message.blade.php` :
   
```blade
@if (session('success'))
    <div class="alert alert-success">
        {{ session('success') }}
    </div>
@endif
```

1. Ajoutez l’inclusion dans une vue :
   
```blade
@include('partials.flash-message')
```


## **Étape 5 : Structuration des fichiers de vues**

Pour maintenir un projet organisé, suivez cette structure :

```
resources/views
├── articles
│   ├── index.blade.php
│   ├── create.blade.php
│   ├── show.blade.php
│   └── edit.blade.php
├── components
│   └── article-card.blade.php
├── layouts
│   └── app.blade.php
└── partials
    └── flash-message.blade.php
```


## **Étape 6 : Ajouter des styles personnalisés**

1. Ajoutez un fichier CSS personnalisé dans `public/css/app.css` :
   
```css
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

header, footer {
    background: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
}

.article-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 10px;
}
```

1. Vérifiez que le fichier CSS est inclus dans le layout global :
   
```blade
<link rel="stylesheet" href="{{ asset('css/app.css') }}">
```

---

## **Conclusion**

Dans ce tutoriel, vous avez appris à :  
- Créer des layouts et des sections Blade.
- Réutiliser du code avec des composants et des inclusions.
- Organiser les fichiers pour un projet maintenable.

Ces pratiques permettent de créer des applications Laravel propres et évolutives, prêtes pour des fonctionnalités plus complexes dans les prochains tutoriels ! 🎉