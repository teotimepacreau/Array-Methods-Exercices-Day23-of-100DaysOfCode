console.log('connecté !');
//https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/05_Day_Arrays/05_day_arrays.md#exercise-level-1
// Exercice I
/*

1.Find the length of your array ✅
2.Get the first item, the middle item and the last item of the array ✅
3.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon✅
4.Print out each company✅
5.Change each company name to uppercase one by one and print them out✅
6.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.✅
7.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found✅
8.Filter out companies which have more than one 'o'✅
9.Reverse the array using reverse() method✅
10.Slice out the first 3 companies from the array✅
11.Slice out the last 3 companies from the array✅
12.Slice out the middle IT company✅
13.Remplacer Microsoft et Apple par Twitter et Mastodon✅
14.Remove the first IT company from the array✅
15.Remove the last IT company from the array✅
16.Remove all IT companies✅
 */
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
//I.1
const length = countries.length
console.log(length)

//I.2
const firstItem = countries[0]
console.log(firstItem)

const middleElement = countries[Math.floor(countries.length / 2)]
console.log(middleElement)

const lastItem = countries.at(-1)
console.log(lastItem)

//I.3
const itCompanies = [
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
];
//I.4
(() => {
  itCompanies.forEach((item) => {
    console.log(item);
  });
})();

//I.5
function uppercase(itCompanies) {
    return itCompanies.map((item)=>{
        return item.toUpperCase()
    })
}

console.log(uppercase(itCompanies))

//.I.6
const sentence = itCompanies.join(', ')
console.log(sentence +' are big IT Companies')

//I.7
function companyChecker(itCompanies, company){
    if(itCompanies.includes(company)){
        return 'yes we have '+ company
    }else{
        return 'not found'
    }
}
console.log(companyChecker(itCompanies, 'Facebook'))

//I.8
const oo = itCompanies.filter((item)=>{
    return item.includes('oo')
})
console.log(oo)

//I.9
const reverse = [...itCompanies].reverse()//attention fait muter l'array existante 
console.log(reverse)

//I.10
const firstThree = itCompanies.slice(0, 3)
console.log(firstThree)

//I.11
const lastThree = itCompanies.slice(-3)//ne pas mettre d'index de fin pour avoir le dernier élément
console.log(lastThree)

//I.12
const middleCompany = itCompanies.slice(Math.floor(itCompanies.length / 2))
console.log(middleCompany)

//I.13
const copyOfitCompanies = [...itCompanies]
const replace = copyOfitCompanies.splice(2,2, 'Twitter', 'Mastodon')
console.log(copyOfitCompanies)

//I.14
const copy2 = [...itCompanies]
const firstRemove = copy2.shift()
console.log(copy2)

//I.15
const lastRemove = copy2.pop()
console.log(copy2)

let copy3 = [...itCompanies]
copy3 = []
console.log(copy3)