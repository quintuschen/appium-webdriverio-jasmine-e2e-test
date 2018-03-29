class LoginPage {

    get usernameField() { return $("~ua-login-username"); }
    get passwordField() { return $("~ua-login-password"); }
    get loginButton() { return $("~ua-login-loginButton"); }

    login(username, password, url) {
        this.usernameField.setValue(username);
        this.passwordField.setValue(password);
        browser.hideDeviceKeyboard();
        this.loginButton.click();
    }

}

export default new LoginPage();
