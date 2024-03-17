// Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
// Modificate poi il programma in modo che venga chiesto all'utente il numero massimo consentito, 
// e stampare tutta la tabellina del 2 fino al numero inserito.

console.log("JSnack 7")
for (let i = 2; i <= 1000; i += 2) {
    console.log(i)
}
//const numeroMax = parseInt(prompt("Inserisci un numero da 2 a 1000: ")) modo alternativo :)
const numero = parseInt(prompt("Inserisci un numero: "))
if (numero <= 1000) {
    for (let i = 2; i <= numero; i += 2) {
        console.log(i)
    }
} else {
    console.log("Il numero inserito non è valido")
}