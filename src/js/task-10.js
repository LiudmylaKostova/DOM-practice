/* Дана таблица с числами. По нажатию на кнопку найдите ячейку, в которой хранится максимальное число и 
сделайте ее фон красным */

const tdRefs = document.querySelectorAll("td");
const btnRef = document.querySelector("#btn");

console.log(tdRefs);
// console.log(btnRef);

// const findBiggestNumber = function () {
//   tdRefs.forEach((el) => {
//     let maxEl = Number(tdRefs[0].textContent);
//     if (Number(el.textContent) > maxEl) {
//       maxEl = Number(el.textContent);
//       //   console.log(maxEl);
//       el.style.backgroundColor = "red";
//     }
//   });
// };

// btnRef.addEventListener("click", findBiggestNumber);

// ==============2 variant(тернарный оператор)=======================

const findBiggestNumber = function () {
  tdRefs.forEach((el) => {
    // console.log(el.textContent);
    let maxEl = Number(tdRefs[0].textContent);

    Number(el.textContent) > Number(maxEl)
      ? ((maxEl = Number(el.textContent)), (el.style.backgroundColor = "red"))
      : console.log("still looking");
    // return maxEl;
  });
};
btnRef.addEventListener("click", findBiggestNumber);
