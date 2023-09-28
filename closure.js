let greet = "hey there i am suraj singh";
function outer() {
    console.log(greet);
    let name = "suraj singh"
    function displayname () {
        let gr= "i am another variable";
        console.log(name);
    }
    function another(){
        console.log(gr);
    }
    displayname();
    another();

}
outer();