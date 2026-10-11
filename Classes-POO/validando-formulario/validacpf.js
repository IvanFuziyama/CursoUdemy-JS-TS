class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo',{
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }
    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        //Está usando a class ValidaCPF, pois o método geraDigito está como static, por isso usa-se a calss
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
        return 'CHEGUEI AQUI'
    }
    static geraDigito(cpfSemDigitos){
        // o ideal é usar static nos métodos que n utilizam o this
        let total= 0;
        let reverso = cpfSemDigitos.length + 1;
        
        for(let stringNumerica of cpfSemDigitos){
            // console.log(stringNumerica, reverso);
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? digito : '0';

    }
    isSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
}
let validacpf = new ValidaCPF('070.987.720-03');
// validacpf = new ValidaCPF('999.999.999-99');
console.log(validacpf.valida());
if(validacpf.valida()){
    console.log('CPF válido');
}else{
    console.log('CPF inválido')
}