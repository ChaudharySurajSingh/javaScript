let obj={
    profile:'Software Engineer',
    age:21,
    sallary:250250,
}
let a = [1,2,3,4,5]
const func= ({profile, sallary})=>{
    console.log(`you are ${profile} and you get a good pay of ${sallary}`)
}
function arrFunc([, first, , third]){
    console.log(`the value at first index is ${first} and the value at third index is ${third}`)
}
func(obj)
arrFunc(a)