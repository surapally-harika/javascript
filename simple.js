// console.log("A" - 1);
// console.log("Harika" + "100");
// console.log('2' + 2 + '2');
// console.log('2' + 2 - '2');
// const a = {};
// const b = {
//     name: "harika"
// }

// const c = {
//   name: "hari"
// }

// const d = {
//   name: "kari"
// }
// a[b] = {
//     name:"hani"
// }

// a[c] = {
//     name:"hara"
// }

// a[d] = {
//     name:"har"
// }
// console.log(a[b]);

// const x = 0;
// const y = false;
// console.log(x == y);
// console.log(x === y); 
  

function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);
