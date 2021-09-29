const body = document.querySelector("body");
const wrapperRef = document.querySelector(".wrapper");

const inputCoding = document.querySelector("#coding");
const inputDancing = document.querySelector("#dancing");

//==== при клике на один из чекбоксов, цвет фона не меняется, только когда оба в состоянии checked получаем
// зеленый цвет фона body =====

// wrapperRef.addEventListener("click", () => {
//   inputCoding.checked && inputDancing.checked
//     ? (localStorage.setItem("checked", true),
//       (body.style.backgroundColor = "green"))
//     : (localStorage.setItem("checked", false),
//       (body.style.backgroundColor = "white"));
// });

// if (localStorage.getItem("checked") === "true") {
//   body.style.backgroundColor = "green";
//   inputCoding.checked = true;
//   inputDancing.checked = true;
//   // } else {
//   //   body.style.backgroundColor = "white";
//   //   inputCoding.checked = false;
//   //   inputDancing.checked = false;
// }
// ========================при клике на один чекбокс, второй тоже синхронизируется====================

wrapperRef.addEventListener("click", (e) => {
  if (e.target.checked) {
    // console.log(e.target.checked);
    inputCoding.checked = true;
    inputDancing.checked = true;
    localStorage.setItem("checked", true);
    body.style.backgroundColor = "green";
  } else {
    inputCoding.checked = false;
    inputDancing.checked = false;
    localStorage.setItem("checked", false);
    body.style.backgroundColor = "white";
  }
});

if (localStorage.getItem("checked") === "true") {
  body.style.backgroundColor = "green";
  inputCoding.checked = true;
  inputDancing.checked = true;
}

//==== при клике на чекбокс Coding или на чекбокс Dancing меняется цвет фона body на зеленый=======

// function toggleBackground() {
//   inputCoding.checked || inputDancing.checked
//     ? ((body.style.backgroundColor = "green"),
//       localStorage.setItem("checked", true))
//     : ((body.style.backgroundColor = "white"),
//       localStorage.setItem("checked", false));
// }
// inputCoding.addEventListener("click", toggleBackground);
// inputDancing.addEventListener("click", toggleBackground);

// localStorage.getItem("checked") === "true" // доработать!!!
//   ? ((body.style.backgroundColor = "green"),
//     (inputCoding.checked = true),
//     (inputDancing.checked = true))
//   : ((body.style.backgroundColor = "white"),
//     (inputCoding.checked = false),
//     (inputDancing.checked = false));
