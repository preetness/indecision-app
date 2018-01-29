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

class Student extends Person {
    constructor(name, age, major, university) {
        super(name, age)
        this.major = major
        this.university = university
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major} at the ${this.university}.`;
        }
        return description; 
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            return greeting += ` I'm visiting from ${this.homeLocation}.`
        }
    }
}  

const me = new Student('Preet Dha', 40, 'Computer Science', 'University of Washington');

const other = new Student();
console.log(me.getGreeting());
console.log(me.getDescription());

const mikhail = new Traveler('Mikhail Gorbachev', 78, 'Moscow')
console.log(mikhail.getGreeting());
