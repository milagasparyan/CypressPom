lines (14 sloc)  557 Bytes

import {HomePageClass} from "../../support/POMs/HomePageClass";
import {ResultPageClass} from "../../support/POMs/ResultPageClass";

describe('Page Object Pattern - B', () => {
    beforeEach(() => {
        HomePageClass.visit()
    });

    it('search Dilijan and filter 4 stars', () => {
        HomePageClass.fillSearchFields()
        ResultPageClass.clickFourStars()

    });
});