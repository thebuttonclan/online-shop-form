import pageOneFieldEntries from '../fixtures/page-1';
import pageTwoFieldEntries from '../fixtures/page-2';
import expectedResult from '../fixtures/expectedResults';

describe('Creating an application', () => {
  it('Can enter first form data', () => {
    cy.visit('/apply/1');
    pageOneFieldEntries.selects.forEach(select => {
      cy.get(select.getBy).click();
      cy.get(select.getBy).contains(select.value).click();
    });

    pageOneFieldEntries.checkboxes.forEach(checkbox => {
      cy.get(checkbox.getBy).check({ force: true });
    });

    pageOneFieldEntries.inputs.forEach(input => {
      cy.get(input.getBy).type(input.text);
    });

    cy.get('#btn-submit-form-data').click();
  });

  it('Saves and loads data from session when returning to first page', () => {
    cy.wait(1000);
    cy.get('#btn-previous-page').click();

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
    cy.get('#btn-submit-form-data').click();

    pageTwoFieldEntries.checkboxes.forEach(checkbox => {
      cy.get(checkbox.getBy).check({ force: true });
    });

    pageTwoFieldEntries.selects.forEach(select => {
      cy.get(select.getBy).click();
      cy.get(select.getBy).contains(select.value).click();
    });

    pageTwoFieldEntries.inputs.forEach(input => {
      cy.get(input.getBy).type(input.text);
    });

    pageTwoFieldEntries.arrays.buttons.forEach(button => {
      cy.get(button.getBy).click();
    });
    pageTwoFieldEntries.arrays.inputs.forEach(input => {
      cy.get(input.getBy).type(input.text);
    });

    cy.get('#btn-submit-form-data').click();
    cy.wait('@apply/2').its('request.body').should('deep.equal', expectedResult);
  });
});
