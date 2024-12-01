---
reference: m1-première-application-android-tuto2
slug: tuto2
module_reference: mobile
part_reference: m1-première-application-android
concept_reference: ''
title: tuto2
description: ''
order: 27
directory: m1-première-application-android
permalink: m1-première-application-android/tuto2
layout: chapters
---

# Tutoriel 2 : Configuration d'Android Studio

## **Objectif**
Apprendre à installer et configurer Android Studio, l'environnement de développement intégré (IDE) officiel pour Android, afin de commencer à développer des applications Android en Kotlin.

---

## **Prérequis**

1. Un ordinateur sous Windows, macOS, ou Linux.
2. Une connexion Internet stable.
3. Avoir des bases en programmation (idéalement avec Kotlin ou Java).

---

## **Étapes du tutoriel**

### **1. Télécharger Android Studio**

1. Accédez au site officiel d'Android Developers : [https://developer.android.com/studio](https://developer.android.com/studio).
2. Cliquez sur le bouton **Download Android Studio**.
3. Acceptez les termes et conditions, puis téléchargez le fichier d'installation correspondant à votre système d'exploitation.

### **2. Installer Android Studio**

#### **Sur Windows**
1. Ouvrez le fichier `.exe` téléchargé.
2. Suivez les instructions de l'assistant d'installation :
   - Sélectionnez les composants à installer (cochez tout par défaut).
   - Choisissez un dossier d'installation.
3. Une fois l'installation terminée, cliquez sur **Finish** pour lancer Android Studio.

#### **Sur macOS**
1. Ouvrez le fichier `.dmg` téléchargé.
2. Glissez l'icône d'Android Studio dans le dossier **Applications**.
3. Ouvrez Android Studio depuis le dossier **Applications**.

#### **Sur Linux**
1. Extrayez le fichier `.zip` téléchargé dans un dossier de votre choix.
2. Ouvrez un terminal et naviguez vers le dossier extrait.
3. Exécutez le script `studio.sh` avec la commande :
   ```bash
   ./studio.sh
   ```

### **3. Configuration initiale**

1. **Assistant de configuration :**
   - Au premier lancement, Android Studio vous propose de télécharger les composants nécessaires (SDK Android, outils de développement, etc.). Cliquez sur **Next**.
2. **Choix de l'interface :**
   - Sélectionnez le thème d'interface (clair ou sombre).
   - Cliquez sur **Finish** pour finaliser la configuration.
3. Android Studio téléchargera les fichiers nécessaires. Ce processus peut prendre plusieurs minutes.

### **4. Créer un premier projet Android**

1. Cliquez sur **New Project** dans l'écran d'accueil d'Android Studio.
2. Choisissez un modèle de projet :
   - Pour ce tutoriel, sélectionnez **Empty Compose Activity** (Jetpack Compose).
3. Configurez votre projet :
   - **Nom du projet :** `FirstApp`.
   - **Nom du package :** `com.example.firstapp`.
   - **Langage :** Kotlin.
   - **API minimale :** Sélectionnez une API adaptée (par exemple, API 21 pour supporter la plupart des appareils).
4. Cliquez sur **Finish**.

### **5. Explorer Android Studio**

1. **Structure de l'interface :**
   - **Project View :** Affiche l'arborescence de votre projet.
   - **Editor :** Permet d'éditer les fichiers (code, ressources, etc.).
   - **Logcat :** Affiche les journaux d'exécution de l'application.
2. **Fichiers importants :**
   - `MainActivity.kt` : Point d'entrée de l'application.
   - `AndroidManifest.xml` : Déclare les composants de l'application.
   - `build.gradle` : Gère les dépendances et la configuration du projet.

### **6. Exécuter l'application sur un émulateur**

1. Ouvrez **AVD Manager** (Android Virtual Device) depuis la barre d'outils.
2. Créez un nouvel émulateur :
   - Sélectionnez un appareil (ex. Pixel 4).
   - Choisissez une image système (API niveau 30 ou supérieur recommandé).
   - Configurez les paramètres et cliquez sur **Finish**.
3. Lancez l'émulateur en cliquant sur le bouton **Play**.
4. Exécutez l'application :
   - Cliquez sur **Run** ou utilisez le raccourci clavier **Shift + F10**.
   - L'application s'ouvrira dans l'émulateur.

### **7. Résolution des problèmes courants**

1. **SDK manquant :**
   - Allez dans **File > Settings > Appearance & Behavior > System Settings > Android SDK**.
   - Téléchargez les versions nécessaires du SDK.
2. **Erreur Gradle :**
   - Synchronisez votre projet avec Gradle en cliquant sur **Sync Now**.
3. **Émulateur lent :**
   - Activez l'accélération matérielle (HAXM pour Intel ou Hyper-V pour AMD).

---

## **Conclusion**

Vous avez installé et configuré Android Studio, créé un projet initial, et exécuté une application simple sur un émulateur. Vous êtes maintenant prêt à explorer Jetpack Compose dans les tutoriels suivants.

---

## **Prochain tutoriel**
**Création de l’interface avec Jetpack Compose :** Nous commencerons à construire une interface utilisateur simple en utilisant Compose pour afficher du texte et des boutons interactifs.