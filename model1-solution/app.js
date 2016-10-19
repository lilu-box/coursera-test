(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];


function LunchCheckController ($scope) {
  $scope.txtinput = "";
  $scope.message="Message ";

  $scope.checkInput = function () {
    $scope.message="Checking.. " + $scope.txtinput;
    checkInputData($scope.txtinput);
  }

  function checkInputData(string) {
  }


  $scope.displayNumeric = function () {
    var totalNameValue = calculatNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };

  function calculatNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
  }
}


})();
