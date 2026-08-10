const frutas = ['Pera', 'Maça', 'Melão', 'Uva'];
const pessoa = {
    nome: 'Ney',
    sobrenome: 'Mar',
    idade: 34
};
let chave = 'nome';
console.log(pessoa[chave]); //é dinâmico, da para mudar
//console.log(pessoa.nome);

// for (let i = 0; i < frutas.length; i++){
//     console.log(i, frutas[i])
// }

// for in -> lê os índices ou chaves do objeto
for (let i in frutas){
    console.log(i, frutas[i]);
}
for (let indice in pessoa){
    console.log( indice, pessoa[indice]);
}
