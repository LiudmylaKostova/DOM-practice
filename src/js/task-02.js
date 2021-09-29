/* Меняем текстовый контент у того элемента, на который нажимаем, те при нажатии на левый квадрат, в нем
меняется текстовый контент на текстовый контент правого квадрата и наоборот */

const leftBtnRef = document.querySelector(".leftBtn");
leftBtnRef.style.marginRight = "30px";
leftBtnRef.style.background = "green";
leftBtnRef.style.width = "40px";
leftBtnRef.style.textAlign = "center";

const rightBtnRef = document.querySelector(".rightBtn");
rightBtnRef.style.background = "yellow";
rightBtnRef.style.width = "40px";
rightBtnRef.style.textAlign = "center";

const divRef = document.querySelector(".wrapper");
divRef.style.display = "flex";

const changeSide = () => {
  leftBtnRef.textContent === "1"
    ? ((leftBtnRef.textContent = "2"), (rightBtnRef.textContent = "1"))
    : ((leftBtnRef.textContent = "1"), (rightBtnRef.textContent = "2"));
};

leftBtnRef.addEventListener("click", changeSide);
rightBtnRef.addEventListener("click", changeSide);

// =================================================================

// const leftBtnRef = document.querySelector(".leftBtn");
// const rightBtnRef = document.querySelector(".rightBtn");

// const changeSide = () => {
//   let leftBtn = leftBtnRef.textContent;
//   let rightBtn = rightBtnRef.textContent;
//   // console.log(leftBtn); //1
//   // console.log(rightBtn); //2

//   leftBtn
//     ? ((leftBtnRef.textContent = rightBtn), (rightBtnRef.textContent = leftBtn))
//     : ((leftBtnRef.textContent = leftBtn),
//       (rightBtnRef.textContent = rightBtn));
// };

// leftBtnRef.addEventListener("click", changeSide);
// rightBtnRef.addEventListener("click", changeSide);
