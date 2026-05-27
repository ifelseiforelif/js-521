function setCookie(cname, cvalue, minutes) {
  const d = new Date();
  d.setTime(d.getTime() + minutes * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

function deleteCookie(cname) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const formBlock = document.getElementById("formBlock");
const userBlock = document.getElementById("userBlock");
const form = document.getElementById("form");
const logCus = document.getElementById("login");
const passCus = document.getElementById("password");
const text = document.getElementById("text");
const logout = document.getElementById("logout");

function checkUser() {
  let username = getCookie("username");

  if (username) {
    formBlock.style.display = "none";
    userBlock.style.display = "block";
    text.innerText = "Привіт, " + username;
  } else {
    formBlock.style.display = "block";
    userBlock.style.display = "none";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let login = logCus.value.trim();
  let password = passCus.value.trim();

  setCookie("username", login, 10);
  checkUser();
});

logout.addEventListener("click", function () {
  deleteCookie("username");
  checkUser();
});

checkUser();
