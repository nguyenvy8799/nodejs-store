// /**
//  * Promise
//  *  -> Bat dau 1 Promise duoc khoi tao: state => PENDING
//  *  -> Sau khi xu ly xong & tra du lieu: state => FULLFILLED
//  *  -> Khi co loi xay ra: state => REJECTED
//  */

// const fetchData = (status) =>
//   new Promise((resolve, reject) => {
//     console.log("Fetch data");
//     const data = "abc";

//     if (status) {
//       resolve(data); // -> Promise state => FULLFILLED
//     } else {
//       reject("Loi roi");
//     }
//   });

// console.log("Action 1");

// fetchData(false)
//   .then((data) => {})
//   .catch((err) => {});
// // fetch data -> Action on data
// const promise1 = fetchData(false).then(
//   (data) => {
//     console.log("Data: ", data);
//     return "hello";
//   },
//   (err) => {
//     console.error("Loi: ", err);
//     return "Hi";
//   }
// );
// console.log("promise 1: ", promise1);
// promise1
//   .then((data) => {
//     console.log("data 1: ", data);
//   })
//   .catch((err) => {});

// console.log("Action 2");

// const fetchData1 = Promise.resolve("10");
// const fetchData2 = Promise.reject("Loi 1");

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     // code here to handle data

//     resolve("Hello");
//     reject("Error");
//   });
// };

const fetchData = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};

function main() {
  console.log("Action 1");
  let data = 10;
  fetchData().then((res) => {
    data = res;
  });
  console.log("Data: ", data);
}

main();

// fetchData()
//   .then((data) => {
//     console.log("Data:", data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
