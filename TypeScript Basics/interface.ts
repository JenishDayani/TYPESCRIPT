type User = { name: string; age: number; courses: string[] };
interface UserInterface {
  name: string;
  age: number;
  courses: string[];
}

const userInterface1 :UserInterface={
  name: 'Jenish',
  age: 22,
  courses: ['JavaScript', 'TypeScript', 'React', 'Node'],
};
const userInterface2 :UserInterface={
  name: 'Vaibhav',
  age: 18,
  courses: ['CAD', 'Render', 'ShapeSpark', 'Modeling'],
};

function printUserInterface(user: { name: string; age: number; courses: string[] }) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.courses);
}

printUser(userInterface1);
printUser(userInterface2);
