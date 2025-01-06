// function multiply(x,y,z){
//     return x*y*z
// }
// function multiply(x){
//     return function(y){
//         return function(z){
//             return x*y*z
//         }
//     }
// }
// let result = multiply(3)(4)(5)
// console.log(result)


//multiply(2)(3)(5)(6)(6)()
function multiply(a){
    let product = a;
    function inner(b){
        if(b === undefined){
            return product;
        }
        product *= b;
        return inner
    }
    return inner;
}
console.log(multiply(2)(3)())
console.log(multiply(2)(3)(4)())
console.log(multiply(2)(3)(4)(4)())