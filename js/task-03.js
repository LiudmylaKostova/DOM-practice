/*Создайте текстовый инпут, который принимает значение цвета и меняет цвет бекграунда для body*/

let body = document.querySelector("body");
let inputRef = document.createElement("input");
inputRef.placeholder = "enter color";
body.append(inputRef);

inputRef.addEventListener(
  "change",
  (e) => (body.style.background = e.target.value)
);
