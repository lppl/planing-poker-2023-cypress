declare global {
    namespace Cypress {
        interface Chainable {
            createPokerRoom(name: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}

export {};
