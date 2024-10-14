---
reference: maîtrise-eloquent-mini-projet
slug: mini-projet
module_reference: back-end
part_reference: maîtrise-eloquent
concept_reference: ''
title: Mini-Projet
description: ''
order: 62
directory: maîtrise-eloquent
permalink: maîtrise-eloquent/mini-projet
layout: chapters
---

# Mini-projet : Création d'une Base de Données pour un Blog

## Objectif

L'objectif de ce projet est de concevoir et de mettre en place la structure d'une base de données pour un blog simple à l'aide du framework Laravel. Cette base de données servira de fondation pour une application de blog plus complète dans de futures itérations.

## Contexte

Un blog est une plateforme en ligne permettant de publier du contenu textuel, généralement organisé en articles, et souvent catégorisé pour faciliter la navigation des utilisateurs.

## Tâches

1. **Configuration de Laravel:**
   * Installer un nouveau projet Laravel.
   * Configurer la base de données (MySQL).
2. **Création des Modèles Eloquent:**
   * Définir les modèles Eloquent correspondant aux entités suivantes :
     * **Article:** (id, titre, contenu, date de publication, auteur_id, catégorie_id)
     * **Catégorie:** (id, nom)
     * **Utilisateur:** (id, nom, email, mot de passe)
3. **Création des Migrations:**
   * Générer les migrations pour créer les tables correspondantes dans la base de données.
   * Définir les relations entre les tables :
     * Un article appartient à une catégorie (relation many-to-one).
     * Un article a un auteur (relation many-to-one).
     * Un utilisateur peut avoir plusieurs articles (relation one-to-many).
4. **Seeding de la Base de Données:**
   * Créer des seeders pour peupler la base de données avec des données de test.
     * Insérer des catégories (ex : Technologie, Actualités, Sport).
     * Insérer des utilisateurs.
     * Insérer des articles avec leurs relations respectives.

## Livrables

* Diagramme de cas d'utilisation
* Diagramme de classe
* Un projet Laravel fonctionnel avec :
  * Les modèles Eloquent définis.
  * Les migrations créées et exécutées.
  * Les seeders créés et exécutés.
  * Une base de données peuplée avec des données de test.

## Contraintes

* **Pas de contrôleurs ni de routes:** Se concentrer uniquement sur la structure de la base de données.
* **Relations simples:** Utiliser les relations de base fournies par Eloquent (one-to-one, one-to-many, many-to-many).
* **Validation:** Mettre en place une validation simple pour les données entrées dans les seeders.


**Remarque:** Ce mini-projet est une excellente base pour approfondir vos connaissances sur Laravel et la conception de bases de données relationnelles. Il vous permettra de maîtriser les concepts clés comme les modèles Eloquent, les migrations et les relations entre les tables.

**Conseils:**
* Utilisez des noms de tables et de colonnes significatifs.
* Commentez votre code pour faciliter la compréhension.
* Suivez les conventions de nommage de Laravel.