/* Data type is the classification of data according to the value stored in the variable*/
var mystr = "hey there i am a string";
var num = 48758756563;
var BigNum = 84560439825543543456657478687n;
var flag = true;
var undf = undefined; //undefined value
var noValue = null; //null value stored in the variable
Symbol("suraj singh"); //symbol data type
var myObj = {
  name: "suraj singh",
  age: 22,
  profession: "engineerig",
}; //object data type store the data in key value the data can be accessed by using (objectname.key)
var arr = [643274, "suraj singh"]; //in javascript array can store any collection of value
console.log(mystr, "--->", typeof mystr);
console.log(num, "--->", typeof num);
console.log(BigNum, "--->", typeof BigNum);
console.log(flag, "--->", typeof flag);
console.log(undf, "--->", typeof undf);
console.log(noValue, "--->", typeof noValue);
console.log(Symbol, "--->", typeof Symbol);
console.log(
  myObj.name,
  " " + myObj.age + " " + myObj.profession + "--->",
  typeof myObj
);
console.log(arr[0] + arr[1] + "--->", typeof arr);
