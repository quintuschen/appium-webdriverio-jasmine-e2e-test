export default class BasePage {

    get alertOKButton() {
        return device.isIOS ? $('//*[@name="OK"]') : $('//*[@resource-id="android:id/button1"]')
    }

    getAlertMessage() {
        if (device.isIOS) {
            device.waitForExist('XCUIElementTypeAlert');
            let alert = $('XCUIElementTypeAlert');
            return alert.getText('XCUIElementTypeStaticText');
        } else if (device.isAndroid) {
            device.waitForExist('//*[@resource-id="android:id/message"]');
            return device.getText('//*[@resource-id="android:id/message"]');
        }
    }

    dismissAlert() {
        if (device.isIOS) {
            device.alertDismiss();
        } else if (device.isAndroid) {
            this.alertOKButton.click();
        }
    }
}