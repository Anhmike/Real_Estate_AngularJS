(function (app) {
    var tenantsController = function ($scope, tenantService, $timeout) {
        var init = function () {
            $scope.tenant = tenantService.getTenant(0);
            $scope.dummy = "Tony";

        };

        var index = 0;

        $scope.nextTenant = function () {
            index++;
            if (tenantService.isOverflow(index))
            {
                index--;
            }
            $scope.tenant = tenantService.getTenant(index);

        }

        $scope.previousTenant = function () {
            index--;
            if (index < 0) {
                index = 0;
            }
            $scope.tenant = tenantService.getTenant(index);
        }

        $scope.addTenant = function () {
            index--;
            if (index < 0) {
                index = 0;
            }
            $scope.tenant = tenantService.addTenant(index);
        }

        $scope.deleteTenant = function () {
         
            $scope.tenant = tenantService.deleteTenant(index);
            index--;
        }      

        init();
    };
    app.controller("tenantsController", ["$scope", "tenantService", "$timeout", tenantsController]);
}(angular.module("realestateApp")));