// let obj = {
//     name: 'John',
//     age:26,
//     salary:'4000',
//     city:"srinagar"
// }
// Object.freeze(obj)
// obj.salary="4.5"
// obj.height = "5.7"
// console.log(obj)

// let obj = {
//     name: 'John',
//     age:26,
//     salary:'4000',
//     city:"srinagar"
// }
// Object.seal(obj)
// obj.salary = "4.5"
// console.log(obj)

let obj = {
    name: 'John',
    age:26,
    salary:'4000',
    city:"srinagar"
}
Object.defineProperty(obj,"height",{
    value:6,
    enumerable:false,
    writable:false
})
console.log(obj.propertyIsEnumerable('height'))
// console.log(obj.height)
// console.log(obj)
// for(let i in obj){
//     console.log(i,obj[i])
// }