import LoginPage from '../page_objects/login.page.js';

describe('Login', function () {
    it('should login', function () {
        LoginPage.login('qa', 'test');
    });
});
