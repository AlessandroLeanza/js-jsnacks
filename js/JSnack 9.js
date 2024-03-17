//Scrivere un programma a cui venga chiesto all'utente di inserire numeri uno dopo l'altro.
//Quando l'utente scriverà 2 volte consecutive lo stesso numero allora il programma dovrà terminare.

console.log("JSsnack 9")
const numeri = []
for (let i = 0; ; i++) {
    numeroCorrente = parseInt(prompt("Inserisci un numero:"))
    if (i > 0 && numeri[i - 1] === numeroCorrente) {
        console.log("Hai inserito due numeri uguali consecutivamente ed è il numero: " + numeroCorrente)
        break
    }
    numeri[i] = numeroCorrente
}