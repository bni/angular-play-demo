'use strict';

phoneControllers.controller('PhoneDetailCtrl', function ($scope, $routeParams, Phone, breadcrumbs) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function (phone) {
        breadcrumbs.options = {'Details': phone.name};
    });

    $scope.save = function(phone) {
        phone.$save();
    };
});
