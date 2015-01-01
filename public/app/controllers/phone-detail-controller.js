'use strict';

phoneControllers.controller('PhoneDetailCtrl', function ($scope, $state, $stateParams, phoneService) {
    $scope.mainActive = $state.is('detail.main');
    $scope.otherActive = $state.is('detail.other');

    $scope.phone = phoneService.get({phoneId: $stateParams.phoneId}, function() {
        $scope.loaded = true;
    });

    $scope.save = function(phone) {
        phone.$save();
    };
});
