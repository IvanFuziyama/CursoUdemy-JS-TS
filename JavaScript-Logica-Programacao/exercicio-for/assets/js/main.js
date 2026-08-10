const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
]
const container = document.querySelector('.container');
const div = document.createElement('div');
for (let x = 0; x<elementos.length; x++){
    let {tag, texto} = elementos[x];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}
container.appendChild(div);