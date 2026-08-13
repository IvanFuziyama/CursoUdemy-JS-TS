let timer = document.querySelector('.timer');
const iniciar = document.querySelector('#buttonIniciar');
const pausar = document.querySelector('#buttonPausar');
const zerar = document.querySelector('#buttonZerar');

function apresentarHora(){
    let hora = new Date();
    return data.toLocaleTimeString('pt-BR');
}
const timer = setInterval(function(){
    console.log(apresentarHora());
}, 1000);