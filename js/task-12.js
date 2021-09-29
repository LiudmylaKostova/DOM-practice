/* Дан список изображений. Сделайте так, чтобы при клике на картинку алертом выводилось ее src. Обязательно
используйте делегирование событий

Используй сайт picsum.photos   -  рандомные фотографии */

const ulRef = document.querySelector("#container");
ulRef.style.display = "flex";
ulRef.style.flexWrap = "wrap";
ulRef.style.listStyle = "none";

for (let index = 0; index < 20; index++) {
  ulRef.innerHTML += `<li style = 'margin-right: 10px'><img src = 'https://picsum.photos/id/${index}/200/300'/></li>`;
}
ulRef.addEventListener("click", (e) => {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  alert(e.target.src);
});

// ==============Если нужна одна картинка========================

// const ulRef = document.querySelector("#container");

// const addImg = (elemNum) => {
//   ulRef.insertAdjacentHTML(
//     "beforeend",
//     `<li><img src = 'https://picsum.photos/id/${elemNum}/200/300'/></li>`
//   );
// };
// addImg(11);

//  ============================================================

// const body = document.querySelector("body");
// const imgRef = document.createElement("img");

// imgRef.setAttribute("src", "https://picsum.photos/id/16/200/300");
// body.append(imgRef);

// imgRef.addEventListener("click", (e) => {
//   alert(e.target.getAttribute("src"));
// });
