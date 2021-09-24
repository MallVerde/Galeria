var gallery = angular.module("gallery", ["ngRoute"]);

gallery.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"views/home.html",
        controller:"controlador"
    })
    .when("/contacto",{
        templateUrl:"views/contact.html",
        controller:"controlador"
    })
    .when("/galeria",{
        templateUrl:"views/gallery.html",
        controller:"galeria"
    });
});

gallery.controller("controlador",function($scope){});