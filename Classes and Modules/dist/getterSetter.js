"use strict";
class PointTwoD {
    constructor(xPosInput, yPosInput) {
        this._xPos = xPosInput;
        this._yPos = yPosInput;
    }
    get xPos() {
        return this._xPos;
    }
    set xPos(xPosInput) {
        this._xPos = xPosInput;
    }
    get yPos() {
        return this._yPos;
    }
    set yPos(yPosInput) {
        this._yPos = yPosInput;
    }
}
PointTwoD.NUM_DIMENSIONS = 2;
class PointThreeD extends PointTwoD {
    constructor(xPosInput, yPosInput, zPosInput) {
        super(xPosInput, yPosInput);
        this._zPos = zPosInput;
    }
    get zPos() {
        return this._zPos;
    }
    set zPos(zPosInput) {
        this._zPos = zPosInput;
    }
}
PointThreeD.NUM_DIMENSIONS = 3;
const point3 = new PointTwoD(10, 20);
const point4 = new PointThreeD(30, 40, 50);
console.log(point3);
point4.xPos = 70;
console.log(point4);
console.log(point4.xPos);
console.log(PointTwoD.NUM_DIMENSIONS);
console.log(PointThreeD.NUM_DIMENSIONS);
