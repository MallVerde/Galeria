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
    });
});

gallery.controller("controlador", function($scope){
    
});