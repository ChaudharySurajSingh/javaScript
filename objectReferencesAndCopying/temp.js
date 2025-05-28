let obj={
    name:'suraj singh',
    age:21,
    skill:['java','python','fullstack web development','data science'],
    post:{
        role:"software engineering"
    }
}
// let cop= Object.assign({},obj);
let cop={...obj};
console.log('***************');
console.log(cop);
// making change in primitive
cop.age=25;
console.log('***************');
console.log(obj);
console.log('***************');
console.log(cop);
// making change in the non primitive
cop.skill[1]="C++";
obj.post.comapny="google",
    console.log('***************');
console.log(obj);
console.log('***************');
console.log(cop);
// defining another property in the original object that should not reflect in the cloned object
obj.education=[10,12,"b.tech"]
console.log('***************');
console.log(obj);
console.log('***************');
console.log(cop);
//adding another field in the existing prop befor cloning
obj.skill[0]="javaScript";
console.log(obj);
console.log(cop);