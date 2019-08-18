'use strict';

try {
    dogName = 'Hunter';
    console.log(dogName);
} catch (err) {
    console.log('dogName is not defined');
}

var myName = 'Evgeniy';
let myWifeName = 'Olga';
const mySonName = 'Artem';
let tHundred = 'T-100';
let tThousand = 'T-1000';

console.log(myName);
console.log(myWifeName);
console.log(mySonName);
console.log(tHundred);

myName = 'Jon';
myWifeName = 'Sara';
tHundred = tThousand;

try {
    mySonName = 'T-1000';
} catch (err) {
    console.log(`Cannot change this name, because it's contstant variable`);
}

console.log('Names after change:');
console.log(myName);
console.log(myWifeName);
console.log(mySonName);
console.log('Copy this var from tThousand:');
console.log(tHundred);
