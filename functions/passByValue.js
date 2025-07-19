let x= 10;
function changeValue(a){
    a+=40;
    console.log('changed value is '+a)
}
changeValue(x)
console.log('the actual value is '+x)
let username = 'priyanka'
function changeUser(){
    console.log(username)
    username = 'ruchima'
    console.log(username)
}
console.log('before calling the function the username is '+username)
console.log('after calling the function')
changeUser(username)
console.log('after the function executed the user is'+username)