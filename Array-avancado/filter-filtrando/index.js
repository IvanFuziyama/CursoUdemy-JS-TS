// // Filter -> Sempre vai retorna um array com a mesma quantidade de elementos ou menos
// const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
// // for(let x of numeros){
// //     if(x >= 10){
// //         console.log(x)
// //     }
// // }

// // function callbackFilter(valor){
// //     return valor >= 10;
// // }    

// //filter cria uma nova array e checa todos os valores com a função fornecida
// const numerosFiltrados = numeros.filter((valor, indice) =>{ 
//     // console.log(valor, indice) //mostra todos os valores e o indice
//     return valor > 10;
//     });
// console.log(numerosFiltrados);

const pessoas =[
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 22},
    {nome: 'Eduardo', idade: 73},
    {nome: 'Letícia', idade: 61},
    {nome: 'Rosana', idade: 53},
    {nome: 'Ian', idade: 42},
]
const pessoasComNomeGrande = pessoas.filter(obj => {
    return obj.nome.length >= 5;
});
const pessoasIdoso = pessoas.filter(obj => obj.idade >= 60
);
const pessoasTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');
})
console.log(pessoasComNomeGrande);
console.log(pessoasIdoso);
console.log(pessoasTerminaComA);