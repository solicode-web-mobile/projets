---
reference: univers-laravel-moteur-templates-blade
slug: moteur-templates-blade
module_reference: back-end
part_reference: univers-laravel
concept_reference: ''
title: Tuto2 - Le moteur de templates Blade
description: ''
order: 53
global_order: '49'
directory: univers-laravel
permalink: univers-laravel/moteur-templates-blade
layout: chapters
---

#  Le moteur de templates Blade : Créez des vues dynamiques et esthétiques

## Introduction au moteur de templates Blade

Blade est le moteur de templates par défaut de Laravel. Il vous permet de créer des vues HTML de manière élégante et expressive, tout en intégrant de la logique PHP. Blade est conçu pour être intuitif et s'intègre parfaitement à l'architecture MVC de Laravel.

## Les bases de Blade
* **Les fichiers Blade:** Les vues Blade sont stockées dans le répertoire `resources/views`. Elles utilisent l'extension `.blade.php`.
* **Les directives Blade:** Blade introduit des directives qui commencent par `@` pour contrôler l'affichage, les boucles, les conditions, etc.
* **Les expressions Blade:** Vous pouvez afficher des variables PHP directement dans vos vues en les entourant de doubles accolades : {% raw %} `{{ $variable }}`.{% endraw %}

## Création d'une page d'accueil
1. **Création d'un layout:**
   * Créez un fichier `resources/views/layouts/app.blade.php` pour définir la structure de base de vos pages :
     ```html
     <!DOCTYPE html>
     <html>
     <head>
         <title>Mon application Laravel</title>
     </head>
     <body>
         @yield('content')
     </body>
     </html>
     ```
   * La directive `@yield('content')` indique où le contenu spécifique à chaque page sera inséré.

2. **Création de la page d'accueil:**
   * Créez un fichier `resources/views/welcome.blade.php` pour définir le contenu de votre page d'accueil :
     ```html
     @extends('layouts.app')

     @section('content')
         <h1>Bienvenue sur mon site !</h1>
         <p>Ceci est la page d'accueil.</p>
     @endsection
     ```
   * La directive `@extends` indique que cette vue hérite du layout `app.blade.php`.
   * La directive `@section` définit la section `content` du layout.

3. **Modification de la route:**
   * Modifiez la route de votre page d'accueil dans `routes/web.php` :
     ```php
     Route::get('/', function () {
         return view('welcome');
     });
     ```

## Ajout d'un en-tête et d'un pied de page
* **En-tête:** Ajoutez du contenu HTML à votre layout `app.blade.php` dans la section avant `@yield('content')` pour définir votre en-tête.
* **Pied de page:** Ajoutez du contenu HTML à votre layout `app.blade.php` après la section `@yield('content')` pour définir votre pied de page.

**Exemple complet de `layouts/app.blade.php`:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Mon application Laravel</title>
</head>
<body>
    <header>
        <h1>Mon site</h1>
        <nav>
            </nav>
    </header>

    @yield('content')

    <footer>
        &copy; 2023 Tous droits réservés.
    </footer>
</body>
</html>
```

## Les avantages de Blade
* **Syntaxe simple et intuitive:** Blade est facile à apprendre et à utiliser, même pour les débutants.
* **Sécurité:** Blade échappe automatiquement les variables pour prévenir les attaques XSS.
* **Flexibilité:** Blade offre de nombreuses directives pour contrôler l'affichage de votre contenu.
* **Intégration avec Laravel:** Blade s'intègre parfaitement avec les autres fonctionnalités de Laravel.

## En résumé
Dans ce chapitre, vous avez appris à :
* Utiliser le moteur de templates Blade pour créer des vues.
* Définir des layouts pour structurer vos pages.
* Utiliser les directives Blade pour contrôler l'affichage.
* Créer une page d'accueil avec un en-tête et un pied de page.


**Exercices supplémentaires:**
* Personnalisez l'apparence de votre site en ajoutant des styles CSS.
* Créez d'autres pages en utilisant le même layout.
* Explorez les autres directives Blade comme `@if`, `@else`, `@foreach`, etc.