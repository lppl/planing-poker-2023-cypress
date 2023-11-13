declare global {
    namespace Cypress {
        interface Chainable {
            createPokerRoom(name: string): Chainable<JQuery>;
            createPokerTable(name: string): Chainable<JQuery>;
        }
    }
}

export {};
