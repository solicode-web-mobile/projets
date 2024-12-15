---
reference: eloquent-avancé-tuto11
slug: tuto11
module_reference: db
part_reference: eloquent-avancé
concept_reference: ''
title: tuto11
description: ''
order: 159
directory: db/eloquent-avancé
permalink: db/eloquent-avancé/tuto11
layout: chapters
---

### **Tutoriel 2 : Relations avancées - many-to-many**

---

## **Objectif pédagogique**  
Apprendre à configurer et manipuler une relation many-to-many dans Laravel, en utilisant une table pivot. L'objectif est de permettre aux **articles** d'être associés à plusieurs **tags**, et inversement.

---

## **Concepts abordés**  
- Relation `belongsToMany` pour gérer une association multiple.  
- Utilisation d’une table pivot pour relier deux modèles.  
- Manipulation des relations many-to-many avec Eloquent.  
- Ajout et suppression des relations via la table pivot.  

---

## **Explication théorique**  
Dans une relation many-to-many, un enregistrement dans un modèle peut être lié à plusieurs enregistrements dans un autre modèle, et réciproquement.  
Laravel gère cette relation à l’aide d’une table pivot qui contient les IDs des deux modèles liés. Par exemple :  
- Un article peut avoir plusieurs tags.  
- Un tag peut être associé à plusieurs articles.

---

## **Étapes**

### **Étape 1 : Créer la table pivot**
1. Générer une migration pour la table pivot :
   ```bash
   php artisan make:migration create_article_tag_table
   ```
2. Configurer la migration pour la table pivot :
   ```php
   Schema::create('article_tag', function (Blueprint $table) {
       $table->id();
       $table->foreignId('article_id')->constrained('articles')->onDelete('cascade');
       $table->foreignId('tag_id')->constrained('tags')->onDelete('cascade');
       $table->timestamps();
   });
   ```
   - **article_id** : Référence l’ID d’un article.  
   - **tag_id** : Référence l’ID d’un tag.

3. Exécuter les migrations :
   ```bash
   php artisan migrate
   ```

---

### **Étape 2 : Définir les relations dans les modèles**
1. Ajouter la relation dans le modèle **Article** :
   ```php
   class Article extends Model
   {
       public function tags()
       {
           return $this->belongsToMany(Tag::class, 'article_tag');
       }
   }
   ```
2. Ajouter la relation dans le modèle **Tag** :
   ```php
   class Tag extends Model
   {
       public function articles()
       {
           return $this->belongsToMany(Article::class, 'article_tag');
       }
   }
   ```

---

### **Étape 3 : Manipuler les relations**
1. Ajouter des tags à un article via Tinker :
   ```bash
   php artisan tinker
   $article = Article::find(1);
   $tag1 = Tag::create(['name' => 'PHP']);
   $tag2 = Tag::create(['name' => 'Laravel']);
   $article->tags()->attach([$tag1->id, $tag2->id]); // Associer plusieurs tags à un article
   ```

2. Récupérer les tags associés à un article :
   ```bash
   $article->tags;
   ```
3. Récupérer les articles associés à un tag :
   ```bash
   $tag = Tag::find(1);
   $tag->articles;
   ```
4. Supprimer une relation :
   ```bash
   $article->tags()->detach($tag1->id); // Dissocier un tag d’un article
   ```
5. Synchroniser les relations (remplacer toutes les relations existantes) :
   ```bash
   $article->tags()->sync([$tag2->id]); // Garde uniquement le tag avec l'ID 2
   ```

---

### **Étape 4 : Charger les relations**
1. Charger les relations avec Eager Loading pour éviter les problèmes de requêtes multiples :
   ```php
   $articles = Article::with('tags')->get();
   foreach ($articles as $article) {
       echo $article->title . ' : ' . implode(', ', $article->tags->pluck('name')->toArray());
   }
   ```
2. Charger les articles associés à un tag spécifique :
   ```php
   $tags = Tag::with('articles')->get();
   foreach ($tags as $tag) {
       echo $tag->name . ' : ' . implode(', ', $tag->articles->pluck('title')->toArray());
   }
   ```

---

## **Exercice**
1. Ajouter une description à la table pivot `article_tag` pour indiquer un contexte (par exemple, "important", "référencé").
   - Modifiez la migration pour inclure une colonne supplémentaire dans la table pivot.  
   - Testez l'ajout et la récupération de cet attribut via Eloquent.  

2. Créez un formulaire pour associer plusieurs tags à un article dans le backend.  

---

## **Conclusion**  
Ce tutoriel vous a permis de comprendre et de manipuler les relations many-to-many dans Laravel. En utilisant une table pivot, vous pouvez associer plusieurs modèles entre eux, gérer ces relations dynamiquement, et optimiser leur manipulation via Eloquent. Ces notions sont essentielles pour gérer des systèmes complexes comme des tags, des catégories multiples, ou des permissions.