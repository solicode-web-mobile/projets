---
reference: univers-laravel-installation-premiers-pas
slug: installation-premiers-pas
module_reference: back-end
part_reference: univers-laravel
concept_reference: ''
title: Tuto1 - Installation de Laravel et premiers pas
description: ''
order: 103
global_order: '49'
directory: univers-laravel
permalink: univers-laravel/installation-premiers-pas
layout: chapters
---

#  Installation de Laravel et premiers pas : Construisez votre premier projet

## Installation de Laravel
* **Prérequis:** Assurez-vous d'avoir installé PHP (version 7.4 ou supérieure) et Composer sur votre machine.
* **Installation globale de Laravel Installer:** Pour une installation rapide, exécutez la commande suivante dans votre terminal :
  ```bash
  composer global require laravel/installer
  ```
* **Création d'un nouveau projet:** Choisissez un répertoire pour votre projet et exécutez la commande :
  ```bash
  laravel new mon-projet
  ```
  Remplacez "mon-projet" par le nom souhaité pour votre projet.

## Structure d'un projet Laravel
* **Le fichier `composer.json`:** Ce fichier contient les dépendances de votre projet.
* **Le dossier `app`:** C'est le cœur de votre application, il contient les modèles, les contrôleurs, etc.
* **Le dossier `config`:** Ici se trouvent les fichiers de configuration de votre application.
* **Le dossier `database`:** Il contient les migrations et les seeders pour gérer votre base de données.
* **Le dossier `public`:** C'est le répertoire public accessible depuis un navigateur.
* **Le fichier `.env`:** Ce fichier contient les variables d'environnement de votre application.

## Serveur de développement
* **Le serveur Laravel:** Laravel inclut un serveur de développement pratique. Pour le démarrer, placez-vous à la racine de votre projet et exécutez :
  ```bash
  php artisan serve
  ```
  Votre application sera alors accessible à l'adresse http://127.0.0.1:8000.

## Création d'une première route
* **Le fichier `routes/web.php`:** C'est ici que vous définissez les routes de votre application.
* **Une route simple:** Ajoutez la route suivante pour afficher un message :
  ```php
  Route::get('/', function () {
      return 'Hello, Laravel!';
  });
  ```
  Accédez à http://127.0.0.1:8000 dans votre navigateur pour voir le résultat.

## Création d'une page "À propos"
* **Création d'une vue:** Créez un fichier `resources/views/about.blade.php` avec le contenu suivant :
  ```html
  <h1>À propos</h1>
  <p>Je suis [Votre Nom], développeur Laravel.</p>
  ```
* **Création d'une route:** Ajoutez une route pour afficher cette vue :
  ```php
  Route::get('/about', function () {
      return view('about');
  });
  ```
  Accédez à http://127.0.0.1:8000/about pour voir votre page "À propos".

## Conclusion
Vous venez de créer votre première application Laravel et d'afficher votre première page ! Félicitations ! 

**Points clés à retenir:**
* L'installation de Laravel est simple et rapide grâce à Composer.
* La structure d'un projet Laravel est bien organisée.
* Le serveur de développement intégré facilite le développement.
* Le moteur de templates Blade permet de créer des vues dynamiques.
* Le routage est au cœur du fonctionnement de Laravel.

