const weakMap = new WeakMap();

let key1 = { id: 1 };
let key2 = { id: 2 };
let key3 = { id: 3 };

weakMap.set(key1, 'Value associated with key1');
weakMap.set(key2, 'Value associated with key2');

console.log(weakMap.has(key1));  // Output: true
console.log(weakMap.get(key2));  // Output: 'Value associated with key2'

// Remove key1 reference
key1 = null;

// At this point, key1 is no longer needed and is eligible for garbage collection.
// Since key1 was the only reference to the first entry, it will be removed from the WeakMap.
// key2 is still in the WeakMap because it's being referenced elsewhere.
console.log(weakMap.get(key1));