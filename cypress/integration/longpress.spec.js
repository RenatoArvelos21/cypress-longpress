describe('Teste longpress', function() {
    it('Fazer longpress no square', function() {
        cy.visit('https://cdpn.io/choskim/fullpage/RLYebL')
        cy.get('iframe')
            .then(($iframe) => { 
                const pointerEvent = {
                    force: true,
                    pointerType: 'touch',
                }
                const $body = $iframe.contents().find('body').find('div.square')
                cy.wrap($body)
                    .should('have.css', 'height', '90px')
                    .should('have.css', 'width', '90px')

                cy.wrap($body)
                    .trigger('pointerdown', 'topLeft', pointerEvent)
                    .wait(600)
                    .trigger('pointerup', 'topLeft', pointerEvent)
                    .should('have.css', 'height', '225px')
                    .should('have.css', 'width', '225px')
            })
    })
})