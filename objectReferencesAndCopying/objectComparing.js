/* two object are equal if and only if they refer the same memory location */
let object1 ={
name:"suraj singh",
profession:"Engineering",
age:22,
status:"false"
};
let object2 ={
    name: "ruchima singh",
    profession: "Engineering",
    age: 22,
    sallery:64646
}
console.log(object1==object2);// false even both object have same properties (but have a different memory lacation)
console.log(object1);
Object.assign(object1,object2);//object copy to any existing object only consider the diffrence
console.log(object1);

let object3 = object1;//referencing object1 to another object

console.log(object1===object3);// true because object1 and object3 refrencing the same memory location
object1.role= "Full Stack System Engineer";//making change in object1
console.log(object1,object3)// true because change also reflect in referenced object

//but change not refelect after refrence in case of cloning because both object refer different memory location 

let object4 = Object.assign({},object1);//cloning object1 to object4
console.log(object4==object1);//false because both object refer diffrent memory location
object4.major="Computer Science and Engineering";//making change in object4
console.log(object1,object4);//change in object4 does not reflect in object1 or vice versa


