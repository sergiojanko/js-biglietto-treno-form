/* 
Quali campi inserire nel form:
Una casella di testo per il form del passeggero
Una casella numerica per i km
Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65)
NON E' NECESSARIA ALCUNA VALIDAZIONE
Come calcolare  il prezzo:
il prezzo del biglietto è definito in base ai km (0.21 € al km) 
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
Cosa stampare sul biglietto:
Nome passeggero
Codice treno (inseriamo una stringa a caso, per ora)
Numero carrozza (randomizziamo una carrozza da 1 a 12)
Prezzo (stampato con due decimali)
Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65)
*/


//  * Recupero elementi HTML

var nameField = document.getElementById("name-input");
var kmsField = document.getElementById("kms-input");
var ageField = document.getElementById("age-input");
var btnGenerate = document.getElementById("generate");
var btnReset = document.getElementById("reset");



var nameOutput = document.getElementById("name-output");
var discountOutput = document.getElementById("discount-output");
var carOutput = document.getElementById("car-output");
var codOutput = document.getElementById("cod-output");
var priceOutput = document.getElementById("price-output");

var ticketSection = document.getElementById("ticket-section");


//  * Funzione genera ticket

btnGenerate.addEventListener("click", function(){
    
    var nameValue = nameField.value;
    var kmsValue = kmsField.value;
    var ageValue = ageField.value;

    var ticketPrice = 0.21 * kmsValue;
    var discountRange = "Tariffa ordinaria";

    if (ageValue === "min") {
        ticketPrice *= 0.8;
        discountRange = "Sconto minorenne"
    } else if (ageValue === "over") {
        ticketPrice *= 0.6;
        discountRange = "Sconto Over 65"
    }

    
    //  * Output ticket

    console.log(ticketPrice);
    console.log(discountRange);

    nameOutput.innerHTML = nameValue;
    discountOutput.innerHTML = discountRange;
    carOutput.innerHTML = Math.floor(Math.random() * 12) + 1;
    codOutput.innerHTML = "9875";
    priceOutput.innerHTML = ticketPrice.toFixed(2);

    //  * new ticket

    nameField.value = "";
    ageField.value = "min";

    //  * show ticket

    ticketSection.classList.remove("hidden");
})
btnReset.addEventListener("click", function(){
    
    nameField.value = "";
    kmsField.value = 10;
    ageField.value = "min";
    
    nameOutput.innerHTML = "";
    discountOutput.innerHTML = "";
    carOutput.innerHTML = "";
    codOutput.innerHTML = "";
    priceOutput.innerHTML = 0;

    ticketSection.classList.add("hidden");

})