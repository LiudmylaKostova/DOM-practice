const body = document.querySelector("body");
const boxRef = document.querySelector(".box");
const color = document.querySelector("#color");
const width = document.querySelector("#width");
const height = document.querySelector("#height");
const text = document.querySelector("#text");

color.addEventListener("change", () => {
  boxRef.style.background = color.value;
});
width.addEventListener("change", () => {
  boxRef.style.width = width.value + "px";
});
height.addEventListener("change", () => {
  boxRef.style.height = height.value + "px";
});
text.addEventListener("change", () => {
  console.log(text.value);
  title.textContent = text.value;
});

const title = document.createElement("h2");
body.append(title);
