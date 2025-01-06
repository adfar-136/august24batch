let original = {
    name: "John",
    age: 30,
    city : "Srinagar",
    address : {
        street : "Street 1",
        village: "Hajin"
    }
}
let deepCopy = JSON.parse(JSON.stringify(original))
// deepCopy.address.street = "Mumbai";
// console.log(deepCopy)
console.log(original)
console.log(deepCopy === original)
// let shallowCopy = Object.assign({},original)
// // shallowCopy.address.street = "Mumbai"
// // console.log(original)