/// <reference types="cypress" />
import { tid } from '../helpers/selectors';

Cypress.Commands.add('createPokerRoom', (name: string) => {
    cy.visit('/');
    cy.get(tid('create-poker-room__form')).within(() => {
        cy.get(tid('create-poker-room__name-field')).type(name);
        cy.root().submit();
    });
});

Cypress.Commands.add('createPokerTable', (name: string) => {
    cy.get(tid('create-poker-table__form')).within(() => {
        cy.get(tid('create-poker-table__name-field')).type(name);
        cy.root().submit();
    });
});
