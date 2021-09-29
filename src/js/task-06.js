/* При нажатии на квадрат меняется его цвет (тоглер) */

let body = document.querySelector("body");
let box = document.createElement("div");
body.append(box);

box.classList.add("box1", "box2");
box.addEventListener("click", () => {
  box.classList.toggle("box2");
});
