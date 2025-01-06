// // let arr = [5,3,4,34]
// // let arr2 = [5,6,7,8]
// // let arr3 =[...arr,...arr2];

// // console.log(arr3)
// // //spread => ...
// // //rest => ...
// // // let arr2 = [...arr,"Adfar",4,3]
// // // console.log(arr2)
// // // function add(x,y,z){
// // //     console.log(x+y+z)
// // // }
// // // add(...arr)


// function add(...rest){
//     console.log(typeof rest)
//  let sum = rest.reduce((total,item)=> total+item,0)
//  console.log(sum)
// }

// add(2,3,4,5,34,234,234,234,234,234,23,6,7,8,9,5,6)


// // let [a,b,c,...x] = [1,2,3,4,5,34,32,423,343,4]
// // console.log(a)
// // console.log(b)
// // console.log(c)
// // console.log(x)


let arr = [3,4,5,6,7,8]
for (let i of arr){
    console.log(i)
}
console.log("Adfar")
for(let x in arr){
    console.log(x)
}