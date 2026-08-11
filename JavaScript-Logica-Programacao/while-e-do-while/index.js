function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
};
const min = 1;
const max = 50;
let rand = random(min, max);

while(rand > 10){
    rand = random(min,max);
    console.log(rand)
}

console.log('###')

do{ //vai executar o código q está dentro do do primeiro e depois executa o while, é garantido q vai passar pelo do pelo menos uma vez
    rand = random(min,max);
    console.log(rand)
}while(rand > 10);