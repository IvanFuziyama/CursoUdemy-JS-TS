//função construtora -> objetos
//função fábrica -> objetos
//Construtora -> new Pessoa //começa com letra maiúscula(n é obrigatório)
function Pessoa(nome,sobrenome){
    //Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function(){

    };

    //atributos ou métodos públicos
    this.nome = nome;
    //Pessoa.nome
    this.sobrenome = sobrenome;
    this.metodo = function(){
        console.log(this.nome + ' Sou um método')
    }
}
const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
console.log(p1.nome)
p1.metodo();