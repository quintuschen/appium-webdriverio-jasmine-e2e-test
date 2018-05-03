import {
    ANDROID_ALERT_MESSAGE_SELECTOR,
    IOS_ALERT_SELECTOR,
    IOS_TEXT_SELECTOR,
    ANDROID_ACCEPT_ALERT_SELECTOR
} from '../../../support/constants';

export default class BasePage {

    get alertOKButton() {
        return device.isIOS ? $(IOS_ACCEPT_ALERT_SELECTOR) : $(ANDROID_ACCEPT_ALERT_SELECTOR);
    }

    getAlertMessage() {
        if (device.isIOS) {
            device.waitForExist(IOS_ALERT_SELECTOR);
            let alert = $(IOS_ALERT_SELECTOR);
            return alert.getText(IOS_TEXT_SELECTOR);
        } else if (device.isAndroid) {
            device.waitForExist(ANDROID_ALERT_MESSAGE_SELECTOR);
            return device.getText(ANDROID_ALERT_MESSAGE_SELECTOR);
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