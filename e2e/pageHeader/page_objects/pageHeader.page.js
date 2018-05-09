import BasePage from '../../common/page_objects/basePage.page';

class PageHeader extends BasePage {
    get backButton() { return $(`//*[@text="Back"]`); }
    getHeaderbyName(name) {
        return $(`//*[@text="${name}"]`);
    }

    goBack() {
        this.backButton.click();
    }
}

export default new PageHeader();