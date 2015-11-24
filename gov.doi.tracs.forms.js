var tracsFormsMod = angular.module('gov.doi.tracs.forms', ['ui.bootstrap']);

tracsFormsMod.
directive('txFormField', function () {
    return {
        restrict: 'E',
        scope: {
            tfType: '@',
            tfPlaceholder: '@',
            tfLabel: '@',
            tfId: '@',
            tfHelp: '@',
            tfModel: '=',
            tfForm: '=',
            tfRequired: '='
        },
        templateUrl: './templates/formField.template.html',
        transclude: true,
        controller: ['$scope', function (scope) {

            this.getId = function () {
                return scope.tfId;
            };

            this.getType = function () {
                return scope.tfType;
            };
        }]
    }
});

tracsFormsMod.
directive('txTextInput', function () {
    return {
        restrict: 'E',
        scope: {
            tfType: '@',
            tfPlaceholder: '@',
            tfModel: '='
        },
        require: '^txFormField',
        templateUrl: './templates/textInput.template.html',
        link: function (scope, element, attrs, ctrl) {

            scope.tfId = ctrl.getId();
            scope.tfType = ctrl.getType();
        }
    }
});

tracsFormsMod.
directive('focusMe', function () {
    return function (scope, element, attribute) {
        scope.$on('focusMe', function (e, name) {
            if (name === attribute.focusMe) {
                element[0].focus();
            }
        });
    };
});


