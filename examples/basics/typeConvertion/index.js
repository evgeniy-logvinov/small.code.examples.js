'use strict';

let booleanVar = false;
console.log('Before convertion:', typeof booleanVar);
booleanVar = String(booleanVar);
console.log('After convertion:', typeof booleanVar);

let aNum = 15;
let aStr = '15';
let cStr = 'Some not numeber';
let bNum = 18;
let bStr = '18';

console.log(aNum / bNum);
console.log(aStr / bStr);
console.log(Number(aStr) / Number(bStr));
console.log('Before:', typeof aStr, 'After:', typeof Number(aStr));
console.log('Before:', cStr, 'After:', Number(cStr));
console.log('Rules for numbers:')
console.log('undefined to NaN', Number(undefined));
console.log('null to 0', Number(null));
console.log('false to 0', Number(false));
console.log('true to 1', Number(true));
console.log('   123    ', Number('   123    '));
console.log('', Number(''));
console.log('   123z    ', Number('   123z    '));
console.log('12 + 1', Number('12' + 1));
console.log('1 + 12', Number(1 + '12'));
console.log('test', Boolean('test'));
console.log('    ', Boolean('    '));
console.log('0', Boolean('0'));
console.log('', Boolean(''));
console.log(null, undefined, NaN, Boolean(null), Boolean(undefined), Boolean(NaN));

console.log('"" + 1 + 0', "" + 1 + 0, '10');
console.log('"" - 1 + 0', "" - 1 + 0, '-1');
console.log('true + false', true + false, 'truefalse');
console.log('6 / "3"', 6 / "3", '2');
console.log('"2" * "3"', "2" * "3", '6');
console.log('4 + 5 + "px"', 4 + 5 + "px", '9px');
console.log('"4" - 2', "4" - 2, '2');
console.log('"4px" - 2', "4px" - 2, 'NaN');
console.log('7 / 0', 7 / 0, 'Infinity');
console.log('"  -9  " + 5', "  -9  " + 5, '   -9   5');
console.log('"  -9  " - 5', "  -9  " - 5, '-14');
console.log('null + 1', null + 1, '0');
console.log('undefined + 1', undefined + 1, 'NaN');