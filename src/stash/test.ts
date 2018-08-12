abstract class Person {
    protected type: string;

    constructor() {
        this.type = 'people';
    }

    printName(): void {
        console.log('name');
    }

    abstract printType(): void;
}

class Tom extends Person {

    constructor() {
        super();
    }

    printName(): void {
        console.log('tom')
    }

    printType(): void {
        console.log('tom type')
    }

    printOthers(): void {
        console.log('others')
    }
}

let tom: Tom;
tom = new Tom();
tom.printName();
tom.printType();
tom.printOthers();
