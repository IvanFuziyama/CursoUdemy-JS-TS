const data = new Date();
const diaSemana = data.getDay();
const numMes = data.getMonth();
const receberDataTotal = getReceberData(data);
let receberTexto = document.querySelector('.dataText');

function getDiaSemanaTexto(diaSemana){
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    return diasDaSemana[diaSemana];
}
function getNumMeses(numMes){
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return meses[numMes];
}

function getReceberData(data){
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNumMeses(numMes);

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}, ${getZero(data.getHours())}:${getZero(data.getMinutes())}`;
}
function getZero(num){
    if(num >= 10){
        return num;
    }else{
        return `0${num}`;
    }
}

receberTexto.innerHTML = receberDataTotal;
console.log(receberDataTotal);
