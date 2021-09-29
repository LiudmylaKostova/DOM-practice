/* Делаем валидацию формы с помощью регулярных выражений */

const validate = () => {
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function validatePassword(str) {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    /* строка содержит хотя бы один спецсимвол, хотя бы одну латинскую букву в нижнем регистре, хотя бы одну
латинскую букву в верхнем регистре, строка состоит не менее, чем из 8 вышеупомянутых символов, проверяет,
существует ли цифра (и похоже, язык только EN) */
    return re.test(str);
  }
  return { validateEmail, validatePassword };
};

const refs = {
  form: document.querySelector("form"),
  inputEmail: document.querySelector("#email"),
  inputPassword: document.querySelector("#password"),
};

const handleSubmit = function (evt) {
  evt.preventDefault();
  const userData = {};

  const { validateEmail, validatePassword } = validate();

  const formData = new FormData(evt.target);
  formData.forEach((value, name) => {
    console.log("name :", name, "value :", value);
    userData[name] = value;
  });
  // console.log("userData :", userData);
  if (!validateEmail(userData.email)) {
    const emailData = evt.target.elements[0].value;
    alert(`${emailData} email is not valid :(`);
    refs.inputEmail.style.border = "dashed red";
  } else if (!validatePassword(userData.password)) {
    alert("password is not valid :(");
    refs.inputPassword.style.border = "dashed red";
  } else {
    greetingsUser();
  }
};
const greetingsUser = () => {
  alert("email & password are ok");
};

refs.form.addEventListener("submit", handleSubmit);
