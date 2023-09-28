/*calling the Date constructor un differnt way */
console.log(Date());//return the current standarad time in the region
console.log("----------------------------------------");
const birthday1 = new Date("nov 2017 1 3:5"); //month should be in the string formate
console.log(birthday1.toString());
const birthday2 = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
console.log("----------------------------------------");
console.log(birthday2.toString());
const birthday3 = new Date(2002,1,2); // the month is 0-indexed and the formate should be (yy mm dd hh mm ss)
console.log("----------------------------------------");
console.log(birthday3.toString());
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
console.log("----------------------------------------");
console.log(birthday4.toString());
const birthday5 = new Date(628021847520880); // passing epoch timestamp
console.log("----------------------------------------");
console.log(birthday5.toString());
