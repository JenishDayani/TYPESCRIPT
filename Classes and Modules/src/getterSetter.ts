class PointTwoD {
  protected _xPos: number;
  protected _yPos: number;
  public static NUM_DIMENSIONS: number = 2;
  constructor(xPosInput: number, yPosInput: number) {
    this._xPos = xPosInput;
    this._yPos = yPosInput;
  }
  public get xPos(): number {
    return this._xPos;
  }
  public set xPos(xPosInput: number) {
    this._xPos = xPosInput;
  }
  public get yPos(): number {
    return this._yPos;
  }
  public set yPos(yPosInput: number) {
    this._yPos = yPosInput;
  }
}
class PointThreeD extends PointTwoD {
  protected _zPos: number;
  public static NUM_DIMENSIONS: number = 3;
  constructor(xPosInput: number, yPosInput: number, zPosInput: number) {
    super(xPosInput, yPosInput);
    this._zPos = zPosInput;
  }
  public get zPos(): number {
    return this._zPos;
  }
  public set zPos(zPosInput: number) {
    this._zPos = zPosInput;
  }
}
const point3 = new PointTwoD(10, 20);
const point4 = new PointThreeD(30, 40, 50);
console.log(point3);
point4.xPos = 70;
console.log(point4);
console.log(point4.xPos);
console.log(PointTwoD.NUM_DIMENSIONS);
console.log(PointThreeD.NUM_DIMENSIONS);
