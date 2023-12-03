const myName= 'seungjae'
let age = 20
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
