'use strict';

phoneDirectives.directive('focus', function ($rootScope) {
    return function (scope, element, attrs) {
        attrs.$observe('focus', function (newValue) {
            !$rootScope.isMobileDevice && newValue === 'true' && element[0].focus();
        });
    }
});
