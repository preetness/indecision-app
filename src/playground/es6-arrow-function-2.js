const add = (a, b) => {
    // console.log(arguments); 
    return a + b;
}

console.log(add(5, 1));

const user = {
    name: 'Preet',
    cities: ['Seattle', 'Portland', 'Phagwara'],
    printPlacesLived() { 
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

console.log(user.printPlacesLived()) ;


const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
}

console.log(multiplier.multiply());