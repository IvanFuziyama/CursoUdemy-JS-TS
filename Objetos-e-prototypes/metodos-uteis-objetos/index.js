/*
Object.values (retorna os valores)
Object.entries (retorna chaves e valores em arrays)
Object.getOwnPropertyDescriptor(o, 'prop') (retorna o descritor daquela propriedade (configurable, writable))
Object.assigns(des, any) (serve para copiar um objeto)
... (spread) (expalha elementos, copia uma array e objeto)

Object.keys (retorn as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/


const produto = {nome: 'Produto', preco: 1.8};
// const outraCoisa = {
    //     ... produto, 
    //     material: 'porcelana'
    // };
    // usando spread é mais intuitivo
    
    // const caneca = Object.assign({}, produto, {material: 'porcelana'});
    // caneca.nome = 'Outro nome';
// caneca.preco = 2.6;
// console.log(produto);
// console.log(caneca);

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
console.log(produto);