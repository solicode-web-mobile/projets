---
reference: univers-laravel-routage-contrôleurs
slug: routage-contrôleurs
module_reference: back-end
part_reference: univers-laravel
concept_reference: ''
title: Tuto3 - Le routage et les contrôleurs
description: ''
order: 54
global_order: '49'
directory: univers-laravel
permalink: univers-laravel/routage-contrôleurs
layout: chapters
---


# Le routage et les contrôleurs : Créez un formulaire de contact fonctionnel

## Le routage en Laravel
Le routage est le mécanisme qui permet de lier des URL à des fonctions spécifiques dans votre application. Laravel utilise un système de routage expressif et flexible.

* **Définition des routes:** Les routes sont définies dans le fichier `routes/web.php`.
* **Méthodes HTTP:** Laravel supporte toutes les méthodes HTTP (GET, POST, PUT, DELETE, etc.).
* **Paramètres:** Vous pouvez définir des paramètres dans les URL pour rendre vos routes dynamiques.

## Les contrôleurs
Les contrôleurs sont des classes PHP qui contiennent la logique métier de votre application. Ils reçoivent les requêtes HTTP, traitent les données et renvoient une réponse.

* **Création d'un contrôleur:** Vous pouvez créer un contrôleur à l'aide de la commande Artisan :
  ```bash
  php artisan make:controller ContactController
  ```
* **Méthodes du contrôleur:** Les méthodes d'un contrôleur correspondent généralement à des actions spécifiques (par exemple, afficher un formulaire, traiter un formulaire).

## Création d'un formulaire de contact
1. **Création d'une route:**
   ```php
   Route::get('/contact', 'ContactController@create');
   Route::post('/contact', 'ContactController@store');
   ```
   La route GET affiche le formulaire, tandis que la route POST traite la soumission du formulaire.

2. **Création de la vue du formulaire:**
   ```html
   {% raw %}
   <form method="POST" action="{{ route('contact.store') }}">
       @csrf
       <div>
           <label for="name">Nom :</label>
           <input type="text" name="name" id="name">
       </div>
       <div>
           <label for="email">Email :</label>
           <input type="email" name="email" id="email">
       </div>
       <div>
           <label for="message">Message :</label>
           <textarea name="message" id="message"></textarea>
       </div>
       <button type="submit">Envoyer</button>
   </form>
   {% endraw %}
   ```

3. **Création du contrôleur :**
   ```php
   // app/Http/Controllers/ContactController.php
   use App\Http\Controllers\Controller;
   use Illuminate\Http\Request;
   use Mail;

   class ContactController extends Controller
   {
       public function create()
       {
           return view('contact');
       }

       public function store(Request $request)
       {
           $data = $request->validate([
               'name' => 'required',
               'email' => 'required|email',
               'message' => 'required',
           ]);

           Mail::send('emails.contact', $data, function($message) use ($data) {
               $message->to('votre_email@exemple.com', 'Destinataire')->subject('Nouveau message de contact');
           });

           return redirect('/')->with('success', 'Votre message a bien été envoyé.');
       }
   }
   ```

## Explications
* **@csrf:** Cette directive protège contre les attaques CSRF.
* **Validation des données:** La méthode `validate` assure que les données envoyées par le formulaire sont valides.
* **Envoi de l'email:** La classe `Mail` permet d'envoyer des emails. Créez un fichier de vue `resources/views/emails/contact.blade.php` pour définir le contenu de l'email.

## Points clés
* Le routage lie les URL aux contrôleurs.
* Les contrôleurs contiennent la logique métier.
* Les vues sont créées à l'aide de Blade.
* La validation des données est essentielle pour la sécurité.
* L'envoi d'emails est facilité par la classe `Mail`.


**Dans le prochain chapitre, nous allons explorer Eloquent ORM pour interagir avec votre base de données.**