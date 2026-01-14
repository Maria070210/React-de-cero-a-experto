const firstName: String = 'Maria';
const lastName = 'Delgado';
/* 
    Usar const o let para crear variables
    const --> para variables que no van a cambiar de valor
    let --> para variables cuyo valor cambiará
 */
console.log(firstName, lastName);

const containsLetterD = lastName.includes('D');
const containsLetterd = lastName.includes('d');
/*
    Discrimina entre mayúsculas y minúsculas
    containsLetterD --> true
    containsLetterd --> false
*/
console.log(containsLetterD, containsLetterd);

let diceNumber = 5;
diceNumber = 3;

console.log({diceNumber}); /* Muestra el valor */
