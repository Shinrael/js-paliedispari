// ESERCIZIO 1

// Creo la funzione 

function palindroma(word) {

  // Utilizzo for per confrontare i caratteri
  
  for(i = 0; i < word.length / 2; i++)

    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }

  return true;  
}

// Creo il prompt

const word = prompt ('Inserisci una parola.');


// Creo l'IF

if (palindroma(word)) {
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}

// ESERCIZIO 2

// Creo la funzione per generare il numero casuale

function randomNumbers () {
  return Math.floor(Math.random() * 5)  + 1;
}

// Creo la funzione per determinare se è pari

function isPari(number) {
  return number % 2 === 0;
}

// Funzione per prendere le scelte del giocatore

function play() {

  const pariDispari = document.getElementById('pari-dispari').value;
  const userNumber = parseInt(document.getElementById('user-number').value);

  // Mettiamo un controllo in caso l'utente inserisca valori non validi

  if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
    alert ('Attenzione, numero non valido');
    return;
  }

  // Ora creiamo una const con la scelta del computer

  const pcNumber = randomNumbers();

  // E sommiamo i due numeri

  const somma = pcNumber + userNumber;

  console.log(`Il computer ha scelto il numero ${pcNumber}`);
  console.log(`La somma dei due numeri è ${somma}`);

  // Creiamo il risultato finale

  let result = isPari(somma);

  if (result == true) {
    result = 'pari'
  } else {
    result = 'dispari'
  }

  console.log(result);
  console.log(pariDispari);

  // Creo l'alert per dare l'esito finale al giocatore

  if (result === pariDispari) {
    alert('Hai vinto, complimenti!')
  } else {
    alert('Mi dispiace hai perso')
  } 
}

// Prendo il button e gli metto l'evento con il click

const button = document.getElementById('play');

button.addEventListener ('click', function () {
  play();
})