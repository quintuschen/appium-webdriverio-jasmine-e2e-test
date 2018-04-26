export default class BasePage {

    getAlertText() {
        if(browser.isAndroid){
            return browser.getText(`//*[@resource-id="android:id/message"]`);
        } else if (browser.isIOS) {
            return browser.getText(`XCUIElementTypeAlert`);
        }
    }

    dismissAlert() {
        browser.alertDismiss();
    }
}