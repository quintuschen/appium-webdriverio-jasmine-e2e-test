export default class BasePage {

    getAlertText() {
        let context = browser.contexts.value.find(value => value !== 'NATIVE_APP');
        browser.context(context);
        return browser.alertText();
    }

    dismissAlert() {
        browser.context();
        browser.alertDismiss();
    }
}