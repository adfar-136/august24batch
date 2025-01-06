// const user1 = {
//     firstname: 'John',
//     lastname:"smith",
//     age: 30,
//     getFullname:function(){
//         return user1.firstname + " " +user1.lastname
//     },
//     getAge:function(){
//         return new Date().getFullYear()-user1.age
//     }
// }
// const user2 = {
//     firstname: 'Adfar',
//     lastname:"Rasheed",
//     age: 26,
//     getFullname:function(){
//         return user1.firstname + " " +user1.lastname
//     },
//     getAge:function(){
//         return new Date().getFullYear()-user1.age
//     }
// }
//factory function;
// function createuser(firstname,lastname,age){
//     return {
//         firstname:firstname,
//         lastname:lastname,
//         age:age,
//         getFullname:function(){
//             return this.firstname + " " +this.lastname
//         },
//         getAge:function(){
//             return new Date().getFullYear()-this.age
//         }
//     }
// }
// const user1 = createuser("Johnn","smith",30)
// const user2 = createuser("Adfar","Rasheed",26)

// var arr = [1,2,3,4,5,6]
// var arr2 = [3,4,5,6,7,8,9]


// function getFullname(){
//     return this.firstname + " " + this.lastname
// }
// function getAge(){
//     return new Date().getFullYear()-this.age
// }
// function createuser(firstname,lastname,age){
//     return {
//         firstname:firstname,
//         lastname:lastname,
//         age:age,
//         getFullname:getFullname,
//         getAge:getAge
//     }
// }
// const user1 = createuser("Johnn","smith",30)
// const user2 = createuser("Adfar","Rasheed",26)



// function createuser(firstname,lastname,age){
//     return {
//         firstname:firstname,
//         lastname:lastname,
//         age:age,
//         getFullname:createuser.commonmethods.getFullname,
//         getAge:createuser.commonmethods.getAge
//     }
// }
// createuser.commonmethods = {
//     getFullname:function(){
//         return this.firstname + " " + this.lastname
//     },
//     getAge:function(){
//         return new Date().getFullYear()-this.age
//     }
// }

// const user1 = createuser("Johnn","smith",30)
// const user2 = createuser("Adfar","Rasheed",26)
//constructors
// function greet(firstName,lastName,age){
//     this.firstName = firstName;
//     this.lastName= lastName;
//     this.age= age;
// }
// greet.prototype.getFullname = function(){
//     return this.firstName + " " + this.lastName

// }
// greet.prototype.getAge=function(){
//     return new Date().getFullYear()-this.age
// }
// const user1 = new greet("Adfar","Rasheed",26);
// const user2 = new greet("Anil","Vatsha",22);

class createUser{
    constructor(firstName,lastName,age){
        console.log("adfar")
        this.firstName =firstName;
        this.lastName=lastName;
        this.age=age;
    }
    getFullname(){
        return this.firstName + " " + this.lastName
    }
    getAge(){
        return new Date().getFullYear()-this.age
    }
}
const user1 = new createUser("Adfar","Rasheed",26)
const user2 = new createUser("John","Smith",65)