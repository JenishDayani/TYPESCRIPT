"use strict";
class Point2D {
    constructor(xPosInput, yPosInput) {
        this._xPos = xPosInput;
        this._yPos = yPosInput;
    }
}
function printCoordinates1(point) {
    console.log(point._xPos);
    console.log(point._yPos);
}
function printCoordinates2(xPos, yPos) {
    console.log(xPos);
    console.log(yPos);
}
function printCoordinates(arg1, arg2) {
    if (typeof arg1 === 'object') {
        console.log(arg1._xPos);
        console.log(arg1._yPos);
    }
    else {
        console.log(arg1);
        console.log(arg2);
    }
}
const p = new Point2D(2, 2);
printCoordinates(p);
printCoordinates(1, 1);
