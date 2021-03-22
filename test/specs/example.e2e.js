import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    beforeEach( () => {
        LoginPage.open();
    });
    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });

    it.skip('user logs in with valid data', () => {
        LoginPage.setLogin('fejoya8091@heroulo.com');
        LoginPage.setPassword('t1875456');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
        });
    it.skip('submit button is disabled if login and password are absent', () => {
        LoginPage.submitButtonIsDisabled();
    });
    it('fails if invalid data provided', () => {
       LoginPage.setLogin('example@examplr.com');
       LoginPage.setPassword('5656565656');
       LoginPage.clickSubmitButton();
       LoginPage.errorToastAppeared();
    });

});


