---
reference: rappel-javascript-algorithme-mini-projet-gestion-compétences
slug: mini-projet-gestion-compétences
module_reference: sas-rappel-javascript-algorithme
part_reference: rappel-javascript-algorithme
concept_reference: ''
title: 'Mini-projet : Gestion compétences'
description: ''
order: 2
global_order: '2'
directory: rappel-javascript-algorithme
permalink: rappel-javascript-algorithme/mini-projet-gestion-compétences
layout: chapters
---

# Mini-projet : Gestion compétences

## Objectif général :
Développer une application en ligne de commande (console) utilisant Node.js pour gérer un catalogue de compétences personnel ou d'équipe. Cette application permettra d'ajouter, de supprimer, de modifier et de consulter une liste de compétences.

## Fonctionnalités :
* **Ajout d'une compétence:** L'utilisateur pourra ajouter une nouvelle compétence en précisant son nom et éventuellement une description.
* **Suppression d'une compétence:** L'utilisateur pourra supprimer une compétence existante en la sélectionnant par son nom ou son identifiant.
* **Modification d'une compétence:** L'utilisateur pourra modifier les informations d'une compétence existante (nom, description).
* **Affichage de la liste des compétences:** L'utilisateur pourra afficher la liste complète des compétences enregistrées, éventuellement triées ou filtrées.

## Contraintes techniques :
* **Langage:** Node.js
* **Stockage:** Utilisation de fichiers JSON pour stocker les données de manière persistante.
* **Interface utilisateur:** Interface en ligne de commande (console) utilisant le module `readline` de Node.js.

## Étapes suggérées :
1. **Installation de Node.js:** S'assurer que Node.js est installé sur votre machine.
2. **Création du projet:** Initialiser un nouveau projet Node.js et installer les dépendances nécessaires (aucune dans ce cas précis).
3. **Création du fichier JSON:** Créer un fichier `skills.json` pour stocker les données des compétences.
4. **Développement des fonctions:**
   * `addSkill`: Fonction pour ajouter une nouvelle compétence au fichier JSON.
   * `removeSkill`: Fonction pour supprimer une compétence du fichier JSON.
   * `updateSkill`: Fonction pour modifier une compétence existante.
   * `listSkills`: Fonction pour afficher la liste des compétences.
5. **Création de l'interface en ligne de commande:** Utiliser le module `readline` pour interagir avec l'utilisateur et appeler les fonctions correspondantes en fonction des commandes entrées.

## Évaluation :
Le projet sera évalué en fonction :
* **De la correction du code:** Respect des bonnes pratiques de programmation en JavaScript.
* **De la complétude des fonctionnalités:** Toutes les fonctionnalités demandées sont-elles implémentées ?
* **De la clarté du code:** Le code est-il bien commenté et facile à comprendre ?
* **De l'originalité:** Des fonctionnalités supplémentaires ont-elles été ajoutées ?

## Livrable 

- Présentation Google Slide
- Code source dans github

