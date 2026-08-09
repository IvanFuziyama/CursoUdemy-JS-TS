const data = new Date();
const diaSemana = data.getDay();
const numMes = data.getMonth();
const diaSemanaTexto = getReceberDiaSemana(diaSemana); 
const numMesTexto = getReceberMes(numMes);
const receberDataTotal = getReceberData(data);
let dataText = document.querySelector('.dataText');

function getReceberDiaSemana(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Error';
            return diaSemanaTexto
    }
}
function getReceberMes(numMes){
    let numMesTexto;
    switch(numMes){
        case 0:
            numMesTexto = 'Janeiro';
            return numMesTexto;
        case 1:
            numMesTexto = 'Fevereiro';
            return numMesTexto;
        case 2:
            numMesTexto = 'Março';
            return numMesTexto;
        case 3:
            numMesTexto = 'Abril';
            return numMesTexto;
        case 4:
            numMesTexto = 'Maio';
            return numMesTexto;
        case 5:
            numMesTexto = 'Junho';
            return numMesTexto;
        case 6:
            numMesTexto = 'Julho';
            return numMesTexto;
        case 7:
            numMesTexto = 'Agosto';
            return numMesTexto;
        case 8:
            numMesTexto = 'Setembro';
            return numMesTexto;
        case 9:
            numMesTexto = 'Outubro';
            return numMesTexto;
        case 10:
            numMesTexto = 'Novembro';
            return numMesTexto;
        case 11:
            numMesTexto = 'Dezembro';
            return numMesTexto;
    }
}
function getReceberData(data){
    const dia = getZero(data.getDate());
    const mes = getZero(data.getMonth());
    const ano = data.getFullYear();
    const hora = getZero(data.getHours());
    const min = getZero(data.getMinutes());
    return `${diaSemanaTexto}, ${dia} de ${numMesTexto} de ${ano} ${hora}:${min}`;
}
function getZero(num){
    if(num >= 10){
        return num;
    }else{
        return `0${num}`;
    }
}

console.log(receberDataTotal)
dataText.innerHTML = `${receberDataTotal}`;

