# 🚀 **Mini-projet : Application de calcul de pourboire**  

---

### **📋 Description :**  
Vous allez développer une application simple permettant de calculer les pourboires. Ce mini-projet mettra en pratique les concepts de **gestion d’état** en **Jetpack Compose**. L’utilisateur saisira le montant de la facture, choisira un pourcentage de pourboire et verra le montant total calculé en temps réel.  

---

### **🔗 Lien avec le projet final :**  
Ce projet vous initiera à la gestion de l'état dans une interface utilisateur dynamique, un concept clé pour le développement d'une **To-Do List** interactive. Vous comprendrez comment capturer, mettre à jour et afficher l’état dans Compose, une compétence essentielle pour la gestion des tâches dans votre projet final.  

---

## **🛠️ Objectifs pédagogiques :**  
- Gérer l’**état** des champs de saisie.  
- Appliquer les principes de **réactivité** avec Compose.  
- Comprendre l’**immuabilité** et les bonnes pratiques dans la gestion d’état.

---

## **🧩 Fonctionnalités de l'application :**  
1. Saisie du montant de la facture.  
2. Sélection du pourcentage de pourboire (10 %, 15 %, 20 %, etc.).  
3. Calcul dynamique et affichage du montant du pourboire et du total à payer.  

---

## **💻 Code de base :**  

### **1. Définir l’interface principale :**  
```kotlin
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun TipCalculator() {
    var billAmount by remember { mutableStateOf("") }
    var tipPercentage by remember { mutableStateOf(15) }  // Valeur par défaut : 15 %

    val tipAmount = (billAmount.toDoubleOrNull() ?: 0.0) * tipPercentage / 100
    val totalAmount = (billAmount.toDoubleOrNull() ?: 0.0) + tipAmount

    Column(
        modifier = Modifier.padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        TextField(
            value = billAmount,
            onValueChange = { billAmount = it },
            label = { Text("Montant de la facture") }
        )

        // Boutons pour sélectionner le pourcentage
        Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            listOf(10, 15, 20).forEach { percentage ->
                Button(onClick = { tipPercentage = percentage }) {
                    Text("$percentage %")
                }
            }
        }

        // Affichage des résultats
        Text("Pourboire : ${String.format("%.2f", tipAmount)} €")
        Text("Total à payer : ${String.format("%.2f", totalAmount)} €")
    }
}
```

---

### **2. Explications du code :**  
- **Gestion de l’état avec `mutableStateOf` :**  
  - `billAmount` stocke le montant saisi par l’utilisateur.  
  - `tipPercentage` conserve le pourcentage de pourboire choisi.  

- **Calcul dynamique :**  
  Les valeurs de **tipAmount** et **totalAmount** sont recalculées à chaque saisie ou modification du pourcentage.  

- **Composants Compose :**  
  - **`TextField`** : Permet à l’utilisateur de saisir le montant de la facture.  
  - **`Button`** : Utilisé pour sélectionner le pourcentage de pourboire.  
  - **`Text`** : Affiche les résultats des calculs.

---

### **🌟 Améliorations possibles :**  
1. **Ajouter un curseur** pour ajuster dynamiquement le pourcentage.  
2. **Inclure un thème sombre** pour améliorer l’interface.  
3. **Validation** : Empêcher l’utilisateur d’entrer des valeurs invalides.  

---

## **🎯 Lien avec le projet final (To-Do List) :**  
- **Gestion d’état** : Appliquée ici pour mettre à jour les champs en temps réel, elle sera essentielle pour gérer l’ajout et la suppression de tâches dans votre **To-Do List**.  
- **Réactivité de l’UI** : Les compétences acquises sur les recompositions seront utilisées pour afficher dynamiquement l'état des tâches.  

---

### **🛠️ Exercice pratique :**  
1. **Étendre l’application** pour inclure un champ permettant de saisir le nombre de personnes et calculer le montant par personne.  
2. **Créer une version avec ViewModel** pour séparer l’état et la logique métier.  

---

🚀 **Prochain défi :** Appliquez les mêmes concepts pour créer une liste dynamique dans Compose !