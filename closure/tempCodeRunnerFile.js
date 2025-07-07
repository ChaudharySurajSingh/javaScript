function counter(x) {
    function inner() {
        return x++;
    }
    return inner; // return the function, not its result
}

const count = counter(1);
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
console.log('nfjdfnjdnfj')