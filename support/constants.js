/**
 * Cross-platform Text selectors
 */

export const ANDROID_TEXT_SELECTOR = '*//android.widget.TextView';
export const ANDROID_ALERT_TITLE_SELECTOR = '*//android.widget.TextView[@resource-id="android:id/alertTitle"]';
export const ANDROID_ALERT_MESSAGE_SELECTOR = '*//android.widget.TextView[@resource-id="android:id/message"]';
export const ANDROID_ACCEPT_ALERT_SELECTOR = '*//android.widget.Button[@text="OK"]';
export const IOS_ACCEPT_ALERT_SELECTOR = '//*[@name="OK"]';
export const IOS_ALERT_SELECTOR = '*//XCUIElementTypeAlert';
export const IOS_TEXT_SELECTOR = 'XCUIElementTypeStaticText';
