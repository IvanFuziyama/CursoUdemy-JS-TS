/* 
O Lionel Messi tem 39 anos, pesa 70kg, tem 1.70m de altura e seu IMC é:
*/
const nome = 'Lionel';
const sobreNome = 'Messi';
const idade = '39';
const peso = '70';
const altura = '1.70';
let IMC;
IMC = peso / (altura * altura);

// Da para usar tanto '', "" ou ``, mas usando `` coloca-se ${} nas variáveis, fica até mais fácil para ler e escrever
console.log('O '+nome+' '+sobreNome+' tem '+idade+' anos, pesa '+peso+'kg, tem '+altura+' de altura e seu IMC é: '+IMC);
console.log(`O ${nome} ${sobreNome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é: ${IMC} `);