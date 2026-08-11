//Escreva uma function que recebe 2 números e retorne o maior deles
// function maiorNum(num1, num2){
//     if(num1 > num2){
//         return`${num1} é maior que o ${num2}`;
//     }else if(num2 > num1){
//         return`${num2} é maior que o ${num1}`;
//     }else{
//         return`${num1} e ${num2} são iguais`;
//     }
// }
// const maior = maiorNum(12,42)
// console.log(maior);

//##################################################

// function maiorNum(num1, num2){
//     return num1 > num2 ? `${num1} é maior que o ${num2}` : `${num2} é maior que o ${num1}`;
// }
// const maior = maiorNum(62,42)
// console.log(maior);

//#################################################

// const maiorNum =(num1, num2) => {
//     return num1 > num2 ? `${num1} é maior que o ${num2}` : `${num2} é maior que o ${num1}`;
// }
// console.log(maiorNum(10,56))

const maiorNum =(num1, num2) => num1 > num2 ? `${num1} é maior que o ${num2}` : `${num2} é maior que o ${num1}`;
console.log(maiorNum(10,6))