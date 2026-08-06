const form = document.querySelector('#form');
form.addEventListener('submit', function(evento){
    evento.preventDefault();
    const inputPeso = document.querySelector('#input-peso')
    const inputAltura = document.querySelector('#input-altura')
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if(!peso){
        apresentarResultado('Peso inválido', false);
        return;
    }
    if(!altura){
        apresentarResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc)
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    console.log(imc, nivelImc);
    apresentarResultado(msg, true);
});
function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 1'];
    if(imc >= 39.9){
        return nivel[5];
    }
    //n precisa usar else if, pois fazendo dessa forma ele faz em ordem de cima para baixo
    if(imc >= 34.9){
        return nivel[4];
    }
    if(imc >= 29.9){
        return nivel[3];
    }
    if(imc >= 24.9){
        return nivel[2];
    }
    if(imc >= 18.5){
        return nivel[1];
    }
    if(imc<18.5){
        return nivel[0];
    }
}
function getImc(peso,altura){
    const imc = peso/altura**2;
    return imc.toFixed(2)
}

function criarP(){
    const p = document.createElement('p');
    return p;
}
function apresentarResultado(msg, isValid){
const resultado = document.querySelector('.resultado');
resultado.innerHTML = '';
const p = criarP();
if(isValid){
    p.classList.add('paragrafo-resultado');
}else{
    p.classList.add('bad')
}
p.innerHTML = msg;
resultado.appendChild(p);
}