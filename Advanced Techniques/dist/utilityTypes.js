"use strict";
function updateUserData(user, data) {
    return Object.assign(Object.assign({}, user), data);
}
let user1 = { name: 'Jenish' };
updateUserData(user1, { email: 'JEnish@gmail.com' });
