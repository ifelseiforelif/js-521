const cl = console.log;
const form = document.forms.formcard;
const inputs = form.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("focus", (e) => {
    e.target.classList.remove("error");
  });
});
inputs.forEach((input) => {
  input.addEventListener("blur", (e) => {
    if (e.target.value.length < 6) {
      e.target.classList.add("error");
    }
  });
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  cl(data);

  /*
  {
  "name":"",
  "surname":"",
  "email":"djdj@gmail.com"
  }
  
  */
  //const data = Object.fromEntries(new FormData(form).entries());
  //cl([...data.entries()]);

  //   console.log(form.elements.name.value);
  //   console.log(form.elements.surname.value);
  //   console.log(e.target);
  //   const data = new FormData(e.target);

  //   console.dir(Object.entries(data));
});
