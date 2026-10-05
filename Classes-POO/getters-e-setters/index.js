const _velocidade = Symbol('velocidade');
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade]= 0;
    }
    set velocidade(valor){
        console.log('SETTER')
        if(typeof valor !== 'number')return;
        if(valor >= 100 || valor <= 0)return;
        this[_velocidade]= valor;
    }
    get velocidade(){
        console.log('GETTER');
        
        return this[_velocidade];
    }
    acelerar(){
        while(this[_velocidade] >= 100)return;
        this[_velocidade]++;
    }
    freiar(){
        while(this[_velocidade] <= 0)return;
        this[_velocidade]--;
    }
}

const c1 = new Carro ('Fusca')

c1.velocidade = 55;
// for(let x = 0; x <=200; x++)c1.acelerar();
console.log(c1);
console.log(c1.velocidade)