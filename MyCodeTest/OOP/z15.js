class User {
   constructor(name,email){
       this.name=name;
       this.email=email;
   }
   sayHello(){
       return `Hello ${this.name}`
   }
   showemail(){
       return `You Email is ${this.email}`
   }
   writeMssg(){
       
    return `You are a User`

   }
}

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    adminMssg(){
        return `Welcom Admin ${this.name}`
    }
    writeMssg(){
       
        return `You are a Admin`
    
       }
}

let user1=new Admin("Ayman","sasd@ss.cd");
let user2=new User("Ahmad","sss@ss.dd")
console.log(user1.sayHello())
console.log(user1.adminMssg())
console.log(user1.writeMssg())
console.log(user2.writeMssg())
console.log(user2.sayHello())
// console.log(user2.adminMssg()) Error because he is not Admin