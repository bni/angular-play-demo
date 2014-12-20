'use strict';

var phoneApp = angular.module('phoneApp', [
    'ngRoute',
    'phoneControllers',
    'phoneServices',
    'ui.bootstrap',
    'tableSort',
    'ng-breadcrumbs'
]);

phoneApp.config(function ($routeProvider) {
    $routeProvider
    .when('/phones', {
        templateUrl: 'phone-list.html',
        controller: 'PhoneListCtrl',
        label: 'Home'
    })
    .when('/phones/:phoneId', {
        templateUrl: 'phone-detail.html',
        controller: 'PhoneDetailCtrl',
        label: 'Details'
    })
    .otherwise({
        redirectTo: '/phones'
    });
});

var phoneControllers = angular.module('phoneControllers', []);

var phoneServices = angular.module('phoneServices', ['ngResource']);
