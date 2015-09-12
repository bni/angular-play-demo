'use strict';

phoneControllers.controller('LogoutPageCtrl', function ($scope, $state, $http) {
    $scope.logout = function() {
        $http.post('/logout', {}).then(function() {
            $state.go('login');
        });
    };
});
