---
reference: eloquent-avancé-tuto12
slug: tuto12
module_reference: db
part_reference: eloquent-avancé
concept_reference: ''
title: tuto12
description: ''
order: 159
directory: db/eloquent-avancé
permalink: db/eloquent-avancé/tuto12
layout: chapters
---

### **Tutoriel 3 : Relations polymorphiques**

---

## **Objectif pédagogique**  
Apprendre à utiliser les relations polymorphiques dans Laravel pour gérer des entités partagées entre plusieurs modèles, comme des **commentaires** pouvant être associés à des **articles**, **vidéos**, ou autres entités.

---

## **Concepts abordés**  
- Définition et fonctionnement des relations polymorphiques.  
- Structure des migrations pour les relations polymorphiques.  
- Configuration des relations dans les modèles Laravel (`morphTo`, `morphMany`).  
- Manipulation et récupération des données via les relations polymorphiques.  

---

## **Explication théorique**  
Les relations polymorphiques permettent à un modèle unique (ex. : **Comment**) d’être associé à plusieurs modèles différents (ex. : **Article**, **Video**) sans nécessiter de colonnes spécifiques pour chaque type de relation.  
Cela se fait via deux colonnes :  
1. **`commentable_id`** : Identifiant de l'entité associée.  
2. **`commentable_type`** : Type du modèle associé (ex. : `Article`, `Video`).  

Ces colonnes permettent à Laravel de gérer dynamiquement les relations.

---

## **Étapes**

### **Étape 1 : Créer la migration**
1. Générer une migration pour la table `comments` :
   ```bash
   php artisan make:migration create_comments_table
   ```
2. Configurer la migration pour inclure les colonnes nécessaires :
   ```php
   Schema::create('comments', function (Blueprint $table) {
       $table->id();
       $table->text('content');
       $table->unsignedBigInteger('commentable_id'); // ID de l'entité associée
       $table->string('commentable_type'); // Type du modèle associé
       $table->timestamps();
   });
   ```

### **Étape 2 : Définir les relations dans les modèles**
1. Dans le modèle **Comment** :
   ```php
   class Comment extends Model
   {
       public function commentable()
       {
           return $this->morphTo();
       }
   }
   ```
2. Dans le modèle **Article** :
   ```php
   class Article extends Model
   {
       public function comments()
       {
           return $this->morphMany(Comment::class, 'commentable');
       }
   }
   ```
3. Dans un autre modèle, par exemple **Video** :
   ```php
   class Video extends Model
   {
       public function comments()
       {
           return $this->morphMany(Comment::class, 'commentable');
       }
   }
   ```

### **Étape 3 : Tester les relations**
1. Lancer les migrations :
   ```bash
   php artisan migrate
   ```
2. Ajouter un commentaire à un article via Tinker :
   ```bash
   php artisan tinker
   $article = Article::find(1);
   $article->comments()->create(['content' => 'Super article !']);
   ```
3. Ajouter un commentaire à une vidéo :
   ```bash
   $video = Video::find(1);
   $video->comments()->create(['content' => 'Vidéo incroyable !']);
   ```

### **Étape 4 : Charger les relations**
1. Charger les commentaires associés à un article :
   ```php
   $article->comments;
   ```
2. Charger l'entité associée à un commentaire :
   ```php
   $comment = Comment::find(1);
   $comment->commentable; // Retourne l'Article ou la Video associé(e)
   ```
3. Charger les relations en une seule requête :
   ```php
   $comments = Comment::with('commentable')->get();
   ```

---

## **Exercice**
1. Étendre la relation polymorphique pour permettre aux **tags** d'avoir des commentaires.  
2. Ajouter une méthode dans le modèle **Comment** pour filtrer les derniers commentaires (ex. : `latest()`).
3. Implémenter une requête pour récupérer tous les commentaires d’un utilisateur sur différents types d'entités (articles, vidéos, etc.).

---

## **Conclusion**  
Les relations polymorphiques sont un outil puissant pour gérer des entités partagées entre plusieurs modèles. Elles permettent une conception flexible et modulaire, évitant la prolifération de tables spécifiques. Avec cette implémentation, vous pouvez associer des commentaires ou autres entités similaires à divers types de contenu, comme des articles, des vidéos, ou des tags.