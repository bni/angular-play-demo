'use strict';

phoneServices.factory('Phone', function ($resource) {
    return $resource('phones/v1/:phoneId', {}, {
        query: {method: 'GET', params: {phoneId: 'phones'}, isArray: true}
    });
});
