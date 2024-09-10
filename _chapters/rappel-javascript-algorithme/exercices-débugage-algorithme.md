---
reference: rappel-javascript-algorithme-exercices-algorithme
slug: exercices-algorithme
module_reference: sas-rappel-javascript-algorithme
part_reference: rappel-javascript-algorithme
concept_reference: ''
title: Exercices débogage en Javascript  
description: ''
order: 8
global_order: '32'
directory: rappel-javascript-algorithme
permalink: rappel-javascript-algorithme/exercices-algorithme-débogage
layout: chapters
---

# Exercices débogage en Javascript  

Pour chaque exercice :
- Définir l'objectif de l'algorithme.
- Valider l'algorithme avec des exemples.
- Corriger les éventuelles erreurs.
### **Structures de contrôle**

**1.:**

```javascript
function fonction1(N) {
  let somme = 0;
  for (let i = 1; i < N; i++) { 
    somme += i;
  }
  return somme;
}

const N = 10;
const resultat = fonction1(N);
```

**2. :**

```javascript
function fonction2(nombre) {
  for (let i = 0; i <= 10; i++) { 
    console.log(`${nombre} x ${i} = ${nombre * i}`);
  }
}

const nombre = 7;
fonction2(nombre);
```

**3. :**

```javascript
function fonction3(nombre) {
  return nombre % 2 === 1; 
}
```

**4.:**

```javascript
for (let i = 1; i <= 100; i += 2) { 
  console.log(i);
}
```

**5.:**

```javascript
function fonction5(nombre) {
  if (nombre === 1) {
    return 1;
  } else {
    return nombre * fonction5(nombre - 1);
  }
}

const nombre = 5;
const resultat = fonction5(nombre);
```

### **Tableaux**

**7.:**

```javascript
function fonction7() {
  const nombres = [];
  let s = 0;
  while (true) {
    const nombre = prompt("Entrez un nombre (0 pour arrêter) : ");
    if (nombre === 0) {
      break;
    }
    nombres.push(nombre);
    s += nombre;
  }
  console.log("La solution est :", s);
}

fonction7();
```

**8.:**

```javascript
function fonction8(tableau) {
  let a = tableau[0];
  let b = tableau[0];
  for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < a) {
      a = tableau[i];
    }
    if (tableau[i] > b) {
      b = tableau[i];
    }
  }
  return { a, b };
}

const nombres = [3, 7, 2, 9, 5];
const { a, b } = fonction8(nombres);

```

**9. :**

```javascript
function fonction9(tableau) {
  for (let i = 0; i < tableau.length / 2; i++) {
    const temp = tableau[i];
    tableau[i] = tableau[tableau.length - i - 1];
    tableau[tableau.length - i - 1] = temp;
  }
  return tableau;
}

const nombres = [1, 2, 3, 4, 5];
console.log(fonction9(nombres));
```

**10. :**

```javascript
function fonction10(tableau) {
  for (let i = 0; i < tableau.length; i++) {
    for (let j = i + 1; j < tableau.length; j++) {
      if (tableau[i] > tableau[j]) {
        const temp = tableau[i];
        tableau[i] = tableau[j];
        tableau[j] = temp;
      }
    }
  }
  return tableau;
}

const nombres = [5, 2, 8, 1, 4];
console.log(fonction10(nombres));
```


**11. :**

```javascript
function fonction11(tableau, element) {
  for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] === element) {
      return i;
    }
  }
  return -1;
}

```

### **Chaînes de caractères**

**12.:**

```javascript
function fonction12(chaine) {
  let longueur = 0;
  for (let i = 0; i < chaine.length; i++) {
    longueur++;
  }
  return longueur;
}
```

**13.:**

```javascript
function fonction13(chaine, caractere) {
  let compte = 0;
  for (let i = 0; i < chaine.length; i++) {
    if (chaine[i] === caractere) {
      compte++;
    }
  }
  return compte;
}


```

**14.:**

```javascript
function fonction14(chaine1, chaine2) {
  let chaineResultat = "";
  for (let i = 0; i < chaine1.length; i++) {
    chaineResultat += chaine1[i];
  }
  for (let i = 0; i < chaine2.length; i++) {
    chaineResultat += chaine2[i];
  }
  return chaineResultat;
}
```

**15.:**

```javascript
function fonction15(chaine) {
  for (let i = 0; i < chaine.length / 2; i++) {
    if (chaine[i] !== chaine[chaine.length - i]) {
      return false;
    }
  }
  return true;
}
```


### **Conditions**


**17. Trier trois nombres dans l'ordre croissant:**

```javascript
function fonction17(a, b, c) {
  if (a < b && b < c) {
    return [a, b, c];
  } else if (b < a && a < c) {
    return [b, a, c];
  } else {
    return [c, a, b];
  }
}

```

### **Boucles**

**19. Afficher les nombres de 1 à N avec un pas de 2:**

```javascript
function fonction19(N) {
  for (let i = 1; i <= N; i++) {
    console.log(i);
  }
}

```

**20.:**

```javascript
function fonction20(chaine) {
  for (let i = 0; i < chaine.length; i++) {
    console.log(chaine[i + 1]);
  }
}
```