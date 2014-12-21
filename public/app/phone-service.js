'use strict';

phoneServices.factory('Phone', function ($resource) {
    return $resource('phones/:phoneId');
});
