/// <reference types="cypress" />
import { dataTestId } from '../helpers/selectors';

Cypress.Commands.add('createPokerRoom', (name: string) => {
    cy.visit('/');
    return cy.get(dataTestId('create-poker-room__form')).within(() => {
        cy.get(dataTestId('create-poker-room__name-field')).type(name);
        return cy.root().submit();
    });
});
