// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

console.log("JSnack 4")
const nomiInvitati = ["Alessandro", "GianMarco", "Luca", "Giacomo", "Andrea"]
const nome = prompt("Inserisci il tuo nome:")
const verifica = nomiInvitati.includes(nome)
if (verifica === true) {
    console.log("Puoi partecipare alla festa")
} else {
    console.log("Non puoi partecipare alla festa")
}