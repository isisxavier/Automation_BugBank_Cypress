describe('Validar usuário tentando logar sem cadastro.', () => {
  
  it('Não deve logar sem cadastro.', () => {
    cy.visit('https://bugbank.netlify.app/')
    
      cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('naocad@teste.com')
      cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Senha@02')
      cy.get('.otUnI').click()
      cy.get('.styles__ContainerInformations-sc-8zteav-3').contains('Usuário ou senha inválido. Tente novamente ou verifique suas informações!')    
  })
})

describe('Validar usuário tentando logar sem preencher campos.', () => {
  
  it('Não conseguir logar sem preencher email e senha', () => {
    cy.visit('https://bugbank.netlify.app/')
      
      cy.get('.otUnI').click()
      cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1)').contains('É campo obrigatório')  
      cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0').contains('É campo obrigatório') 
       
  })

  it('Não conseguir logar so preenchendo senha', () => {
    cy.visit('https://bugbank.netlify.app/')
      
      cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('Senha@02')
      cy.get('.otUnI').click()
      cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1)').contains('É campo obrigatório')  
  })

  it('Não conseguir logar so preenchendo email', () => {
    cy.visit('https://bugbank.netlify.app/')
      
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('naocad@teste.com')
      cy.get('.otUnI').click()
      cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0').contains('É campo obrigatório') 
  })
})

describe('Validar login com sucesso.', () => {
  
  it('Usuários válidos e cadastros são direcionados para a home.', () => {
    
    cy.cadastroSaldo().then(resp => {
      cy.loginEmailUm(resp).then(() => {

        cy.get(':nth-child(1) > .home__TransactionText-sc-1auj767-10').contains('TRANSFERÊNCIA')
        cy.get(':nth-child(2) > .home__TransactionText-sc-1auj767-10').contains('PAGAMENTOS')
        cy.get(':nth-child(3) > .home__TransactionText-sc-1auj767-10').contains('EXTRATO')
        cy.get(':nth-child(4) > .home__TransactionText-sc-1auj767-10').contains('SAQUE')
        cy.get('.home__Footer-sc-1auj767-16 > .home__Text-sc-1auj767-9').contains('Obrigado por escolher o nosso banco')
        
      })
    })
    
  })

})