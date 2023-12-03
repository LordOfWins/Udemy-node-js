const myName= 'seungjae'
let myAge = 20
const hasHobbies = true


const summarizeUser = (userName, userAge, userHasHobbies) => 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies


const person={
    name: 'seungjae',
    age: 20,
    greet(){
        console.log('Hi, I am ' + this.name)
    }
}

person.greet()
console.log(person)

const hobbies = ['Sports', 'Cooking']
for (let hobby of hobbies){
    console.log(hobby)
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby))
console.log(hobbies)

hobbies.push('Programming')
console.log(hobbies)

const copiedArray = hobbies.slice()
console.log(copiedArray)

const copiedArray2 = [...hobbies]
console.log(copiedArray2)

const toArray = (...args) => {
    return args
}

console.log(toArray(1, 2, 3, 4))

const printName =({name, age})=>{
  console.log(name, age)
}

printName(person)

const {name, age} = person
console.log(name, age)
