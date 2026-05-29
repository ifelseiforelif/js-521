//localStorage
const cl = console.log;
// localStorage.setItem("name", "Alex");
// localStorage.setItem("age", 20);
// cl(localStorage.getItem("name"));
// localStorage.removeItem("age")
// localStorage.clear()
// const products = localStorage.getItem(keys) || [];
// function showProducts() {
//   if (products.length > 0) {
//   }
// }
// const keys = "products";

// const form = document.getElementById("form-add");
// if (form) {
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const data = Object.fromEntries(new FormData(form).entries());
//     products.push({ title: data.product, price: data.price });
//     localStorage.setItem(keys, JSON.stringify(products));
//     form.reset();
//   });
// }
//Вывести кожен доданий продукт під формою на сторінку
//Додати кнопку Clear, яка повинна видаляти все з localStorage
//і оновити інтерфейс
//реалізувати перевірку, якщо product вже існує
//у масиві, перезаписати його ціну

//Promise обіцянка
cl("Start");
new Promise((resolve, reject) => {
  let number = Math.floor(Math.random() * 10);
  if (number < 5) {
    resolve(number); //SUCCESS
  } else {
    reject(number); //FAIL
  }
})
  .then((data) => cl("Data", data))
  .catch((err) => cl("Type Error", err));
cl("End");

start();

setTimeout(function b() {
  console.log("Timeout");
}, 0);
queueMicrotask(function d() {
  cl("Microtask");
});
Promise.resolve().then(function a() {
  console.log("Promise");
});

end();

function start() {
  console.log("start");
}
function end() {
  console.log("end");
}
