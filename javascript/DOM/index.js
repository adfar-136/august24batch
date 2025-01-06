function fun(){
    let element = document.getElementById("main")
    element.innerText = "<mark>Hello World</mark>"
    element.title="Heading Tag"
    element.style.color ="red"
    element.style["backgroundColor"] = "pink";
    element.style.fontSize="40px"
    console.dir(element)
}
//background-color:"Red"
// let element = document.getElementById("container")
// console.log(element.innerHTML)
// console.log(element.innerText)
// console.log(element.textContent)

// let ele = document.getElementsByClassName("para")
//        Array.from(ele).forEach((item,index)=>{
//         console.log(item);
//        })

// let ele = document.getElementsByTagName("h1")
       
//       function fun(){
//         for(let i =0;i<ele.length;i++){
//             ele[i].style.color = "red";
//         }
//       }

// let ele = document.getElementsByName("main")
//        ele.forEach((item,index)=>{
//         item.style.backgroundColor="green"
//        })

//class id name combinators, child descendent general sibling, adjacent sibling, pseudo classes, Pseudo elements

// div > p:nth-child(even) + wttrd ~gvchnf