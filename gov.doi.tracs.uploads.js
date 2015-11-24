var tracsUploadsMod = angular.module('gov.doi.tracs.uploads', ['ui.bootstrap', 'gov.doi.tracs.forms', 'uploadModule']);

tracsUploadsMod.
directive('fileUploadWithMetadata', function () {
    return {
        restrict: 'E',
        scope: {
            tfId: '@',
            tfFileUrl: '@',
            tfFileSize: '@',
            tfFileTypes: '@'
        },
        templateUrl: './templates/fileFormWithMetadata.html',
        controllerAs: 'fUpMetaMain',
        controller: function ($scope, $element, $attrs) {
            this.metadata = {};
        },
        link: function(scope, element, attrs, ctrl) {
            //console.log(scope, element, attrs, ctrl);
        }
    }
});

