const user = {
  name: "Suraj Singh",
  profession: "Software Engineer",
};

const asynchronous = new Promise((res, rej) => {
  let flag = true;
  if (flag) {
    setTimeout(() => {
      user.profession = "Software Engineer";
      res(user); // Resolve with the updated user object
    }, 2000);
  } else {
    rej(new Error("Something went wrong"));
  }
});

asynchronous
  .then((v) => {
    console.log(v, "yes promise is fulfilled");
    v.profession = "Yes, it is the apple"; // Update the user object
    return v; // Return the updated user object
  })
  .then((e) => {
    console.log(e);
    console.log(user); // This will log immediately, before the promise resolves // Log the updated user object
  })
  .catch((err) => {
    console.log("The promise returned the error:", err.message);
  })
  .then(() => {
    console.log("promisse rejected");
  });
