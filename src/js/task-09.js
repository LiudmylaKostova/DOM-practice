/* Даны 2 инпута, абзац и кнопка. По нажатию на кнопку получите числа, которые будут введены в инпуты и 
запишите их сумму в span */

const inputFirstRef = document.querySelector("#input1");
const inputSecondRef = document.querySelector("#input2");
const btnRef = document.querySelector(".button");

// const body = document.querySelector("body");
// let totalSum = 0;

// let getResult = function () {
//   totalSum = Number(inputFirstRef.value) + Number(inputSecondRef.value);
//   console.log(totalSum);
//   body.insertAdjacentHTML("beforeend", `<span>${totalSum}</span>`);
// };
// btnRef.addEventListener("click", getResult);

// ===================2 variant=========================

// const result = document.querySelector(".result");

// const getResult = function (e) {
//   result.textContent =
//     Number(inputFirstRef.value) + Number(inputSecondRef.value);
// };
// btnRef.addEventListener("click", getResult);

// ===================3 variant========================

const inputs = document.querySelectorAll("input");
// console.log(inputs);
let totalSum = 0;

btnRef.addEventListener("click", () => {
  totalSum = Number(inputs[0].value) + Number(inputs[1].value);
  btnRef.textContent = totalSum;
});
