import { dataTestId, itemprop, itemscopeByType, SchemaType } from '../helpers/selectors';
import { id } from '../helpers/id';

describe('Poker room', () => {
    it('Poker room can be only created', () => {
        const testTitle = `NewPokerRoomTitle::${id()}`;
        cy.visit('/');

        cy.get(dataTestId('create-poker-room__form')).within(() => {
            cy.get(dataTestId('create-poker-room__name-field')).type(testTitle);
            cy.root().submit();
        });
        cy.get(itemscopeByType(SchemaType.Room)).within(() => {
            cy.get(itemprop('name')).contains(testTitle);
            cy.root()
                .then((el) => el.attr('itemid'))
                .then((itemid) => {
                    cy.get(itemprop('id')).contains(itemid);
                });
        });
    });
});
