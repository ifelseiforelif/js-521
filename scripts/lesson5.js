import Button from "./Button.js";
import WindowsButton from "./WindowsButton.js";
const cl = console.log;
// function f1() {
//   let sum = 0;
//   let a = 30;
//   sum += a;
// }
//console.log(typeof f1);

//console.log(typeof (parseInt("t2est") * 22));

// const user = {
//   name: "Bob",
//   age: 20,
// };

// const student = {
//   average: 10,
//   __proto__: user,
// };
// student.age = 25;
// cl(user.age);
// cl("height" in student);

// const user = {
//   name: "Bob",
//   age: 20,
// };

// const student = Object.create(user);
// student.average = 10;
// cl(student);

//ES6 ES2015
// const button = new Button("Add", "green");
// button.show(cl);
const button = new WindowsButton("Add", "green", 300, 100);
cl(button);
button.show(cl);
