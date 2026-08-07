const pontuacaoUsu = 70;
const nivelUsu = pontuacaoUsu >= 100 ? 'Ganhou!!!' : 'Perdeu tudo!';

// const corUsu = 'Violet';
const corUsu = null;
const corPadrao = corUsu || 'Preta';

console.log(nivelUsu, corPadrao);
// ==
// if(pontuacaoUsu >= 100){
//     console.log('Ganhou');
// }else{
//     console.log('PERDEU!')
// }