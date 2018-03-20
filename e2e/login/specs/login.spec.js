const loginPage = require('../page_objects/login.page');

describe('Login', function () {
    it('should login', function () {
        loginPage.login('qa', 'test');
    });
});