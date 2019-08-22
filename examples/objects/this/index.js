'use strict';

let user = {
    name: 'Jon',
    age: 12,
    hi() {
        console.log(this.name);
    },
    bye() {
        console.log('Bye');
    },
    go: function () { console.log(this.name) },
    // [Symbol.toPrimitive](hint) {
    //     console.log(`hint: ${hint}`);
    //     return hint == "string" ? `{name: "${this.name}"}` : this.age;
    // },
    toString() {
        return this.name;
    },
    valueOf() {
        return this.age;
    }
}

console.log('user', user);
user.hi();

try {
    (user.name === 'Jon' ? user.hi : user.bye)();
} catch (err) {
    console.log('Loose context. Object undefined, have not this, because only copy and past function');
}

let userT = {
    name: 'T-1000'
}

const func = (userT.name === 'T-1000' ? user.hi : user.bye);
userT.sayHi = func;
userT.sayHi();

(user.name === 'Jon' ? user.hi : user.bye).bind(user)();
(user.go)();

function makeUser() {
    return {
        name: "Jon",
        ref: this,
        refWithoutError() {
            return this;
        },
    };
};

let userFromFunction = makeUser();

try {
    console.log(userFromFunction.ref.name);
} catch (err) {
    console.log('ref undefined, becuase this is object');
}
console.log(userFromFunction.refWithoutError().name);

let calculator = {
    a: 0,
    b: 0,
    read(a, b) {
        this.a = +a;
        this.b = +b;
    },
    sum() {
        return this.a | 0 + this.b | 0;
    },
    mul() {
        return this.a * this.b;
    },
}

calculator.read(3, 4);
console.log('Calculator -->>');
console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () {
        console.log(this.step);
        return this;
    },
};
console.log('Calculator -->');
ladder.up().up().down().up().showStep();

console.log('User-->')
console.log(user);
console.log(+user);
console.log(user + 13);

let obj = {
    toString() {
        return "2";
    }
};

console.log(obj * 2);
console.log(obj + 2);