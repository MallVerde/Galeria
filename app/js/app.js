var gallery = angular.module("gallery", ["ngRoute"]);

gallery.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"views/home.html",
        controller:"inicio"
    })
    .when("/galeria",{
        templateUrl:"views/gallery.html",
        controller:"galeria"
    })
    .when("/contacto",{
        templateUrl:"views/contact.html",
    });
});
