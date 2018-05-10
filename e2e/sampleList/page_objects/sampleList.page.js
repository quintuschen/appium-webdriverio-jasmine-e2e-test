import BasePage from '../../common/page_objects/basePage.page';
import {swipeOnElement} from "../../../support/utils";

const SELECTORS = {
    'Native View' : '~chainedView',
    'Slider' : '~slider1',
    'Wheel Picker': '~wheelPicker',
};

class SampleList extends BasePage {
    static get selectors() { return SELECTORS; }
    static get scrollViewContainer() { return $(`~scrollView`)}

    scrollToFind(item) {
        while(!device.isVisible(this.selectors[item])){
            swipeOnElement(this.scrollViewContainer, 'up');
        }
        return $(this.selectors[item]);
    }
}

export default new SampleList();