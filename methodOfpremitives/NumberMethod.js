/*toFixed(numDigits):
This method converts a number to a string, keeping a specified number of decimal places. */

const num = 1446.616416;
console.log(num.toFixed(3));//1446.616
console.log(num.toFixed(1));//1446.6

/*toPrecision(precision):
This method converts a number to a string, with a specified total number of digits */
num2 = 51545;
var precision = 6;
console.log(num2.toPrecision(precision));

/*toString(base) convert a number to a string with a specified base(binary,octol,hexa etc....)*/
var num3 = 510;
console.log(num3.toString(2));//111111110
console.log(num3.toString(8));//776
console.log(num3.toString(16));//1fe
console.log(num3.toString(10));//510