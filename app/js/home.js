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
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });
    });
  },
]);
