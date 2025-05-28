/*he JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified. */
let object = {
    age: 21,
    name: "suraj singh",
    profession: 'full stack software developer',
    skill: ['ethical hacking', 'cyber security', 'c++', 938977045],
}
//replacer function alter the behavior of the stringification process
jsonString = JSON.stringify(object, (key, value) => {
    if (key === 'name') {
        return "Ruchima chaudhary";
    }
    if (Array.isArray(value)) {
        return value.map((element, index) => {
            if (index === 0) {
                return "data science and engineering";
            }
            if (index === 3) {
                return 7302413772;
            }
            return element;
        });
    }
    return value;
});
console.log(object);
console.log(jsonString);
console.log(JSON.parse(jsonString, (key, value) => {
    if (key == 'age') {
        return value - 2;
    }
    return value;
}));
//replacer as a array 
let arrayString = JSON.stringify(object, ['name','skill']);
console.log(arrayString);