// insertion order is maintained
// console.log('Hello')
const names = ['Prabu','Selvan','Dhanu','Linga',12];
// arrays are iterable
// console.log('length is ',names.length);
// console.log('direct access ', names[3] )

// loop the array
// for (const al of names ) {
//     console.log(al)
// }
names.push('Dhanvandhini');
// adding new element to array

names.forEach(name=> {
    console.log(name)
})

// finding element in array
names.push('Dhanu');
// names.pop('Dhanu');
const findIndex  = names.findIndex( el => el=== 'Dhanu');
// console.log('Find Index is ', findIndex);

// remove the element
names.splice(2,1);
console.log(names);

