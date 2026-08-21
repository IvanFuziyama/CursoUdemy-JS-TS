//retorna um novo array com novos valores

// const numeros =[5,50,80,1,2,3,5,8,7,11,15,22,27]
// const numeroEmDobro = numeros.map((valor,indice,array) =>{
//     return valor *2;
// });
// console.log(numeroEmDobro);

//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "nome" do objeto
//Adicione uma chave id em cada objeto
const pessoas =[
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 22},
    {nome: 'Eduardo', idade: 73},
    {nome: 'Letícia', idade: 61},
    {nome: 'Rosana', idade: 53},
    {nome: 'Ian', idade: 42},
]
const pessoasNome = pessoas.map((obj,indice,array) => obj.nome);
const idades = pessoas.map(obj => {
    // delete obj.nome;
    // return obj;
    return {idade: obj.idade}
})
const adicionaID = pessoas.map((obj,indice) => {
    // obj.id = indice+1;
    // return obj;
    // mexe no objeto atual
    
    const newObj = {...obj};
    newObj.id = indice;
    return newObj
    //dessa forma n muda o array dos objetos original
})
//console.log(pessoas)
console.log(pessoasNome)
console.log(idades)
console.log(adicionaID)
