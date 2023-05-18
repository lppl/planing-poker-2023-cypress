/// <reference types="cypress" />
import { dataTestId } from '../helpers/selectors';

Cypress.Commands.add('createPokerRoom', (name: string) => {
    cy.visit('/');
    cy.get(dataTestId('create-poker-room__form')).within(() => {
        cy.get(dataTestId('create-poker-room__name-field')).type(name);
        cy.root().submit();
    });
});

Cypress.Commands.add('createPokerTable', (name: string) => {
    cy.get(dataTestId('create-poker-table__form')).within(() => {
        cy.get(dataTestId('create-poker-table__name-field')).type(name);
        cy.root().submit();
    });
});
