'use strict';

var phoneApp = angular.module('phoneApp', [
    'ui.router',
    'ui.bootstrap',
    'tableSort',
    'ncy-angular-breadcrumb',
    'phoneControllers',
    'phoneServices',
    'phoneDirectives'
]);

phoneApp.config(function ($stateProvider, $urlRouterProvider, $breadcrumbProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login-page.html',
        controller: 'LoginPageCtrl',
        ncyBreadcrumb: {
            skip: true
        }
    })
    .state('logout', {
        url: '/logout',
        templateUrl: 'templates/logout-page.html',
        controller: 'LogoutPageCtrl',
        ncyBreadcrumb: {
            skip: true
        }
    })
    .state('start-page', {
        url: '/start-page',
        templateUrl: 'templates/start-page.html',
        controller: 'StartPageCtrl',
        ncyBreadcrumb: {
            skip: true
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

    $breadcrumbProvider.setOptions({
        templateUrl: 'templates/breadcrumb-template.html'
    });

    $httpProvider.interceptors.push(function ($q) {
        return {
            'responseError': function (rejection) {
                if (rejection.status === 401) {
                    window.location.href = '/#login';
                }

                return $q.reject(rejection);
            }
        };
    });
});

phoneApp.run(function($rootScope) {
    FastClick.attach(document.body);

    $rootScope.isMobileDevice = 'ontouchstart' in window && !!navigator.userAgent.match(/Mobile/);
});

var phoneControllers = angular.module('phoneControllers', []);

var phoneServices = angular.module('phoneServices', ['ngResource']);

var phoneDirectives = angular.module('phoneDirectives', []);
