'use strict';

var phoneServices = angular.module('phoneServices', ['ngResource']);

phoneServices.factory('Phone', ['$resource',
    function ($resource) {
        return $resource('phones/v1/:phoneId', {}, {
            query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
        });
    }]);
