class Point2D {
  xPos: number;
  yPos: number;

  constructor(xPosInput: number, yPosInput: number) {
    this.xPos = xPosInput;
    this.yPos = yPosInput;
  }
}

class Point3D extends Point2D {
  zPos: number;
  constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
    super(xPosInput, yPosInput);
    this.zPos = zPosInput;
  }
}

const point1 = new Point2D(10, 20);
const point2 = new Point3D(10, 20, 30);

console.log(point1);
console.log(point2);
