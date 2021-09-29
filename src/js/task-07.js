/* Делаем гирлянду из разноцветных квадратов */

let body = document.querySelector("body");
let box = document.createElement("div");
body.append(box);

for (let index = 0; index < 30; index++) {
  let smallBox = document.createElement("div");
  box.append(smallBox);
  smallBox.classList.add("smallBox");

  setInterval(() => {
    smallBox.style.backgroundColor = `rgb(${Math.round(
      Math.random() * 255
    )}, ${Math.round(Math.random() * 255)}, ${Math.round(
      Math.random() * 255
    )})`;
  }, 500);
}
