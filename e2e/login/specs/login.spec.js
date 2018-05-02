import LoginPage from '../page_objects/login.page.js';
import PageHeader from '../../pageHeader/page_objects/pageHeader.page.js';

const errorMessages = {
    wrongCredential: 'Invalid  Credentials',
};

describe('Login', function () {
    it('should give a proper error message when wrong credentials provided', () => {
        LoginPage.login(userInfo.username, userInfo.password + 'WRONG');
        expect(LoginPage.getAlertMessage()).toEqual(errorMessages.wrongCredential);
        LoginPage.dismissAlert();
    });
    it('should be able to login with correct credentials', () => {
        LoginPage.login(userInfo.username, userInfo.password);
        browser.pause(defaultWaitTimeForTransition);
        expect(PageHeader.backButton.value).toBeTruthy();
    });
});
