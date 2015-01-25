'use strict';

phoneDirectives.directive('logoutButton', function() {
    return {
        replace: true,
        restrict: 'E',
        templateUrl: 'templates/logout-button.html'
    };
});
