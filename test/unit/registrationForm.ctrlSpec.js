'use strict';

// Mocked Registration Service
angular.module('mock.reg.svc', []).
    factory('MockRegistrationService', function () {
        var regSvc = {};
        regSvc.focusIt = jasmine.createSpy('focusIt');
        return regSvc;
    });


describe('Registration Form Controller', function() {

    var scope, ctrl, mockRegSvc;

    //load the registrationForm module before each test
    beforeEach(module('registrationForm'));

    beforeEach(module('mock.reg.svc'));

    beforeEach(inject(function($rootScope, $controller, _MockRegistrationService_) {
        scope = $rootScope.$new();
        mockRegSvc = _MockRegistrationService_;
        ctrl = $controller('RegistrationFormController', {$scope: scope, registrationSvc: _MockRegistrationService_});
    }));


    it('should set usertype step', inject(function() {
        ctrl.setStep('usertype');

        expect(ctrl.step).toBe('usertype');
        expect(ctrl.showUserTypeWarn).toBe(false);
        expect(ctrl.showProfileWarn).toBe(false);
    }));

    it('should return user type', inject(function() {
        ctrl.profile.userType='fedUser';
        var userTypeDescription = ctrl.getUserType();
        expect(ctrl.profile.userType).not.toBeUndefined();
        expect(userTypeDescription).toBe('Federal User Profile Information');
    }));

    it('should toggle organization type', inject(function() {
        ctrl.profile.organization = "whatever";
        ctrl.profile.customOrg = "whatever again";
        ctrl.toggleCustomOrg();
        expect(ctrl.profile.isCustomOrg).toBe(true);
        expect(ctrl.profile.organization).toBeNull();
        expect(ctrl.profile.customOrg).toBeNull();
        expect(mockRegSvc.focusIt).toHaveBeenCalledWith("focusCustomOrgF");

        ctrl.profile.organization = "whatever";
        ctrl.profile.customOrg = "whatever again";
        ctrl.toggleCustomOrg();
        expect(ctrl.profile.isCustomOrg).toBe(false);
        expect(ctrl.profile.organization).toBeNull();
        expect(ctrl.profile.customOrg).toBeNull();
        expect(mockRegSvc.focusIt).toHaveBeenCalledWith("focusOrgF");
    }));


    it('should set 9 FWS regions', inject(function() {
        expect(ctrl.fwsRegions.length).toBe(9);
    }));

});