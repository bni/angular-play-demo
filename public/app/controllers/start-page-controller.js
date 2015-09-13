'use strict';

phoneControllers.controller('StartPageCtrl', function ($scope, $rootScope, sessionInfoService) {
    $rootScope.sessionInfo = sessionInfoService.get();
});
