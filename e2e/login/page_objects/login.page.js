var LoginPage = Object.create({

    page: {
        usernameField: $("~ua-login-username"),
        passwordField: $("~ua-login-password"),
        loginButton: $("~ua-login-loginButton")
    },

    getPage: function () {
        return this.page;
    },

    login: function (username, password) {
        this.getPage().usernameField.setValue(username);
        this.getPage().passwordField.setValue(password);
        browser.hideDeviceKeyboard();
        this.getPage().loginButton.click();
    }
});

module.exports = LoginPage;