'use strict';

var phoneControllers = angular.module('phoneControllers', []);

phoneControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
    function ($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }]);
