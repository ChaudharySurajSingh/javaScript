/*a class member by default public but we can create the private memmber using `#` prefix */
class Private{
     #name
     #age
    constructor(name,age){
        this.#name=name;//assigining to a private member
        this.#age= age;
    }
    test(){
        console.log(`hey there i am ${this.#name} my age is ${this.#age}`);
    }
}
let obj= new Private("suraj singh",20);
console.log(obj.age);
obj.test();
