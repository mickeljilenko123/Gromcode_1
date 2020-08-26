class Sportman {

    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(`${this.name} is running`);
    }
}

class Swimmer extends Sportman {
    constructor(name, style) {
        super(name);
        console.log(this);
        console.log(name);
        this.style = style;
    }
    swim() {
        console.log(`${this.name} is swimming ${this.style}`);
    }

    test() {
        console.log(this);
    }
}
//testing
const sportman = new Sportman('Denis');
console.log(sportman);
sportman.run();

const swimmer1 = new Swimmer('Denis', 'test style');
console.log(swimming);
swimmer1.test();
swimmer1.swim();



//class vs object