let map = new Map();
map.set(1,"one");
map.set("name","SURAJ SINGH");
map.set({},"value associted with object");
// map.forEach((value,key)=>{
//     console.log(`${key}: ${value}`);
// })
function logElement(value, key){
    console.log(`${key}=${value}`);
}
map.forEach(logElement);
//for....of
for (const [key,value] of map) {
    console.log(`${key}=${value}`);
}