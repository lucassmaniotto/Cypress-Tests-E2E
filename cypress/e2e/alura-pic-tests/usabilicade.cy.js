describe('Teste de usabilidade da página inicial na ALURAPIC', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home');
    })

    it('Verifica mensagens na tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
 
    })

    it('Verifica se o botão está habilitado na tela inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('Jacqueline');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').should('be.enabled');
    })

    it('Verifica o nome da aplicação na tela inicial', () => {
        cy.contains('a' ,' ALURAPIC ').should('be.visible');
    })

    it('Verifica menu clicável na tela inicial', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })
})