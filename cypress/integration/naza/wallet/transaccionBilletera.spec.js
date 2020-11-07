let AlePan= {
    name:"AlePan",
    amount:80,
    publicAddress:"1928746700469236093671538177020857857720733381331271737456327216724741025401,32738739318480270880847344601765335773851669760144296954546538700397943059327",
    privateKey: "65537,32738739318480270880847344601765335773851669760144296954546538700397943059327",
    remove: function(amount){
        console.log("El dinero de "+this.name +" en la billetera $"+this.amount)
        if(this.amount-amount>0){
            this.amount-=amount;
            console.log("Se retiro $"+amount+", ahora queda en la billetera es $"+this.amount)
        }else{
            console.log("No se pudo retirar $"+amount+" ya que en la billetera hay $"+this.amount)
        }
        
    }
}
let Athena= {
    name:"Athena",
    amount:20,
    publicAddress:"2429591038702207169527055321287347260698030400419129219397402631555421258249,54334791982059904886297432039313727154330513618477202451099219546996291545379",
    privateKey: "65537,54334791982059904886297432039313727154330513618477202451099219546996291545379",
    remove: function(amount){
        console.log("El dinero de "+this.name +" en la billetera $"+this.amount)
        if(this.amount-amount>0){
            this.amount-=amount;
            console.log("Se retiro $"+amount+", ahora queda en la billetera es $"+this.amount)
        }else{
            console.log("No se pudo retirar $"+amount+" ya que en la billetera hay $"+this.amount)
        }
        
    }
}
let SomeUser= {
    name:"SomeUser",
    amount:100,
    publicAddress:"6903091057055691620190409836592864034155157352240690898723914094557322355713,68010805563177820461878967146841029797048825961202715976920079656059109223683",
    privateKey: "65537,68010805563177820461878967146841029797048825961202715976920079656059109223683",
    remove: function(amount){
        console.log("El dinero de "+this.name +" en la billetera $"+this.amount)
        if(this.amount-amount>0){
            this.amount-=amount;
            console.log("Se retiro $"+amount+", ahora queda en la billetera es $"+this.amount)
        }else{
            console.log("No se pudo retirar $"+amount+" ya que en la billetera hay $"+this.amount)
        }
        
    }
}

/// <reference types="Cypress" />
// node_modules/.bin/cypress open
// node_modules/.bin/cypress open --record

describe('Transaction Generator', function () {
    beforeEach(() => {        
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get("[aria-label='Close']").click()
    })

    it('Transacción Alepan a SomeUser y a Athena por monto de $3', function () {
        var cantidad=3; 
        // Transacción de AlePan para SomeUser            
        elegirGiver(AlePan.name)
        elegirReciver(SomeUser.name)
        escribirMonto(cantidad)        
        escribirClavePrivada(AlePan.privateKey)
        //AlePan.remove(cantidad)
        verificarBilletera(AlePan.name, SomeUser.name, cantidad)

        // Ahora de AlePan para Athena
        elegirGiver(AlePan.name)
        elegirReciver(Athena.name)
        escribirMonto(cantidad)     
        escribirClavePrivada(AlePan.privateKey)
        //AlePan.remove(cantidad)
        verificarBilletera(AlePan.name, Athena.name, cantidad)
    })
})

function elegirGiver( giver){
    cy.get('#toPublishGives').select(giver)
}

function elegirReciver( reciver){
    cy.get('#toPublishReceives').select(reciver)
}

function escribirMonto( cantidad){
    cy.get('#toPublishAmount').type(cantidad)
}

function escribirClavePrivada( privateKey){
    cy.get('#toPublishPass').type(privateKey)
    cy.get('#toPublishSign').click()
    cy.get('#toPublishPublish').click()  
}

function verificarBilletera(giver, reciver, amount){
    //cy.get('[data-tut="notIncludedYet"]').contains(giver).should('be.visible')
    cy.get('[data-tut="notIncludedYet"]').contains(giver).should("contain", reciver + " $: " + amount )
}