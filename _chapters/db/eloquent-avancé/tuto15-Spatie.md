---
reference: eloquent-avancé-tuto15
slug: tuto15
module_reference: db
part_reference: eloquent-avancé
concept_reference: ''
title: Tuto15 - Gestion des permissions avec Spatie
description: ''
order: 158
directory: db/eloquent-avancé
permalink: db/eloquent-avancé/tuto15
layout: chapters
---

# **Tutoriel 15 : Gestion avancée des rôles et permissions avec Spatie**  



## **Partie 1 : Utilisation de Spatie de manière simple**  

### **Objectif pédagogique**  
Apprendre à intégrer et utiliser le package **Spatie Laravel Permission** pour gérer les rôles et permissions dans une application Laravel de manière basique.  



### **Concepts abordés**  
- Installation et configuration du package.  
- Définition des rôles et permissions.  
- Protéger les routes et les contrôleurs à l’aide de middlewares.  



### **Explication théorique**  

#### **Introduction au package Spatie Laravel Permission**  
Le package **Spatie Laravel Permission** permet de gérer les rôles et permissions directement dans une base de données. Il facilite l’implémentation des contrôles d’accès et est compatible avec les fonctionnalités Laravel comme les middlewares et policies.  

Les principales fonctionnalités du package incluent :  
1. La création de rôles et permissions via des modèles dédiés.  
2. L’attribution des rôles et permissions aux utilisateurs.  
3. La vérification des autorisations dans les routes, les contrôleurs et les vues.  



#### **Middleware pour les autorisations**  
Le package fournit deux middlewares pour gérer les autorisations au niveau des routes :  

1. **Middleware `permission`**  
   - Vérifie si un utilisateur dispose d'une permission spécifique avant d'accéder à une route.  
   - Exemple :  
     ```php
     Route::get('/dashboard', function () {
         return 'Bienvenue sur le tableau de bord.';
     })->middleware('permission:view dashboard');
     ```  
     Ici, seuls les utilisateurs ayant la permission `view dashboard` peuvent accéder à la route `/dashboard`.  

   - **Vérification de plusieurs permissions**  
     Le middleware peut vérifier plusieurs permissions en utilisant une liste séparée par des virgules :  
     ```php
     Route::get('/manage', function () {
         return 'Gestion des ressources.';
     })->middleware('permission:view dashboard,manage resources');
     ```  
     L'utilisateur doit avoir **toutes** les permissions listées pour accéder à la route.  

2. **Middleware `role`**  
   - Vérifie si un utilisateur a un rôle spécifique.  
   - Exemple :  
     ```php
     Route::get('/admin', function () {
         return 'Bienvenue sur la page admin.';
     })->middleware('role:admin');
     ```  

3. **Personnalisation des réponses en cas de refus d’accès**  
   Si un utilisateur tente d'accéder à une route protégée sans disposer des permissions ou rôles requis, une exception **403 Forbidden** est levée. Vous pouvez personnaliser cette réponse dans le fichier **`Handler.php`** :  
   ```php
   public function render($request, Throwable $exception)
   {
       if ($exception instanceof AuthorizationException) {
           return response()->view('errors.403', [], 403);
       }

       return parent::render($request, $exception);
   }
   ```  



#### **Synthèse des avantages du middleware**  
- **Centralisation** : Simplifie la gestion des accès au niveau des routes.  
- **Flexibilité** : Compatible avec les permissions et rôles dynamiques.  
- **Intégration facile** : Directement enregistré dans `Kernel.php` après l’installation de Spatie.  



### **Étapes**

#### **Étape 1 : Installer et configurer le package**  
1. Installer le package via Composer :  
   ```bash
   composer require spatie/laravel-permission
   ```  

2. Publier les fichiers de configuration et les migrations :  
   ```bash
   php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
   php artisan migrate
   ```  

3. Ajouter le trait `HasRoles` au modèle **User** :  
   ```php
   use Spatie\Permission\Traits\HasRoles;

   class User extends Authenticatable
   {
       use HasRoles;
   }
   ```  



