/*Optional chaining:represented by the ' ?. '  syntax, is a feature introduced in ECMAScript 2020 (also known as ES11) and is supported by modern JavaScript environments. It provides a concise way to access properties or call methods on an object without worrying about whether intermediate values are null or undefined. 



The traditional way to access nested properties or call methods on an object is to use the dot notation, like 'object.property.method()'. However, if any intermediate property in the chain is null or undefined, an error will be thrown, often resulting in a runtime exception. This can be problematic when dealing with complex object structures or data that might be missing certain properties.


Optional chaining solves this problem by short-circuiting the evaluation if any intermediate property in the chain is null or undefined. When you use the ' ?. '  operator, it checks if the value before the ' ?. ' is nullish (null or undefined). If it is, the expression returns undefined immediately, without evaluating the rest of the chain.*/

// eg.
let intro={
    user:"suraj singh",
    age:21,
    skill:{
        language:['c++','java','pyhton','javaScript'],
        database:['MySQL','oracal','mongoDb']
    },
    job:()=>{
        console.log("hey there i am software engineer");
    }
}

// accessing the property with optional chaining '?.'
console.log(intro.user);
console.log(intro.skill.experience);//'undefined'accessing nested property (javascript not throw error upto 3rd nesting)
console.log(intro.skill.language?.[6]);//accessing nested property that is not exist but not cause any error but  return ' undefined '
console.log(intro.post?.());//accessing method that is not exist 




//// accessing the property without optional chaining '?.' now access the property that is not exist
console.log(intro.user.experience?.year);//cause an error
console.log(intro.ron?.skill.language?.[6]);//accessing the index element of the array property that is not exist