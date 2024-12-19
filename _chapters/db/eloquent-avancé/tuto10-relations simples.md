---
reference: eloquent-avancé-tuto10
slug: tuto10
module_reference: db
part_reference: eloquent-avancé
concept_reference: ''
title: Tuto10 - Relations simples
description: ''
order: 153
directory: db/eloquent-avancé
permalink: db/eloquent-avancé/tuto10
layout: chapters
---

# **Tutoriel 10 : Introduction à la base de données et relations simples**

---

## **Objectif pédagogique**  
Apprendre à structurer une base de données pour une application Laravel, créer des migrations, et définir les relations simples entre les modèles principaux (**User**, **Article**, et **Category**).

---

## **Concepts abordés**  
- Création et utilisation des migrations dans Laravel.  
- Relations simples entre modèles :  
  - **hasOne** : Un utilisateur a un profil unique.  
  - **hasMany** : Un utilisateur possède plusieurs articles.  
  - **belongsTo** : Un article appartient à un utilisateur et à une catégorie.

---

## **Explication théorique**  
Les migrations sont un moyen structuré de créer et de modifier des tables dans une base de données. Elles permettent de versionner les modifications et de garantir la cohérence de la base de données sur différents environnements.  

Les relations simples entre modèles se définissent ainsi :  
- **hasOne** : Relation un-à-un, utilisée pour associer une entité unique à un modèle.  
- **hasMany** et **belongsTo** : Relations un-à-plusieurs, utilisées pour lier plusieurs enregistrements à un modèle ou pour indiquer qu'un enregistrement appartient à un modèle parent.

---

## **Étapes**

### **Étape 1 : Création des migrations**
1. Générer les migrations avec Artisan :
   ```bash
   php artisan make:migration create_users_table
   php artisan make:migration create_articles_table
   php artisan make:migration create_categories_table
   ```
2. Configurer la migration pour la table `articles` :
   ```php
   Schema::create('articles', function (Blueprint $table) {
       $table->id();
       $table->string('title');
       $table->text('content');
       $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
       $table->foreignId('category_id')->constrained('categories')->onDelete('cascade');
       $table->timestamps();
   });
   ```

### **Étape 2 : Créer les modèles**
1. Générer les modèles avec Artisan :
   ```bash
   php artisan make:model User
   php artisan make:model Article
   php artisan make:model Category
   ```
2. Ajouter les relations dans le modèle **User** :
   ```php
   class User extends Model
   {
       public function articles()
       {
           return $this->hasMany(Article::class);
       }
   }
   ```
3. Ajouter les relations dans le modèle **Article** :
   ```php
   class Article extends Model
   {
       public function user()
       {
           return $this->belongsTo(User::class);
       }

       public function category()
       {
           return $this->belongsTo(Category::class);
       }
   }
   ```
4. Ajouter les relations dans le modèle **Category** :
   ```php
   class Category extends Model
   {
       public function articles()
       {
           return $this->hasMany(Article::class);
       }
   }
   ```

### **Étape 3 : Exécuter les migrations**
1. Exécuter les migrations pour créer les tables dans la base de données :
   ```bash
   php artisan migrate
   ```

### **Étape 4 : Tester les relations avec Tinker**
1. Insérer des données test :
   ```bash
   php artisan tinker
   $user = User::create(['name' => 'John Doe', 'email' => 'john@example.com', 'password' => bcrypt('password')]);
   $category = Category::create(['name' => 'Laravel']);
   $article = Article::create(['title' => 'Introduction to Laravel', 'content' => 'Lorem ipsum...', 'user_id' => $user->id, 'category_id' => $category->id]);
   ```
2. Vérifier les relations :
   - Récupérer les articles d’un utilisateur :
     ```bash
     $user->articles;
     ```
   - Récupérer l’utilisateur d’un article :
     ```bash
     $article->user;
     ```
   - Récupérer les articles d’une catégorie :
     ```bash
     $category->articles;
     ```

---

## **Exercice**
1. Ajouter une relation **hasOne** entre **User** et un modèle **Profile** (nom, bio, photo).  
2. Tester la création et la récupération des données via Tinker :
   - Créer un utilisateur avec un profil.
   - Récupérer le profil associé à un utilisateur.

---

## **Conclusion**
Ce tutoriel introduit les bases de la création de tables et de relations simples dans Laravel. Vous avez appris à modéliser une base de données pour une application de blog avec des relations comme **hasMany** et **belongsTo**, tout en testant leur fonctionnement. Ces connaissances sont fondamentales pour concevoir des applications robustes.