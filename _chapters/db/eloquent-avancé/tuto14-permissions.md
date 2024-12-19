---
reference: eloquent-avancé-tuto14
slug: tuto14
module_reference: db
part_reference: eloquent-avancé
concept_reference: ''
title: Tuto14 - Un système de rôles et permissions
description: ''
order: 157
directory: db/eloquent-avancé
permalink: db/eloquent-avancé/tuto14
layout: chapters
---

# **Tutoriel 14 : Implémentation d'un système de rôles et permissions**

---

## **Objectif pédagogique**  
Apprendre à gérer les rôles et les permissions dans Laravel pour contrôler l’accès aux fonctionnalités et sécuriser les actions en fonction du rôle ou des droits d’un utilisateur.

---

## **Concepts abordés**  
- Création d’un système de rôles et permissions.  
- Gestion des autorisations via les middleware et politiques (policies).  
- Restriction des actions selon les rôles d’un utilisateur (Admin, Rédacteur, Utilisateur).  
- Application des permissions aux routes et contrôleurs.

---

## **Explication théorique**  
Laravel offre plusieurs mécanismes pour gérer les autorisations :

1. **Middleware personnalisés** : Vérifient les rôles ou permissions avant d'autoriser l'accès à une ressource.
2. **Policies (Politiques)** : Définissent des règles pour autoriser ou refuser certaines actions au niveau des modèles ou des ressources.
3. **Gate (Portes)** : Permettent de centraliser des règles simples d'autorisation.

Un système de rôles et permissions peut être conçu de manière flexible pour s'adapter à différentes structures organisationnelles.

---

## **Étapes**

### **Étape 1 : Ajouter une colonne `role` à la table `users`**
1. Créez une migration pour ajouter une colonne `role` :
   ```bash
   php artisan make:migration add_role_to_users_table
   ```
2. Modifiez la migration :
   ```php
   Schema::table('users', function (Blueprint $table) {
       $table->string('role')->default('user'); // Rôles : 'admin', 'editor', 'user'
   });
   ```
3. Exécutez la migration :
   ```bash
   php artisan migrate
   ```

### **Étape 2 : Implémenter les rôles dans le modèle User**
1. Ajoutez une méthode pour vérifier le rôle de l’utilisateur :
   ```php
   public function hasRole($role)
   {
       return $this->role === $role;
   }
   ```

### **Étape 3 : Créer un middleware pour les rôles**
1. Générez un middleware pour vérifier les rôles :
   ```bash
   php artisan make:middleware RoleMiddleware
   ```
2. Modifiez le fichier `app/Http/Middleware/RoleMiddleware.php` :
   ```php
   public function handle($request, Closure $next, $role)
   {
       if (!auth()->check() || !auth()->user()->hasRole($role)) {
           abort(403, 'Access denied');
       }

       return $next($request);
   }
   ```
3. Enregistrez le middleware dans `app/Http/Kernel.php` :
   ```php
   protected $routeMiddleware = [
       'role' => \App\Http\Middleware\RoleMiddleware::class,
   ];
   ```

### **Étape 4 : Appliquer le middleware aux routes**
1. Ajoutez le middleware `role` à des routes spécifiques dans `routes/web.php` :
   ```php
   Route::get('/admin', function () {
       return 'Admin Dashboard';
   })->middleware('role:admin');

   Route::get('/editor', function () {
       return 'Editor Dashboard';
   })->middleware('role:editor');
   ```

### **Étape 5 : Créer des policies pour les permissions**
1. Générez une politique pour le modèle `Article` :
   ```bash
   php artisan make:policy ArticlePolicy
   ```
2. Configurez les règles dans `app/Policies/ArticlePolicy.php` :
   ```php
   public function update(User $user, Article $article)
   {
       return $user->id === $article->user_id || $user->hasRole('admin');
   }

   public function delete(User $user, Article $article)
   {
       return $user->hasRole('admin');
   }
   ```
3. Enregistrez la politique dans `AuthServiceProvider` :
   ```php
   protected $policies = [
       Article::class => ArticlePolicy::class,
   ];
   ```
4. Utilisez la politique dans le contrôleur :
   ```php
   public function update(Request $request, Article $article)
   {
       $this->authorize('update', $article);
       // Logique de mise à jour
   }
   ```

---

## **Exercice**
1. Créez un rôle supplémentaire `manager` et ajoutez des permissions spécifiques pour gérer les utilisateurs sans être admin.  
2. Implémentez une politique pour permettre uniquement aux administrateurs de voir une liste des utilisateurs.
3. Ajoutez une gestion frontend des autorisations pour masquer les actions interdites en fonction du rôle.

---

## **Conclusion**  
Avec ce tutoriel, vous avez appris à implémenter un système de rôles et permissions flexible pour contrôler l’accès aux différentes parties de votre application Laravel. Ce système garantit une gestion fine des autorisations, essentielle pour les applications complexes.
