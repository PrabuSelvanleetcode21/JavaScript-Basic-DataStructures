const map = new Map();

map.set('average', 1.10);
map.set('lastResult', null);

const germany = {
    name : 'Germany',
    population: '3c'
}

map.set(germany, 2.00);

// console.log(map)

for (val of map) {
    console.log(val)
}

map.set('average',2.20);

console.log(map.get('average'));

// map.delete(germany)
map.get('average');
console.log(map)