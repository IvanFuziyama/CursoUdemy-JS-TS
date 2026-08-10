//n é da aula, é só para esclarecer melhor a diferenças entre o for classico, for in e for of

const frutas = ['maçã', 'banana', 'uva'];
const usuario = { nome: 'Ana', idade: 25 };

// 1. FOR CLÁSSICO: Quando o índice importa (ex: mostrar a posição)
for (let i = 0; i < frutas.length; i++) {
    console.log(`Posição ${i}: ${frutas[i]}`);
}

// 2. FOR...IN: Para ler propriedades de objetos
for (let chave in usuario) {
    console.log(`${chave}: ${usuario[chave]}`);
}

// 3. FOR...OF: Para pegar diretamente os valores de um array
for (let fruta of frutas) {
    console.log(fruta);
}