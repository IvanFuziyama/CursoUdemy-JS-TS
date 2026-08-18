//usando factory functions
function criaCalculadora(){
    return{
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionarEnter();
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0,-1)
        },

        pressionarEnter(){
            this.display.addEventListener('keyup', (e)=>{
                if(e.keyCode === 13)this.realizaConta();
            })
        },

        realizaConta(){
            let conta = this.display.value;
            try{
                //o eval é uma propriedade que tenta fazer a conta de uma string, transforma em um valor
                conta = eval(conta); //CUIDADO EM USAR EVAL, N É O IDEAL, A AULA É SÓ PARA APRESENTAR O FACTORY FUNCTIONS, N É RECOMENDADO USAR O EVAL, POIS PODE ABRIR MUITAS BRECHAS NO SISTEMA
    
                if(!conta){
                    console.log(conta)
                    alert('Conta inválida')
                    return;
                }
                this.display.value = conta;
            }catch(e){
                console.log(conta)
                alert('Conta inválida');
                return;
            }
        },

        cliqueBotoes(){
            document.addEventListener('click',(e) => {
                const el = e.target;
                if(el.classList.contains('btn-num'))this.btnParaDisplay(el.innerText);
                if(el.classList.contains('btn-clear'))this.clearDisplay();
                if(el.classList.contains('btn-del'))this.apagaUm();
                if(el.classList.contains('btn-eq'))this.realizaConta();
            });
            // }.bind(this));//bind - usa o this de fora, pois quando entra no método do cliqueBotoes o this se torna o document, n é mais a calculadora
            //------------------------------//
            // ou pode usar a arrow function =>, fazendo assim com que o this seja o antigo, ele n permite a alteração do this
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}
const calculadora = criaCalculadora();
calculadora.inicia(); //this vai ser a calculadora na function