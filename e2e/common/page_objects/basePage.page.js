export default class BasePage {

    get alertOKButton() {
        return browser.isIOS ? $('//*[@name="OK"]') : $('//*[@resource-id="android:id/button1"]')
    }

    getAlertMessage() {
        if (browser.isIOS) {
            browser.waitForExist('XCUIElementTypeAlert');
            let alert = $('XCUIElementTypeAlert');
            return alert.getText('XCUIElementTypeStaticText');
        } else if (browser.isAndroid) {
            browser.waitForExist('//*[@resource-id="android:id/message"]');
            return browser.getText('//*[@resource-id="android:id/message"]');
        }
    }

    dismissAlert() {
        if (browser.isIOS) {
            browser.alertDismiss();
        } else if (browser.isAndroid) {
            this.alertOKButton.click();
        }
    }
}