let username = 'Priyanka'
function changeUser(){
    console.log(username)
    username = 'ruchima'
    console.log(username)
}
console.log('before calling the function the username is '+username)
console.log('after calling the function')
changeUser(username)
console.log('after the function executed the user is'+username)
// the problem is if we access the outer variable inside our function and unintensionaly modify the value of that varable it can cause undedectable errors
//for prevention of that unintentional modifiction we have some tip
// make the outer variable constant *** refer line that give a type error

// make the object for such variables and freeze the object to make read only
let myObj = {name: 'suraj singh' ,id:12511}
Object.freeze(myObj)
function changeuser(){
    myObj.name = 'priyanka'
    console.log(myObj.name)
}
changeuser()
console.log('after calling the function the object is ')
console.log(myObj)
