export function waitElement(el: string) {
    cy.log('Waiting for ' + el + ' element to be visible');
    return cy.get(el, { timeout: 10000 }).should('be.visible');
}

export function set(el: string, text: string, option: Partial<typeof cy.type>) {
    waitElement(el).type(text, option);
    cy.log('Set the information in the ' + el);
}

export function click(el: string) {
    waitElement(el).click();
    cy.log('Clicked on the Element ' + el);
}

export function get_text(el: string) {
    waitElement(el);
    return cy.get(el).invoke('text').then((text) => {
        cy.log('Found the Element ' + el + ' with the text ' + text);
        return cy.wrap(text);
    });
}