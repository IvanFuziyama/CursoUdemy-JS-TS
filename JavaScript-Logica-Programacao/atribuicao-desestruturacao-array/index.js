// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const numeros = [1,2,3];
// //[a,b,c] = [1,2,3]
// [a,b,c] = numeros// --> desestruturação
// console.log(a,b,c)

// const letras = [b,c,a];
// [a,b,c] = letras;
// console.log(a,b,c)

const numeros = [100,200,300,400,500,600,700,800,900];
const [um, dois, ...resto] = numeros;
console.log(um, dois);
console.log(resto);
console.log(...resto);

const letras = ['A','B','C','D','E','F'];
const [primeiraLetra, , terceiraLetra, , , sextaLetra] = letras;
console.log(letras[1])
console.log(primeiraLetra, terceiraLetra, sextaLetra)

//                       0        1        2
//                     0 1 2    0 1 2    0 1 2
const arrayDentro = [ [1,2,3], [4,5,6], [7,8,9]];
const [lista1, lista2, lista3] = arrayDentro;
console.log(arrayDentro[1][2])
console.log(lista3);