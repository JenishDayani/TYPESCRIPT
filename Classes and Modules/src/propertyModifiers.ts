interface Poin2D {
  x: number;
  y: number;
  readonly name?: string;
}

const p1: Poin2D = { x: 0, y: 0, name: 'CenterPoint' };
console.log(p1);
