// function f1() {
//   console.log("1");
// }
// function f2() {
//   let a = 0;
//   for (let i = 0; i < 5e7; i++) {
//     a++;
//   }
//   console.log(a);
// }

// setTimeout(() => {
//   console.log("3");
// }, 0);
// f1();
// f2();

// function f3() {
//   console.log("func f3");
// }
// function f2() {
//   console.log("func f2");
//   f3();
// }
// function f1() {
//   console.log("func f1");
//   f2();
// }
// f1();

//Регулярні вирази RegExp - Regular Expression
// let template = /^\S+@\S+\.\S+$/;
// console.log(template.test("bob@gmail.com"));

// console.log("he l  lo world".replace(/\s/g, "*"));
// let template = new RegExp("\s+");
//Запитайте у користувача номер телефона
//через prompt і перевірте що він відповідає регулярному виразу
//+3цифри(двіцифри)-2цифри-3цифри-700
//якщо відповідає виведіть повідомлення Success
//інакше повідомлення про помилку та запитайте знову

//Error
// function f1() {
//   throw new Error("My error");
// }

// try {
//   f1();
// } catch (error) {
//   console.log(error);
// }
//ООП

import User from "./User.js";
const user = new User("bob", 20);
const user2 = new User("alex", 20);
const user3 = new User("john", 20);
// const p = document.querySelector("p");
// //const p = document.getElementById("name");
// p.innerText = user.show();
user.login = "Alice";

console.log(user.toString());
User.showInfo();
