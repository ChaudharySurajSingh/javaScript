var str = "Suraj Singh";
/*length:
Returns the length of the string */

console.log(str.length);
//toUpperCase():
//This method converts the string to uppercase.
console.log(str.toUpperCase());//SURAJ SINGH

/*toLowerCase():
This method converts the string to lowercase. */
console.log(str.toLowerCase());//suraj singh

/*charAt(index):
This method returns the character at the specified index in the string. */
console.log(str.charAt(3));//s

/*indexOf(searchValue, fromIndex):
This method returns the index of the first occurrence of the specified search value in the string. You can also specify the fromIndex parameter to start the search from a specific position. */
console.log(str.indexOf("S"));
console.log(str.indexOf("S",5));//start searching from 5th index

/*substring(startIndex, endIndex):
This method returns a new substring from the specified startIndex (inclusive) to the endIndex  */
console.log(str.substring(5,8));//makiing the substring from 5th to 8th index

/*split(separator):
This method splits the string into an array of substrings based on the specified separator. */
console.log(str.split(","));
/*charCodeAt(index):
return the ASCII code of the charactor that is present at the specified index */
console.log(str.charCodeAt(3));
