'use strict';

phoneControllers.controller('PhoneListCtrl', function ($scope, Phone) {
    $scope.phones = Phone.query();
});
