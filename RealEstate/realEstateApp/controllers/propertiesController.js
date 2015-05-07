(function (app) {
    var propertiesController = function ($scope, propertyService, $timeout) {
        var init = function () {
            $scope.property = propertyService.getProperty(0);
            $scope.dummy = "Tony";

        };

        var index = 0;

        $scope.nextProperty = function () {
            index++;
            if (propertyService.isOverflow(index))
            {
                index--;
            }
            $scope.property = propertyService.getProperty(index);

        }

        $scope.previousProperty = function () {
            index--;
            if (index < 0) {
                index = 0;
            }
            $scope.property = propertyService.getProperty(index);
        }

        $scope.addProperty = function () {
            index--;
            if (index < 0) {
                index = 0;
            }
            $scope.property = propertyService.addProperty(index);
        }

        $scope.deleteProperty = function () {
         
            $scope.property = propertyService.deleteProperty(index);
            index--;
        }      

        init();
    };
    app.controller("propertiesController", ["$scope", "propertyService", "$timeout", propertiesController]);
}(angular.module("realestateApp")));