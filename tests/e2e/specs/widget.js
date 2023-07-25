// https://docs.cypress.io/api/table-of-contents

const APP_URL = process.env.APP_URL || 'http://localhost:8080'

describe('<Widget />', () => {
  it('verifica se o botão está sendo exibodo', () => {
    cy.visit(APP_URL)
    cy.wait(2000)
    cy.get('[data-test="widget-open-button"]')
  })
})
