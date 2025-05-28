/*concat(arr,arr2,arr3.......arrn):
this method merge all the array that are passed as the argument 
and return the new array with all the element of the argumented array without make any change in the existing array */
let array =["suraj singh","saksham bhatnagar",'sonu sharama','sachin saraswat'];
let array2= Array(1,2,3,4,5,6,7,8,9,10);
let array3= ["one",['two',['three',['four','five']]],'six',['seven']];
let merge= array.concat(array2,array3);
console.log(merge);


/*slice(start,end):this method return the new array of the element of the existing array from starting index but not iclude the last  */
let sliced = array2.slice(5,9);
console.log(sliced);
// but does not make any change into the actual array this array create the shallow copy that mean the driven and the drived array have the same memory reference 
console.log(array2);
//making change in the driven array
array2[7]=4;
console.log(array2);
console.log(sliced);