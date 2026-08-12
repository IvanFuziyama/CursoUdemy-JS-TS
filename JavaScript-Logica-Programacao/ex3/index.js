//Escreva uma function que recebe um número e retorne
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 - Retorna o próprio número
// Checar se o número é realmente um número = Retorna o próprio número
// Use a function com números de 0 a 100

function numDivisivel(num){
    if(typeof num !== 'number'){ 
        return num;
    }
    if(num % 3 === 0 && num % 5 === 0){
        return `FizzBuzz`;
    }
    else if(num % 3 === 0){
        return `Fizz`;
    }else if(num % 5 === 0){
        return `Buzz`;
    }else{
        return num;
    }
    
}
for(let i = 0; i < 100; i++){
const divisivel = numDivisivel(i);
console.log(i, divisivel);
}