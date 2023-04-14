describe('Validar transferência', () => {
  
    it('Cenário feliz de transferência.', () => {
        cy.cadastroSemSaldo().then(resp => {
            cy.numeroConta(resp)
            cy.cadastroSaldo().then(logar => {
                cy.loginEmailUm(logar).then(() => {

                    cy.get('@numeroConta').then(conta => {
                    cy.get('@digitoConta').then(digito => {

                        cy.get('#btn-TRANSFERÊNCIA').click()
                        cy.get(':nth-child(1) > .input__default').type(conta)
                        cy.get('.account__data > :nth-child(2) > .input__default').type(digito)
                        
                        cy.transferencia()
                        cy.get('.styles__ContainerContent-sc-8zteav-1').contains('Transferencia realizada com sucesso')
                        cy.get('#btnCloseModal').click()
                        cy.get('#btnBack').click()
                        cy.get('#textBalance > span').contains('R$ 500,00')
                        })
                    })
                })    
            })
        })
    })

    it('Tem BUG: Validando obrigatóriedade do campo descrição.', () => {
        cy.cadastroSemSaldo().then(resp => {
            cy.numeroConta(resp)
            cy.cadastroSaldo().then(logar => {
                cy.loginEmailUm(logar).then(() => {

                    cy.get('@numeroConta').then(conta => {
                    cy.get('@digitoConta').then(digito => {

                        cy.get('#btn-TRANSFERÊNCIA').click()
                        cy.get(':nth-child(1) > .input__default').type(conta)
                        cy.get('.account__data > :nth-child(2) > .input__default').type(digito)
                        
                        cy.transferenciaSemDescrição()
                        cy.get('#modalText').should('have.text', 'Descrição é campo obrigatório')
                       
                        })
                    })
                })    
            })
        })
    })

    it('Não deve ser possível realizar transferência para conta inválida', () => {
        
        cy.cadastroSaldo().then(logar => {
            cy.loginEmailUm(logar).then(() => {

                cy.get('#btn-TRANSFERÊNCIA').click()
                cy.get(':nth-child(1) > .input__default').type('000')
                cy.get('.account__data > :nth-child(2) > .input__default').type('0')
                        
                cy.transferencia()
                        
                cy.get('.styles__ContainerContent-sc-8zteav-1').contains('Conta inválida ou inexistente')
    
            })
        }) 
    })

    it('Não deve ser possível fazer transferencia de um saldo maior que o atual', () => {
        cy.cadastroSemSaldo().then(logar => {
            
            cy.cadastroSaldo().then(resp => {
                cy.numeroConta(resp)
                cy.loginEmailDois(logar).then(() => {

                    cy.get('@numeroConta').then(conta => {
                    cy.get('@digitoConta').then(digito => {

                        cy.get('#btn-TRANSFERÊNCIA').click()
                        cy.get(':nth-child(1) > .input__default').type(conta)
                        cy.get('.account__data > :nth-child(2) > .input__default').type(digito)
                        
                        cy.transferencia()

                        cy.get('.styles__ContainerContent-sc-8zteav-1').contains('Você não tem saldo suficiente para essa transação')
                        
                        })
                    })
                })    
            })
        })
    })
  
    it('Tem BUG: Campo Número da conta aceita NÃO deve aceitar letras', () => {
        
        cy.cadastroSaldo().then(logar => {
            cy.loginEmailUm(logar).then(() => {

                cy.get('#btn-TRANSFERÊNCIA').click()
                cy.get(':nth-child(1) > .input__default').type('a12').should('have.value', '12')
                        
                cy.transferencia()
                        
                cy.get('.styles__ContainerContent-sc-8zteav-1').contains('Conta inválida ou inexistente')
    
            })
        }) 
    })

    it('Tem BUG: Campo Digito da conta aceita NÃO deve aceitar letras', () => {
        
        cy.cadastroSaldo().then(logar => {
            cy.loginEmailUm(logar).then(() => {

                cy.get('#btn-TRANSFERÊNCIA').click()
                cy.get('.account__data > :nth-child(2) > .input__default').type('a1').should('have.value', '1')
                        
                cy.transferencia()
                        
                cy.get('.styles__ContainerContent-sc-8zteav-1').contains('Conta inválida ou inexistente')
    
            })
        }) 
    })
})