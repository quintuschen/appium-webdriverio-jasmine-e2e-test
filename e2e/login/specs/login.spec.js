import LoginPage from '../page_objects/login.page.js';

describe('Login', function () {
    it('should be able to login with correct credentials', function () {
        LoginPage.login('admin', 'admin');
        browser.pause(2000);
    });
});
