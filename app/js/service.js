gallery.factory('servicios', function($http){
    var servicios =  {
        getData: function(){
            return $http({
                url:"https://jsonplaceholder.typicode.com/photos",
                method:"GET",
            })
            .then(function(response){
                return response.data;
            })
        }
    }

    return servicios;
})
