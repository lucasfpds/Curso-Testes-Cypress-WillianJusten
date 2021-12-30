/* eslint-disable prettier/prettier */
//load type definitions from Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /*
        * Visit google.com
        * @example cy.google()
        */
        google(): Chainable<Window>;
    }
}
