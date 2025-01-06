async function greet(){
    return "ADfar Rasheed"
}
greet().then((res)=>{
 console.log(res)
})


function sumFunction(x){
    var a=0;
    if(a == x){
        return function(){
            return x+y;
        }
    }
}
sumFunction(2)(3)(4)()