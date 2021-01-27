import expectedResult from '../fixtures/expectedResults';
import formFieldEntries from '../fixtures/form';

// friendly reminder that page number = index + 1
const FINAL_PAGE = 33;
describe('Creating an application', () => {
  it(`Can enter form data and submit an application`, () => {
    cy.visit(`/apply/1`);
    cy.intercept('POST', '/apply/33').as('apply/33');
    formFieldEntries.forEach((entry, index) => {
      entry.inputs?.forEach(input => {
        cy.get(input.getBy).type(input.text, { force: true });
      });
      entry.numbers?.forEach(bumber => {
        cy.get(bumber.getBy).type(bumber.value, { force: true });
      });
      entry.checkboxes?.forEach(checkbox => {
        cy.get('[type="checkbox"]').first().check({ force: true });
      });
      entry.radios?.forEach(radio => {
        cy.get(radio.getBy).check({ force: true });
      });
      entry.selects?.forEach(select => {
        cy.get(select.getBy).select(select.value, { force: true });
      });
      cy.get('#btn-submit-form-data').click({ force: true });
      if (index === FINAL_PAGE - 1) {
        cy.wait('@apply/33').its('request.body').should('deep.equal', expectedResult);
      }
    });
  });
});

describe(`Form behavious test`, () => {
  it(`Saves and loads data from session when going back a page`, () => {
    cy.visit(`/apply/16`);
    cy.wait(1000);
    // fill in page 16, and proceed to 17
    cy.get(`#id_revenue2019`).type(formFieldEntries[15].inputs[0].text, { force: true });
    cy.get('#btn-submit-form-data').click({ force: true });
    cy.wait(3000);
    // go back to 16 and check value
    cy.get('#id_back_button').click({ force: true });
    cy.get(`#id_revenue2019`).should('have.value', formFieldEntries[15].inputs[0].text);
  });

  it(`Correctly calculates the total grant amount requested`, () => {
    cy.visit(`/apply/30`);
    cy.wait(3000);
    cy.get(`#id_serviceProviderCosts`).type(2000, { force: true });
    cy.wait(1000);
    cy.get(`#id_total_grant_request`).should('have.text', '$1,500.00');
    cy.get(`#id_customerAcquisitionCosts`).type(2000, { force: true });
    cy.wait(1000);
    cy.get(`#id_total_grant_request`).should('have.text', '$3,000.00');
    cy.get(`#id_staffTrainingCosts`).type(10000, { force: true });
    cy.wait(1000);
    // Make sure total doesn't go over maximum grant request amaount.
    cy.get(`#id_total_grant_request`).should('have.text', '$7,500.00');
  });
});
