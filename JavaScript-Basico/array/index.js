const alunos = ['Manoel', 'Gilberto', 'Bernardo', 'Joana'];
console.log(alunos[0]);
console.log(typeof alunos);
console.log(alunos instanceof Array)
alunos[0] = 'Jorge';
alunos[4] = 'Madruga';
console.log(alunos[0]);
console.log(alunos);
console.log(alunos.length);
alunos.push('Chico'); //adiciona automaticamente no array
console.log(alunos);
alunos.unshift('Samara');
console.log(alunos);
console.log(alunos[0]);
alunos.pop(); //alunos.shift(); //pop -> apaga o último índice | shift -> apaga o primeiro índice
console.log(alunos)