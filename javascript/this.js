console.log(this)
let obj = {
    name :"Adfar",
    age:26,
    city:"Srinagar",
    getDoy:function (){
        return 2024-this.age
    },
    street:{
        village:"Hajin",
        state:"Jammu and Kashmir",
        printt:()=>{
            console.log(this)
        }
    }
}
console.log(obj.street.printt())
