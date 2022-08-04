describe('Testes de Login na ALURAPIC', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home');
    })

    it('Faz login de usuário válido', () => {
        cy.login('flavio', '123');
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('Faz login de usuário inválido', () => {
        cy.login('flavioooo', '12345');
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
    
})