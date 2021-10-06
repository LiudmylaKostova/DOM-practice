const loadJson = async function (url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch {
    throw new Error();
  }
};

function showPokemon(pokemonsData) {
  let body = document.querySelector("body");
  let card = document.createElement("div");
  card.style.textAlign = "center";
  body.append(card);

  let img = document.createElement("img");
  img.setAttribute("src", `${pokemonsData.sprites.front_default}`);
  card.append(img);

  let name = document.createElement("h3");
  name.textContent = pokemonsData.name;
  card.prepend(name);

  pokemonsData.moves.forEach((el) => {
    // console.log(el);
    let text = document.createElement("p");
    text.textContent = el.move.name;
    card.append(text);
  });
}

loadJson("https://pokeapi.co/api/v2/pokemon/bulbasaur")
  .then((data) => {
    console.log(data);
    showPokemon(data);
  })
  // .catch((error) => console.log(error));
  .catch((error) => console.error("нет такого покемона"));
