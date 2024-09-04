"use strict";
function logUserProperty(user, key) {
    console.log(user[key]);
}
const u1 = { id: 1, name: 'Jenish', age: 22 };
const u2 = { name: 'Admin' };
logUserProperty(u1, 'name');
logUserProperty(u2, 'name');
