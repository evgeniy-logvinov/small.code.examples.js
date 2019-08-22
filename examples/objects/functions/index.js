'use strict';

let user = {
    name: 'Jon',
    age: 12,
    sayHello() {
        console.log('Hello');
    },
    sayHelloWorld: function() {
        console.log('Hello world');
    },
    sayName() {
        console.log(this.name);
    },
}

let admin = {
    name: 'T-1000',
}

console.log('user', user);

function sayUserName() {
    console.log(this.name);
}

user.sayHi = function() {
    console.log('Hi');
}

user.sayHi();
user.sayHello();
user.sayHelloWorld();
user.sayName();
user.sayUserName = sayUserName;
admin.sayUserName = sayUserName;
user.sayUserName();
admin.sayUserName();