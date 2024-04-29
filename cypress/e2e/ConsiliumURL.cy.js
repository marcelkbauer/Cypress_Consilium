describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://consilium-staging.herokuapp.com/');

    //login Button Top right
    cy.get('.css-rbmgqc > .css-175xawu').should('be.visible');
    //cy.get('.css-rbmgqc > .css-1gh86vb').should('be.visible');
     //Sign up Button Top right
     cy.get('.css-rbmgqc > .css-175xawu').should('be.visible');
    //cy.get('.css-rbmgqc > .css-1h1xura').should('be.visible');
     //logo top left
     cy.get('.css-1x3s8qv').should('be.visible');
    //privacy Policy link bottom right
    cy.get('.css-mkzrng > :nth-child(1)').should('be.visible');
    //term of Use link bottom right
    cy.get('.css-mkzrng > :nth-child(2)').should('be.visible');
    
  })
})