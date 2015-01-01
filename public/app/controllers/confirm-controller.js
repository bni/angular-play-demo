'use strict';

phoneControllers.controller('ConfirmDialogCtrl', function ($scope, $modalInstance,
        dialogTitle, dialogMessage, dialogConfirm, dialogCancel) {
    $scope.dialogTitle = dialogTitle;
    $scope.dialogMessage = dialogMessage;
    $scope.dialogConfirm = dialogConfirm;
    $scope.dialogCancel = dialogCancel;

    $scope.confirm = function () {
        $modalInstance.close();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss();
    };
});
