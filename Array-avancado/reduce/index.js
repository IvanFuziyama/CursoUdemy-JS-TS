// const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
// const total = numeros.reduce( (acumulador, valor, indice, array) => {
//     // if(valor % 2 === 0){acumulador.push(valor);
//     if(valor % 2 === 0)acumulador.push(valor*2);
//     return acumulador;
// },[]);
// console.log(total);

const pessoas =[
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 22},
    {nome: 'Eduardo', idade: 73},
    {nome: 'Letícia', idade: 61},
    {nome: 'Rosana', idade: 53},
    {nome: 'Ian', idade: 42},
]
const velha = pessoas.reduce((acumulador,valor,indice,array) => {
    if(acumulador.idade > valor.idade)return acumulador;
    return valor;
})
const texto = JSON.stringify(velha);
console.log(`Essa é a pessoa mais velha${texto}`)