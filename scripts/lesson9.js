const cl = console.log;
const form = document.forms.formcard;
form.addEventListener("submit", (e) => {
  //e.preventDefault();
  const data = [...new FormData(form).entries()];
  cl(JSON.stringify(data));

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
