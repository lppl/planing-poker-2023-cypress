/// <reference types="cypress" />
Cypress.Commands.add("goHome", () => cy.visit("/"));

const testId = (id: string): string => {
    return `[data-test-id=${id}]`;
};
Cypress.Commands.add("byId", (id: string) => cy.get(testId(id)));
