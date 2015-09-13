'use strict';

phoneServices.factory('sessionInfoService', function ($resource) {
    return $resource('session-info');
});
