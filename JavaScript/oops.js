// let obj={
//     a:1,
//     b: "Harry"
// }
// console.log(obj)

// let animal={
//     eats:true
// }

// let rabbit={
//     jumps:true
// }
// rabbit.__proto__=animal  //sets rabbit.[[Prototype]]= animal

//prototype is also an object which helps in adding some additional properties to an object

class Animal{
    constructor(name){
        this.name= name
        console.log("object is created...")
    }
    eats(){
        console.log("kha raha hoon")
    }
    jumps(){
        console.log("kood raha hoon")
    }
}

class Lion extends Animal{
    constructor(name){
        super(name)   //super se animal ka constructor call hoga
        console.log("object is created and he is a lion...")
    }
    eats(){            //method overriding
        super.eats()   //isse purana aur naya dono likhe aaenge
        console.log("kha raha hoon roar")
    }

}

let a = new Animal("Bunny")
console.log(a)

let l= new Lion("Shera")
console.log(l)

l instanceof Lion  //true
l instanceof Animal //true
a instanceof Lion //false
a instanceof Animal //true

//static keyword, seetters and getters: notes