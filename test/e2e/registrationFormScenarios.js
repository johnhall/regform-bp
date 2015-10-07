describe('Registration Form', function () {

    var userTypeSelect=element(by.id('userTypeF'));


    beforeEach(function () {
        browser.get('registrationForm.html');
    });

    it('should have a title', function(){
        expect(browser.getTitle()).toEqual('TRACS Project Form');
    });

    it('should display 4 options in drop down', function () {
        var values = userTypeSelect.all(by.tagName('option')).getAttribute('value');
        expect(values).toEqual(['', 'fedUser', 'stateUser', 'tribalUser', 'otherUser']);
    });

    it('should enable Next Step button when user type selected', function () {
        element(by.cssContainingText('option', 'State User')).click();
        var button = element(by.id('goToProfileButton'));
        expect(button.isEnabled()).toBe(true);
    });

    it('should enable Next Step button when profile form is completed', function () {
        element(by.cssContainingText('option', 'State User')).click();
        element(by.id('goToProfileButton')).click();
        //now on user profile form
        element(by.id('firstNameF')).sendKeys('John');
        element(by.id('lastNameF')).sendKeys('Doe');
        element(by.id('phoneF')).sendKeys('(333) 333-333');
        element(by.id('email1F')).sendKeys('jdoe@jd.net');
        element(by.id('email2F')).sendKeys('jdoe@jd.net');
        element(by.cssContainingText('option', 'Alabama')).click();
        element(by.id('orgF')).sendKeys('Colorado Fish and Game');
        var button = element(by.id('goToResponsibilitiesButton'));
        expect(button.isEnabled()).toBe(true);
    });

});