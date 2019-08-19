'use strict';

let user = {
    name: 'Jon',
    age: 26,
    address: undefined,
}

console.log(user.name, user.age);

console.log('address in user', 'address' in user);
console.log('phone in user', 'phone' in user);
console.log('fax in user', user.fax !== undefined);

let userA = {
    name: 'test',
}

let userB = {
    name: 'test',
}

let userC = userA;

console.log('userA === userB', userA === userB);
console.log('userA === userC', userA === userC);

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

let empty = {};

console.log('Is Empty -->');
console.log('userA', isEmpty(userA));
console.log('{}', isEmpty(empty));

let salaries = {
    first: 100,
    second: 120,
    ten: 444,
}

function getSum(obj) {
    let summ = 0;
    for (let prop in obj) {
        summ += obj[prop];
    }
    return summ;
}

console.log('getSum', getSum(salaries))

let numericObject = {
    test: 12,
    asd: 23,
    name: 'name',
    phone: 79507355808,
    address: 'asdasdasd',
}

console.log('Before multiplyNumeric', numericObject);

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'number') {
            obj[prop] *= 2;
        }
    }
}

multiplyNumeric(numericObject)

console.log('After multiplyNumeric', numericObject);