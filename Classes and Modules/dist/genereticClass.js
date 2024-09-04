"use strict";
class DataBox {
    constructor(input) {
        this.content = input;
    }
    print() {
        console.log(this.content);
        console.log(this.content.length);
    }
}
const d1 = new DataBox('Hello');
const d3 = new DataBox([1, 2, 3, 4, 5, 6]);
d1.print();
d3.print();
