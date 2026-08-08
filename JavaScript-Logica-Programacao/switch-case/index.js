function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto; // essa váriavel n existe fora dessa function
    switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
        // break;
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
        // break;
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
        // break;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
        // break;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
        // break;
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
        // break;
    case 6:
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
        // break;
    default:
        diaSemanaTexto = 'N tem';
        return diaSemanaTexto;
        // break;
}
}

const data = new Date('1989-11-21 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);


console.log(diaSemana, diaSemanaTexto)