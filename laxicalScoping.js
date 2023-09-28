/*laxical scoping is also known as static scoping is the concept of javascript tht define how variable and function are determind at runtime*/
// function testing() {
//     var x=2;
//     let y=7;
//     return x+y;
// }
// console.log(testing());

// // accesing the variable declared with var keyword outside the  block of a function
// console.log(x);
// console.log(y);
{
    let y=2;
    var x=5;
    const z=10;
}

console.log(x);
console.log(y);
console.log(z);
