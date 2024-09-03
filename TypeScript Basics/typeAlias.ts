type Addable = number | string;

function addTwoType(arg1: Addable, arg2: Addable) {
  if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    return arg1 + arg2;
  }
  if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return arg1 + arg2;
  }
  return;
}

const u1Type = 3;
const u2Type = 2;
const u3Type = 'Hello';
const u4Type = 'World';
const resultUnion1Type = addTwoType(u1Type, u2Type);
const resultUnion2Type = addTwoType(u3Type, u4Type);
console.log(resultUnion1Type);
console.log(resultUnion2Type);
