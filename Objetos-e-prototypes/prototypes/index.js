/*
JS utiliza protótipos para permitir que objetos acessem propriedades e métodos de outros objetos através da cadeia de protótipos

Protótipo:
É um objeto que serve como referência para outros objetos, permitindo o compartilhamento de propriedades e métodos.

*/

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'Oliginal' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome; //melhora a performance, pois faz uma referência no prototype, sem precisar ficar criando um método nomeCompleto para cada objeto 
}

//instância
const pessoa1 = new Pessoa('João', 'Legal');
const data = new Date();

console.dir(pessoa1);
console.dir(data);