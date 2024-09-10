
# **Projet : Gestion de bibliothèque en PHP POO**

**Objectif:**

Développer une application console en PHP, basée sur la programmation orientée objet, pour gérer un système de bibliothèque. L'application doit permettre de gérer les entités suivantes : livres, auteurs, lecteurs et emprunts.

**Spécifications fonctionnelles:**

* **Catalogage:**
    * Gestion du cycle de vie des livres (ajout, modification, suppression)
    * Recherche avancée (titre, auteur, ISBN, etc.)
    * Association d'un livre à un ou plusieurs auteurs
* **Usagers:**
    * Gestion des informations des lecteurs (ajout, modification, suppression)
    * Suivi des emprunts (emprunt, prolongation, retour)
* **Emprunts:**
    * Gestion des opérations d'emprunt (vérification de disponibilité, dates)
    * Calcul de statistiques sur les emprunts (livres les plus empruntés, lecteurs actifs)
* **Persistance:**
    * Sauvegarde des données dans un fichier PHP (sérialisation)

**Modèle objet:**

* **Livre:** ISBN, titre, auteur(s), date de publication, disponibilité
* **Auteur:** nom, prénom, nationalité, liste des livres
* **Lecteur:** numéro de carte, nom, prénom, adresse, liste des emprunts
* **Emprunt:** date de début, date de retour prévue, date de retour réel, livre emprunté, lecteur

**Diagrammes:**

* **Cas d'utilisation:** Visualiser les interactions entre l'utilisateur et le système (ajouter un livre, emprunter un livre, etc.)
* **Classes:** Représenter les classes et leurs relations (héritage, association, agrégation)

**Technologies:**

* **PHP:** Langage de programmation principal
* **POO:** Paradigme de programmation utilisé
* **Fichiers PHP:** Mécanisme de persistance des données

### **Suggestions d'amélioration:**

* **Modularité:** Envisager de séparer les différentes fonctionnalités en modules distincts (gestion des livres, gestion des lecteurs, etc.) pour une meilleure organisation du code.
* **Interface utilisateur:** Bien que ce soit une application console, penser à une interface utilisateur intuitive et conviviale.
