describe('Menu Institucional - Site Bolt', () => {

    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('https://bolt.com.br/')
    })

    // ============================
    // ✅ CENÁRIOS FUNCIONAIS
    // ============================

    describe('Cenários válidos', () => {

        it('Deve acessar a seção "Sobre a Bolt" na mesma página', () => {
            cy.contains('Institucional').click()
            cy.contains('Sobre a Bolt').click()

            cy.contains('Sobre a Bolt').should('be.visible')
        })

        it('Deve validar o link do Grupo Adriano Cobuccio', () => {
            cy.contains('Institucional').click()

            cy.contains('a', 'Grupo Adriano Cobuccio')
                .should('have.attr', 'href')
                .and('include', 'adrianocobuccio')
        })
    })

    it('Deve iniciar o atendimento online', () => {
        cy.contains('Atendimento Online').click()

        cy.url().should('include', 'chat')
    })

})

// ============================
// ❌ CENÁRIOS COM BUG
// ============================

describe('Cenários com falha (bugs identificados)', () => {

    beforeEach(() => {
        cy.viewport(1280, 720)
        cy.visit('https://bolt.com.br/')
    })

    it('Deve redirecionar para "Fale Conosco" ao clicar em Ouvidoria', () => {
        cy.contains('Institucional').click()
        cy.contains('Ouvidoria').click()

        // Esperado (vai falhar) | BUG: funcionalidade não redireciona para "Fale Conosco"
        cy.url().should('include', 'fale-conosco')
    })

    it('Deve redirecionar para "Fale Conosco" ao clicar em Contato', () => {
        cy.contains('Institucional').click()
        cy.contains('Contato').click()

        cy.url().should('include', 'fale-conosco')
    })

    it('Deve acessar a página de Política de Segurança Cibernético', () => {
        cy.contains('Institucional').click()
        cy.contains('Política de Segurança Cibernética').click()

        // Esperado: não ter erro | BUG: página de Política de Segurança Cibernético
        cy.contains('Not Found').should('not.exist')
    })

    it('Deve acessar a página de Política e Normas Internas de PLD', () => {
        cy.contains('Institucional').click()
        cy.contains('Política e Normas Internas de PLD').click()

        // Esperado: não ter erro | BUG: página de Política de PLD retorna erro 404 (Not Found)
        cy.contains('Not Found').should('not.exist')
    })

})