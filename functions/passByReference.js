let obj={
    name:'suraj',
    age:21,
    designation:'software Engineer'
}

function changeKey(objc){
    objc.name = 'Priyanka'
    console.log(`the changed value of the object is ${objc.name}`)
}
console.log(`the actual value of object before calling the function is ${obj.name}`)
changeKey(obj)
console.log(`the actual value of object after calling the function is ${obj.name}`)