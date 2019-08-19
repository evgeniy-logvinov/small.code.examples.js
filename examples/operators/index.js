'use strict';

let x = 1;
let y = 2;
x = -x;

console.log('-x', x);
console.log('y - x', y - x);

let my = 'my';
let name = 'name'
console.log('my + name', my + name);
console.log('1 + "2"', 1 + "2");
console.log('"1" + 2', "1" + 2);
console.log('NaN + 2', NaN + 2);
console.log('+true', +true);
let a, b, c;
a = b = c = 2 + 4;

console.log('a = b = c = 2 + 4', c, b, a);

a = 1;
b = 2;
c = 2 * 3 + (a = b + 3);

console.log('c = 2 * 3 + (a = b + 3)', 'bad idea');
console.log('a', a);
console.log('c', c);
console.log('3 ** 6', 3 ** 6);

let m = 12;
console.log('m++', m++, m);
console.log('++m', ++m, m);
console.log('m--', m--, m);
console.log('--m', --m, m);
m += 5;
console.log('m+=5', m);

a = 1;
b = 1;

c = ++a; // ?
let d = b++; // ?
console.log('a', a, '2');
console.log('b', b, '2');
console.log('c', c, '2');
console.log('d', d, '1');

a = 2;

x = 1 + (a *= 2);
console.log('x', x, '5');