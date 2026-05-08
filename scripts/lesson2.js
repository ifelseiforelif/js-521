"use strict";

// console.log("2ds" - 4); //NaN
// console.log("2" + 4); //24
// console.log("2" - 4); //-2
// console.log(typeof NaN);
// console.log("a" - 2 == "a" - 2);
// console.log(typeof ("a" - 2));
// number : числа + NaN
//1) functions declaration
function f1(a, b) {
  let str = "";
  for (let i = 0; i < arguments.length; i++) {
    str += arguments[i] + " ";
  }
  console.log(str);
}
f1(2, 3, 4);
f1(7, 8);

//2) functions expressions
let f2 = function (a, b) {
  return a + b;
};
console.log(f2(2, 3));
//3) arrow functions (немає arguments)
let f3 = (a) => a * a;
console.log(f3(3));

/*
+ - = += -= / /= * *= % > < >= <= ==  === != !==
while, do while, for
switch
if(){} else if() {} else{}
    && ||
(умова)? _ (true): _(false)
*/
// loop1: for (let i = 0; i < 5; i++) {
//   loop2: for (let j = 0; j < 5; j++) {
//     for (let k = 0; k < 5; k++) {
//       console.log(k);
//       if (k == 3) {
//         break loop1;
//       }
//     }
//   }
// }
const arr = [4, 2, 7];
const arr2 = new Array();
arr.push(3); //4 2 7 3
arr.pop(); //3   4 2 7
console.log(arr);
console.log(arr.shift()); //
console.log(arr);
arr.unshift(12);

const arr3 = arr;
arr3[0] = 90;
console.log(arr);
//arr.length
// O(1), O(n)
//Вставити елемент на початок масива за O(1)

function f4(arr) {
  //O(n)
  for (let i = 0; i < arr.length; i++) {}
}

const arr4 = [4, 6, 8];
function my_push(arr, value) {
  let v = arr[0];
  arr[0] = value;
  arr.push(v);
}
my_push(arr4, 30);
console.log(arr4);

function base(text) {
  let i = 0;
  return () => {
    console.log(text);
    console.log(i++);
  };
}

let c1 = base("c1");
let c2 = base("c2");

c1();
c2();
c1();
c2();
c1();
c2();
