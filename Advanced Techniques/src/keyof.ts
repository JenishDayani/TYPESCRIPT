// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// function logUserProperty(user: User, key: keyof User) {
//   console.log(user[key]);
// }

// const u1: User = { id: 1, name: 'Jenish', age: 22 };
// logUserProperty(u1, 'name');

// ************************************keyof Generics************************************

interface User {
  id: number;
  name: string;
  age: number;
}

interface Admin {
  name: string;
}

function logUserProperty<T extends User | Admin>(user: T, key: keyof T) {
  console.log(user[key]);
}

const u1: User = { id: 1, name: 'Jenish', age: 22 };
const u2: Admin = { name: 'Admin' };
logUserProperty(u1, 'name');
logUserProperty(u2, 'name');
