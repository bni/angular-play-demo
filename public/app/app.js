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
    .when('/landing', {
        templateUrl: 'landing.html',
        controller: 'LandingCtrl',
        label: 'Home'
    })
    .when('/landing/phones', {
        templateUrl: 'phone-list.html',
        controller: 'PhoneListCtrl',
        label: 'Phones'
    })
    .when('/landing/phones/:phoneId', {
        templateUrl: 'phone-detail.html',
        controller: 'PhoneDetailCtrl',
        label: 'Details'
    })
    .otherwise({
        redirectTo: '/landing'
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
