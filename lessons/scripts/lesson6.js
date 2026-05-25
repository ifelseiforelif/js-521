//ООП
const cl = console.log;
// class Test {}
// cl(typeof Test);

// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.show = function () {
//     cl(`${this.name} ${this.age}`);
//   };
// }
// const user1 = new User("Bob", 40);

// cl(user1);

//cl((2 + 2) ^ (2 * 2));

// let result1 = 2 + 2 || 4 + 3;
// cl(result1);
// let result2 = 0 && 4 + 3;
// cl(result2);
//XOR  101 XOR  111 => 010
// __proto__              VS    prototype
// є у кожного об'єкта             functions/class
// let a = 10;
// cl(a.__proto__ === Number.prototype);

// class Test {}

// cl(Test.__proto__ === Function.prototype);

// const test = new Test();
// cl(test.__proto__ === Test.prototype);

// ... rest/spread(деструктурізація)

// function f1(...arr) {
//   cl(arr);
// }

// f1(3, 4, 5, 6);
// function f2(arr) {
//   cl(...arr);
// }
// f2([5, 6, 7]);

// const obj = { id: 2, name: "bob", age: 30 };
// const obj2 = { ...obj, id: obj.id + 1, group: "kj" };
// cl(obj, obj2);
// const arr1 = [3, 4, 5];
// const arr2 = [...arr1, 8, 9];
// cl(arr1, arr2);

// const { id, name, age } = obj;
// cl(id, name, age);
// const [a, b] = arr1.slice(1, 3);
// cl(a, b);
//this
//DOM - Document Object Model
function f1(colour, text) {
  this.style.backgroundColor = colour;
  this.innerText = text;
  cl(`THIS: ${this}`);
}

const btn1 = document.querySelectorAll("button")[0];
const btn2 = document.querySelectorAll("button")[1];
btn1.onclick = function () {
  //f1.call(btn2, "red", "Add");
  //f1.apply(btn2, ["red", "Delete"]);
  // const f = f1.bind(btn2);
  // f("red", "Delete");
};

document.body.addEventListener("mousemove", (ev) => {
  document.getElementById("coords").innerHTML = `${ev.clientX} ${ev.clientY}`;
});
document.body.addEventListener("mousedown", () => {
  alert("Clicked");
});
//call, apply,bind

// const buttons = document.querySelectorAll("button");
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", f1);
// }
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].onclick = f1;
// }
