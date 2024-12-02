---
reference: m4-navigation-architecture-tuto11
slug: tuto11
module_reference: mobile
part_reference: m4-navigation-architecture
concept_reference: ''
title: tuto11
description: ''
order: 134
directory: mobile/m4-navigation-architecture
permalink: mobile/m4-navigation-architecture/tuto11
layout: chapters
---

### Tutoriel 11 : Cycle de Vie d'une Activité Android

#### **Introduction**

Le cycle de vie d'une activité Android est essentiel pour comprendre comment gérer l'interaction de l'utilisateur avec une application. Ce tutoriel explore les différentes étapes du cycle de vie, leur importance, et l'impact des modifications de configuration sur une activité.

---

### **1. Cycle de Vie d'une Activité**

Une activité traverse plusieurs états au cours de son existence :

- **onCreate()** : Appelée lors de la création de l’activité, avant qu'elle soit visible.
- **onStart()** : L’activité devient visible pour l’utilisateur.
- **onResume()** : L’activité entre au premier plan et interagit avec l’utilisateur.
- **onPause()** : L’activité est partiellement visible, mais l’utilisateur ne peut plus interagir directement.
- **onStop()** : L’activité n’est plus visible.
- **onDestroy()** : L’activité est détruite, libérant toutes les ressources.

#### **Exercice pratique : Ajout de journalisation**

Ajoutez des journaux dans chaque méthode du cycle de vie pour observer leur exécution. Voici un exemple :

```kotlin
class MainActivity : ComponentActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MainScreen()
        }
        Log.d("Lifecycle", "onCreate called")
    }

    override fun onStart() {
        super.onStart()
        Log.d("Lifecycle", "onStart called")
    }

    override fun onResume() {
        super.onResume()
        Log.d("Lifecycle", "onResume called")
    }

    override fun onPause() {
        super.onPause()
        Log.d("Lifecycle", "onPause called")
    }

    override fun onStop() {
        super.onStop()
        Log.d("Lifecycle", "onStop called")
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d("Lifecycle", "onDestroy called")
    }
}
```

**Instructions :**

1. Créez un projet Android avec Jetpack Compose.
2. Implémentez les méthodes du cycle de vie dans `MainActivity`.
3. Exécutez l'application et observez les journaux dans Logcat.

---

### **2. Journalisation avec Logcat**

Logcat permet de suivre les événements du cycle de vie. Utilisez les commandes suivantes pour filtrer les journaux :

- **Filtrer par Tag** : Entrez `tag:Lifecycle` dans la barre de recherche de Logcat.
- **Niveaux de Log** :
  - `Log.d()` : Debug (niveau intermédiaire).
  - `Log.e()` : Erreur.
  - `Log.i()` : Information.

#### **Exercice pratique : Personnaliser les journaux**

Ajoutez des journaux pour inclure des données spécifiques, par exemple :

```kotlin
Log.d("Lifecycle", "onCreate called with savedInstanceState = $savedInstanceState")
```

---

### **3. Impact des Modifications de Configuration**

Les modifications de configuration (ex. rotation d'écran) provoquent la destruction et la recréation de l'activité. Cela peut entraîner une perte de données si elles ne sont pas sauvegardées.

#### **Illustration Visuelle**

Pour mieux comprendre ce processus, voici un diagramme montrant les étapes clés :

1. **Avant la modification** : L'activité initiale est active avec son état.
2. **Modification de configuration** : Une rotation d'écran ou tout autre changement est détecté.
3. **Destruction de l'activité** : L'activité est détruite.
4. **Recréation de l'activité** : Une nouvelle instance de l'activité est créée.


#### **Gestion des données avec rememberSaveable**

`rememberSaveable` est une API de Jetpack Compose qui permet de sauvegarder l'état d'une interface utilisateur entre les modifications de configuration. Contrairement à `remember`, qui ne préserve l'état que pendant le cycle de vie actuel de la composition, `rememberSaveable` utilise le mécanisme de sauvegarde de l'état d'Android pour conserver les données.

##### **Exemple d'utilisation**

```kotlin
@Composable
fun CounterApp() {
    var count by rememberSaveable { mutableStateOf(0) }

    Column(modifier = Modifier.fillMaxSize(),
           horizontalAlignment = Alignment.CenterHorizontally,
           verticalArrangement = Arrangement.Center) {
        Text(text = "Count: $count")
        Button(onClick = { count++ }) {
            Text("Increment")
        }
    }
}
```

**Instructions :**

1. Créez une interface utilisant Compose.
2. Implémentez `rememberSaveable` pour préserver les données lors de changements de configuration.
3. Testez l'application en changeant l'orientation de l'écran.
4. Essayer de tester : 
   - ``var count by remember { mutableStateOf(0) }``
   - ``var count =  mutableStateOf(0) ``
  
#### **Avantages de rememberSaveable**

- Simplifie la gestion d'état dans Compose.
- Évite les pertes de données pendant les rotations d'écran ou autres changements de configuration.
- Intègre parfaitement les fonctionnalités natives d'Android pour la sauvegarde d'état.

---


### **Conclusion**

Comprendre et gérer le cycle de vie est crucial pour créer des applications robustes. Combinez les outils comme Logcat et `rememberSaveable` pour assurer une expérience utilisateur fluide.


### Rappel : mutableStateOf  

**Qu'est-ce que `mutableStateOf` ?**

C'est une fonction qui permet de créer un état mutable dans une application Jetpack Compose. Un état mutable, c'est une valeur qui peut changer au cours du temps et qui, lorsqu'elle change, déclenche une recomposition de l'interface utilisateur. Cela signifie que si tu modifies la valeur d'un état mutable, les parties de ton UI qui dépendent de cette valeur seront automatiquement mises à jour pour refléter le nouveau changement.

**Pourquoi utiliser `mutableStateOf` ?**

* **Gestion de l'état UI:** Il est essentiel pour gérer les données qui peuvent changer dans ton application et qui ont un impact sur l'interface utilisateur. Par exemple, le texte d'un champ de saisie, le nombre d'éléments dans une liste, etc.
* **Réactivité:** Grâce à `mutableStateOf`, ton UI réagit automatiquement aux changements de données. Tu n'as pas besoin de mettre à jour manuellement chaque élément de l'interface.
* **Simplicité:** Cela rend ton code plus propre et plus facile à maintenir.

* **`remember`:** Cette fonction est souvent utilisée avec `mutableStateOf` pour s'assurer que l'état persiste entre les recompositions.
