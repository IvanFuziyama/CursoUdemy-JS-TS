// const request = obj =>{
//     return new Promise((resolve, reject) =>{
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true)
//     xhr.send();

//     xhr.addEventListener('load', (e) =>{
//         if(xhr.status >= 200 && xhr.status < 300)//http tem uma lista de código, estamos aceitando entre 200 e 300 (seila)
//         {
//             resolve(xhr.responseText);
//         }else{
//             reject(xhr.statusText);
//             }
//         });
//     });
// };

// O fetch api já faz tudo o de cima

    // xhr -> xml http request, que representa ajax (é padronizado, muita gente usa esse termo)

document.addEventListener('click', e=>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});
// async function carregaPagina(el){
//     const href = el.getAttribute('href');
//     const objConfig = {
//         method: 'GET',
//         url: href
//     }
//     try{
//     const response = await request(objConfig);
//     carregaResultado(response);
//     }catch(e){
//         console.log(e)
//     }
// }
async function carregaPagina(el){
    try{
    const href = el.getAttribute('href');
    const response = await fetch(href);

    if(response.status !== 200) throw new Error ('Nosso ERRO 404!');

    const html = await response.text();
    carregaResultado(html);
    }catch(e){
        console.log('ERROR', e)
    }
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}

//professor falou que n usa mais desse jeito >:(

fetch('pagina1.html').then(resposta =>{
    if(resposta.status !== 200) throw new Error('ERRO 404');
    return resposta.text();
})
.then(html => console.log(html))
.catch(e => console.warn(e));