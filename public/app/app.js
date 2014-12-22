'use strict';

var phoneApp = angular.module('phoneApp', [
    'ngRoute',
    'phoneControllers',
    'phoneServices',
    'ui.bootstrap',
    'tableSort',
    'ng-breadcrumbs'
]);

phoneApp.config(function ($routeProvider, $httpProvider) {
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

    $httpProvider.interceptors.push(function ($q) {
        return {
            'responseError': function (rejection) {
                if (rejection.status === 401) {
                    window.location.href = 'http://www.google.se';
                }

                return $q.reject(rejection);
            }
        };
    });
});

var phoneControllers = angular.module('phoneControllers', []);

var phoneServices = angular.module('phoneServices', ['ngResource']);
