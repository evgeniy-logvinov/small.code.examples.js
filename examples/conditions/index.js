'use strict';

let a = 11;

if (a > 12) {
    console.log('if');
} else if (a < 12) {
    console.log('else if');
} else {
    console.log('else');
}

console.log('Bad example of ? : ');
console.log(a > 12 ? 'if' : a < 12 ? 'else if' : 'else');

let currentUser = null;
let defaultUser = "John";

console.log('currentUser || defaultUser || "unnamed"', currentUser || defaultUser || "unnamed");

console.log('null || 2 || undefined', null || 2 || undefined);
console.log('console.log(1) || 2 || console.log(3)', console.log(1) || 2 || console.log(3));
console.log('1 && null && 2', 1 && null && 2);
console.log('console.log(1) && console.log(2)', console.log(1) && console.log(2));
console.log('null || 2 && 3 || 4', null || 2 && 3 || 4);

if (-1 || 0) console.log('first');
if (-1 && 0) console.log('second');
if (null || -1 && 1) console.log('third');