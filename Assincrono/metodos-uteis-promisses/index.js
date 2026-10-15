// Promise.all -> tenta resolve todas as promises
// Promise.race -> resolve o primeiro promise
// Promise.resolve -> cria uma Promise já resolvida
// Promise.reject -> cria uma Promise já rejeitada

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') {
    reject ('Erro');
    return;
    }
    setTimeout(() =>{
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
            }, tempo)
    });   
}

function baixaPagina(){
    const emCache = true;
    if(emCache){
        return Promise.reject('Página em cache')}else{
        return esperaAi('Baixei a página', 3000);
        }
    }

    baixaPagina()
    .then(dadosPaginas=>{console.log(dadosPaginas)})
    .catch(e=>console.log('Erro', e))


// const promises = [
//     esperaAi('Promise 1', rand(1,5)),
//     esperaAi('Promise 2', rand(1,5)),
//     esperaAi('Promise 3', rand(1,5)),
//     // esperaAi(1000, 1000),
// ];
// Promise.all(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(erro){
//     console.log(erro);
// });

// Promise.race(promises)
// .then(function(valor){
//     console.log(valor);
// })
// .catch(function(erro){
//     console.log(erro);
// });