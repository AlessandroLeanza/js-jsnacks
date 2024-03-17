// Creare una funzione che stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
// Una volta creata la funzione chiedere all'utente di inserire N con un prompt e
//  richiamate la funzione per dare la risposta all'utente.

console.log("JSsnack 11")
let numeroUtente = 3
//console.log("Numero inserito: ", numeroUtente)
for (let i = 0; i < numeroUtente; i++) {
    const cubo = i ** 3
    console.log("cubo: ", cubo)
}
numeroUtente = parseInt(prompt("Inserisci un numero:"))
for (let i = 0; i < numeroUtente; i++) {
    const cubo = i ** 3
    console.log("cubo: ", cubo)
}

// L'ho interpretato cosi ma non so se è corretto