// Task 1
//      for (let i = 1; i <= 10; i++) {
//          alert(`Число ${i}!`);
//      }
let i = 1
while  (i<=10) {
    alert(`Число ${i}!`);
    i++
}


// Task 2.1
let usersName = ['Alex', 'John','', 'David', 'Samuel']

for (let user of usersName){
    if(user === ''){ break; }
    else console.log(user)
 }
console.log()

// Task 2.2
for (let user of usersName){
   if(user === ''){ continue; }
   else console.log(user)
}


// Task 3
let users = [
    {name: 'Вася', age: 18},
    {name: 'Петя', age: 20},
    {name: 'Саша', age: 17},
]

for(let user of users){
    alert(`This is ${user.name}, and he is ${user.age}`)
}
console.log()

// Task 4
let nameLine = 'Вася, Петя, Надя, Даша, Аня'
let nameArray = nameLine.split(', ')
nameArray.forEach( _ => {
    console.log(_)
});


// Task 5
let usersBase = [
    {name: 'User1', lastName: 'Ipsum1', age: 18, isActive: true},
    {name: 'User2', lastName: 'Ipsum2', age: 19, isActive: false},
    {name: 'User3', lastName: 'Ipsum3', age: 21, isActive: true},
    {name: 'User4', lastName: 'Ipsum4', age: 22, isActive: false},
    {name: 'User5', lastName: 'Ipsum5', age: 30, isActive: true}
]
let activeCount = 0
usersBase.forEach( user => {
    if (user.isActive) { activeCount++ } 
})
alert(`We have  ${activeCount} active users right now`)

