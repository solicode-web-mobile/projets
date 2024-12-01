// Vérifier si la largeur du corps est supérieure ou égale à 1080px
if (document.body.clientWidth >= 1080) {
    try {
        // Récupérer l'état de la barre latérale dans le stockage local
        sidebar = localStorage.getItem('mdbook-sidebar');
    } catch (e) {
        // Gestion des erreurs en cas d'accès interdit
    }
    // Par défaut, la barre latérale est visible
    sidebar = sidebar || 'visible';
}

// Appliquer les attributs ARIA une fois la barre latérale et le bouton sont dans le DOM
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarElement = document.getElementById('sidebar');

sidebarToggle.setAttribute('aria-expanded', sidebar === 'visible');
sidebarElement.setAttribute('aria-hidden', sidebar !== 'visible');

// Configurer les liens de la barre latérale en fonction de sa visibilité
Array.from(document.querySelectorAll('#sidebar a')).forEach(function(link) {
    link.setAttribute('tabIndex', sidebar === 'visible' ? 0 : -1);
});

// Gestion du menu d'aide avec jQuery

$(document).ready(function () {
    // Récupérer l'URL actuelle et la décoder
    var currentURL = decodeURIComponent(window.location.href).replace(".html", "");
    
    // Découper l'URL pour récupérer les segments
    var urlParts = currentURL.split("/");

    // Identifier la référence de partie et de chapitre
    var partReference = urlParts[urlParts.length - 2]; // Avant-dernier segment
    var chapitreReference = `${partReference}-${urlParts[urlParts.length - 1]}`; // Combinaison des deux

    // Masquer tous les titres de parties
    $(".part-title").hide();

    // Afficher uniquement l'élément lié à la référence
    $(`#li-${partReference}`).show();
    $(`#${partReference}`).collapse("show"); // Déplier la partie concernée
    $(`#${chapitreReference}`).addClass("active"); // Ajouter la classe active au chapitre

    // Gérer l'événement de clic pour afficher tous les titres de parties
    $(".part-title").on("click", function () {
        $(".part-title").show(); // Afficher toutes les parties
    });
});

// // Gestion des éléments avec des liens vers des exemples HTML interactifs
// $(document).ready(function() {

//     // Référence du livre (modifiable selon les besoins)
//     var bookReference = "programmation-web";

//     // Ajouter des boutons "Exécuter" aux exemples de code source
//     $(".try_html_link").each(function(i) {
//         var codeHeight = $(this).data("code_height_percent");
//         var tryeditPageURL = "/formation/tryedit/index.html";
//         var exampleId = $(this).attr("Id");
//         var exampleDirectoryPath = `/formation/${bookReference}/exemples/`;
//         var examplePage = exampleId + "/index.html";
//         var examplePageURL = exampleDirectoryPath + examplePage;

//         // Construire les paramètres d'URL pour la page d'édition
//         var tryeditPageURLParams = `page=${examplePageURL}`;
//         if (codeHeight != null) {
//             tryeditPageURLParams += `&&code_height_percent=${codeHeight}`;
//         }

//         var tryeditPageSrc = `${tryeditPageURL}?${tryeditPageURLParams}`;
//         var codeLink = `<a href="${tryeditPageSrc}" class="codeur-btn" target="_blank">Exécuter</a>`;

//         $(this).text(""); // Effacer le texte
//         $(this).append(codeLink); // Ajouter le bouton
//     });

//     // Ajouter des iframes interactifs pour les exemples de code HTML
//     $(".try_html").each(function(i) {
//         var codeHeight = $(this).data("code_height_percent");
//         var tryeditPageURL = "/formation/tryedit/index.html";
//         var height = $(this).data("height");
//         var exampleId = $(this).attr("Id");
//         var exampleDirectoryPath = `/formation/${bookReference}/exemples/`;
//         var examplePage = exampleId + "/index.html";
//         var examplePageURL = exampleDirectoryPath + examplePage;

//         // Construire les paramètres d'URL pour l'iframe
//         var tryeditPageURLParams = `page=${examplePageURL}`;
//         if (codeHeight != null) {
//             tryeditPageURLParams += `&&code_height_percent=${codeHeight}`;
//         }

//         var iframeSrc = `${tryeditPageURL}?${tryeditPageURLParams}`;
//         var codeIframe = `<iframe height="${height}" style="width: 100%;" scrolling="no" 
//             src="${iframeSrc}" 
//             frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
//         </iframe>`;

//         $(this).text(""); // Effacer le texte
//         $(this).append(codeIframe); // Ajouter l'iframe
//     });

//     // Configurer tous les liens externes pour s'ouvrir dans un nouvel onglet
//     $("a[href^='http']").attr("target", "_blank");
// });
