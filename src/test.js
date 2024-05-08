const promise1 = () =>
  new Promise((resolve, reject) => {
    console.log("Promise 1");

    resolve();
  });

const promise2 = () => {
  console.log("Execute promise 2");

  return new Promise((resolve, reject) => {
    console.log("Promise 2");

    promise1().then(() => {
      console.log("Promise 1 resolved");
      resolve();
    });

    console.log("Promise 2 - 1");
  });
};

const promise3 = async () => {
  console.log("Execute promise 3");

  await promise2().then(() => {
    console.log("Promise 2 resolved");
  });

  console.log("Execute promise 3 - 1");
};

console.log("Action 1");
promise3();
console.log("Action 2");
