import pageOneFieldEntries from '../fixtures/page-1';
import pageTwoFieldEntries from '../fixtures/page-2';
import expectedResult from '../fixtures/expectedResults';

describe('Creating an application', () => {
  it('Can enter first form data', () => {
    cy.visit('/apply/1');
    pageOneFieldEntries.selects.forEach(select => {
      cy.get(select.getBy).click({ force: true });
      cy.get(select.getBy).contains(select.value).click({ force: true });
    });

    pageOneFieldEntries.checkboxes.forEach(checkbox => {
      cy.get(checkbox.getBy).check({ force: true });
    });

    pageOneFieldEntries.inputs.forEach(input => {
      cy.get(input.getBy).type(input.text, { force: true });
    });

    cy.get('#btn-submit-form-data').click({ force: true });
  });

  it('Saves and loads data from session when returning to first page', () => {
    cy.wait(1000);
    cy.get('#btn-previous-page').click({ force: true });

    pageOneFieldEntries.selects.forEach(select => {
      cy.get(select.getBy).contains(select.value);
    });

    pageOneFieldEntries.checkboxes.forEach(checkbox => {
      cy.get(checkbox.getBy).should('be.checked');
    });

    pageOneFieldEntries.inputs.forEach(input => {
      cy.get(input.getBy).should('have.value', input.text);
    });
  });

  it('Can enter second form data and submits expected body', () => {
    // Intercept post request to verify the body
    cy.intercept('POST', '/apply/2').as('apply/2');
    cy.get('#btn-submit-form-data').click({ force: true });

    pageTwoFieldEntries.checkboxes.forEach(checkbox => {
      cy.get(checkbox.getBy).check({ force: true });
    });

    pageTwoFieldEntries.selects.forEach(select => {
      cy.get(select.getBy).click({ force: true });
      cy.get(select.getBy).contains(select.value).click({ force: true });
    });

    pageTwoFieldEntries.inputs.forEach(input => {
      cy.get(input.getBy).type(input.text, { force: true });
    });

    pageTwoFieldEntries.arrays.buttons.forEach(button => {
      cy.get(button.getBy).click({ force: true });
    });
    pageTwoFieldEntries.arrays.inputs.forEach(input => {
      cy.get(input.getBy).type(input.text, { force: true });
    });

    cy.get('#btn-submit-form-data').click({ force: true });
    cy.wait('@apply/2').its('request.body').should('deep.equal', expectedResult);
  });
});
