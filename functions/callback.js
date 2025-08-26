//callbaks are the function that can be pass to a function as argument and can be return from a function as value
let register = true

function access(lgn, sgn){
    register? lgn():sgn();
}
function login(){
    console.log('now you are logged in')
}function sign(){
    console.log('you are signed in successfully')
}
access(login, sign)