'use strict';

describe('Registration Form Controller', function() {

    //load the registrationForm module before each test
    beforeEach(module('registrationForm'));

    var scope, ctrl;
    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('RegistrationFormController', {$scope: scope});
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

    it('should set custom organization', inject(function() {
        ctrl.toggleCustomOrg();
        expect(ctrl.profile.isCustomOrg).toBe(true);
    }));


    it('should set 9 FWS regions', inject(function() {
        expect(ctrl.fwsRegions.length).toBe(9);
    }));

});