/**
 * Created by user on 11/5/15.
 */
var fileUpload = angular.module('fileUpload', ['ui.uploader', 'ngAnimate', 'ui.bootstrap', 'gov.doi.tracs.forms']);

fileUpload.controller('fileUploadController', function($scope, $log, uiUploader) {

    var vm = this;
    vm.fileMetadata = {};

    vm.btn_remove = function(file) {
        uiUploader.removeFile(file);
    };

    vm.btn_clean = function() {
        uiUploader.removeAll();
    };

    vm.btn_upload = function() {
        $log.info('uploading...');
        uiUploader.startUpload({
            url: 'http://localhost:63342/regform-bp/fileUpload.html',
            concurrency: 2,
            onProgress: function(file) {
                $log.info(file.name + '=' + file.humanSize);
                $scope.$apply();
            },
            onCompleted: function(file, response) {
                $log.info(file + 'response' + response);
            }
        });
    };

    vm.files = [];
    var element = document.getElementById('fileWidget');

    element.addEventListener('change', function(e) {
        var files = e.target.files;
        uiUploader.addFiles(files);
        vm.files = uiUploader.getFiles();
        $scope.$apply();
    });

    vm.getFileNames = function () {
        var msg = 'Files: ';
        for (var i = 0; i < uiUploader.getFiles().length; i++) {
            if(i > 0) {
                msg += ', ';
            }
            msg += uiUploader.getFiles()[i].name;
        }
        return msg;
    }

});