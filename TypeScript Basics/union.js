"use strict";
function addTwo(arg1, arg2) {
    if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    }
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2;
    }
    return;
}
const u1 = 3;
const u2 = 2;
const u3 = 'Hello';
const u4 = 'World';
const resultUnion1 = addTwo(u1, u2);
const resultUnion2 = addTwo(u3, u4);
console.log(resultUnion1);
console.log(resultUnion2);
