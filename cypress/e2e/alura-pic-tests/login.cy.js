describe('Testes de Login na ALURAPIC', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home');

        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    })

    it('Faz login de usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('Faz login de usuário inválido', () => {
        cy.login('flavioooo', '12345');
        cy.on ('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
    
})