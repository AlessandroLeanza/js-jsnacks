// Crea una funzione chiamata sommaNumeri che dato un array di 10 numeri 
// definito da voi nel codice, ne calcoli la loro somma e la restituisca 
// come risultato.
// Utilizzare la funzione sommaNumeri per stampare il risultato ottenuto.

console.log("JSnack 12")
const numeriArray = [2, 5, 8, 10, 25, 33, 44, 9, 12, 50]
sommaNumeri = 0
for (let i = 0; i < numeriArray.length; i++) {
    sommaNumeri += numeriArray[i]
}
console.log("La somma dei numeri dell'array è:", sommaNumeri)