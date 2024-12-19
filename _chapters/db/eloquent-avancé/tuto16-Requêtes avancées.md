---
reference: eloquent-avancé-tuto16
slug: tuto16
module_reference: db
part_reference: eloquent-avancé
concept_reference: ''
title: Tuto16 -  Requêtes avec Eloquent
description: ''
order: 159
directory: db/eloquent-avancé
permalink: db/eloquent-avancé/tuto16
layout: chapters
---

# **Tutoriel 16 : Requêtes avancées avec Eloquent**

---

## **Objectif pédagogique**  
Apprendre à manipuler efficacement les données dans Laravel à l’aide d’Eloquent ORM en utilisant des requêtes avancées comme les filtres conditionnels, le tri, et la pagination.

---

## **Concepts abordés**  
- Utilisation des méthodes Eloquent pour les filtres (`where`, `orWhere`, `whereBetween`, `whereIn`).  
- Tri des données avec `orderBy`.  
- Gestion de la pagination avec `paginate`.  
- Filtrage dynamique via des requêtes conditionnelles.  

---

## **Explication théorique**  
Eloquent ORM offre des méthodes puissantes pour interagir avec la base de données de manière fluide et intuitive. Les filtres et les tris permettent de récupérer des données spécifiques ou organisées selon des critères définis. La pagination facilite l’affichage des résultats volumineux.

---

## **Étapes**

### **Étape 1 : Appliquer des filtres simples**
1. Utilisez `where` pour récupérer des articles d’un utilisateur spécifique :
   ```php
   $articles = Article::where('user_id', 1)->get();
   ```
2. Combinez plusieurs conditions :
   ```php
   $articles = Article::where('status', 'published')
                      ->where('category_id', 3)
                      ->get();
   ```
3. Utilisez `orWhere` pour appliquer des filtres alternatifs :
   ```php
   $articles = Article::where('status', 'draft')
                      ->orWhere('user_id', 2)
                      ->get();
   ```

### **Étape 2 : Appliquer des filtres complexes**
1. Utilisez `whereBetween` pour filtrer par plage de dates :
   ```php
   $articles = Article::whereBetween('created_at', ['2024-01-01', '2024-12-31'])->get();
   ```
2. Utilisez `whereIn` pour récupérer plusieurs valeurs :
   ```php
   $articles = Article::whereIn('category_id', [1, 2, 3])->get();
   ```
3. Excluez des valeurs avec `whereNotIn` :
   ```php
   $articles = Article::whereNotIn('category_id', [4, 5])->get();
   ```

### **Étape 3 : Trier les résultats**
1. Utilisez `orderBy` pour trier les articles par date de création :
   ```php
   $articles = Article::orderBy('created_at', 'desc')->get();
   ```
2. Combinez plusieurs tris :
   ```php
   $articles = Article::orderBy('category_id')
                      ->orderBy('created_at', 'desc')
                      ->get();
   ```

### **Étape 4 : Gérer la pagination**
1. Utilisez `paginate` pour diviser les résultats en pages :
   ```php
   $articles = Article::paginate(10); // 10 articles par page
   ```
2. Intégrez la pagination dans une vue :
   - Dans le contrôleur :
     ```php
     public function index()
     {
         $articles = Article::paginate(10);
         return view('articles.index', compact('articles'));
     }
     ```
   - Dans la vue :
     ```blade
     @foreach ($articles as $article)
         <p>{{ $article->title }}</p>
     @endforeach

     {{ $articles->links() }}
     ```

### **Étape 5 : Filtrage dynamique avec des requêtes conditionnelles**
1. Implémentez des filtres dynamiques en fonction des entrées utilisateur :
   - Exemple avec un formulaire de recherche :
     ```php
     $query = Article::query();

     if (request('category_id')) {
         $query->where('category_id', request('category_id'));
     }

     if (request('status')) {
         $query->where('status', request('status'));
     }

     $articles = $query->paginate(10);
     ```
2. Créez une vue pour afficher les résultats filtrés.

---

## **Exercice**
1. Implémentez un filtre combinant plusieurs critères (ex. : **catégorie**, **état**, et **date**).
2. Ajoutez une option pour trier les articles par ordre alphabétique ou par nombre de vues.
3. Intégrez la pagination dans une vue et personnalisez le style des liens de navigation.

---

## **Conclusion**  
Ce tutoriel a démontré comment utiliser Eloquent ORM pour exécuter des requêtes avancées et gérer les données efficacement. Ces compétences permettent de fournir des fonctionnalités puissantes aux utilisateurs, comme des systèmes de recherche, de tri, et de filtrage adaptés à leurs besoins.
