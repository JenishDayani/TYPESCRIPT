"use strict";
class Point2D {
    constructor(xPosInput, yPosInput) {
        this.xPos = xPosInput;
        this.yPos = yPosInput;
    }
}
class Point3D extends Point2D {
    constructor(xPosInput, yPosInput, zPosInput) {
        super(xPosInput, yPosInput);
        this.zPos = zPosInput;
    }
}
const point1 = new Point2D(10, 20);
const point2 = new Point3D(10, 20, 30);
console.log(point1);
console.log(point2);
