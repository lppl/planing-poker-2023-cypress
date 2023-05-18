import { itemprop, itemscopeByType, SchemaType } from '../helpers/selectors';
import { id } from '../helpers/id';

describe('Poker room', () => {
    it('Poker room is created and we can see it', () => {
        const roomTestName = `NewPokerRoomName::${id()}`;

        cy.createPokerRoom(roomTestName);

        cy.get(itemscopeByType(SchemaType.Room)).within(() => {
            cy.get(itemprop('name')).contains(roomTestName);
            cy.root()
                .then((el) => el.attr('itemid'))
                .then((itemid) => {
                    cy.get(itemprop('id')).contains(itemid);
                });
        });
    });

    it('Inside poker room we can create poker table', () => {
        const testName = `NewPokerTableName::${id()}`;
        cy.createPokerRoom('PokerRoomForNewTable');
        cy.createPokerTable(testName);

        cy.get(itemscopeByType(SchemaType.Table)).within(() => {
            cy.get(itemprop('name')).contains(testName);
            cy.root()
                .then((el) => el.attr('itemid'))
                .then((itemid) => {
                    cy.get(itemprop('id')).contains(itemid);
                });
        });
    });
});
