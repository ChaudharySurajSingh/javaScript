/*.length: Returns the length (number of characters) of a string. */
let myStr= "Hey There i am a String";
console.log(myStr.length);//23


/*.charAt(index): Returns the character at the specified index. */
console.log(myStr.charAt(0));//h
console.log(myStr.charAt(1));//e
console.log(myStr.charAt(2));//y

/*.substring(start, end): Returns a portion of the string between the specified indices. */

subString= myStr.substring(0,10);//hey there
console.log(subString);

/*.slice(start, end): Similar to substring(), but allows negative indices. */
sliced =myStr.slice(-6);//string
console.log(sliced);


/*.indexOf(substring): Returns the index of the first occurrence of the specified substring, or -1 if not found. */
indexOfSubstring= myStr.indexOf("There");//4
console.log(indexOfSubstring);//4


/*.lastIndexOf(substring): Returns the index of the last occurrence of the specified substring. */
lastindex= myStr.lastIndexOf("There");
console.log(lastindex);

/*.toUpperCase(): converts the string to uppercase */
console.log(myStr.toUpperCase());


/*.tolowerCase(): converts the string to lowercase */
console.log(myStr.toLowerCase()); 

/*.replace(searchValue, newValue): Replaces the first occurrence of searchValue with newValue */
replaced = myStr.replace("Hey","Hi");
console.log(replaced);//Hi There i am a String


/*.split(separator): Splits the string into an array of substrings based on the specified separator. */
console.log(myStr.split(","));



/*String Interpolation with Template Literals:
Template literals (backticks) allow for easy string interpolation, where expressions within ${} are evaluated and embedded within the string */

fName= "Suraj";
console.log("hello", fName);
lName = "Singh";
fullName= fName.concat(lName);
console.log(fullName);
