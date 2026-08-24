const a1 = [10,20,30,40,50,60,70,80,90];

// for(let valor of a1){ 
//     //pode usar o forEach(mas só se for array)
//     console.log(valor);
// }
a1.forEach((valor,indice,array) =>{
    console.log(valor);
})
const total = a1.reduce((acumulador,valor) => acumulador += valor, 0);
console.log(total);