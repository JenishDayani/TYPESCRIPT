function foo(arg: any): void {
  if (arg) {
    console.log('It has Value :- ', arg);
  } else {
    console.log('is Undefined :- ', arg);
  }
  return;
}

let a: number | undefined = undefined;
foo(a);
a = 500;
foo(a);
