class Person {
    constructor(name = 'Anonymous') {
        this.name = name
    }
    getGreeting() {
        //return 'Hi, I am ' + this.name + '!';
        return `Hello, I am ${this.name}!`;
    }
}

const me = new Person('Preet Dha');

const other = new Person();
console.log(me.getGreeting());