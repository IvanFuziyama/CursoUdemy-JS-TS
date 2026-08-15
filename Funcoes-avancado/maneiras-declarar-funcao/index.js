// Declaração de função (function hoisting)
falaOi();
function falaOi(){
    console.log('oi');
}

// First-class objects
// function expression
const SouUmDado = function(){
    console.log('Sou um dado');
}
SouUmDado();

// arrow function
const arrow = () => {
    console.log('Sou uma arrow function')
}
arrow();
const obj = {
    falar(){
        console.log('Estou falando')
    }
}
obj.falar();