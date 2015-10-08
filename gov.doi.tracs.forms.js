var tracsFormsMod = angular.module('gov.doi.tracs.forms', ['ui.bootstrap']);

tracsFormsMod.
directive( 'txFormField', function() {
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
        templateUrl: 'formField.template.html',
        transclude: true,
        controller: ['$scope', function($scope) {

              this.getId = function() {
                return $scope.tfId;
              }

              this.getType = function() {
                return $scope.tfType;
              }
        }]
    }
});

tracsFormsMod.
directive( 'txTextInput', function() {
    return {
        restrict: 'E',
        scope: {
            tfType: '@',
            tfPlaceholder: '@',
            tfModel: '='
        },
        require: '^txFormField',
        templateUrl: 'textInput.template.html',
        link: function(scope, element, attrs, ctrl) {

              scope.tfId = ctrl.getId();
              scope.tfType = ctrl.getType();
        }
    }
});

tracsFormsMod.
directive('focusOn', function() {
    return function(scope, elem, attr) {
        scope.$on('focusOn', function(e, name) {
            if(name === attr.focusOn) {
                elem[0].focus();
            }
        });
    };
});


