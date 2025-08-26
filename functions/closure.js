//a closure is the function that can retain access to its lexical environment even it execute outside of its scope
function counter(){
    let count = 0;
    return ()=>{
        count++;
        return count;
    }
}
let inc = counter();

console.log(inc())
console.log(inc())