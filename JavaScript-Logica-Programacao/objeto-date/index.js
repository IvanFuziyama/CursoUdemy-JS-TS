// const data = new Date('2018-05-21 14:50:24');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); // Começa com 0 - janeiro
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // domingo - 0 | sabado - 6
// console.log(data.toString());

function zeroAEsquerda (num){
    return num>=10 ? num : `0${num}`;
}
function formataData(dataEx){
    const dia = zeroAEsquerda(dataEx.getDate());
    const mes = zeroAEsquerda(dataEx.getMonth() + 1);
    const ano = zeroAEsquerda(dataEx.getFullYear());
    const hora = zeroAEsquerda(dataEx.getHours());
    const min = zeroAEsquerda(dataEx.getMinutes());
    const seg = zeroAEsquerda(dataEx.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}
const dataEx = new Date();
const dataBrasil = formataData(dataEx);
console.log(dataBrasil)