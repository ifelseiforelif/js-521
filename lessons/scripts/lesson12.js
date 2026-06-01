// //Event loop - цикл подій
// console.log("Start program");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// new Promise((resolve, reject) => {
//   resolve("Promise");
// }).then((mes) => console.log(mes));

// async function testAsync() {
//   console.log("test async start");
//   await null;
//   console.log("test async end");
// }
// testAsync();

// console.log("End program");
// const cl = console.log;
// const URL = " http://localhost:3000/posts";
// const posts = document.getElementById("posts");
// async function getPosts(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   cl(data);
// }
// try {
//   getPosts(URL);
// } catch (err) {
//   cl(err);
// }

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => {
//     cl(data);
//     // data.forEach((el) => {
//     //   //posts.textContent += `${el.id} : ${el.title} |`;
//     //   cl(`${el.id} : ${el.title}`);
//     // });
//   });

const cl = console.log;
const KEY = "0006fae8c55ab1d0d3917f71859c8058";
const URL = `http://api.openweathermap.org/geo/1.0/direct`;
const URL_WEATHER = `https://api.openweathermap.org/data/4.0/onecall/current`;
const coords = {};
async function getCoords(city) {
  const response = await fetch(`${URL}?q=${city}&limit=1&appid=${KEY}`);
  const data = await response.json();
  coords = { lat: data[0].lat, lon: data[0].lon, country: data[0].country };
}
async function getTemp() {
  getCoords(country).then(async (data) => {
    const response = await fetch(
      `${URL_WEATHER}?lat=${data.lat}&lon=${data.lon}&appid=${KEY}`,
    );
    const result = await response.json();
    cl(result);
  });
}
getCoords("Odesa");
if (Object.keys(coords).length !== 0) {
}
