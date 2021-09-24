gallery.factory('servicios', function($http){
    var servicios =  {
        getAlbums: function(){
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
