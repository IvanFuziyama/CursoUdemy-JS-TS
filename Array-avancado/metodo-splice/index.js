//splice une varias métodos para o array(pop,shift,push,unshift)
//splice(1,2)
//1 -> indice que começã
//2 -> quantos indices apagar
const nomes = ['Maria', 'João', 'Eduardo', 'Carol', 'Gabriel'];
//nomes.splice(indice, delete, elem1, elem2, elem3);

//pop
// const removidos = nomes.splice(-2, 2);
// console.log(nomes, removidos);
// const removidos = nomes.splice(3, 1, 'THAUAN');
// console.log(nomes, removidos);

//shift
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

//push
// nomes.splice(nomes.length, 0, 'MESSI'); //utilizar o push é bem mais fácil de utilizar
// console.log(nomes);

//unshift
nomes.splice(0,0, 'CR7')
console.log(nomes);
for(let o in nomes){
    console.log(o,nomes[o])
}