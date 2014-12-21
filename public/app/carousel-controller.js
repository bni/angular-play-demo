'use strict';

phoneControllers.controller('CarouselCtrl', function ($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
        var slides = $scope.slides = [];

        for (var i = 0; i < phone.images.length; i++) {
            slides.push({image: phone.images[i]});
        }
    });
});
