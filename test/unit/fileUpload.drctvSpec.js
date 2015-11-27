angular.module('mock.fileUpload', []).
factory('fileUploadMock', function () {
    var fUp = this;
    fUp.fn = jasmine.createSpy('fn');
    return fUp;
});

'use strict';

describe('JQuery File Upload Directive', function() {

    var scope, compile, drctv, fUpMock;

    beforeEach(module('mock.fileUpload'));
    beforeEach(module('uploadModule'));
    beforeEach(inject(function(_$compile_, _$rootScope_, _fileUploadMock_) {
            compile = _$compile_;
            scope = _$rootScope_.$new();
            fUpMock = _fileUploadMock_;
            drctv = getCompiledElement();
        })
    );

    function getCompiledElement() {
        var element = angular.element("<ng-upload-form url='/files/' size-limit='500000' accept-types='^(.*\.(docx?|pdf|jpe?g|png|gif)$)[^.]*$'/>");
        var compiledElement = compile(element)(scope);
        scope.$digest();
        return compiledElement;
    }

    it('Verify interpolated values in generated HTML', inject(function() {
        expect(drctv.html()).toContain("<a data-ng-href='/files/'");
    }));


});