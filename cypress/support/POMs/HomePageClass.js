import {BasePage} from './BasePageClass';

export class HomePageClass extends BasePage {
    constructor() {
        super();
        this.whereGoingField = '[id="ss"]';
        this.datesChooser = '[class="sb-date-field__icon sb-date-field__icon-btn bk-svg-wrapper calendar-restructure-sb"]';
        this.guestsChooser = '[id="xp__guests__toggle"]';
        this.adultsPlusButton = '[class="bui-button bui-button--secondary bui-stepper__add-button "]';
        this.searchButton = '[class="sb-searchbox__button "]';

    };

    static fillSearchFields() {
            cy.get(this.whereGoingField).type(Cypress.env('USERNAME'))
            cy.get(this.datesChooser).click()
            cy.get('[data-date]').then(input => cy.input(input, "2022-08-01"))
            cy.get('[data-date]').then(input => cy.input(input, "2022-08-15"))
            cy.get(this.guestsChooser).click()
            cy.get(this.adultsPlusButton).click()
            cy.get(this.searchButton).click()
    };


}
