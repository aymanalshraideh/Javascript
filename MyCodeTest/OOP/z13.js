class Cat {
    constructor(name, age) {
        this.name = name;
        
    }
    sayHello(){
        return `Hello ${this.name}`
    }
    sayMeaww=()=>{return `${this.name}: Meawwwwwwwwww `}
}
let user1=new Cat("Caty");
console.log(user1.sayHello());
console.log(user1.sayMeaww());