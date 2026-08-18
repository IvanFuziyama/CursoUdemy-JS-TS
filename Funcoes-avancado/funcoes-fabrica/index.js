//factory function (função fábrica)
function criaPessoa(nome, sobrenome, altura, p){
    return {
        nome, sobrenome,
        get nomeCompleto(){
            return`${this.nome} ${this.sobrenome}`
        },

        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto){ //metódo
            return `${this.nome} está falando ${assunto}` //metódo
            // this.peso = p1.peso
        }, //metódo

        altura,
        peso: p,

        imc(){ //método
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
        //Getter(get) - impossibilida de alterar e se torna (finge ser) um atributo (não é mais uma function na teoria)
        /* get imc(){ //método
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }*/
    };
}
const p1 = criaPessoa('Michael', 'Jackson', 1.7, 80);
// const p2 = criaPessoa('Maria', 'Juana', 1.6, 50);
// console.log(p2.imc());
// console.log(p2.fala('mané'))
p1.nomeCompleto = 'Maria Oliveria Silveira Pereira'
console.log(p1.nomeCompleto);
