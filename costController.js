var app = angular.module('myApp2', []);
app.controller('costCtrl', function($scope) {
    $scope.quantity = "10";
    $scope.price = "5";
    $scope.total = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
});