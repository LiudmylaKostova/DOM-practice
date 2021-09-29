/* Создаем форму с полями, собираем данные о user, чтобы при клике на кнопку send (при submit формировался {}
и затем пушился в [] ). При клике на кнопку calculate рассчитывается суточная норма кило калорий 
(при условии, что такой user существует)
 */

const formRef = document.querySelector("form");
const btnRef = document.querySelector(".buttonCalc");

const userData = [];

const handleSubmit = function (evt) {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  let userDataObject = {}; //экземпляр класcа

  formData.forEach((value, name) => {
    userDataObject[name] = value; // присваиваем обьекту значение по ключу
  });
  console.log("userData :", userData);

  userData.push(userDataObject);
};

formRef.addEventListener("submit", handleSubmit);

function calcWeight() {
  let searchingName = prompt("Введите имя пользователя");
  userData.find((element) => {
    // console.log(element);

    if (element.name.toLowerCase() === searchingName.toLowerCase()) {
      let resultFood =
        10 * Number(element.weight) +
        6.25 * Number(element.height) -
        5 * Number(element.age) -
        161;
      alert(`You need ${resultFood} kilo calories per day`);
    } else {
      alert("we don't have such user!!!");
    }
  });
}

btnRef.addEventListener("click", calcWeight);
