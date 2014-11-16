'use strict';

var phoneApp = angular.module('phoneApp', [
    'ngRoute',
    'phoneControllers',
    'phoneFilters',
    'phoneServices'
]);

phoneApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'phone-list/phone-list.html',
                controller: 'PhoneListCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'phone-detail/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }]);
