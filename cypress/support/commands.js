import { faker } from '@faker-js/faker';

Cypress.env('password', (faker.internet.password()));
Cypress.env('email1', (faker.internet.email()));
Cypress.env('email2', (faker.internet.email()));


/* ------------ CADASTRO ------------ */

Cypress.Commands.add('cadastroSaldo', () => {
    cy.visit('https://bugbank.netlify.app')

    
  
    cy.get('.ihdmxA').click()

    cy.get(':nth-child(2) > .input__default').type(Cypress.env('email1'), {force: true})
    cy.get(':nth-child(3) > .input__default').type(faker.name.fullName(), {force: true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'), {force: true})
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'), {force: true})

    cy.get('#toggleAddBalance').click({force: true})

    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true})
    
})

Cypress.Commands.add('cadastroSemSaldo', () => {
    cy.visit('https://bugbank.netlify.app')

    cy.get('.ihdmxA').click()

    cy.get(':nth-child(2) > .input__default').type(Cypress.env('email2'), {force: true})
    cy.get(':nth-child(3) > .input__default').type(faker.name.fullName(), {force: true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'), {force: true})
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'), {force: true})

    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true})
    
})

Cypress.Commands.add('cadastroSenhasDiferentes', () => {
    cy.visit('https://bugbank.netlify.app')

    cy.get('.ihdmxA').click()

    cy.get(':nth-child(2) > .input__default').type(Cypress.env('email1'), {force: true})
    cy.get(':nth-child(3) > .input__default').type(faker.name.fullName(), {force: true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'), {force: true})
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(faker.internet.password(), {force: true})

    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true})
    
})

Cypress.Commands.add('cadastroSemEmail', () => {
    cy.visit('https://bugbank.netlify.app')
  
    cy.get('.ihdmxA').click()

    cy.get(':nth-child(3) > .input__default').type(faker.name.fullName(), {force: true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'), {force: true})
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'), {force: true})

    cy.get('#toggleAddBalance').click({force: true})

    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true})
    
})

Cypress.Commands.add('cadastroSemNome', () => {
    cy.visit('https://bugbank.netlify.app')

    
  
    cy.get('.ihdmxA').click()

    cy.get(':nth-child(2) > .input__default').type(Cypress.env('email1'), {force: true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'), {force: true})
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'), {force: true})

    cy.get('#toggleAddBalance').click({force: true})

    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true})
    
})

Cypress.Commands.add('cadastroSemSenha', () => {
    cy.visit('https://bugbank.netlify.app')

    
  
    cy.get('.ihdmxA').click()

    cy.get(':nth-child(2) > .input__default').type(Cypress.env('email1'), {force: true})
    cy.get(':nth-child(3) > .input__default').type(faker.name.fullName(), {force: true})
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'), {force: true})

    cy.get('#toggleAddBalance').click({force: true})

    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true})
    
})

Cypress.Commands.add('cadastroSemConfirmarSenha', () => {
    cy.visit('https://bugbank.netlify.app')

    
  
    cy.get('.ihdmxA').click()

    cy.get(':nth-child(2) > .input__default').type(Cypress.env('email1'), {force: true})
    cy.get(':nth-child(3) > .input__default').type(faker.name.fullName(), {force: true})
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'), {force: true})

    cy.get('#toggleAddBalance').click({force: true})

    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true})
    
})

Cypress.Commands.add('numeroConta', () => {
    cy.get('.styles__ContainerContent-sc-8zteav-1').then(($modal) => {
      const text = $modal.text()
      let regex = /conta (\d{3})-(\d{1})/
      let match = text.match(regex)
      if (!match) {
        regex = /conta (\d{2})-(\d{1})/
        match = text.match(regex)
      }
      const [conta, digito] = match.slice(1)
      cy.wrap(conta).as('numeroConta')
      cy.wrap(digito).as('digitoConta')
    })
})

Cypress.Commands.add('aparecerMensagemObrigatoriedaded', () => {
    cy.visit('https://bugbank.netlify.app')

    cy.get('.ihdmxA').click()
    cy.contains('button', 'Cadastrar').click({force: true})
      
})

/* ------------ LOGIN ------------ */

Cypress.Commands.add('loginEmailUm', () => {
    cy.visit('https://bugbank.netlify.app')

    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(Cypress.env('email1'))
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'))

    cy.get('.otUnI').click()
})

Cypress.Commands.add('loginEmailDois', () => {
    cy.visit('https://bugbank.netlify.app')

    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type(Cypress.env('email2'))
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type(Cypress.env('password'))

    cy.get('.otUnI').click()
})


/* ------------ TRANSFERÊNCIA ------------ */

Cypress.Commands.add('transferencia', () => {
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('500')
    cy.get(':nth-child(3) > .input__default').type('Feliz Aniversário')
    cy.get('.style__ContainerButton-sc-1wsixal-0').click()
})

Cypress.Commands.add('transferenciaSemDescrição', () => {
    cy.get('.styles__ContainerFormTransfer-sc-1oow0wh-0 > :nth-child(2) > .input__default').type('500')
    cy.get('.style__ContainerButton-sc-1wsixal-0').click()
})


