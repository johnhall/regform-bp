/**
 * Created by jhall on 10/14/15.
 */

// Mocked Registration Service
angular.module('mock.gov.doi.tracs.svcs', []).
    factory('CommonSvcsMock', function () {
        var cmnSvc = this;
        cmnSvc.focusIt = jasmine.createSpy('focusIt');
        return cmnSvc;
    });


