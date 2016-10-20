(function() {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.state = "normal";
        $scope.txtinput = "";
        $scope.message = "";

        $scope.setFocus = function() {
            $scope.state = "initial";
            $scope.message = "";
        }

        $scope.checkInput = function() {
            if (!$scope.txtinput) {
                $scope.message = "Please enter data first";
                $scope.state = "error";
                return;
            }
            var total = countDishes($scope.txtinput);
            if (total <= 3) {
                $scope.message = "Enjoy!";
                $scope.state = "info";
                return;
            }
            if (total > 3) {
                $scope.message = "Too much!";
                $scope.state = "info";
                return;
            }
        }
        function countDishes(stringToSplit) {
            var arrayOfStrings = stringToSplit.split(',');
            var arrayLength = arrayOfStrings.length;
            //check array for Empty element
            for (var i = 0; i < arrayOfStrings.length; i++) {
                if (!(arrayOfStrings[i].trim()))
                    arrayLength--;
            }
            return arrayLength;
        }
    }
})();
