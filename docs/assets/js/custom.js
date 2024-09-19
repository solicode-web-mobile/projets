// if (document.body.clientWidth >= 1080) {
//     try { sidebar = localStorage.getItem('mdbook-sidebar'); } catch(e) { }
//     sidebar = sidebar || 'visible';
// }


// Apply ARIA attributes after the sidebar and the sidebar toggle button are added to the DOM

document.getElementById('sidebar-toggle').setAttribute('aria-expanded', sidebar === 'visible');
document.getElementById('sidebar').setAttribute('aria-hidden', sidebar !== 'visible');
Array.from(document.querySelectorAll('#sidebar a')).forEach(function(link) {
    link.setAttribute('tabIndex', sidebar === 'visible' ? 0 : -1);
});



$(document).ready(function(){

    var bookReference = "programmation-web";

    // Ajouter le lien vers try html au pied d'un code source
    $(".try_html_link").each(function(i){

        var code_height = $(this).data("code_height_percent");
        var tryeditPageURL = "/formation/tryedit/index.html";
        var ExampleId = $(this).attr("Id");
        var ExampleDirecotryPath = `/formation/${bookReference}/exemples/`;
        var ExamplePage = ExampleId + "/index.html"
        var ExamplePageURL = ExampleDirecotryPath + ExamplePage;

        // tryeditPageURLParams
        var tryeditPageURLParams = `page=${ExamplePageURL}`;
        if(code_height != null)
            tryeditPageURLParams += `&&code_height_percent=${code_height}`;
        
        var tryeditPageSrc = `${tryeditPageURL}?${tryeditPageURLParams}`;
        var code_link =  `<a href="${tryeditPageSrc}" class="codeur-btn" target="_blank" >Exécuter</a>`

        $(this).text("");  // Clear text
        $(this).append(code_link);
        
    });

    $(".try_html").each(function(i){

        
        var code_height = $(this).data("code_height_percent");
      
 
        var tryeditPageURL = "/formation/tryedit/index.html";
        var height = $(this).data("height");
        var ExampleId = $(this).attr("Id");
        var ExampleDirecotryPath = `/formation/${bookReference}/exemples/`;
        var ExamplePage = ExampleId + "/index.html"
        var ExamplePageURL = ExampleDirecotryPath + ExamplePage;

        // tryeditPageURLParams
        var tryeditPageURLParams = `page=${ExamplePageURL}`;
        if(code_height != null)
            tryeditPageURLParams += `&&code_height_percent=${code_height}`;
        
        var ifram_src = `${tryeditPageURL}?${tryeditPageURLParams}`;

        var code_iframe =  `<iframe height="${height}" style="width: 100%;" scrolling="no" 
    src="${ifram_src}" 
    frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    </iframe> `

        $(this).text("");  // Clear text
        $(this).append(code_iframe);
        
    });

    // Make all external link as target blank
    $("a[href^='http']").attr("target","_blank");
  

    
   
});





// aide menu 

$(document).ready(function() {
    var currentURL = window.location.href;
    currentURL = decodeURIComponent(currentURL)
    var urlParts = currentURL.split("/");
    var partReference = urlParts[urlParts.length - 2]; // Get the second-to-last part
    var chapitre_reference = partReference + "-" + urlParts[urlParts.length - 1];
   
     
    // Check if the part reference is valid and matches a collapse element ID
    if (partReference && $("#" + partReference).length > 0) {
        $("#" + partReference).collapse("show");
    } else {
        // Handle invalid part reference or missing collapse element
        console.error("Invalid part reference or collapse element not found:", partReference);
    }

    // Check if the part chapitre_reference is valid and matches a collapse element ID
    if (chapitre_reference && $("#" + chapitre_reference).length > 0) {
        $("#" + chapitre_reference).addClass("active")
    } else {
        // Handle invalid part reference or missing collapse element
        console.error("Invalid part reference or collapse element not found:", partReference);
    }
});
