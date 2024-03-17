// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

console.log("JSnack 2")
const parola1 = (prompt("Inserisci la prima parola:"))
const parola2 = (prompt("Inserisci la seconda parola:"))
if (parola1 < parola2) {
    console.log("La parola minore é: ", parola1)
} else if (parola1 > parola2) {
    console.log("La parola minore é: ", parola2)
}