'use strict';

let lib = require('./lib');

function showMessage() {
    console.log('Hello world');
}

showMessage();

function showName(name) {
    console.log('Hello world', name);
}

showName('Jon');

let name = 'Sara';

function showNameWithVariableOutside() {
    console.log('Hello world', name);
}

showNameWithVariableOutside();

function showNameWithDefaultName(name = 'T-1000') {
    console.log('Hello world', name);
}

function defaultName() {
    return 'T-1000';
}

function showNameWithDefaultNameFromFunc(name = defaultName()) {
    console.log('Hello world', name);
}

showNameWithDefaultName();
showNameWithDefaultNameFromFunc();

console.log('min ->>>');
console.log('min(2, 5)', lib.min(2, 5));
console.log('min(3, -1)', lib.min(3, -1));
console.log('min(1, 1)', lib.min(1, 1));

console.log('pow --->')
console.log('pow(2, 4)', lib.pow(2, 4));
console.log('pow(4, 4)', lib.pow(4, 4));

const yes = function () {
    console.log('Yes');
}

const no = function () {
    console.log('No');
}

function answer(age, yes, no) {
    if (age > 18) {
        yes();
    } else {
        no();
    }
}

console.log('answer -->');
answer(12, yes, no);