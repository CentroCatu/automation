describe('Crear y verificar transaccion', function() {
    it('Crear y verificar transaccion', function() {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] >svg').click()
        elegirGiver(AlePan.nombre)
        elegirReciver(SomeUser.nombre)
        elegirMonto(AlePan.cantidad)
        ingresarKey(AlePan.privateKey)
        firmarTransaccion()
        publicarTransaccion()
        verificarTransaccion(SomeUser.nombre)
        elegirGiver(AlePan.nombre)
        elegirReciver(Athena.nombre)
        elegirMonto(AlePan.cantidad)
        ingresarKey(AlePan.privateKey)
        firmarTransaccion()
        publicarTransaccion()
        verificarTransaccion(Athena.nombre)
    })
})

function elegirGiver(nombre) {
    cy.get('#toPublishGives').select(nombre)
}

function elegirReciver(nombre) {
    cy.get('#toPublishReceives').select(nombre)
}

function elegirMonto(cantidad) {
    cy.get('#toPublishAmount').type(cantidad)
}

function ingresarKey(key) {
    cy.get('#toPublishPass').type(key)
}

function firmarTransaccion() {
    cy.get('#toPublishSign').click()
}

function publicarTransaccion() {
    cy.get('#toPublishPublish').click()
}

function verificarTransaccion(nombre) {
    cy.get(':nth-child(1) > td > :nth-child(1) > [data-tut=""]').contains(AlePan.nombre)
    cy.get(':nth-child(1) > td > :nth-child(1) > [data-tut=""]').contains(nombre)
}

var AlePan = {
    nombre:'AlePan',
    privateKey:"65537,32738739318480270880847344601765335773851669760144296954546538700397943059327",
    cantidad: '3'
}

var SomeUser = {
    nombre:'SomeUser',    
}

var Athena = {
    nombre:'Athena',    
}