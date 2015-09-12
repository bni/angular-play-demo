'use strict';

phoneControllers.controller('LoginPageCtrl', function ($scope, $state, $http) {
    $scope.login = function() {
        console.log("Loggoin");
        $http.post('/login', $scope.credentials).then(function() {
            $state.go('landing');
        });
    };
});
