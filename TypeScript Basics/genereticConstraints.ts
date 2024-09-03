interface UserList {
  users: string[];
  length: number;
}

function lengthComparison<Type extends UserList>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}

const ar1: UserList = { users: ['Jenish', 'Vaibhav'], length: 2 };
const ar2: UserList = { users: ['Jemish', 'Hardik', 'Het'], length: 3 };

console.log(lengthComparison(ar1, ar2));
