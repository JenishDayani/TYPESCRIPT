interface IsSized {
  length: number;
}

class DataBox<Type extends IsSized> {
  content: Type;

  constructor(input: Type) {
    this.content = input;
  }

  print() {
    console.log(this.content);
    console.log(this.content.length);
  }
}

const d1 = new DataBox('Hello');
// const d2 = new DataBox(42);
const d3 = new DataBox([1, 2, 3, 4, 5, 6]);

d1.print();
// d2.print()
d3.print();
