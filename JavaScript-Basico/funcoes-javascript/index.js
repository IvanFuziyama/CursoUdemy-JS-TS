function saudacao(nome){
    // console.log(`Good morning mr. ${nome}`);
    return `Good morning mr. ${nome}`;
}
// saudacao('Ribamar');
// saudacao('Adalberto');
const variavel = saudacao('Ribamar');
console.log(variavel);

function soma(x,y){
    const resultado = x + y;
    return resultado;
    console.log('Hello World!') //tudo q esta abaixo do return n é executado
}
console.log(soma(2,2));

function subtrair(x=4,y=3){
    const resultado=x-y;
    return resultado
}
console.log(subtrair())

// const raiz = function (n) = const raiz = (n) =>
// const raiz = (n) =>{
//     return n ** 0.5;
// };
const raiz = n => n**0.5;
console.log(raiz(16))