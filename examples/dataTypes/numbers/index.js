'use strict';

let num = 244;
console.log('e', 12e12);
console.log('e', 12e-3);
console.log('10', num.toString());
console.log('16', num.toString(16));
console.log('2', num.toString(2));
console.log('..16', 144..toString(2));
console.log('Math.floor', Math.floor(144.3));
console.log('Math.floor', Math.floor(-144.3));
console.log('Math.ceil', Math.ceil(144.3));
console.log('Math.ceil', Math.ceil(-144.3));
console.log('Math.round', Math.round(144.3));
console.log('Math.round', Math.round(144.6));
console.log('Math.round', Math.round(-144.3));

console.log('Round 2 symbols', Math.round(144.123456 * 100) / 100);
console.log('Round 2 symbols', 144.123456.toFixed(2));
console.log('Round 2 symbols string', typeof 144.123456.toFixed(2));
console.log('Round 2 symbols', +144.123456.toFixed(2));
console.log('Round 2 symbols number', typeof +144.123456.toFixed(2));

console.log('Infinity', 1e500);
console.log(0.1 + 0.2);
console.log('toFixed', (0.1 + 0.2).toFixed(4));

console.log((0.1 * 10 + 0.2 * 10) / 10);
console.log((0.28 * 100 + 0.14 * 100) / 100);

console.log('9999999999999999 ', 9999999999999999);
// 100011100001101111001001101111110000010000000000000000.00000000
