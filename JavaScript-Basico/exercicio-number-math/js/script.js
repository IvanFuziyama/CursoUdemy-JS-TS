const num = Number(prompt('Digite um número: '));
const numTitulo = document.querySelector('#numero-titulo');
const texto = document.querySelector('#texto');
numTitulo.innerHTML = num;
texto.innerHTML += `<p>Raiz quadrada é: ${Math.sqrt(num)}</p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)} </p>`;
texto.innerHTML += `<p>Arredondado para o número mais baixo: ${Math.ceil(num)}`;
texto.innerHTML += `<p>Arredondado para o número mais alto: ${Math.floor(num)}`;
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`

