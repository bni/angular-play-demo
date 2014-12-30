'use strict';

phoneControllers.controller('PhoneDetailCtrl', function ($scope, $state, $stateParams, Phone) {
    $scope.active1 = $state.is('detail.edit');
    $scope.active2 = $state.is('detail.other-1');
    $scope.active3 = $state.is('detail.other-2');

    $scope.phone = Phone.get({phoneId: $stateParams.phoneId});

    $scope.save = function(phone) {
        phone.$save();
    };
});
