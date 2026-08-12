// try{
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
//     try{
//         console.log(b);
//     }catch(e){
//         console.log('deu erro')
//     }finally{
//         console.log('FINNALY')
//     }
// }catch(e){
//     console.log('Tratando o erro');
// }finally{
//     console.log('FINNALY: Eu sempre sou executado');
// }

function getHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {

    })
}
try{
    const data = new Date('01-01-1980 12:23:12');
    const hora = getHora(11);
    console.log(hora)
}catch(e){
    console.log(e);
}finally{
    console.log('Tenha um ótima dia');
}