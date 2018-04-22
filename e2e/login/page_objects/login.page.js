import BasePage from '../../common/page_objects/basePage.page.js';

class LoginPage extends BasePage {

    get usernameField() { return $("~username"); }
    get passwordField() { return $("~password"); }
    get loginButton() { return $("~login"); }

    login(username, password) {
        this.usernameField.setValue(username);
        this.passwordField.setValue(password);
        browser.hideDeviceKeyboard();
        this.loginButton.click();
    }

}

export default new LoginPage();
