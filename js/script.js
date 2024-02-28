// ESERCIZIO 1

// Creo la funzione 

function palindroma(word) {
  const wordInversa = word.split('').reverse ().join('');
  return wordInversa;
}

// Creo il prompt

const word = prompt ('Inserisci una parola.')

const parolaInversa = palindroma(word);

// Creo l'IF

if (word == parolaInversa) {
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}

// ESERCIZIO 2