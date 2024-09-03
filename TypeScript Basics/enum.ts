enum PermissionLevel {
  Instructor,
  Student,
  Admin,
}

interface UserEnum {
  name: string;
  age: number;
  courses: string[];
}

interface UserPermissionEnum extends UserEnum {
  permissionLevel: PermissionLevel;
}

const userEnum1: UserPermissionEnum = {
  name: 'Jenish',
  age: 22,
  courses: ['JavaScript', 'TypeScript', 'React', 'Node'],
  permissionLevel: PermissionLevel.Instructor,
};
const userEnum2: UserPermissionEnum = {
  name: 'Vaibhav',
  age: 18,
  courses: ['CAD', 'Render', 'ShapeSpark', 'Modeling'],
  permissionLevel: PermissionLevel.Student,
};

function printUserEnum(user: { name: string; age: number; courses: string[] }) {
  console.log(user.name);
  console.log(user.age);
  console.log(user.courses);
}

printUser(userEnum1);
printUser(userEnum2);
