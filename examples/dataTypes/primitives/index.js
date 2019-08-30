'use strict';

let str = "Привет";

try {
    str.test = 5;
    console.log(str.test);
} catch(err) {
    console.log('Cannot add props on primitives')
}
