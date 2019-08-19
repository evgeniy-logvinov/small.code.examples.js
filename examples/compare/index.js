'use strict';
let compareNumbers = 12 > 2;
let compareStrings = 'Z' > 'a';

console.log('12 > 2', compareNumbers);
console.log('aa > a', 'aa' > 'a');
console.log('A > a', 'A' > 'a');
console.log('Z > a', compareStrings);
console.log('Z > 12', 'Z' > 12);

let a = 0;
console.log('Boolean(0)', Boolean(a));
let b = "0";
console.log('Boolean("0")', Boolean(b));
console.log('0 == "0"', a == b);
console.log('0 === "0"', a === b);
console.log('0 == false', 0 == false);
console.log('"" == false', '' == false);
console.log('null === undefined (different data types object and undefined)', null === undefined);
console.log('null == undefined', null == undefined);
console.log('null >= undefined', null >= undefined);

console.log('null > 0', null > 0);
console.log('null == 0', null == 0);
console.log('null >= 0', null >= 0);

console.log('undefined > 0', undefined > 0);
console.log('undefined < 0', undefined < 0);
console.log('undefined == 0', undefined == 0);

console.log('5 > 4', 5 > 4, true);
console.log('"ананас" > "яблоко"', "ананас" > "яблоко", false);
console.log('"2" > "12"', "2" > "12", true);
console.log('undefined == null', undefined == null, true);
console.log('undefined === null', undefined === null, false);
console.log('null == "\n0\n"', null == "\n0\n", false);
console.log('null === +"\n0\n"', null === +"\n0\n", false);
