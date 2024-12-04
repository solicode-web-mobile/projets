---
reference: m2-créer-interface-utilisateur-tuto6
slug: tuto6
module_reference: mobile
part_reference: m2-créer-interface-utilisateur
concept_reference: ''
title: Tutoriel 6 v1.1 - Gestion d'états réactifs
description: ''
order: 95
directory: m2-créer-interface-utilisateur
permalink: m2-créer-interface-utilisateur/tuto6
layout: chapters
---

# Tutoriel 6 : Gestion d'états réactifs et des flux de données

## Objectif pédagogique
Apprendre à gérer des états réactifs et des flux de données pour construire des applications modernes et interactives en utilisant Jetpack Compose.

## Concepts abordés
- Introduction à la notion d'état réactif.
- Utilisation de `State` et des outils de gestion d'état de base en Jetpack Compose.
- Introduction aux coroutines et à leur utilisation pour gérer des flux de données asynchrones.
- Scope et gestion des coroutines en Kotlin.

## Explication théorique

### Notion d'état réactif
Un état réactif est une donnée qui, lorsqu'elle change, provoque automatiquement une mise à jour de l'interface utilisateur correspondante. Jetpack Compose utilise un modèle de programmation déclaratif qui facilite ce comportement.

#### Exemple :
```kotlin
var counter by remember { mutableStateOf(0) }
```
Le mot-clé `remember` permet de conserver l'état entre les recompositions, et `mutableStateOf` rend cet état réactif.

### Les coroutines
Les coroutines en Kotlin permettent d'exécuter des tâches de manière asynchrone, sans bloquer le thread principal. Elles utilisent des scopes pour définir leur cycle de vie.

#### Scope des coroutines
Un CoroutineScope détermine la durée de vie d'une coroutine. Voici les principaux scopes :
- `GlobalScope` : Coroutine qui dure aussi longtemps que l'application.
- `CoroutineScope` : Scope personnalisé créé par le développeur.
- `lifecycleScope` : Attaché à une activité ou un fragment (sera introduit dans un module ultérieur).

#### Exemple de coroutine simple :
```kotlin
CoroutineScope(Dispatchers.Main).launch {
    val data = fetchData()
    // Mettre à jour l'interface utilisateur avec les données
}
```

## Étape 1 : Créer un composant interactif
### Objectif
Ajouter un compteur simple qui réagit à l'interaction utilisateur.

#### Code

Dans le fichier  `/screen/AsyncDataLoaderScreen.kt`

```kotlin
@Composable
fun AsyncDataLoader(modifier: Modifier = Modifier)  {
    var data by remember { mutableStateOf("Loading...") }

    LaunchedEffect(Unit) {
        data = fetchData()
    }

    Text(
        text = data,
        style = MaterialTheme.typography.headlineSmall
    )
}

suspend fun fetchData(): String {
    delay(2000) // Simule un temps d'attente
    return "Données chargées"
}


@Preview(showBackground = true)
@Composable
fun AsyncDataLoaderPreview() {
    Tuto6Theme {
        AsyncDataLoader()
    }
}
```

## Étape 2 : Introduire les coroutines pour une action asynchrone
### Objectif
Simuler la récupération de données depuis une source externe.

### Code
```kotlin

@Composable
fun AsyncDataLoader(modifier: Modifier = Modifier)  {
    var data by remember { mutableStateOf("Loading...") }

    LaunchedEffect(Unit) {
        data = fetchData()
    }

    Text(
        text = data,
        style = MaterialTheme.typography.headlineSmall
    )
}


@SuppressLint("NewApi")
suspend fun fetchData(): String {
    delay(5000) // Simule un temps d'attente
    val currentTime = LocalTime.now()
    val formatter = DateTimeFormatter.ofPattern("HH:mm:ss")
    return "Date et heure actuelles : ${currentTime.format(formatter)}"
}


@Preview(showBackground = true)
@Composable
fun AsyncDataLoaderPreview() {
    Tuto6Theme {
        AsyncDataLoader()
    }
}

```

