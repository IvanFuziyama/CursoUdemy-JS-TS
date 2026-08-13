let relogio = document.querySelector('.timer');
let seg = 0;
let timer;

function getHoraSegundos(seg){
    const data = new Date(seg * 1000);
    return data.toLocaleTimeString('pt-BR', {
        timeZone: 'UTC'
    });
}
function iniciarRelogio(){
    timer = setInterval( function(){
        seg++;
        relogio.innerHTML = getHoraSegundos(seg);
    },1000)
}
function pararRelogio(){
    clearInterval(timer);
}
function zerarRelogio(){
    clearInterval(timer);
    seg = 0;
    relogio.innerHTML = '00:00:00'
}
document.addEventListener('click', function(e){
    const el = e.target;

    if(el.classList.contains('buttonIniciar')){
        relogio.classList.remove('pausado');
        iniciarRelogio();
        el.disabled = true;
    }
    if(el.classList.contains('buttonPausar')){
        relogio.classList.add('pausado');
        pararRelogio();
        const btnIniciar = document.querySelector('.buttonIniciar');
        if(btnIniciar) btnIniciar.disabled = false;
    }
    if(el.classList.contains('buttonZerar')){
        relogio.classList.remove('pausado');
        zerarRelogio();
        const btnIniciar = document.querySelector('.buttonIniciar');
        if(btnIniciar) btnIniciar.disabled = false;
    }
})
// outra forma de fazer por click, em vez de fazer um por um
// iniciar.addEventListener('click', function(){
//     relogio.classList.remove('pausado');
//     iniciarRelogio();
// })

// pausar.addEventListener('click', function(){
//     relogio.classList.add('pausado');
//     pararRelogio();
// });

// zerar.addEventListener('click', function(){
//     relogio.classList.remove('pausado');
//     zerarRelogio();
// });