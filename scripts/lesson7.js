//hoisting
const cl = console.log;
// f();
// function f() {}

// const f2 = function () {
//   cl(arguments.length);
// };

// const f3 = (x,y) => x * 3+y*3;
// cl(f3(5,5));

//setTimeout, setInterval
// cl("start");
// setTimeout(f2, 0, 5, 6, 7);

// cl("end");

// JS (ES+оточення(API)) V8

//BOM - Browser Object Model
//DOM - Document Object Model

// const div = document.querySelector("div");
// const list = div.getElementsByTagName("li");
// console.dir(list); //3

// const newLi = document.createElement("li");
// newLi.innerText = "Block4";
// document.querySelector("ul").append(newLi);
// console.log(list.length); //4
// console.dir(list); //3

// const newBlock = document.createElement("div");
// newBlock.classList.add("block");
// const newPar = document.createElement("p");
// newPar.innerHTML = "<i>Hello DOM</i>";
// newBlock.append(newPar);
// document.body.append(newBlock);

const rows = parseInt(prompt("Rows?", 3));
const cols = parseInt(prompt("Cols?", 4));
if (!isNaN(rows) && !isNaN(cols)) {
  const table = document.createElement("table");
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      let col = document.createElement("td");
      let text = prompt("Your text");
      col.innerText = text;
      col.style.border = "1px solid gray";
      row.append(col);
    }
    table.append(row);
  }

  document.body.append(table);
}
