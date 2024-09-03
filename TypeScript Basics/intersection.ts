type UserI = {
  name: string;
  age: number;
  courses: string[];
};

type UserPermission = {
  permissionLevel: string;
};

type UserIntersection = UserI & UserPermission;

const userIntersection1: UserIntersection = {
  name: 'Jenish',
  age: 22,
  courses: ['JavaScript', 'TypeScript', 'React', 'Node'],
  permissionLevel: 'Instructor',
};
const userIntersection2: UserIntersection = {
  name: 'Vaibhav',
  age: 18,
  courses: ['CAD', 'Render', 'ShapeSpark', 'Modeling'],
  permissionLevel: 'Student',
};

function printUserIntersection(user: {
  name: string;
  age: number;
  courses: string[];
}) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.courses);
}

printUser(userIntersection1);
printUser(userIntersection2);
