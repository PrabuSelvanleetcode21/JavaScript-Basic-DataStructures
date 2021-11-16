const companies = [
    {name: 'Company one', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company third', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company nine', category: 'Retail', start: 1981, end: 1989},
]

// console.log(companies)


const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
// basic for loop
// for(let i=0;i<companies.length; i++) {
//     console.log(companies[i])
// }

// for each

// companies.forEach(function ( comp) {
//     console.log(comp)
// })


// using normal condition inside for loop
// let canDrink= [];
// for (let i=0; i<ages.length;i++) {
//     if (ages[i]>=21) {
//         canDrink.push(ages[i]);
//     }
// }

// const canDrink = ages.filter(function (age){ 
//     if (age >=21) {
//         return true;
//     }
// })

// const canDrink =ages.filter((age)=> age>=21)


// using filter
// console.log(canDrink)


// const retailcompany = companies.filter(function(comp) {
//     if (comp.category==='Retail') {
//         return true;
//     }
// })

const retailcompany = companies.filter((comp)=> comp.category==='Retail');
console.log(retailcompany)

const ageMap = ages
                    .map(age=> Math.sqrt(age))
                    .map(age=> age*2)
console.log(ageMap);                    

const sortedCompanies = companies.sort((a,b)=> (a.start > b.start ? 1 : -1));

console.log('sortedCompanies ', sortedCompanies);

// ascending order sorting

const ascsort =ages.sort((a,b)=> a -b);
console.log(ascsort)

// descending order sorting

const dessort= ages.sort((a,b)=> b-a);
console.log(dessort);
let temp=0;

for (let i=0; i<ages.length; i++) {
    temp+=ages[i];
}
console.log(temp)

const ageSum =ages.reduce((total, age)=> {
return total + age;
}, 0)
console.log(ageSum);