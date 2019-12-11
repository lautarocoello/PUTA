// Initialize app
var myApp = new Framework7();



 
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
// var db = firebase.firestore();

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$('.hide-navbar').on('click', function () {
    app.navbar.hide('.navbar');
  });
  $$('.show-navbar').on('click', function () {
    app.navbar.show('.navbar');
  });

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
// myApp.onPageInit('about', function (page) {
//     // Do something here for "about" page

// 






// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'index') {        
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
        }else if(page.name === 'encontre') {
            

            //carga de datos del usuario a bd
            var tamaño1 = document.getElementById("tamaño");
            var caracteristicas1 = document.getElementById("caracteristicas");
            var telcontacto1 = document.getElementById("telcontacto");
            var email1= document.getElementById("telcontacto");
            var comentarios1 = document.getElementById("comentarios");
            var tipomascota1 = document.getElementById("tipomascota");


        $$('#enviarDatos').on('click', function(){
            console.log(this);
    console.log(tamaño.value)
        db.collection("infoLostPets").add({
          tamaño: tamaño1.value,
          caracteristicas: caracteristicas1.value,
          telcontacto: telcontacto1.value,
          email: email1.value,
          comentarios: comentarios1.value,
          tipomascota: tipomascota1.value
         })
            .then(function(docRef){
              console.log("ok con id " + tamaño.value);
           })
          .catch(function(error){
              console.log("Error "+ error);         
        })
    });

            

        //carga de archivos subidos por el usuario
        var uploader = document.getElementById("uploader");
        var fileButton = document.getElementById("fileButton");

        fileButton.addEventListener('change', function(e){
    
            var file = e.target.files[0]; 
        
            var storageRef = firebase.storage().ref('mascotassubidas/' + file.name);
        
            var task = storageRef.put(file);
            task.on('state_changed',
             function progress(snapshot){
              var porcentaje = (snapshot.bytesTranferred / snapshot.totalBytes) * 100;
              uploader.value  = porcentaje
             },
        
             function error(err) {
        
             },
        
             function complete (){
        
             }
        
            )
          })
    }
    else if(page.name === 'perdi'){
        // myApp.alert('Proximamente disponible');
        // aca

        
// timeline infinito
        var loading = false;
 
// Last loaded index
var lastIndex = $$('#timeline div.card').length;
// Max items to load
var maxItems = 60;
 
// Append items per load
var itemsPerLoad = 3;
 
// Attach 'infinite' event handler
$$('.infinite-scroll').on('infinite', function () {
 
  // Exit, if loading in progress
  if (loading) return;
 
  // Set loading flag
  loading = true;
 
  // Emulate 1s loading
  setTimeout(function () {
    // Reset loading flag
    loading = false;
 
    if (lastIndex >= maxItems) {
      // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
      myApp.detachInfiniteScroll($$('.infinite-scroll'));
      // Remove preloader
      $$('.infinite-scroll-preloader').remove();
      return;
    }
 
    // Generate new items HTML
    var html = '';
    for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
      html += '<div class="card demo-card-header-pic">'+
      '<div style="background-image:url(http://lorempixel.com/1000/600/nature/3/)" class="card-header align-items-flex-end">Journey To Mountains</div>'+
      '<div class="card-content">'+
        '<div class="card-content-inner">'+
          '<p class="color-gray">Posted on January 21, 2015</p>'+
          '<p>Quisque eget vestibulum nulla...</p>'+
        '</div>'+
      '</div>'+
      '<div class="card-footer">'+
        '<a href="#" class="link">Like</a>'+
        '<a href="#" class="link">Read more</a>'+
      '</div>'+
    '</div>';
    }
 
    // Append new items
    $$('#timeline').append(html);
 
    // Update last loaded index
    lastIndex = $$('#timeline div.card').length;
  }, 1000);
});
     

               //intento de recepcion de datos de base de datos
function creardin(a,b,c,d,e,f) {
    var divtipo= document.getElementById("tipomascota1");
    var divinsertar=document.createElement("p");
    divinsertar.innerHTML= a ;
    divtipo.appendChild(divinsertar) ;

    var divtamañomascota = document.getElementById("tamañomascota1");
    var divinsertar2 = document.createElement("p");
    divinsertar2.innerHTML= b ;
    divtamañomascota.appendChild(divinsertar2);

    var divcaracteristicamascota1 = document.getElementById("caracteristicamascota1");
    var divinsertar3 = document.createElement("p");
    divinsertar3.innerHTML= c ;
    divcaracteristicamascota1.appendChild(divinsertar3);

    var emailcontacto1 = document.getElementById("emailcontacto");
    var divinsertar4 = document.createElement("p");
    divinsertar4.innerHTML= d ;
    emailcontacto1.appendChild(divinsertar4);

    var telcontacto1 = document.getElementById("telcontacto");
    var divinsertar5 = document.createElement("p");
    divinsertar5.innerHTML= e ;
    telcontacto1.appendChild(divinsertar5);

    var comentariosmascota1 = document.getElementById("comentariosmascota");
    var divinsertar6 = document.createElement("p");
    divinsertar6.innerHTML= f ;
    comentariosmascota1.appendChild(divinsertar6);


    
}
function VolcarDatos() {
    return output =
    db.collection("nueva") //aca hay que agregar algo más para que sea del usuario que inicio sesion anteriormente
//obtengo todos los datos correspondienten a ese coso pero no se como hacerlo de un determinado id
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(" => ", doc.data());
                var objeto = doc.data();
                var tamaño = objeto.tamaño;
                console.log("cantidadinvitados");
                var caracteristicas = objeto.caracteristicas;
                var telcontacto = objeto.telcontacto;
                var emailcontacto = objeto.emailcontacto;
                var comentarios = objeto.comentarios;
                var tipomascota = objeto.tipomascota;

                creardin(tamaño,caracteristicas,telcontacto,emailcontacto,comentarios,tipomascota);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
  } 

VolcarDatos()

    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

