var tracsSvcsMod = angular.module('gov.doi.tracs.svcs', []);

tracsSvcsMod.
    factory('commonSvcs', function ($rootScope, $timeout) {
        return {
            focusIt: function (name) {
                $timeout(function () {
                    $rootScope.$broadcast('focusMe', name);
                });
            }
        }
    });

