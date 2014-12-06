'use strict';

var phoneFilters = angular.module('phoneFilters', []);

phoneFilters.filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});
