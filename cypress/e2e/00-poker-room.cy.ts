const id = () => Cypress._.random(0, 1e6);

describe("template spec", () => {
    it("passes", () => {
        cy.goHome();
        const title = "Foobar";
        cy.byId("create-room-form__name-field").type(title);
        cy.byId("create-room-form__submit").click();
        cy.get("[itemscope][itemtype='/schemas/poker-room.yml']")
            .contains("[itemprop=name]", title)
            .parent("[itemscope]")
            .find("a")
            .click();
    });
});
