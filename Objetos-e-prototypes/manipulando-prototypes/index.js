/*
// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
};
const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA)

/*{chaveC: 'C'}
chaveC: "C"
[[Prototype]]: Object
    chaveB: "B"
    [[Prototype]]: Object
        chaveA: "A"
        [[Prototype]]: Object
            ...
*/
// Pode reaporveitar códigos que estão em outros objetos
// Cuidado em mexer no __proto__, pode dar muitos problemas com o decorrer do código, isso que foi feito é só um exemplo para aprendizado

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);
// p1.desconto(10);

p1.aumento(10);
p2.aumento(100);
console.log(p1);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 85
    },
});
p3.aumento(10);
console.log(p3);