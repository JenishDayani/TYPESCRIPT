"use strict";
function foo(arg) {
    if (arg) {
        console.log('It has Value :- ', arg);
    }
    else {
        console.log('is Undefined :- ', arg);
    }
    return;
}
let a = undefined;
foo(a);
a = 500;
foo(a);
