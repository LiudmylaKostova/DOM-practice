/* Напиши скрипт, который реализует следующий функционал. Есть кнопка с классом button, текст которой 
отображает количество раз, которое по ней кликнули. Обновляется при каждом клике */

const buttonRef = document.querySelector(".button");
let total = 0;
const handlerBtn = function () {
  total += 1;
  buttonRef.textContent = total;
};
buttonRef.addEventListener("click", handlerBtn);

// ================================================

// const buttonRef = document.querySelector(".button");
// const handlerBtn = function () {
//   console.log(buttonRef.textContent++);
//   //   console.log(++buttonRef.textContent);
// };
// buttonRef.addEventListener("click", handlerBtn);
