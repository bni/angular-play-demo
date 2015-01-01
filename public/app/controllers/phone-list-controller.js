'use strict';

phoneControllers.controller('PhoneListCtrl', function ($scope, Phone) {
    $scope.phones = Phone.query();

    $scope.idSelected = null;
    $scope.setSelected = function (idSelected) {
        $scope.idSelected = idSelected;
    };
});
