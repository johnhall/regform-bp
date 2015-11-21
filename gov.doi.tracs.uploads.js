var tracsUploadsMod = angular.module('gov.doi.tracs.uploads', ['ui.bootstrap', 'gov.doi.tracs.forms', 'uploadModule']);

tracsUploadsMod.
    controller('fileUploadMetadataController', function($scope, $element, $attrs, $transclude) {
});

tracsUploadsMod.
directive('fileUploadWithMetadata', function() {
    return {
        restrict: 'E',
        scope: {
            tfId: '@',
            tfFileUrl: '&',
            tfFileSize: '&',
            tfFileTypes: '&',
            tfMetadata: '=',
            tfModel: '=',
            tfForm: '='
        },
        require: ['^uploadModule', 'gov.doi.tracs.forms'],
        transinclude: true,
        templateUrl: './templates/fileFormWithMetadata.html',
        controllerAs: 'ctrl',
        controller: ['$scope', '$element', '$attrs', '$transclude', function ($scope, $element, $attrs, $transclude) {
            this.metadata = $scope.tfMetadata;
            this.mmodel = $scope.tfModel;
        }]
    }
});

