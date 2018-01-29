class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hello, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

const me = new Person('Preet Dha', 40);

const other = new Person();
console.log(me.getGreeting());
console.log(me.getDescription());