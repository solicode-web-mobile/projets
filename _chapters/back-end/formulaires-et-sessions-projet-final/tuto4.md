---
reference: formulaires-et-sessions-projet-final-tuto4
slug: tuto4
module_reference: back-end
part_reference: formulaires-et-sessions-projet-final
concept_reference: ''
title: Tuto 4 - 
description: ''
order: 146
directory: formulaires-et-sessions-projet-final
permalink: formulaires-et-sessions-projet-final/tuto4
layout: chapters
---


## Étape 1 : Installation d’un nouveau projet Laravel

1. **Créer un projet Laravel 11** :
   ```bash
   composer create-project laravel/laravel minimal-auth
   cd minimal-auth
   ```

2. **Lancer le serveur de développement** :
   ```bash
   php artisan serve
   ```
   Accédez à votre application sur [http://localhost:8000](http://localhost:8000).

---

## Étape 2 : Configuration de la base de données

1. Configurez votre fichier `.env` avec les informations de la base de données :
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=laravel_auth
   DB_USERNAME=root
   DB_PASSWORD=
   ```

2. **Migrate les tables par défaut** :
   Laravel vient avec un système d'authentification par défaut (table `users`), nous allons l'utiliser :
   ```bash
   php artisan migrate
   ```



Utiliser un **seeder** est une manière propre et efficace d'insérer des données dans la base de données, particulièrement utile pendant le développement. Voici comment l'ajouter à notre projet Laravel.

---

## *2 : Utiliser un Seeder pour ajouter un utilisateur**

### **1. Créer un Seeder**

Exécutez la commande artisan pour générer un seeder :

```bash
php artisan make:seeder UserSeeder
```

Cette commande crée un fichier dans `database/seeders/UserSeeder.php`.



### **2. Configurer le Seeder**

Modifiez le fichier `database/seeders/UserSeeder.php` pour ajouter un utilisateur :

```php
<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'password' => bcrypt('password123'), // Hachage sécurisé du mot de passe
        ]);
    }
}
```


### **3. Exécuter le Seeder**

1. Enregistrez le seeder dans `DatabaseSeeder.php` pour qu’il soit exécuté :

   Modifiez `database/seeders/DatabaseSeeder.php` :
   ```php
   <?php

   namespace Database\Seeders;

   use Illuminate\Database\Seeder;

   class DatabaseSeeder extends Seeder
   {
       /**
        * Seed the application's database.
        *
        * @return void
        */
       public function run()
       {
           $this->call(UserSeeder::class);
       }
   }
   ```

2. Exécutez le seeder pour insérer les données dans la base de données :
   ```bash
   php artisan db:seed
   ```


## Étape 3 : Création du Middleware Personnalisé

1. **Créer un middleware** :
   ```bash
   php artisan make:middleware AuthMiddleware
   ```

2. **Configurer le middleware** :  
   Modifiez `app/Http/Middleware/AuthMiddleware.php` :
   ```php
   <?php

   namespace App\Http\Middleware;

   use Closure;
   use Illuminate\Http\Request;
   use Illuminate\Support\Facades\Auth;

   class AuthMiddleware
   {
       /**
        * Handle an incoming request.
        *
        * @param  \Illuminate\Http\Request  $request
        * @param  \Closure  $next
        * @return mixed
        */
       public function handle(Request $request, Closure $next)
       {
           if (!Auth::check()) {
               return redirect('/login');
           }
           return $next($request);
       }
   }
   ```

---

## Étape 4 : Enregistrement de l'alias global dans `bootstrap/app.php`

Puisque `Kernel.php` n'est plus utilisé dans Laravel 11, nous enregistrons le middleware directement dans `bootstrap/app.php`.

1. **Modifier `bootstrap/app.php`** :
   Ajoutez le middleware au tableau des middlewares globaux :

```php
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->alias([
            'auth.middleware' => App\Http\Middleware\AuthMiddleware::class
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
 })->create();
```

---

## Étape 5 : Création des routes

1. **Définir les routes** :  
   Modifiez `routes/web.php` :
   ```php
   use Illuminate\Support\Facades\Route;

   Route::get('/login', [\App\Http\Controllers\AuthController::class, 'showLoginForm'])->name('login');
   Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);

   Route::middleware('auth.middleware')->group(function () {
       Route::get('/dashboard', [\App\Http\Controllers\AdminController::class, 'dashboard'])->name('dashboard');
   });
   ```

---

## Étape 6 : Création des Contrôleurs

1. **Créer le contrôleur d'authentification** :
   ```bash
   php artisan make:controller AuthController
   ```

   Modifiez `app/Http/Controllers/AuthController.php` :
   ```php
   <?php

   namespace App\Http\Controllers;

   use Illuminate\Http\Request;
   use Illuminate\Support\Facades\Auth;

      class AuthController extends Controller
   {
       public function showLoginForm()
       {
           return view('auth.login');
       }

       public function login(Request $request)
       {
           $credentials = $request->only('email', 'password');

           if (Auth::attempt($credentials)) {
               return redirect()->route('dashboard');
           }

           return back()->withErrors(['email' => 'Invalid credentials.']);
       }
   }
   ```

2. **Créer le contrôleur d’administration** :
   ```bash
   php artisan make:controller AdminController
   ```

   Modifiez `app/Http/Controllers/AdminController.php` :
   ```php
   <?php

   namespace App\Http\Controllers;

   class AdminController extends Controller
   {
       public function dashboard()
       {
           return view('admin.dashboard');
       }
   }
   ```

---

## Étape 7 : Création des Vues

1. **Vue de connexion** (`resources/views/auth/login.blade.php`) :
   ```html
   {% raw %}
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Login</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
   </head>
   <body>
       <div class="container mt-5">
           <div class="row justify-content-center">
               <div class="col-md-4">
                   <h3 class="text-center mb-4">Login</h3>
                   <form action="{{ route('login') }}" method="POST">
                       @csrf
                       <div class="mb-3">
                           <label for="email" class="form-label">Email</label>
                           <input type="email" name="email" class="form-control" required>
                       </div>
                       <div class="mb-3">
                           <label for="password" class="form-label">Password</label>
                           <input type="password" name="password" class="form-control" required>
                       </div>
                       <button type="submit" class="btn btn-primary w-100">Login</button>
                   </form>
               </div>
           </div>
       </div>
   </body>
   </html>
   {% endraw %}
   ```

2. **Vue du tableau de bord** (`resources/views/admin/dashboard.blade.php`) :
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Dashboard</title>
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
   </head>
   <body>
       <div class="container mt-5">
           <h1>Welcome to the Dashboard</h1>
           <a href="/logout" class="btn btn-danger mt-3">Logout</a>
       </div>
   </body>
   </html>
   ```

---

## Étape 8 : Tester l’application

1. Démarrez le serveur avec `php artisan serve`.
2. Accédez à [http://localhost:8000/login](http://localhost:8000/login) pour tester la connexion.
3. Si l'utilisateur est connecté, il sera redirigé vers `/dashboard`.

---

Et voilà ! Vous avez maintenant une application Laravel minimaliste avec un système d'authentification basé sur un middleware personnalisé.