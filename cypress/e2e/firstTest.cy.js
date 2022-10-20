import '@testing-library/cypress/add-commands'


describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe("Google", () => {
  beforeEach(() => {
    cy.visit('http://www.google.com')
  })
  it("searching for 'Platform One' yields search results", () => {
    /* YOUR CODE GOES BELOW THIS LINE */
    cy.get("input[name='q']").type("Platform One")
    /* NO CODE BELOW THIS LINE */
  })
})