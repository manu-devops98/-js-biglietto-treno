/* richiesta:

Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

const khilometers = parseInt(prompt('Inserisci i chilometri da percorrere'));
const age = parseInt(prompt('Inserisci la tua età'));

const priceKhilometer = 0.21;

let sum = (khilometers * priceKhilometer);
// console.log(sum + '€');

const discountUnder18 = sum * 20 / 100;

const discountOver65 = sum * 40 / 100;

if (age <= 17) {
   console.log('Il prezzo finale del biglietto per gli under 18 è ' + (sum - discountUnder18).toFixed(2) + '€');
} else if (age >= 66) {
    console.log('Il prezzo finale del biglietto per gli over 65 è ' + (sum - discountOver65).toFixed(2) + '€');
} else {
    console.log('Il prezzo finale del biglietto è ' + sum.toFixed(2) + '€');
}

if (age <= 17) {
    let text = document.getElementById('my_id').innerHTML = `Il prezzo finale del biglietto per gli under 18 è ${(sum - discountUnder18).toFixed(2)}€`;
} else if (age >= 66) {
    let text = document.getElementById('my_id').innerHTML = `Il prezzo finale del biglietto per gli over 65 è ${(sum - discountOver65).toFixed(2)}€`;
} else if (khilometers == 0) {
    let text = document.getElementById('my_id').innerHTML = `Nessun viaggio in programma per oggi!`;
} else if (isNaN(khilometers) && isNaN(age)) {
    let text = document.getElementById('my_id').innerHTML = `Inserire dati prego`;
} else {
    let text = document.getElementById('my_id').innerHTML = `Il prezzo finale del biglietto è ${(sum).toFixed(2)}€`;
}