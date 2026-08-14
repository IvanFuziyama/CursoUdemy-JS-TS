const input_adicionar_tarefa = document.querySelector('.input-adicionar-tarefa');
const btn_adicionar_tarefa = document.querySelector('.btn-adicionar-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li')
    return li;
}

input_adicionar_tarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!input_adicionar_tarefa.value)return;
        criaTarefa(input_adicionar_tarefa.value);
    }
});
function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esssa tarefa');
    li.appendChild(botaoApagar);
}
function limpaInput(){
    input_adicionar_tarefa.value = '';
    input_adicionar_tarefa.focus();
}
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText; //o botao apagar estava vindo junto
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //substitui a palavra Apagar para nada/vazio | .trim() - remove os espaços vazios
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJson = JSON.stringify(listaDeTarefas); // stringify - converte qualquer elemento para uma string em formato json
    console.log(tarefasJson);
    localStorage.setItem('tarefas', tarefasJson); //mini base de dados  que pode salvar dados dentro do navegador
    //localStorage é Global
}
function adicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); //parse - converte para um objeto javascript (deixa de ser json)
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    limpaInput();
    salvarTarefas();
}

btn_adicionar_tarefa.addEventListener('click', function(e){
    if(!input_adicionar_tarefa.value)return;
    criaTarefa(input_adicionar_tarefa.value);
})

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }
})
adicionarTarefasSalvas();