#### **Étape 2 : Initialiser les rôles et permissions avec un Seeder**  
1. Créer un fichier Seeder :  
   ```bash
   php artisan make:seeder RolePermissionSeeder
   ```  

2. Définir les rôles et permissions dans le Seeder :  
   ```php
   use Spatie\Permission\Models\Role;
   use Spatie\Permission\Models\Permission;

   class RolePermissionSeeder extends Seeder
   {
       public function run()
       {
           Role::create(['name' => 'admin']);
           Role::create(['name' => 'editor']);

           Permission::create(['name' => 'view dashboard']);
           Permission::create(['name' => 'edit articles']);

           Role::findByName('admin')->givePermissionTo(Permission::all());
           Role::findByName('editor')->givePermissionTo(['view dashboard', 'edit articles']);
       }
   }
   ```  

3. Exécuter le Seeder pour remplir la base de données :  
   ```bash
   php artisan db:seed --class=RolePermissionSeeder
   ```  



#### **Étape 3 : Protéger les routes et les actions**  
1. Protéger les routes avec des middlewares basés sur les permissions :  
   ```php
   Route::middleware(['permission:view dashboard'])->group(function () {
       Route::get('/dashboard', function () {
           return 'Bienvenue sur le tableau de bord.';
       });
   });
   ```  

2. Vérifier les autorisations dans un contrôleur :  
   ```php
   public function edit()
   {
       if (!auth()->user()->can('edit articles')) {
           abort(403, 'Accès interdit.');
       }

       return view('articles.edit');
   }
   ```  

3. Utiliser Blade pour conditionner des éléments d’interface utilisateur :  
   ```blade
   @can('edit articles')
       <button>Modifier l'article</button>
   @endcan
   ```  



## **Partie 2 : Introduction à notre prototype**  

### **Objectif pédagogique**  
Comprendre et intégrer une gestion centralisée des autorisations dans les contrôleurs grâce à une méthode personnalisée reposant sur **Spatie Laravel Permission**.  



### **Concepts abordés**  
- Gestion dynamique des permissions via la méthode `callAction`.  
- Automatisation des vérifications d’autorisations dans les contrôleurs.  
- Centralisation de la logique pour faciliter la maintenance.  



### **Étapes**

#### **Étape 1 : Implémentation de la méthode centralisée**  
1. Ajouter une méthode `callAction` dans un contrôleur principal :  
   ```php
   namespace Modules\Core\Controllers\Base;

   class AdminController extends AppController
   {
       public function __construct()
       {
           $this->middleware('auth');
       }

       public function callAction($method, $parameters)
       {
           $controller = class_basename(get_class($this));
           $action = $method;

           $permissionName = str_replace(['Controller', '@'], ['', '-'], $controller) . '-' . $action;

           $this->authorize($permissionName);

           return parent::callAction($method, $parameters);
       }
   }
   ```  



#### **Étape 2 : Démonstration pratique**  
1. Créer une permission avec le Seeder :  
   ```php
   Permission::create(['name' => 'index-adminController']);
   Role::findByName('admin')->givePermissionTo('index-adminController');
   ```  

2. Ajouter une route protégée :  
   ```php
   Route::get('/admin/dashboard', [AdminController::class, 'index']);
   ```  

3. Définir l’action `index` dans le contrôleur :  
   ```php
   public function index()
   {
       return 'Bienvenue sur la page admin.';
   }
   ```  



### **Conclusion**  
- **Partie 1** : Vous avez appris à utiliser **Spatie Laravel Permission** pour gérer les rôles et permissions de manière simple.  
- **Partie 2** : Vous avez exploré une méthode centralisée pour intégrer la gestion des permissions au cœur de vos contrôleurs.  

Ce tutoriel constitue une base solide pour mettre en œuvre une gestion des autorisations sécurisée et maintenable dans vos projets Laravel.  