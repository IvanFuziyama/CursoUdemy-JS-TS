function Produto(nome, preco, estoque){
    // this.nome = nome;
    // this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, // valor
        writable: true, // pode ou n alterar o valor da variável
        configurable: true // pode ou n reconfigurar? (n permite apagar a variavel se for false)
    });
    Object.defineProperties(this, {
        nome: {
        enumerable: true, //mostra a chave
        value: nome, // valor
        writable: true, // pode ou n alterar o valor da variável
        configurable: true // pode ou n reconfigurar? (n permite apagar a variavel se for false)
        },
        preco: {
        enumerable: true, //mostra a chave
        value: preco, // valor
        writable: true, // pode ou n alterar o valor da variável
        configurable: true // pode ou n reconfigurar? (n permite apagar a variavel se for false)
        },
    });
}
const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 2000;
// delete p1.estoque;
// console.log(p1)
console.log(Object.keys(p1));
console.log(p1);
for(let chave in p1){
    console.log(chave);
}
