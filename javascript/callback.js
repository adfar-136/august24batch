// function add(x,y){
//     x()
//     y()
//     console.log(y)
// }
// function greet(){
//     console.log("Hello")
// }
// function bye(){
//     console.log("Bye")
// }
// add(greet,bye)
// add(()=>{
//   console.log("Hey ")
// },()=>{
//     console.log("Hi")
// })
// add(greet,5)
// add(function(){
//     console.log("World")
// },67)

function add(){
    return function(){
        return function(){
            console.log("Hello")
            return "VariableVerse"
        }
    }
}
console.log(add()()())