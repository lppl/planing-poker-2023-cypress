declare global {
    namespace Cypress {
        interface Chainable {
            goHome(): Chainable<Cypress.AUTWindow>;
            byId(id: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}

export {};
