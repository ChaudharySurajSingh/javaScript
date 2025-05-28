class myClass{
    constructor(name,age,email,password){
        this.name=name;
        this.age=age;
        this.email=email;
        this.password=password;
    }
     intro= ()=>{
        console.log(`hey there i am ${this.name} my age is ${this.age} and my email is ${this.email} my password is ${this.password}`);
    }
}
let obj = new myClass("suraj singh", 20, 'suraj@gmail.com',215478);
obj.intro();
