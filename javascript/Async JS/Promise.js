// var promise = new Promise((resolve,reject)=>{
//    resolve("Data resolve")
// })
// console.log(promise)
// promise.then((result)=>{
//     console.log(result)
// })
console.log("1")
var promise = new Promise((res,rej)=>{
    console.log("2")
    res("Hello")
})
promise.then(()=>{
    console.log("3")
})
console.log("4")