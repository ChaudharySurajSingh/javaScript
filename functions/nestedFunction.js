function outer(){
    console.log('hey there i am outer function')
    function inner(){
        console.log('hey there i am inner function')
    }
    inner()
}
outer()