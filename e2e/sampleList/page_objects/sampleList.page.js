import BasePage from '../../common/page_objects/basePage.page.js';

const nameAccessibilityIDMapping = {
    'Native View' : '~chainedView',
    'Slider' : '~slider1',
    'Wheel Picker': '~wheelPicker',
};

class SampleList extends BasePage {
    get scrollViewContainer() { return $(`~scrollView`)}

    scrollDownToFind(item) {
        while(!device.isVisible(nameAccessibilityIDMapping[item])){
            device.execute('mobile: scroll', {direction: 'down', element: this.scrollViewContainer.value.ELEMENT});
        }
        return $(nameAccessibilityIDMapping[item]);
    }
}

export default new SampleList();