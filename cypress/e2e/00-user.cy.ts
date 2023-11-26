import { itemprop, itemscopeByType, SchemaType, tid } from '../helpers/selectors';

Cypress.config('defaultCommandTimeout', 100);

describe('Players', () => {
    it('New user receive persistent id', () => {
        let first_id = '';
        cy.visit('/')
            .get(itemscopeByType(SchemaType.User))
            .then((el) => (first_id = el.attr('itemid')))
            .visit('/')
            .get(itemscopeByType(SchemaType.User))
            .then((el) => el.attr('itemid'))
            .then((second_id) => {
                expect(second_id).to.be.equal(first_id);
            });
    });

    it('Two different users dont share an Id', () => {
        let firstId = '';
        cy.visit('/')
            .get(itemscopeByType(SchemaType.User))
            .then((el) => (firstId = el.attr('itemid')))
            .then(Cypress.session.clearCurrentSessionData)
            .visit('/')
            .get(itemscopeByType(SchemaType.User))
            .then((el) => el.attr('itemid'))
            .then((second_id) => {
                expect(second_id).not.to.be.equal(firstId);
            });
    });

    it('New user by default is named Anonymous', () => {
        cy.visit('/')
            .get(itemscopeByType(SchemaType.User))
            .find(itemprop('name'))
            .should('contain', 'Anonymous')
            .get(itemscopeByType(SchemaType.User))
            .find(itemprop('type'))
            .should('contain', 'guest');
    });

    it.only('You can rename your session after you click "edit name" button', () => {
        cy.visit('/')
            .get(itemscopeByType(SchemaType.User))
            .find('button:contains("Edit")')
            .click()
            .get(tid('rename-player__form'))
            .find('input[name=name]')
            .type('new name{enter}')
            // We check update on same page
            .get(itemscopeByType(SchemaType.User))
            .find(itemprop('name'))
            .should('contain', 'new name')
            // We check update have been persistent
            .visit('/')
            .get(itemscopeByType(SchemaType.User))
            .find(itemprop('name'))
            .should('contain', 'new name');
    });
});
