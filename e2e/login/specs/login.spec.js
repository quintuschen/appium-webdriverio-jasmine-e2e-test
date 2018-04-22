import LoginPage from '../page_objects/login.page.js';

const userInfo = {
    username: 'admin',
    password: 'admin',
};

const errorMessages = {
    wrongCredential: 'Invalid Credentials',
};

describe('Login', function () {
    it('should give a proper error message when wrong credentials provided', () => {
        LoginPage.login(userInfo.username, userInfo.password + 'WRONG');
        expect(LoginPage.getAlertText()).toEqual(errorMessages.wrongCredential);
    });
    it('should be able to login with correct credentials', () => {
        LoginPage.login(userInfo.username, userInfo.password);
        browser.pause(2000);
    });
});
