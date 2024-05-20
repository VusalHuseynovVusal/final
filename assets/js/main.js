// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
// xhr.send();

// let check = 1;
// const promise = new Promise((resolve, reject) => {
//   if (check) {
//     resolve("Promise is successfully");
//   } else {
//     reject("Promise is rejected");
//   }
// });
// promise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("done"));

// function getData(url) {
//   let promise = fetch(url);
//   return promise
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// console.log(getData("https://jsonplaceholder.typicode.com/posts"));
