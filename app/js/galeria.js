gallery.controller("galeria",['$scope','servicios', function($scope, servicios){
    servicios.getData()
    .then(function(response){
        $scope.datos = response.filter((value)=> value.id <= 10);
    });
}])