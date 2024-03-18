// Chiedi un numero di 4 cifre all’utente. Crea e usa una funzione che calcola 
// la somma di tutte le cifre che compongono il numero e ritorni il risultato.
// Usa questa funzione per stampare poi a video il risultato ottenuto.

console.log("JSnack 14")
const numero = parseInt(prompt("Inserisci un numero di quattro cifre:"))
if (numero >= 1000 && numero <= 9999) {
    const numeriArray = []
    for (let i = 0; i < 4; i++) {
        const cifra = Math.floor(numero / Math.pow(10, i)) % 10;
        numeriArray.push(cifra);
    }
    console.log("Questa è la tua array scomposta:", numeriArray)
    sommaNumeri = 0
    for (let i = 0; i < numeriArray.length; i++) {
        sommaNumeri += numeriArray[i]
    }
    console.log("La somma dei numeri dell'array è:", sommaNumeri)
} else {
    console.log("Il numero inserito non è valido")
}
