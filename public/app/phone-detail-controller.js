'use strict';

phoneControllers.controller('PhoneDetailCtrl', function ($scope, $stateParams, Phone) {
    $scope.phone = Phone.get({phoneId: $stateParams.phoneId});

    $scope.save = function(phone) {
        phone.$save();
    };
});
