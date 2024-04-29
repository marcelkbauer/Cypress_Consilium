
import { faker } from '@faker-js/faker';
const firstName = faker.person.firstName();
        const familyName = faker.person.lastName();
        //const mobileNumber =faker.phone.phoneNumber();
        const email = faker.internet.email();
describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://consilium-staging.herokuapp.com/');

    //Click Sign Up Button
    cy.get('.css-rbmgqc > .css-175xawu').click();
    //Choose CRNA option button
    cy.get(':nth-child(3) > .css-ahvecw').click();
    //cy.get(':nth-child(2) > .css-ahvecw').click();
    cy.get('#first_name').clear('O');
    cy.get('#first_name').type('Otto');
    cy.get('#last_name').clear();
    cy.get('#last_name').type('Mater');
    cy.get('#email').type('Mater');
    cy.get('#email').clear('O');
    cy.get('.css-pc53l').should('be.visible');
    cy.get('.css-pc53l').should('have.text', 'Please enter your email address.');
    cy.get('#email').clear('O');
    cy.get('#email').type('OttoMater@test.com');
    cy.get('#password').type('ert');
    cy.get('#password').clear('ert');
    cy.get('.css-pc53l').should('be.visible');
    cy.get('.css-pc53l').should('have.text', 'Please enter a  password.');
    cy.get('#password').clear('O');
    cy.get('#password').type('OttoNation1!');
    cy.get('#password_confirmation').clear('ert');
    cy.get('#password_confirmation').type('erter');
    cy.get('.css-pc53l').should('be.visible');
    cy.get('.css-pc53l').should('have.text', 'Passwords do not match.');
    cy.get('.css-1j2eyv0').click();
    cy.get('#password_confirmation').clear();
    cy.get('#password_confirmation').type('OttoNation1!');
    cy.get('.css-mlemn8').check();
    cy.get('.css-mlemn8').should('be.checked');
    cy.get('.css-7whenc > .css-16ch12m').should('be.enabled');
    cy.get('.css-7whenc > .css-16ch12m').click();
    cy.get('.css-pc53l').should('have.text', 'The email address you entered is already in use.');
    cy.wait(3200);
    cy.get('#email').clear('O');
    cy.get('#email').type(email);
    cy.get('.css-7whenc > .css-16ch12m').click();
    cy.wait(1500);

    cy.get('.css-6kb985').should('have.text', 'Confirm your email address');
    cy.get('.css-6kb985').should('be.visible');

    //cy.get('[style="color: rgb(5, 5, 27); font-family: Inter; font-style: normal; line-height: 140%; font-weight: 400; font-size: 20px;"]').should('have.text', 'Confirm your email address');
    //cy.get('[style="color: rgb(5, 5, 27); font-family: Inter, sans-serif; font-style: normal; font-weight: 400; line-height: 140%; font-size: 14px;"]').should('be.visible');
    cy.get('.css-43cxha > :nth-child(2)').should('be.visible');
    cy.get('.css-10m7su4').should('be.visible');
    cy.get('.css-1k5szd').click();
    
    
  })
})