// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.Stampa l'array alla fine.

console.log("JSnack 5")
const array = []
for (let i = 0; i < 6; i++) {
    const numero = parseInt(prompt("Inserisci un numero:"))
    if (numero % 2) {
        array.push(numero)
    }
}
console.log("Questa è l'array di numeri dispari: ", array)