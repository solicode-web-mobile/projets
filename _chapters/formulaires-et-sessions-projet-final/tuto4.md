---
reference: formulaires-et-sessions-projet-final-tuto4
slug: tuto4
module_reference: back-end
part_reference: formulaires-et-sessions-projet-final
concept_reference: ''
title: Tuto 4 - 
description: ''
order: 135
directory: formulaires-et-sessions-projet-final
permalink: formulaires-et-sessions-projet-final/tuto4
layout: chapters
---

# **Tutoriel 4 : Middleware et Gestion des Accès**

Le middleware dans Laravel est une couche intermédiaire qui intercepte les requêtes HTTP pour appliquer des règles ou des transformations avant qu'elles atteignent le contrôleur. Ce tutoriel couvre l'utilisation du middleware pour restreindre l'accès à certaines parties de votre application, en se basant sur des rôles ou des conditions spécifiques.

## **Objectifs**
- Comprendre le rôle du middleware dans Laravel.
- Créer et utiliser un middleware personnalisé.
- Mettre en place une gestion des rôles pour sécuriser l’accès à certaines routes.

---

## **Étape 1 : Comprendre le middleware dans Laravel**

Le middleware agit comme une "passoire" qui filtre les requêtes avant qu'elles atteignent les contrôleurs. Quelques exemples intégrés :  
- **`auth`** : Vérifie si l'utilisateur est authentifié.  
- **`verified`** : Vérifie si l'adresse e-mail de l'utilisateur est vérifiée.  
- **`throttle`** : Limite le nombre de requêtes pour éviter les abus.

### **A. Exemple simple d'utilisation**
Appliquez le middleware `auth` à une route :
```php
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware('auth');
```

---

## **Étape 2 : Créer un middleware personnalisé**

### **A. Générer un middleware**
Exécutez la commande suivante pour créer un middleware :
```bash
php artisan make:middleware CheckRole
```

Cela génère un fichier dans `app/Http/Middleware/CheckRole.php`.

### **B. Implémentation du middleware**
Modifiez le fichier pour restreindre l’accès en fonction d’un rôle :
```php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRole
{
    public function handle(Request $request, Closure $next, $role)
    {
        if (!$request->user() || $request->user()->role !== $role) {
            return redirect('home')->with('error', 'Accès non autorisé.');
        }

        return $next($request);
    }
}
```

### **C. Enregistrer le middleware**
Ajoutez-le à la liste des middlewares dans `app/Http/Kernel.php` :
```php
protected $routeMiddleware = [
    // Autres middlewares
    'role' => \App\Http\Middleware\CheckRole::class,
];
```

---

## **Étape 3 : Appliquer le middleware à des routes**

### **A. Exemple avec un rôle spécifique**
Appliquez le middleware `role` aux routes nécessitant un accès administrateur :
```php
Route::middleware(['role:admin'])->group(function () {
    Route::get('/admin/dashboard', [AdminController::class, 'dashboard']);
    Route::resource('/admin/articles', AdminArticleController::class);
});
```

---

## **Étape 4 : Gestion des rôles dans la base de données**

### **A. Ajouter une colonne `role` à la table `users`**
Créez une migration pour ajouter le rôle :
```bash
php artisan make:migration add_role_to_users_table --table=users
```

Dans le fichier de migration généré, ajoutez :
```php
public function up()
{
    Schema::table('users', function (Blueprint $table) {
        $table->string('role')->default('user'); // Rôle par défaut : utilisateur classique
    });
}
```

Appliquez la migration :
```bash
php artisan migrate
```

### **B. Modifier le modèle User**
Ajoutez `role` au tableau `$fillable` dans `app/Models/User.php` :
```php
protected $fillable = [
    'name',
    'email',
    'password',
    'role',
];
```

---

## **Étape 5 : Ajouter des restrictions basées sur le middleware**

### **A. Exemple : Limiter l'accès au panneau d'administration**
Dans le contrôleur `AdminController`, vérifiez si l'utilisateur est administrateur :
```php
public function __construct()
{
    $this->middleware('role:admin');
}
```

---

## **Étape 6 : Tester avec des utilisateurs différents**

### **A. Créez un utilisateur avec un rôle admin**
Dans Tinker ou via un Seeder, ajoutez un administrateur :
```bash
php artisan tinker
```
```php
\App\Models\User::create([
    'name' => 'Admin User',
    'email' => 'admin@example.com',
    'password' => bcrypt('password'),
    'role' => 'admin',
]);
```

### **B. Tester l'accès**
1. Connectez-vous avec un utilisateur ayant le rôle `user`.
2. Essayez d'accéder à une route protégée (`/admin/dashboard`). Vous serez redirigé vers `home` avec un message d'erreur.
3. Connectez-vous avec un administrateur. Vous devriez avoir accès.

---

## **Étape 7 : Ajouter des messages d’erreur et des vues conviviales**

### **A. Gestion des messages**
Dans `resources/views/layouts/app.blade.php`, affichez les erreurs de session :
```blade
@if (session('error'))
    <div class="alert alert-danger">
        {{ session('error') }}
    </div>
@endif
```

### **B. Créer une page personnalisée pour accès refusé**
Créez une vue `resources/views/errors/403.blade.php` :
```blade
@extends('layouts.app')

@section('content')
    <h1>403 - Accès Refusé</h1>
    <p>Vous n'avez pas la permission d'accéder à cette page.</p>
@endsection
```

Dans le middleware, remplacez la redirection par une réponse avec code 403 :
```php
return response()->view('errors.403', [], 403);
```

---

## **Étape 8 : Ajouter un middleware global pour un accès commun**

Si vous souhaitez appliquer un middleware à toutes les routes, ajoutez-le à la propriété `$middleware` dans `app/Http/Kernel.php` :
```php
protected $middleware = [
    \App\Http\Middleware\CheckRole::class,
];
```

---

## **Étape 9 : Protection des formulaires avec middleware**

Vous pouvez aussi protéger les actions POST avec un middleware. Exemple : les routes pour créer ou modifier un article ne sont accessibles qu'aux administrateurs :
```php
Route::middleware('role:admin')->group(function () {
    Route::post('/articles', [ArticleController::class, 'store']);
    Route::put('/articles/{id}', [ArticleController::class, 'update']);
});
```

---

## **Conclusion**

Avec ce tutoriel, vous avez appris :  
- À utiliser le middleware pour gérer les accès.  
- À créer un middleware personnalisé pour des contrôles spécifiques.  
- À intégrer un système de rôles dans une application Laravel.  

Ce système peut être étendu pour inclure des rôles multiples ou une gestion plus fine des permissions via des packages comme **Spatie Laravel-Permission** pour des projets plus complexes. 🎉