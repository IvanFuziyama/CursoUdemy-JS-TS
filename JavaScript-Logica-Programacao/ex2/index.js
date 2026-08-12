// Function chamada ePaisagem que recebe dois argumentos(largura e altura) de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

// function ePaisagem(largura, altura){

//     if(largura > altura){
//         console.log(`A imagem está no modo paisagem`)
//         return true;
//     }else{
//         console.log(`A imagem NÃO está no modo paisagem`)
//         return false;
//     }
// }
// const paisagem = ePaisagem(600,500);
// console.log(paisagem)

// function ePaisagem(largura, altura){
//     return largura > altura;
// }
// const paisagem = ePaisagem(400,500);
// console.log(paisagem)

//arrow function (bastante utilizado)
const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(800,600));


