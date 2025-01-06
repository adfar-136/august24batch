class employee{
   constructor(name,age){
     this.name =name;
     this.age =age;
     console.log("parent")
   }
   displayInfo(){
    console.log("age in parent is",this.age)
    console.log("name in parent is",this.name)
   }
}
class manager extends employee{
    constructor(){
        super()
        console.log("sdgfgsd")
    }
   displayInfo(){
    console.log(this.name)
    super.displayInfo()
    console.log(this.age)
   }
}
const s1 = new manager("Adfar",24)
console.log(s1)
console.log(s1.displayInfo())