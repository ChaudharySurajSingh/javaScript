let outerFunction = function () {
  console.log("i am the outer function");
  const Engineer = "Suraj Singh";
  let innerFunc = () => {
    console.log(`${Engineer} is the ginuse Software Engineer`);
  };
  return innerFunc;
};
// outerFunction();
let v = outerFunction();
v();
