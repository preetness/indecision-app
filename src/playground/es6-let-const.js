var nameVar = 'Preet';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Russell';
nameLet = 'Peter';
console.log('nameLet', nameLet);

const nameConst = 'Bill';
console.log('nameConst', nameConst);

function getPetName() {
    let petName = 'Hal';
    return petName; 
}

//Block Scoping

 const fullName = 'Preet Dha';
 let firstName; 

 if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log('My first name is ' + firstName + '.');
 }

 console.log(firstName);