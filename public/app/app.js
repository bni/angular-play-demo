'use strict';

var phoneApp = angular.module('phoneApp', [
    'ui.router',
    'ui.bootstrap',
    'tableSort',
    'ncy-angular-breadcrumb',
    'phoneControllers',
    'phoneServices'
]);

phoneApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/landing');

    $stateProvider
    .state('landing', {
        url: '/landing',
        templateUrl: 'templates/landing.html',
        controller: 'LandingCtrl',
        ncyBreadcrumb: {
            label: 'Home'
        }
    })
    .state('phones', {
        url: '/phones',
        templateUrl: 'templates/phone-list.html',
        controller: 'PhoneListCtrl',
        ncyBreadcrumb: {
            label: 'Phones',
            parent: 'landing'
        }
    })
    .state('detail', {
        abtract: true,
        url: '/phones/:phoneId',
        templateUrl: 'templates/phone-detail.html',
        controller: 'PhoneDetailCtrl',
        ncyBreadcrumb: {
            label: '{{phone.name}}',
            parent: 'phones'
        }
    })
    .state("detail.main", {
        url: "/main",
        templateUrl: "templates/phone-main-tab.html",
        ncyBreadcrumb: {
            skip: true
        }
    })
    .state("detail.other", {
        url: "/other",
        templateUrl: "templates/phone-other-tab.html",
        ncyBreadcrumb: {
            skip: true
        }
    });

    $httpProvider.interceptors.push(function ($q) {
        return {
            'responseError': function (rejection) {
                if (rejection.status === 401) {
                    window.location.href = '/#landing';
                }

                return $q.reject(rejection);
            }
        };
    });
});

phoneApp.run(function() {
    FastClick.attach(document.body);
});

var phoneControllers = angular.module('phoneControllers', []);

var phoneServices = angular.module('phoneServices', ['ngResource']);
