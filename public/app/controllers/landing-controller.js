'use strict';

phoneControllers.controller('LandingCtrl', function ($scope, $rootScope, $http) {
    console.log('isMobileDevice: ' + $rootScope.isMobileDevice);

    $scope.login = function() {
        $http.post("/login", $scope.credentials);
    };
});
