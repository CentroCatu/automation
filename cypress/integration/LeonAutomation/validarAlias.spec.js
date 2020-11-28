describe('Validar Alias', function() {
    beforeEach(() => {        
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get("[aria-label='Close']").click()
    })
    it('Validar Alias', function() {
        ingresarAliasExistente(aliasExistente.nombre1)
        validarError()
        borrarAlias()
        ingresarAliasExistente(aliasExistente.nombre2)
        validarError()
        borrarAlias()
        ingresarAliasExistente(aliasExistente.nombre3)
        validarError()
        borrarAlias()
        generarKeys()
        ingresarAliasNuevo('AliasNuevo')
        generarWallet()
        validarNoExiste()
        validarExitoCartel()
        esperarDiez()
    })
})

function ingresarAliasExistente(nombre) {
    cy.get('#alias').type(nombre)
}

function borrarAlias() {
    cy.get('#alias').clear()
}

function validarError() {
    cy.get('[class="alert alert-danger"]').should('be.visible').contains('That alias already exists, please select another one')
}

function validarNoExiste(){
    cy.get('[class="alert alert-danger"]').should('not.exist')
}

function generarKeys() {
    cy.get('#generateKeys').click()
}

function ingresarAliasNuevo(nombre) {
    cy.get('#alias').type(nombre)
}

function generarWallet() {
    cy.get('#generateWallet').click()
}

function validarExitoCartel() {
    cy.get('[class="alert alert-success"]').should('be.visible').contains('Wallet Generated. You will find it the Wallets section.')
}

function esperarDiez() {
    cy.wait(10000)
    cy.get('[class="alert alert-success"]').should('not.exist')
}

var aliasExistente = {
    nombre1:'AlePan',
    nombre2:'SomeUser',
    nombre3:'Athena',
}
