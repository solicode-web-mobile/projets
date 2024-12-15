---
reference: eloquent-avancé-tuto14
slug: tuto14
module_reference: db
part_reference: eloquent-avancé
concept_reference: ''
title: tuto14
description: ''
order: 159
directory: db/eloquent-avancé
permalink: db/eloquent-avancé/tuto14
layout: chapters
---
### **Tutoriel 5 : Sécurisation avec Middleware**

---

## **Objectif pédagogique**  
Comprendre le fonctionnement des middleware dans Laravel et les utiliser pour protéger des routes et des actions sensibles, comme restreindre l’accès à certaines parties de l’application uniquement aux utilisateurs connectés ou ayant un rôle spécifique.

---

## **Concepts abordés**  
- Fonctionnement des middleware dans Laravel.  
- Utilisation des middleware natifs : `auth`, `guest`.  
- Création de middleware personnalisés pour la gestion des rôles et permissions.  
- Application des middleware aux routes et contrôleurs.

---

## **Explication théorique**  
Les middleware dans Laravel sont des filtres qui interceptent les requêtes HTTP avant qu'elles atteignent le contrôleur. Ils permettent :

- De vérifier si l'utilisateur est authentifié.
- De restreindre l’accès en fonction des permissions ou rôles.
- D’ajouter des conditions globales pour toutes les requêtes.

Laravel fournit des middleware natifs comme `auth` pour vérifier si l’utilisateur est connecté et `guest` pour s’assurer qu’il est déconnecté.

---

## **Étapes**

### **Étape 1 : Protéger des routes avec le middleware `auth`**
1. Dans le fichier `routes/web.php`, appliquez le middleware `auth` à une route :
   ```php
   Route::get('/dashboard', function () {
       return view('dashboard');
   })->middleware('auth');
   ```
2. Testez en accédant à `/dashboard` sans être connecté. Laravel redirigera automatiquement vers la page de connexion.

### **Étape 2 : Rediriger les utilisateurs non authentifiés**
1. Modifier le middleware pour personnaliser la redirection :
   - Ouvrir `app/Http/Middleware/Authenticate.php`.
   - Modifier la méthode `redirectTo` pour rediriger les utilisateurs vers une URL personnalisée :
     ```php
     protected function redirectTo($request)
     {
         return route('login');
     }
     ```

### **Étape 3 : Créer un middleware personnalisé**
1. Créez un middleware pour vérifier les rôles :
   ```bash
   php artisan make:middleware CheckRole
   ```
2. Dans `app/Http/Middleware/CheckRole.php` :
   ```php
   public function handle($request, Closure $next, $role)
   {
       if (!auth()->check() || auth()->user()->role !== $role) {
           abort(403, 'Access denied');
       }

       return $next($request);
   }
   ```
3. Enregistrez le middleware dans `app/Http/Kernel.php` :
   ```php
   protected $routeMiddleware = [
       'role' => \App\Http\Middleware\CheckRole::class,
   ];
   ```
4. Appliquez-le à une route :
   ```php
   Route::get('/admin', function () {
       return 'Admin Dashboard';
   })->middleware('role:admin');
   ```

### **Étape 4 : Utiliser plusieurs middleware sur une même route**
- Combinez plusieurs middleware :
  ```php
  Route::get('/settings', function () {
      return 'Settings Page';
  })->middleware(['auth', 'role:admin']);
  ```

### **Étape 5 : Appliquer des middleware globaux**
- Pour exécuter un middleware sur toutes les requêtes, ajoutez-le à `$middleware` dans `app/Http/Kernel.php` :
  ```php
  protected $middleware = [
      \App\Http\Middleware\CheckMaintenanceMode::class,
  ];
  ```

---

## **Exercice**  
1. Créez un middleware pour vérifier si un utilisateur est actif (`is_active` dans la base de données). Appliquez-le à des routes spécifiques.  
2. Implémentez une redirection pour les utilisateurs ayant un rôle spécifique vers un tableau de bord personnalisé.

---

## **Conclusion**  
Avec ce tutoriel, vous avez appris à utiliser les middleware pour sécuriser les routes et filtrer les requêtes en fonction des rôles ou de l’état de l’utilisateur. Les middleware sont essentiels pour garantir la sécurité et la gestion des accès dans les applications Laravel complexes.
