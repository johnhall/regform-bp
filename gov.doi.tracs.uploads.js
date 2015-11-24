var tracsUploadsMod = angular.module('gov.doi.tracs.uploads', ['ui.bootstrap', 'gov.doi.tracs.forms', 'uploadModule']);

tracsUploadsMod.
directive('txFileUploadMetadata', function () {
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
        controller: function ($scope, $element, $attrs, $transclude) {
            this.metadata = {};
        },
        link: function(scope, element, attrs, ctrl) {
            //console.log(scope);
            //console.log(element);
            //console.log(attrs);
            //console.log(ctrl);
            scope.$on('fileuploadsubmit', function (e, data) {
/*
                var title = $('#' + scope.tfId + '-title');
                data.formData = {title: title.val()};
*/
                data.formData = {title: ctrl.metadata.title,
                                author: ctrl.metadata.author,
                                caption: ctrl.metadata.caption,
                                fileType: ctrl.metadata.fileType};
                console.log(data.formData);
/*
                if (!data.formData.title) {
                    data.context.find('button').prop('disabled', false);
                    title.focus();
                    return false;
                }
*/
            });
        }
    }
});

