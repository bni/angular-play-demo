'use strict';

phoneControllers.controller('StartPageCtrl', function ($scope, $rootScope, phoneService) {
    console.log('isMobileDevice: ' + $rootScope.isMobileDevice);

    $rootScope.sessionInfo = phoneService.get({phoneId: 'dell-venue'});
});
