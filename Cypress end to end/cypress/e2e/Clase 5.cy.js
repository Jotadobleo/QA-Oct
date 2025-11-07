describe('Clase 5',()=>{

    beforeEach(()=>{
        cy.viewport('macbook-15')
       cy.visit('https://ticketazo.com.ar')
        cy.get('[data-cy="btn-ver-evento-1"]')
    })

    it('Primer it',()=>{
        cy.get('h1').should('be.visible')
        .and('contain','El Eternauta')

        cy.get('.error-sidebar').should('not.exist')

        cy.get('span').contains('Ticketazo').should('have.class', 'hidden')

        cy.get('h3').contains(/doGs/i)
    })

    it('Segundo it',()=>{

        cy.get('div.w-full > img').eq(0).should('have.attr','alt', 'El Eternauta')
        .and('have.attr', 'class', 'w-full object-cover')


    })

    it.only('Tercer it',()=>{
        cy.contains('Adquirir entrada').should('be.enabled')
        cy.get('h3').should('have.length','3')
        cy.contains('button', 'Ver evento').should('have.length.greaterThan',3)





    })
})
