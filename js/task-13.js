/* Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, после чего нажимает кнопку submit 
и происходит отправка формы. 
При отправке формы:
не должна перезагружаться страница,
необходимо получить выбранную опцию и вывести в параграф с классом result. */

const inputsRef = document.querySelectorAll(".input");
const buttonRef = document.querySelector(".button");
const spanRef = document.querySelector(".result");

function check(e) {
  e.preventDefault();
  inputsRef.forEach((input) => {
    input.checked ? (spanRef.textContent = input.value) : "";
  });
}
buttonRef.addEventListener("click", check);
