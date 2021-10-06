gallery.controller("inicio", [
  "$scope",
  "servicios",
  function ($scope, servicios) {
    servicios.getAlbums().then(function (response) {
      $scope.albums = response.filter((value) => value.id <= 9);
      $(".prueba").slick({
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
      });
    });
  },
]);
