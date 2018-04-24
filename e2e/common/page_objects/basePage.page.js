export default class BasePage {

    getAlertText() {
        if(browser.isAndroid){
            return browser.getText(`//*[@resource-id="android:id/message"]`)
        }
    }

    dismissAlert() {
        browser.alertDismiss();
    }
}