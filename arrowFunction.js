let func =  ()=>{
    console.log(this.name);
}
function func1() {
    console.log(this.name);//arrow function does not support this keyword 
}
let intro= {
    name:"suraj singh"
}
func.call(intro);
func1.call(intro);
//arrow function does not support the arguments keyword
function test(){
    for (let index = 0; index < arguments.length; index++) {
        console.log(arguments[index]);
    }
}
test(1,2,3,4,5,6,7,8,9,1);
// let test1= ()=>{
//     for (let index = 0; index < arguments.length; index++) {
//         console.log(arguments[index]);
//     }
// }
// test1(1,2,3,4,5,6)
console.log("---------------------------------------------");
let test3 = (...arg)=>{
    console.log(arg);
}
test3(1,2,3,4,5,6,"suraj singh")