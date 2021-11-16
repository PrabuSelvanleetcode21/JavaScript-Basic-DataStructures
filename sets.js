// Insertion order are not maintained
// finding and Deleting elements are very fast
const set= new Set();

set.add('abc');
set.add('12');
set.add('abc'); //duplicate entries are not allowed
set.add('prabu');

for (val of set) console.log(val);

const bool = set.has('abc');
// console.log(bool)

console.log(set)