interface HelloUser {
  name: string;
  age: number;
  courses: string[];
}

interface UserExtended extends HelloUser {
  permissionLevel: string;
}

const userExtend1: UserExtended = {
  name: 'Jenish',
  age: 22,
  courses: ['JavaScript', 'TypeScript', 'React', 'Node'],
  permissionLevel: 'Instructor'
};
const userExtend2: UserExtended = {
  name: 'Vaibhav',
  age: 18,
  courses: ['CAD', 'Render', 'ShapeSpark', 'Modeling'],
  permissionLevel: 'Student'
};

function printUserExtend(user: {
  name: string;
  age: number;
  courses: string[];
}) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.courses);
}

printUser(userExtend1);
printUser(userExtend2);
