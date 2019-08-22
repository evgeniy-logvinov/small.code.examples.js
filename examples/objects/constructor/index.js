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

function getJon() {
    this.name = 'T-1000';
    return { name: 'Jon' };
}

function getSara() {
    this.name = 'Sata';
    return;
}

const jon = new getJon();
console.log(jon.name);
const sara = new getSara();
console.log(sara.name);
const newJon = new getJon;
console.log(newJon.name, '<-- bad');

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