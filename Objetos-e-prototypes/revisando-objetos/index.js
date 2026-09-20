// Factory functions / Constructor functions / Classes
// Factory Functions
// function criaPessoa (nome, sobrenome){
//     return{
//         nome,
//         sobrenome,
//         get nomeCompleto(){
//             return `${this.nome} ${this.sobrenome}`
//         }
//     };
// }
// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto);

//Constructor functions
function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //o this está apontando para as variáveis (p1, p2)
}
// new vai criar um objeto vazio {}, e também vai pegar o this e apontar direto para esse objeto e, depois, retorna esse objeto

//é possivel alterar o valor dessas const (p1, p2)
// p1.nome = 'Outra coisa'
//pois essas váriveis apontam para um endereço que aponta para o valor, e não é possível alterar o endereço. Como se fosse p1 = {ENDERECO} -> 'valor'
// p1 = 'Outra coisa' -> Ai realmente estaria alterando o endereço da variável, dessa forma gerando erro
const p1 = new Pessoa ('Luiz', 'Miranda');
const p2 = new Pessoa ('Neymar', 'Junior');
console.log(p1)
console.log(p2)

