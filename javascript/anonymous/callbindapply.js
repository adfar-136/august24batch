let student = {
    firstName : "Adfar",
    lastName:"rasheed",
    age:26,
    
}
let teacher = {
    firstName : "Govind",
    lastName : "Lohar",
    age:24
}
function sayName(x,y){
    return this.firstName +" please subscribe " + this.lastName
}
// console.log(sayName.call(teacher,"Variabe","Verse"))
// console.log(sayName.apply(teacher,["Variabe","Verse"]))
let binddd = sayName.bind(teacher)
console.log(binddd())
// console.log(student.sayName())
// console.log(student.sayName.call(teacher))