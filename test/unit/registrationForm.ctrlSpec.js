'use strict';

describe('Registration Form Controller', function() {

    var scope, ctrl, commonSvcsMock;

    //load the registrationForm module before each test
    beforeEach(module('registrationForm'));

    beforeEach(module('mock.gov.doi.tracs.svcs'));

    beforeEach(inject(function($rootScope, $controller, _registrationSvc_, _CommonSvcsMock_) {
        scope = $rootScope.$new();
        commonSvcsMock = _CommonSvcsMock_;
        ctrl = $controller('RegistrationFormController', {$scope: scope, registrationSvc: _registrationSvc_, commonSvcs: _CommonSvcsMock_});
    }));


    it('role form should initially be invalid', inject(function() {
        expect(ctrl.isRoleFormValid()).toBeFalsy();
    }));

    it('should set usertype step', inject(function() {
        ctrl.setStep('usertype');

        expect(ctrl.step).toBe('usertype');
        expect(ctrl.showUserTypeWarn).toBe(false);
        expect(ctrl.showProfileWarn).toBe(false);
    }));

    it('should set profile step', inject(function() {
        ctrl.isUserTypeFormValid = true;
        ctrl.setStep('profile');

        expect(ctrl.step).toBe('profile');
        expect(ctrl.showUserTypeWarn).toBe(false);
        expect(ctrl.showProfileWarn).toBe(false);

        ctrl.isUserTypeFormValid = false;
        ctrl.setStep('profile');

        expect(ctrl.step).toBe('profile');
        expect(ctrl.showUserTypeWarn).toBe(true);
        expect(ctrl.showProfileWarn).toBe(false);
    }));

    it('should set roles step', inject(function() {
        ctrl.isProfileFormValid = true;
        ctrl.setStep('roles');

        expect(ctrl.step).toBe('roles');
        expect(ctrl.showUserTypeWarn).toBe(false);
        expect(ctrl.showProfileWarn).toBe(false);

        ctrl.isProfileFormValid = false;
        ctrl.setStep('roles');

        expect(ctrl.step).toBe('roles');
        expect(ctrl.showUserTypeWarn).toBe(false);
        expect(ctrl.showProfileWarn).toBe(true);
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
        expect(commonSvcsMock.focusIt).toHaveBeenCalledWith("focusCustomOrgF");

        ctrl.profile.organization = "whatever";
        ctrl.profile.customOrg = "whatever again";
        ctrl.toggleCustomOrg();
        expect(ctrl.profile.isCustomOrg).toBe(false);
        expect(ctrl.profile.organization).toBeNull();
        expect(ctrl.profile.customOrg).toBeNull();
        expect(commonSvcsMock.focusIt).toHaveBeenCalledWith("focusOrgF");
    }));


    it('should set 9 FWS regions', inject(function() {
        expect(ctrl.fwsRegions.length).toBe(9);
    }));

});