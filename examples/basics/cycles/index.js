'use strict';

let i = 0;

while (i < 10) {
    console.log('while', i)
    i++;
}

console.log('current i', i);

do {
    console.log('do while', i)
    i--;
} while (i > 0)

console.log('current i', i);

for (i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }

    console.log('for', i);

    if (i === 5) {
        break;
    }
}

console.log('current i', i);

i = 3;

while (i) {
    console.log(i--);
}

i = 0;
while (++i < 5) console.log('while ++i', i);

i = 0;
while (i++ < 5) console.log('while i++', i);

for (let i = 0; i < 5; i++) console.log('for i++', i);

for (let i = 0; i < 5; ++i) console.log('for ++i', i);

for (let i = 1; i < 11; i++) {
    if (i % 2) {
        console.log('i', i);
    }
}

i = 0;

while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}

let rangeStart = 2;
let rangeEnd = 10;

console.log('Between', rangeStart, rangeEnd)
for (let i = rangeStart; i < rangeEnd; i++) {
    let common = true;

    for (let j = rangeStart; j < rangeEnd; j++) {
        if (j !== i && i % j == 0) {
            common = false;
        }
    }
    if (common) {
        console.log('common', i);
    }
}


i = 15;

switch (i) {
    case 0: console.log('switch 0');
        break;
    case 13:
    case 15: console.log('switch 15');
        break;
    case 18: console.log('switch 18');
        break;
    default: console.log('switch NaN');
};