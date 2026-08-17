//escopo global
// closure - é quando uma função interna se lembra e consegue acessar as variáveis de uma função externa ou o seu escopo léxico
function retornaFuncao(){
    const nome = 'Luiz';
    return function(){
        return nome;
    };
};
const funcao = retornaFuncao();
console.log(funcao())