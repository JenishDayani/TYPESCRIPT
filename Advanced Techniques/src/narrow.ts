class User {
  id: number;
  name: string;

  constructor(id_: number, name_: string) {
    this.id = id_;
    this.name = name_;
  }
}

class Admin {
  name: string;
  constructor(name_: string) {
    this.name = name_;
  }
}

function printInfo(arg: User | Admin) {
  if (arg instanceof User) {
    console.log(arg.id);
    console.log(arg.name);
  } else {
    console.log(arg.name);
  }
}

function printInfo2(arg: User | Admin) {
  if ('id' in arg) {
    console.log(arg.id);
    console.log(arg.name);
  } else {
    console.log(arg.name);
  }
}