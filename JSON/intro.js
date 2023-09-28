let obj={
    name:"suraj singh",
    password:"suraj@Cs89",
    num:4,
    age:21,
    profession:"Software Engineering",
    skill:["java","python","c++",938977045],
    greet:()=>{
        console.log("hey there how are you");//the functional property are not converet into the json string
    },
    ignorable:undefined,//undefined value are also ignored
    ignorable1:null, 
    ignorable2:NaN, //NaN also ignored by the json stringify method 
};
let json= JSON.stringify(obj);
console.log(json);
//JSON.parse():convert the JSON string to the javascript object
jsonconverted= JSON.parse(json,(key,value)=>{
    if (key === 'password') {
        return undefined;
    }
    if (key === 'num') {
        return value*2;
    }
    if (key === 'password') {
        return undefined;
    }
    if (Array.isArray(value)) {
        return value.map((item,index) => {
            if (index == 0) {
                // Modify the first elements
                return "ethical hacking";
            }
            if (index ===1) {
                // Modify the first elements
                return "cyber security";
            }
            return item;  // Keep the rest unchanged
        });
    }
    if (key==='profession') {
        return "full stack software developer";
        
    }
    if (key === 'ignorable') {
        return "i am ignored";
    }
    return value;
    
});
console.log(jsonconverted);