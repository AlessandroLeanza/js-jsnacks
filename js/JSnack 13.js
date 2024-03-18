// Crea una funzione chiamata mediaAritmetica che prende in input un array di 10 numeri 
// e restituisca la media aritmetica dei numeri contenuti nell'array.
// Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei 10 
// numeri che vanno chiesti all'utente attraverso dei prompt.

console.log("JSnack 13")
const numeriArray = []
sommaNumeri = 0
for (let i = 0; i < 10; i++) {
    const numeri = parseInt(prompt("Inserisci un numero:"))
    numeriArray.push(numeri)
    sommaNumeri += numeriArray[i]
}
mediaAritmetica = (sommaNumeri / numeriArray.length).toFixed(2)
console.log("Questa è l'array:", numeriArray)
console.log("Questa è la media aritmetica dell'array:", mediaAritmetica)
