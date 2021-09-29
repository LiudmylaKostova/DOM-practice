/* при нажатии на кнопку создается квадрат, при изменении инпута(range) - меняется его размер(размер грани 
должен быть больше 100 рх). При нажатии на вторую кнопку квадрат удаляется.*/

const body = document.querySelector("body");
const size = document.querySelector("#size");
const createRef = document.querySelector('[data-action="create"]');
const deleteRef = document.querySelector('[data-action="delete"]');

createRef.addEventListener("click", () => {
  const divBox = document.createElement("div");
  divBox.classList.add("box");
  divBox.style.width = "40px";
  divBox.style.height = "40px";
  divBox.style.border = "2px solid blue";
  divBox.style.marginTop = "40px";
  divBox.style.marginLeft = "20px";
  body.appendChild(divBox);
});

size.addEventListener("change", (e) => {
  const divBox = document.querySelector(".box");
  divBox.style.width = `${+e.target.value + 100}px`;
  divBox.style.height = `${+e.target.value + 100}px`;
});

deleteRef.addEventListener("click", () => {
  const divBox = document.querySelector(".box");

  if (divBox) {
    body.removeChild(divBox);
  }
});
