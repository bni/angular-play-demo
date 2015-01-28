'use strict';

phoneDirectives.directive('confirmOnLeave', function() {
    return {
        link: function($scope) {
            window.onbeforeunload = function(){
                if ($scope.phoneForm.$dirty) {
                    return "Abandon unsaved changes?";
                }
            };

            $scope.$on('$stateChangeStart', function(event) {
                if ($scope.phoneForm.$dirty) {
                    if(!confirm("Abandon unsaved changes?")) {
                        event.preventDefault();
                    }
                }
            });
        }
    };
});
