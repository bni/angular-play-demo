'use strict';

phoneServices.factory('phoneService', function ($resource) {
    return $resource('phones/:phoneId');
});
