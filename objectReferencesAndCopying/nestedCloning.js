/*in cloning we assume that all the properties of the object are premitive
but a property may be non primitive (array ,object) then the change in non primitive properties also refelect in cloned and cloning object that cause unexpected error */
let object1={
    person:"Suraj Singh",age:21,profession:"Engineering",
    skill:{
        language:['python','java','c++',"javaScript",'node.js'],
        database:['oracal','MySQL']
    }
}
let object2=Object.assign({},object1)//cloning/copying object1 to object2

console.log(object1.size===object2.size);//true because both have same number property
object2.skill.experience='1 YEAR'//making change in nested property of object2
console.log("------ ordenery cloning ------");
console.log(object1,object2);//change also reflect in object1 like referecing (it cause unexpected error)
console.log(object1.size === object2.size);// even the size also remain same
// TO AVOID IT WE MUST HAVE TO DO STRUCTURED CLONING/COPYING

/*The 'structuredClone()' method can clone most data types, such as objects, arrays, primitive values.
It also supports circular references, when an object property references the object itself (directly or via a chain or references). */
console.log("------ structured cloning ------");
let object3=structuredClone(object2);
//making change in the nested property of object3
object3.skill.experience="2 year"
console.log(object2,object3);//change does not refelect 
