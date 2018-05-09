import BasePage from '../../common/page_objects/basePage.page';

class LoginPage extends BasePage {

    get usernameField() { return $("~username"); }
    get passwordField() { return $("~password"); }
    get loginButton() { return $("~login"); }

    login(username, password) {
        this.usernameField.setValue(username);
        device.hideDeviceKeyboard();
        this.passwordField.setValue(password);
        device.hideDeviceKeyboard();
        this.loginButton.click();
    }

}

export default new LoginPage();
