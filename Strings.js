const name='prabu';

for (let i=0; i<name.length;i++){ 
    console.log(name[i])
}

for (s of name) console.log(s)

name.forEach((val)=> console.log(val))

let a=2;
let b='2';
console.log(a===b);