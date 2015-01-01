'use strict';

phoneControllers.controller('PhoneListCtrl', function ($scope, $modal, phoneService) {
    $scope.phones = phoneService.query();

    $scope.selectedPhone = null;
    $scope.setSelectedPhone = function (selectedPhone) {
        $scope.selectedPhone = selectedPhone;
    };

    $scope.deletePhone = function() {
        var confirmDialog = $modal.open({
            templateUrl: 'templates/confirm-dialog.html',
            controller: 'ConfirmDialogCtrl',
            resolve: {
                dialogTitle: function() {
                    return 'Please confirm';
                },
                dialogMessage: function() {
                    return 'Are you sure you want to delete ' + $scope.selectedPhone.name + '?';
                },
                dialogConfirm: function() {
                    return 'Delete'
                },
                dialogCancel: function() {
                    return 'Cancel'
                }
            }
        });

        confirmDialog.result.then(function () {
            console.log('Performing delete of: ' + $scope.selectedPhone.id);
        });
    };
});
