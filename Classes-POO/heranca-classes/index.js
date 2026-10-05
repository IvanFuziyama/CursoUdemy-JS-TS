class DispositivoEletronico{
    constructor(nome){
        this.nome = nome
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log(this.nome + ' já LIGADO');
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado){
            console.log(this.nome + ' já DESLIGADO');
            return;
        }
        this.ligado = false;
    }
}
class Smartphone extends DispositivoEletronico{
    constructor(nome, cor,modelo){
        super(nome); //super -> classe pai
        this.cor = cor;
        this.modelo = modelo;
    }
}
class Tablet extends DispositivoEletronico{
    constructor(nome){
        super(nome);
        this.temWifi = false;
    }
    ligar(){
        if(this.temWifi){console.log('Wifi já está ligado'); return}
        console.log('Olha, você ativou o WiFi')
        this.temWifi =true;
    }
    desligar(){
        if(!this.temWifi){console.log('Wifi já está desligado'); return}
        console.log('Olha, você desativou o WiFi')
        this.temWifi =false;
    }
}
const s1 = new Smartphone('Samsung', 'preto', 'Galaxy S10');
s1.ligar();
console.log(s1);
// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// console.log(d1)
const t1 = new Tablet ('iPad', true);
t1.desligar();
t1.ligar();
t1.ligar();
console.log(t1.temWifi);