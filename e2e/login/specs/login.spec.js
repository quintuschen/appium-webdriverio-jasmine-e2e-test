import LoginPage from '../page_objects/login.page';
import PageHeader from '../../pageHeader/page_objects/pageHeader.page';

const errorMessages = {
    wrongCredential: 'Invalid  Credentials',
};

describe('Login', function () {
    it('should give a proper error message when wrong credentials provided', () => {
        LoginPage.login(userInfo.username, userInfo.password + 'WRONG');
        expect(LoginPage.getAlertMessage().includes(errorMessages.wrongCredential)).toBeTruthy();
        LoginPage.dismissAlert();
    });
    it('should be able to login with correct credentials', () => {
        LoginPage.login(userInfo.username, userInfo.password);
        browser.pause(defaultWaitTimeForTransition);
        expect(PageHeader.backButton.value).toBeTruthy();
    });
});
