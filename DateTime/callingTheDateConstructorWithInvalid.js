/*if we call the date constructor by Passing a non-Date, non-string, non-number value it will coeherce and then converted to primeitive and then checked for a date */

let date = new Date(undefined)
// console.log(date.toString());//invalid date
// console.log(new Date(null).toString());
console.log(new  Date("10/11").toString());
;