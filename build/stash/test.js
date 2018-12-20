"use strict";
class Person {
    constructor() {
        this.type = 'people';
    }
    printName() {
        console.log('name');
    }
}
class Tom extends Person {
    constructor() {
        super();
    }
    printName() {
        console.log('tom');
    }
    printType() {
        console.log('tom type');
    }
    printOthers() {
        console.log('others');
    }
}
let tom;
tom = new Tom();
tom.printName();
tom.printType();
tom.printOthers();
//# sourceMappingURL=test.js.map