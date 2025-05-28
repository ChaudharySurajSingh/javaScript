/* Object Copying:
To create an independent copy of an object in JavaScript we need to perform a deep copy.
A deep copy creates a new object with the same values as the original object but does not maintain the reference to the original object. */
let object1 = new Object();
object1.name = "suraj singh";
object1.profession = "Engineering";
object1.age = 22;

//Using the spread operator (for shallow copies):

const object2 = { ...object1 } // object2 is a shallow copy of object1
object1.name="ruchima";// making change in the object1 property 
console.log(object2.name);// o/p: suraj singh (change does not reflect in object2) becouse we make the change after cloning

//Using the Object.assign() method (for shallow copies)

const object3= Object.assign({},object1);//object3 is the shallow copy of object1
object3.name= 'raftaar singh';//making change to the existing property
console.log(object1.name);// o/p: ruchima (change does not reflect in object1) becouse we make the change after cloning

//Using a library or utility function (for deep copies):
function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const object4= deepCopy(object2)//object4 is shallow copy of object2
object4.age=20;
console.log(object2.age);// o/p: 22 (change does not reflect in object2) becouse we make the change after //
// tryto making change in nested property and use the assign() method
let OrgObj={
    name:"suraj singh"
}
let CopObj= Object.assign({},OrgObj);
console.log(OrgObj.name);
// making change in the copied object
OrgObj.name= "ruchima";
console.log(OrgObj.name);
console.log(CopObj.name);
//adding another property in orginal object
OrgObj.age=21;
console.log(CopObj);
console.log(OrgObj);
// making  3rd step nesting property in orginal object
OrgObj.prop2={
    skill:["java",'c++','full stack developer'],
    role:{
        first:"data science",
        post:{
            a:'full stack data science',
            c:{
            
            }
        }
    }
}

console.log('--------------');
console.log(OrgObj);
console.log('------------');
console.log(CopObj);
// making another object
let copObj2= Object.assign({},OrgObj);
console.log(copObj2);
//accessing the nested property
copObj2.prop2.role.post.c.d="full stack web development";
console.log('**********************');
console.log(OrgObj.prop2);
console.log(copObj2.prop2);
console.log(CopObj);
OrgObj.prop3 = {
    skill: ["javaScript", 'c++', 'full stack developer'],
    role: {
        first: "data science",
        post: {
            a: 'full stack data science',
            c: {

            }
        }
    }
}
console.log('***********');
console.log(OrgObj.prop3);
console.log(copObj2.prop3);
