//Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}
Conta.prototype.depositar = function(valor){
    this.saldo +=valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function(){
    console.log(`Agência: ${this.agencia}/${this.conta} | ` + `Saldo: R$${this.saldo.toFixed(2)}`)
}

const conta1 = new Conta(11, 22, 100);
conta1.depositar(11);
conta1.sacar(5);
console.log(conta1)