'use strict';

let message = 'hello';
message = 123;

console.log(message);

const inf = 1 / 0;
const negativeInf = -1 / 0;
const notNumber = 'hello' / 0;
const moreNotNumber = 'hello' / 0 + 5;

console.log('Infinity', inf, Infinity);
console.log('Negative Infinity', negativeInf, -Infinity);
console.log('NaN', notNumber, moreNotNumber);
console.log(`String with variable ${notNumber} and ${1 + 2}`);

const isSunMoreEarth = true;
const isFiveMoreFour = 5 > 4;

console.log(`Is Sun more Earth? ${isSunMoreEarth}`);
console.log(`Is Five more Four? ${isFiveMoreFour}`);

let age = null;

console.log(`null age value = ${age}`);

let count;

console.log(`undefined count by default = ${count}`);

const emptyObject = {};

console.log(`Empty object = ${emptyObject}, ${JSON.stringify(emptyObject)}`);

console.log('typeOf:');
console.log('number', typeof 12);
console.log('string', typeof '12');
console.log('boolean', typeof true);
console.log('object', typeof {});
console.log('symbol', Symbol('id'), typeof Symbol('id'));
console.log('undefined', typeof undefined);
console.log('!Error with typeof for null', typeof null);
console.log('function', typeof console.log);