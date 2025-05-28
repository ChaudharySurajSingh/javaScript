/*call() methode of the function instance call this function  with this value and argument indivisualy */
// let intro={
//     name:"suraj singh",
//     age:21,
//     profession:"Software Engineer",
//     major:"computer science and engineering"
// }
// function printIntro(){
//     console.log("hey there i am:"+this.name+"\nmy age is:"+this.age+'\nmy profeesion is:'+this.age+"\nmy background is:"+this.major);
// }
// printIntro.call(intro);
// function intro2(name,age,profeesion,major){
//     this.name=name;
//     this.age=age;
//     this.profeesion=profeesion;
//     this.major=major
// }
// let test= new intro2("riya",20,"Software Engineer","Computer Science");
// printIntro.call(test);
// function increse(val){
//     return val+1;
// }

// let array= [1,2,3,4,5,6,7,8,9];
// console.log(increse.apply(array));
// const obj1 = {
//     value: 42
// };

// const obj2 = {
//     value1: 100
// };

// function getValue() {
//     return this.value;
// }

// console.log(getValue.call(obj1)); // Outputs: 42
// console.log(getValue.call(obj2)); // Outputs: 100
// function greet(greeting) {
//     return greeting + ', ' + this.firstName;
// }

// const person = {
//     firstName: 'Alice'
// };

// console.log(greet.call(person, 'Hello')); // Outputs: Hello, Alice

// let obj= {
//     name:"suraj singh",
//     prof:"Software Engineer",
//     greet:(name)=>{
//         console.log("hey there i am "+name+" how are you"+" my profession is ");
//     }
// }
// function intro(name){
//     console.log("hello there i am "+name+" how are you");
//     obj.greet.call("priya");
   
// }
// intro("rohit");
function greet(greeting,profession){
    console.log(greeting+" there i am "+this.name+" my profession is "+profession);
}
let obj={
    name:"suraj singh",
    prof:"Software Engineering"
}
greet.apply(obj,["good morning","Software Engineering"]);

let func= ()=>{
    console.log(this.name);
}
func.call(obj);