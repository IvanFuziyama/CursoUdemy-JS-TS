// valores primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symnol); -> os valores são copiados quando é utilizado o =
// valores referência (mutável) - array, object, function; -> os valores são referenciados

let a = [1,2,3]; //n está copiando, está referenciando para o valor
let b = a;
console.log(a,b);
a.push(4);
console.log(a,b);
b.pop();
console.log(a,b);
