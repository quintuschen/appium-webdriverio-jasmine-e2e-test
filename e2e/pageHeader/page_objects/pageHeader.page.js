import BasePage from '../../common/page_objects/basePage.page.js';

class PageHeader extends BasePage {
    get backButton() {return $(`//*[@text="Back"]`); }
    getHeaderbyName(name) {
        return $(`//*[@text="${name}"]`);
    }
}

export default new PageHeader();