import BasePage from '../../common/page_objects/basePage.page';
import {swipeOnElement} from "../../../support/utils";

const nameAccessibilityIDMapping = {
    'Native View' : '~chainedView',
    'Slider' : '~slider1',
    'Wheel Picker': '~wheelPicker',
};

class SampleList extends BasePage {
    get scrollViewContainer() { return $(`~scrollView`)}

    scrollToFind(item) {
        while(!device.isVisible(nameAccessibilityIDMapping[item])){
            swipeOnElement(this.scrollViewContainer, 'up');
        }
        return $(nameAccessibilityIDMapping[item]);
    }
}

export default new SampleList();