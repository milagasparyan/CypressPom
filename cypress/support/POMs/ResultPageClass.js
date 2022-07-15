import {BasePage} from './BasePageClass';

export class ResultPageClass extends BasePage {
    constructor() {
        super();
        this.fourStars  = '[data-filters-item="class:class=4"]';

    };

    static clickFourStars() {
        cy.get(this.fourStars).click()

    };

}
