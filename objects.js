const person = {
    firstName: "Prabu",
    lastName: "Selvan",
    age: 33,
    hobbies: ['Walking','Jogging', 'Studying'],
    greet () {
        console.log('First Name is ', this.firstName);
    }
};

// console.log(person);
// objects are not oterable by default

// for (val of person) {
//     console.log(val);
// }

console.log(person['firstName'])
console.log(person.firstName)

person.firstName='Dhanu';

delete person.age
// console.log(person.greet());

for (val in person) {
    console.log(val)
}