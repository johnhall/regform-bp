var tracsUploadsMod = angular.module('gov.doi.tracs.uploads', ['ui.bootstrap', 'gov.doi.tracs.forms', 'uploadModule']);

tracsUploadsMod.
    controller('fileUploadMetadataController', function($scope, $element, $attrs) {
});

tracsUploadsMod.
directive('fileUploadWithMetadata', function() {
    return {
        restrict: 'E',
        scope: {
            tfId: '@',
            tfFileUrl: '@',
            tfFileSize: '@',
            tfFileTypes: '@',
            tfMetadata: '=',
            tfModel: '=',
            tfForm: '='
        },
        templateUrl: './templates/fileFormWithMetadata.html',
        controllerAs: 'ctrl',
        controller: function ($scope, $element, $attrs) {
            this.metadata = [];
        },
        link: function(scope, element, attrs, ctrl) {
            console.log("linkFn");
            //console.log(scope, element, attrs, ctrl);
        }
    }
});

