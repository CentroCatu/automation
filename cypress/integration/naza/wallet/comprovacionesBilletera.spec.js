/// <reference types="Cypress" />

// node_modules/.bin/cypress open
let nombres = [ 'Maxi', 'AlePan', 'UserNuevo']
describe('Funcionalidad de Billetera', function () {
    beforeEach(() => {        
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get("[aria-label='Close']").click()
    })

    it('Creación de Billetera', function () {        
        crearBilleteraDe(nombres[0])      
        verificarBilletera(nombres[0])
    })

    it('Creación de Billetera con Alias existente', function () {        
        completarDatos(nombres[1])
        verificarSiExisteAlias()
    })

    it('Verificar que el cartel desaparezca 10s después', function () {        
        crearBilleteraDe(nombres[2])
    })

    it.only('Agregado de bloque al minar y verificando luego de 25 segundos', function () {
        var tiempoDeEspera= {timeout:25000}        
        cy.get('#selectDirToAddMined').select('AlePan')
        cy.get('#startMining').click()
        //cy.wait(20000)
        //cy.contains("Block 3" , {timeout:25000}).closest('.blockTutorial')
        //cy.get('.blockTutorial' , {timeout:25000}).should('have.length',3)
        cy.get('.blockTutorial' , tiempoDeEspera).should('contain',"Block 3")
    })
})

function verificarBilletera(nombre){
    cy.get('[data-tut="wallets"]').contains(nombre).should('be.visible')    
}

function verificarCartelLuegoDe10Segundos(){
    cy.get('[data-tut="wallets"]').contains(nombre).should('be.visible')    
}

function verificarSiExisteAlias(){
    cy.get('.alert').contains('That alias already exists, please select another one.').should('exist')
}

function completarDatos(nombre) {
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)    
}


function crearBilleteraDe(nombre) {
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)
    cy.get('[class="alert alert-danger"]').should('not.exist')
    cy.get('#generateWallet').click()    
}

function crearVariasBilleteras(nombres) {
    for (let index = 0; index < nombres.length; index++) {
        crearBilleteraDe(nombres[index])
    }
}