### Explication 

`LaunchedEffect` est une API fournie par Jetpack Compose qui permet d'exécuter du code au sein d'un **scope coroutine** directement lié au cycle de vie de votre composable. C'est une manière simple et efficace de gérer des opérations qui doivent se produire lors de l'entrée ou la recomposition d'un composant.

- `LaunchedEffect` crée un **scope coroutine** lié au composable.  
- Ce scope est annulé automatiquement lorsque le composable est recomposé avec un nouvel état clé ou lorsqu'il sort de l'arborescence.  
- Cela permet d’éviter les **fuites de mémoire** ou des opérations inutiles.


- `suspend` : Indique que la fonction peut être appelée de manière asynchrone et est conçue pour être utilisée dans des contextes de coroutine.
- `delay(2000)` : Simule un délai de 2 secondes, représentant une opération de chargement de données (comme une requête réseau).

#### **Syntaxe**

```kotlin
LaunchedEffect(key1, key2, ...) {
    // Code à exécuter
}
```

- Les clés (`key1`, `key2`, ...) déterminent quand la coroutine est relancée.  
- Si la valeur des clés change, l'effet est annulé, puis relancé avec les nouvelles valeurs.  
- Si aucune clé n'est spécifiée ou si elle reste la même, l'effet ne sera pas relancé.  

#### **Exemple simple**

**Exemple avec une clé dynamique**

**But :** Mettre à jour les données lorsque la clé change.

```kotlin
@Composable
fun UserProfile(userId: String) {
    var userDetails by remember { mutableStateOf("Loading...") }

    LaunchedEffect(userId) {
        userDetails = fetchUserDetails(userId) // Simule une récupération de données
    }

    Text(text = userDetails)
}

suspend fun fetchUserDetails(userId: String): String {
    delay(2000) // Simule un délai de récupération
    return "Details for user: $userId"
}
```

**Utilisations courantes**

1. **Récupération de données asynchrones** : Charger des données depuis une API ou une base de données.  
2. **Écoute d'événements** : Réagir à des actions utilisateur ou des changements d'état.  
3. **Animations** : Démarrer une animation ou une transition.  


**Bonnes pratiques**

1. **Évitez les effets secondaires dans `LaunchedEffect` qui ne dépendent pas de la clé.**  
   Cela peut entraîner des résultats imprévisibles lors des recompositions.  

2. **Utilisez des clés stables.**  
   Si une clé change fréquemment ou est instable, cela peut entraîner des relancements inutiles.  

3. **Préférez `remember` pour les états réactifs simples.**  
   Si vous n'avez pas besoin de coroutines, `remember` suffit pour gérer un état simple.  

#### Exercice : 

Modifier le code pour qu'il affiche le l'heure en temps réel

## Étape 3 : Gérer des flux de données avec `Flow`
### Objectif
Utiliser un `Flow` pour émettre plusieurs valeurs successives et les afficher.

#### Code

Dans le fichier `/screen/DataStreamScreen.kt`

```kotlin

@Composable
fun DataStream() {
    val dataFlow = flow {
        for (i in 1..5) {
            emit("Item $i")
            delay(3000)
        }
    }

    val data by dataFlow.collectAsState(initial = "Starting...")

    Text(text = data, style = MaterialTheme.typography.headlineSmall)
}


@Preview(showBackground = true)
@Composable
fun DataStreamPreview() {
    Tuto6Theme {
        DataStream()
    }
}

```

## Exercice
Créez un composant qui :
1. Utilise une coroutine pour récupérer une liste de noms (simulés).
2. Affiche les noms dans une liste dynamiquement mise à jour.

### Indications :
- Utilisez `LaunchedEffect` pour initier la récupération des données.
- Affichez les noms dans une `LazyColumn`.

## Conclusion
Ce tutoriel a introduit la gestion d'états réactifs et l'utilisation de coroutines et `Flow` pour gérer des flux de données. Ces concepts sont essentiels pour construire des interfaces réactives et modernes dans Android avec Jetpack Compose.


 