let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '') //é uma representação númerica que representa qualquer coisa que n for um número
console.log(cpfLimpo);
cpfArray = Array.from(cpfLimpo);
console.log(cpfArray.reduce((ac, val) => ac + Number(val),0));