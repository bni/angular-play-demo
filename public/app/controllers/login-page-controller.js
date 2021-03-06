'use strict';

phoneControllers.controller('LoginPageCtrl', function ($scope, $state, $http) {
    $scope.login = function() {
        $http.post('/login', $scope.credentials).then(function() {
            $state.go('start-page');
        }, function() {
            $scope.loginError = true;
        });
    };
});
