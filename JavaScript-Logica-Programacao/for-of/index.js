const nome = 'Lionel Messi';
const nomes = ['Ivan', 'Yuri', 'Kaka'];
// for(let i = 0; i < nome.length; i++){
//     console.log(nome[i])
// }

// for(let i in nome){
//     console.log(nome[i])
// }

for(let valor of nome){
    console.log(valor)
}
for(let i of nomes){
    console.log(i);
}

// for clássico - geralmente usado com iteráveis (array ou strings)
// for in - retorna o índice ou chave (string, array ou objetos)
// for of - retorna o valor em si (iteráveis,arrays ou strings)