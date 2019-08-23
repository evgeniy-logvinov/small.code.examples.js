'use strict';

function User(name) {
    console.log(new.target)
    this.name = name;
    this.isAdmin = false;
    this.sayHi = function () {
        console.log("My name: " + this.name);
    };
}

const user = new User('Jon')
console.log('name', user.name);
console.log('isAdmin', user.isAdmin);

function Jon() {
    this.name = 'T-1000';
    return { name: 'Jon' };
}

function Sara() {
    this.name = 'Sata';
    return;
}

const jon = new Jon();
console.log(jon.name);
const sara = new Sara();
console.log(sara.name);
const newJon = new Jon;
console.log(newJon.name, '<-- bad');

try {
    const newJonUndef = Jon();
    console.log(newJonUndef.name, '<-- undef');
} catch (err) {
    console.log('get error when we try create object useing Jon() without new. New is undefined');
}

const terminator = new User('T-1000')
terminator.sayHi();

function A() { return terminator; }
function B() { return terminator; }

let a = new A;
let b = new B;

console.log(a == b);

function Calculator() {
    this.read = function (a, b) {
        this.a = +a;
        this.b = +b;
    }
    this.sum = function () {
        return this.a + this.b;
    }
    this.mul = function () {
        return this.a * this.b;
    }
}

const calculator = new Calculator();
calculator.read(3, 4);
console.log('sum', calculator.sum());
console.log('mul', calculator.mul());

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function (newVal) {
        this.value += +newVal;
    }
}

const accumulator = new Accumulator(12);
accumulator.read('2');
accumulator.read('4');
console.log(accumulator.value);

function Horse(name) {
    if (!new.target) {
        return new Horse(name);
    }

    this.name = name;
}

let horse = Horse("Javascript");
console.log(horse.name);