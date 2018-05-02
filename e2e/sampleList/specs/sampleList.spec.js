import SampleList from '../page_objects/sampleList.page.js';
import PageHeader from '../../pageHeader/page_objects/pageHeader.page.js';
import LoginPage from "../../login/page_objects/login.page";

describe('Sample list testing', () => {
    it('should be able to login', () => {
        LoginPage.login(userInfo.username, userInfo.password);
        device.pause(defaultWaitTimeForTransition);
        expect(PageHeader.backButton.value).toBeTruthy();
    });
    it('should be able to scroll down to find the element', () => {
        SampleList.scrollDownToFind('Wheel Picker').click();
        device.pause(defaultWaitTimeForTransition);
        expect(PageHeader.getHeaderbyName('Wheel Picker Demo').value).toBeTruthy();
    })
})