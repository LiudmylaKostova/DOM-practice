/* Дан список, внутри которого произвольное количество li с текстом и кнопкой. Сделайте так, чтобы по нажатию
на кнопку удалялся тот li, в котором она находится. Обязательно используйте делегирование событий.*/

const buttonRefs = document.querySelectorAll('[data-action="button"]');
// console.log(buttonRefs);
const ulRef = document.querySelector("#listBtn");
const liRef = document.querySelectorAll("#itemBtn");
// console.log(liRef);
ulRef.style.display = "flex";
ulRef.style.listStyle = "none";
// console.log(ulRef);

liRef.forEach((li) => {
  li.style.marginRight = "10px";
});

ulRef.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    console.log("кликнули в кнопку");
    console.log(e.target);
    e.target.parentElement.remove();
  }
});

// ===================2 variant============================

// ulRef.addEventListener("click", (e) => {
//   const btn = e.target.closest('[data-action="button"]');
//     console.log(btn);
//   if (!btn) {
//     return;
//   }
//   //   btn.parentElement.remove();
//   btn.closest("li").remove();
// });
