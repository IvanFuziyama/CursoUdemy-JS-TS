function mostrarHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR')
}
const timer = setInterval(function(){
    console.log(mostrarHora());
}, 1000);
setTimeout(function(){ // setTimeout é usado para parar a variável timer
    clearInterval(timer);
}, 3000)

setTimeout(function(){
    console.log('Hello man!')
},5000)