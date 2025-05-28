let promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task complete");
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log("promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("task two complete");
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise 2 consumed");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async three consumed");
    resolve({ username: "suraj singh", email: "example.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false; // Set error to false to make the promise resolve
    if (!error) {
      resolve({ username: "john doe", email: "example.com" });
    } else {
      reject("error: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("promise is either resole and rejected");
  });

const promisefive = new Promise((res, rej) => {
  setTimeout(() => {
    flag = false;
    flag
      ? rej({ fullfilled: true, Status: "success" })
      : rej({ fullfilled: false, Status: "failled" });
  }, 2000);
});
const consumeFive = async () => {
  try {
    const respose = await promisefive;
    console.log(respose);
  } catch (error) {
    console.log(error);
  }
};
consumeFive();
const promise = new Promise((resolve, reject) => {
  let test = true;
  if (test) {
    setTimeout(() => {
      console.log("hey promise is resolved");
      resolve({
        name: "suraj singh",
        profession: "software developer",
        age: 21,
      });
    }, 2000);
  } else {
    reject(new Error("oops! something went wrong\n"));
  }
})
  .then(
    (data) => {
      console.log("promise has successfully resolved");
      return (data.profession = "Senior software Engineer");
    },
    (err) => {
      console.log(err.message, " promise rejected");
    }
  )
  .then((val) => {
    console.log(`now you are a ${val}`);
  });
