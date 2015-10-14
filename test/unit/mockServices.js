/**
 * Created by jhall on 10/14/15.
 */

// Mocked Registration Service
angular.module('mock.reg.svc', []).
    factory('MockRegistrationService', function () {
        var regSvc = {};
        regSvc.focusIt = jasmine.createSpy('focusIt');
        return regSvc;
    });


