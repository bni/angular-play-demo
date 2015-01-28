'use strict';

phoneDirectives.directive('confirmOnLeave', function() {
    return {
        require: '^form',
        restrict: "A",
        link: function($scope, element, attrs, formCtrl) {
            window.onbeforeunload = function(){
                if (formCtrl.$dirty) {
                    return "Abandon unsaved changes?";
                }
            };

            $scope.$on('$stateChangeStart', function(event) {
                if (formCtrl.$dirty) {
                    if(!confirm("Abandon unsaved changes?")) {
                        event.preventDefault();
                    }
                }
            });
        }
    };
});
