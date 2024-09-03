"use strict";
const user1 = {
    name: 'Jenish',
    age: 22,
    courses: ['JavaScript', 'TypeScript', 'React', 'Node'],
};
const user2 = {
    name: 'Vaibhav',
    age: 18,
    courses: ['CAD', 'Render', 'ShapeSpark', 'Modeling'],
};
function printUser(user) {
    console.log(user.name);
    console.log(user.age);
    console.log(user.courses);
}
printUser(user1);
printUser(user2);
