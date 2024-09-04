"use strict";
class User {
    constructor(id_, name_) {
        this.id = id_;
        this.name = name_;
    }
}
class Admin {
    constructor(name_) {
        this.name = name_;
    }
}
function printInfo(arg) {
    if (arg instanceof User) {
        console.log(arg.id);
        console.log(arg.name);
    }
    else {
        console.log(arg.name);
    }
}
function printInfo2(arg) {
    if ('id' in arg) {
        console.log(arg.id);
        console.log(arg.name);
    }
    else {
        console.log(arg.name);
    }
}
