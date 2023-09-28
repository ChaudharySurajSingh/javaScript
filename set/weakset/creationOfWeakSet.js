/*Weskset constructor is used to create a weakset */

let weakset = new WeakSet();
let obj1={id:1234587};
let obj2={id:1784587};
let obj3={id:1248587};
let obj4={id:1014587};
let obj5={id:1144587};
weakset.add(obj1).add(obj2).add(obj3).add(obj4).add(obj5);

//checking  if the object/ value is present in the weakset
console.log(weakset.has(obj1));//true
console.log(weakset);
//deleting the object from the weakset
weakset.delete(obj1);
//again checking
console.log(weakset.has(obj1));//false
console.log(weakset.has(obj2));//true

//destroy the liftime of the object
let ref = obj2;
console.log(ref);
obj2=null;
console.log(weakset.has(obj2));