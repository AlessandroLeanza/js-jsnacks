// Fate generare un numero random da 0 a 10 al computer, 
// e chiedete all'utente di inserire un suo numero. 
// Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, 
// altrimenti ha perso.

console.log("JSnack 6")
const numeroRandom = Math.floor(Math.random() * 11)
// console.log(numeroRandom)
const numeroUtente = parseInt(prompt("Inserisci un numero:"))
if (numeroUtente === numeroRandom) {
    console.log("Hai vinto")
} else {
    console.log("Hai perso")
}