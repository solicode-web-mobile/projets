---
reference: eloquent-avancé-tuto13
slug: tuto13
module_reference: db
part_reference: eloquent-avancé
concept_reference: ''
title: tuto13
description: ''
order: 159
directory: db/eloquent-avancé
permalink: db/eloquent-avancé/tuto13
layout: chapters
---
### **Tutoriel 4 : Authentification avec Laravel UI**

---

## **Objectif pédagogique**  
Apprendre à implémenter un système d’authentification complet dans une application Laravel à l’aide de **Laravel UI**, y compris les fonctionnalités de connexion, enregistrement, réinitialisation du mot de passe, et gestion des utilisateurs connectés.

---

## **Concepts abordés**  
- Installation et configuration de Laravel UI.  
- Génération des vues d’authentification.  
- Fonctionnement des middleware pour protéger les routes.  
- Gestion des utilisateurs connectés.  

---

## **Explication théorique**  
Laravel UI fournit une interface de base pour intégrer rapidement l'authentification dans une application Laravel. Il offre des vues préconçues pour l’enregistrement, la connexion, et la réinitialisation de mot de passe, tout en utilisant les fonctionnalités de session et middleware pour protéger les routes sensibles.

---

## **Étapes**

### **Étape 1 : Installer Laravel UI**
1. Installer Laravel UI via Composer :
   ```bash
   composer require laravel/ui
   ```
2. Générer les fichiers d’authentification avec Bootstrap :
   ```bash
   php artisan ui bootstrap --auth
   npm install && npm run dev
   ```

### **Étape 2 : Vérifier les routes et les vues générées**
1. Après exécution, Laravel UI crée automatiquement les routes d'authentification dans le fichier `routes/web.php` :
   ```php
   Auth::routes();
   ```
   Ces routes incluent :  
   - `/login` : Page de connexion.  
   - `/register` : Page d’enregistrement.  
   - `/password/reset` : Page de réinitialisation du mot de passe.  
   - `/home` : Tableau de bord des utilisateurs connectés.

2. Accéder aux vues générées dans le dossier `resources/views/auth`.

### **Étape 3 : Tester l’authentification**
1. Démarrer le serveur local :
   ```bash
   php artisan serve
   ```
2. Accéder à l’application et tester les fonctionnalités suivantes :
   - **Enregistrement** : Créer un nouveau compte.  
   - **Connexion** : Se connecter avec les identifiants créés.  
   - **Réinitialisation du mot de passe** : Demander un lien de réinitialisation.  

### **Étape 4 : Protéger les routes**
1. Utiliser le middleware `auth` pour protéger les routes sensibles :
   - Exemple dans `routes/web.php` :
     ```php
     Route::get('/dashboard', function () {
         return view('dashboard');
     })->middleware('auth');
     ```
2. Rediriger les utilisateurs non authentifiés vers la page de connexion.

### **Étape 5 : Gérer les utilisateurs connectés**
1. Vérifier l’état de l’utilisateur connecté :
   - Dans un contrôleur ou une vue :
     ```php
     $user = Auth::user(); // Récupérer l'utilisateur connecté
     echo $user->name;
     ```
2. Vérifier si un utilisateur est connecté :
   ```php
   if (Auth::check()) {
       echo "Utilisateur connecté";
   }
   ```

---

## **Exercice**
1. Ajouter une redirection personnalisée pour les utilisateurs connectés après la connexion :
   - Modifier le contrôleur `LoginController` :
     ```php
     protected $redirectTo = '/dashboard';
     ```
2. Créer un tableau de bord personnalisé pour afficher le nom de l’utilisateur connecté, la date de création de son compte, et une liste d’articles associés à son compte (relation avec le modèle Article).  

---

## **Conclusion**  
Avec ce tutoriel, vous avez appris à intégrer rapidement un système d’authentification à une application Laravel en utilisant **Laravel UI**. Ce système inclut toutes les fonctionnalités essentielles pour gérer les utilisateurs, sécuriser les routes, et créer une expérience utilisateur fluide. Ces bases sont essentielles pour la gestion des accès et des autorisations dans des applications plus complexes.