/* Scrivi un programma che stampi in console i numeri da 1 a 100 all’avvio della pagina.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3
Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5. */


// Scrivere un programma per stampare da 1 a 100 in console dei numeri
// creare un ciclo

for(let i = 0; i <= 100; i++) {
    console.log(i);


    /* Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

    if (i % 3 == 0){
        console.log("Fizz");
        list.innerHTML += `<li>Fizz</li>`;

    } if ( i % 5 == 0) {
        console.log("Buzz");
        list.innerHTML += `<li>Buzz</li>`;

    } if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        list.innerHTML += `<li>FizzBuzz</li>`;
    }

    list.innerHTML += `<li>${i}</li>`;
}





