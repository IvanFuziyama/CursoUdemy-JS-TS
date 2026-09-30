// Produto -> aumento, desconto
// Camiseta = cor, caneca = material
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};
function Camiseta(nome,preco,cor){
    Produto.call(this, nome, preco);
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual){ //método
    this.preco = this.preco + (this.preco * (percentual /100));
};

function Caneca(nome, preco, material, estoque){
    Produto.call(this,nome,preco);
    this.material = material;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })

}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Qualquer', 62);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 6);
console.log(caneca.estoque)
caneca.estoque = 100;
// camiseta.aumento(10);
console.log(caneca.estoque)
console.log(caneca)
console.log(produto)
console.log(camiseta);