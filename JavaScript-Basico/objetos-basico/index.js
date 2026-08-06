// const pessoa1 = {
//     nome: 'Ademir',
//     sobrenome: 'Farofa',
//     idade: 25
// };
// console.log(pessoa1.nome);

function criaPessoa(nome,sobrenome,idade){
    return {nome,sobrenome, idade};
}
const pessoa1 = criaPessoa('Geromel', 'Lamal', 42);
console.log(pessoa1)

const cliente1 = {
    nome: 'Jamuel',
    sobrenome: 'Bahia',
    idade: 19,
    
    fala(){
        console.log(`${this.nome} ${this.sobrenome} está no caixa`)
    }
};
cliente1.fala();