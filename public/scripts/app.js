'use strict';

var add = function add(a, b) {
    // console.log(arguments); 
    return a + b;
};

console.log(add(5, 1));

var user = {
    name: 'Preet',
    cities: ['Seattle', 'Portland', 'Phagwara'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return _this2.multiplyBy * num;
        });
    }
};

console.log(multiplier.multiply());
