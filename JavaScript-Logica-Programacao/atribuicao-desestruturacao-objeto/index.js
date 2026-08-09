const pessoa = {
    nome: 'Manoel',
    sobrenome: 'Tamarão',
    idade: 30,
    endereco:{
        rua: 'Av Brasil',
        numero: 312
    }
};
// const nome = pessoa.nome; //atribuição normal
// console.log(nome)
// const {nome, sobrenome, idade, endereco} = pessoa; //atribuição via desestruturação
// console.log(nome, endereco)

const {nome, sobrenome, ...resto} = pessoa;
console.log(nome, resto); 