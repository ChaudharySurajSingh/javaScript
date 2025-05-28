/* object In JavaScript, an object is a fundamental data type that allows to store and manipulate collections of key-value pairs. It is a versatile and powerful feature of the language that enables you to represent complex data structures and define custom behaviors. */
// let myobj ={
//     person:"suraj singh",profession:"software engineer",skill:["javascript","java",'c++','python','html','css','c','MySQL','mongoDB','android','kotlin'],age:21,netWorth:'250cr'
// }//declaration of object
// //we can access the data of the object by '.' operator or []
// console.log(myobj.person);//suraj singh
// console.log(myobj['person']);//suraj singh
// for (const key in myobj) {
//         const element = myobj[key];
//         console.log(key+" "+element);
// }
let symbol= Symbol('key1');
let source= {
    [symbol]:"hey there i am a symbol property",
    name:"suraj singh",
    age:21,
    profession:'Engineering',
    obj:{
        obj2:{
            nested:"hey there i am nested property"
        }
    },
    greet:()=>{
        console.log(`hey there i am ${this.name} my age is ${this.age}  my profession is ${this.profession}`);
    }
}
let dest ={
    name1: "priyanka singh",
    age1: 20,
    profession1: 'Engineering',
    greet1: () => {
        console.log(`hey there i am ${this.name} my age is ${this.age}  my profession is ${this.profession}`);
    }
}
// console.log(source);
// console.log('---------------');
// let common = Object.assign(source,dest)
// console.log(common);
// console.log(source);
// console.log(dest);
// console.log('---------------------------');
// console.log(source);
console.log(source);
let common = Object.assign({},source, dest)
console.log(common);
console.log(source);
console.log(dest);
// making change in the property of comman 
common.obj.obj2.key= 'i am key';
console.log('------------------');
console.log(source);
console.log(common);