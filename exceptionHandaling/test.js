let user = {
  name: "Suraj Singh",
  age: 21,
  profession: "Software Engineer",
  cont: 9389777045,
};

// Convert the 'user' object to a JSON string
let data = JSON.stringify(user);
console.log(data);

try {
  // Attempt to parse the JSON string back into an object
  let info = JSON.parse(data);

  if (!info.education) {
    throw new Error("unsuficient information");
  } else {
    console.log(info.education);
  }
} catch {
  console.log("i have deleted the error object");
}
