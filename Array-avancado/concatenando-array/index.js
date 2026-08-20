const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'Oi');
const a4 = [...a1, 'jão', ...a2, ...[7,8]]
console.log(a3)
console.log(typeof a3)
console.log(a4)