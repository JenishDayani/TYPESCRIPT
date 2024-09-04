"use strict";
const a1 = [1, 2, 3];
function arraySum(arr) {
    let result = 0;
    arr.forEach((element) => (result += element));
    return result;
}
function argumentSum(...numbers) {
    let result = 0;
    numbers.forEach((element) => (result += element));
    return result;
}
const sum1 = arraySum(a1);
const sum2 = argumentSum(10, 20, 40, 50, 90, 70);
console.log(sum1);
console.log(sum2);
