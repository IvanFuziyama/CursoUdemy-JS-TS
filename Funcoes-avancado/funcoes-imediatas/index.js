// IIFE -> Immediately invoked function expression
const nome = 'João'
console.log(nome);
(function(){
    const nome = 'Neymar'; //essa function n tem inteferência e nem interfere o que estiver fora
    console.log(nome);
})();
