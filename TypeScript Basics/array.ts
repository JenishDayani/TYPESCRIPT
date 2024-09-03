let arr = [1, 2, 3];
let tpl: [number, number, string] = [24, 7, 'Jenish'];

function printArray(arr: number[]) {
  console.log(arr);
}

function printTuple(tpl: [number, number, string]) {
  console.log(tpl[0]);
  console.log(tpl[1]);
  console.log(tpl[2]);
}

printArray(arr);
printTuple(tpl);
