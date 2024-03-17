//L’utente inserisce due numeri in successione, con due prompt.
//Il software stampa il maggiore.

console.log("JSnack 1")
const number1 = parseInt(prompt("Inserisci il primo numero"))
const number2 = parseInt(prompt("Inserisci il secondo numero"))
if (number1 < number2) {
    console.log("Il numero maggiore è:", number2)
} else if (number1 > number2) {
    console.log("Il numero maggiore è:", number1)
}