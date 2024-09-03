function firstElement<T>(arr: T[]) {
  return arr[0];
}

const array1 = [1, 2, 3];
console.log(firstElement(array1));

const array2 = [true, false, true];
console.log(firstElement(array2));

const array3 = [true, false, 'true'];
console.log(firstElement(array3));

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output) {
  return arr.map(func);
}

const G1 = map(['1', '2', '3'], (n) => [parseInt(n)]);
