'use strict';

phoneControllers.controller('PhoneDetailCtrl', function ($scope, $state, $stateParams, Phone) {
    $scope.mainActive = $state.is('detail.main');
    $scope.otherActive = $state.is('detail.other');

    $scope.phone = Phone.get({phoneId: $stateParams.phoneId});

    $scope.save = function(phone) {
        phone.$save();
    };
});
