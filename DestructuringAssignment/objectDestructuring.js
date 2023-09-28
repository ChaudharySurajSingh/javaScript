let object= {
    fname:"suraj",
    lname:"Singh",
    age:21,
    prof:"Engineering",
    major:"Software Engineering",
    address: {
        city: 'New York',
        postalCode: '10001'
    },
    arr:[1,2,3,4,5,6,7,8,9]
}
let {fname,lname,age,address:{postalCode},arr:[a,,,,,c]}= object;
console.log(fname,lname,age,postalCode,a,c);
