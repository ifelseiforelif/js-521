"use strict";
// function f1(el) {
//   if (el % 2 == 0) {
//     return 1;
//   }
//   return 0;
// }

// const arr = [1, 2, 4, 6, 8, 4];
// //const arr2 = arr.map(f1);
// //console.log(arr2);
// const arr2 = arr.filter((el) => {
//   return el > 3; //true/false
// });
// console.log(arr2);
// console.log(arr);

// const fruits = ["lemon", "banana", "lime", "apple", "mango"];
// const sorted = fruits.sort();
// console.log(sorted);
// console.log(fruits);
// const numbers = [90, 9, 1, 5, 3, 200, 20];
// numbers.sort((a, b) => b - a);
// console.log(numbers);
//написати сортування рядків за розміром (від меньшого до більшого)
//використати метод sort

/*
Створити масив рядків, зберігти туда назви країн
Створити на базі цього масива новий, який буде містити
лише країни, назви яких починаються з A та B
Дізнатись чи є в цьому масиві Austria 
*/

const user = {
  name: "Alex",
  age: 30,
  show: function () {
    console.log(`${this.name} ${this.age}`);
  },
  address: { street: "new street" },
};

setTimeout(() => {
  user.show();
}, 2000);
console.log("Bye");

// setInterval(() => {}, interval);
//const user2 = { ...user }; //деструктурізація об'єкта
// const user2 = structuredClone(user);
// user2.address.street = "street2";
// console.table(user.address);
// user.show();
//Object.freeze(user);
//Object.seal(user);
//Object.preventExtensions(user);
// user.name = "Bob";

// // const a = "age";
// // user.name = "Bob";
// // user[a] = 31;
// user.country = "Ukraine";
// // delete user.age;
// console.table(user);
