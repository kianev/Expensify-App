const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    /*resolve({
      name: "pesho",
      age: 33
    });*/
    reject('something went wrong');
  }, 3000);
})

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

console.log('after');