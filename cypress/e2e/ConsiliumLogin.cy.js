describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://consilium-staging.herokuapp.com/');

    //Click Login
    cy.get('.css-rbmgqc > .css-16ch12m').click();
    //enter email address
    cy.get('#email').clear('ma');
    cy.get('#email').type('marcel+physician2@cratebind.com');
    //Enter Password
    cy.get('#password').clear();
    cy.get('#password').type('Password1!');
    cy.get('.css-0 > .css-16ch12m').click();
    //Verify Logout button is now showing
    cy.get('.css-16ch12m').should('be.visible');
    cy.get('.css-16ch12m').should('have.text', 'Logout');

    //Click Logout Button
    cy.get('.css-16ch12m').click();
    //Verify Login Button appears with Log in Text
    cy.get('.css-rbmgqc > .css-16ch12m').should('be.visible');
    cy.get('.css-rbmgqc > .css-16ch12m').should('have.text', 'Log in');
    //Verify that Sign up button displays with Sign up text
    cy.get('.css-rbmgqc > .css-175xawu').should('be.visible');
    cy.get('.css-rbmgqc > .css-175xawu').should('have.text', 'Sign Up');
    
  })
})