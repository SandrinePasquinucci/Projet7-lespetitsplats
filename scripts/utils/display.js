export function displayRecipes(recipe) {
  const { name, ingredients, time, description } = recipe;

  const card = document.createElement("div");
  const img = document.createElement("img");
  const desc = document.createElement("div");
  const presentation = document.createElement("div");
  const titre = document.createElement("h2");
  const tempsIcone = document.createElement("i");
  const temps = document.createElement("div");
  const detail = document.createElement("div");
  const ingr = document.createElement("div");
  const recettes = document.createElement("div");

  card.className = "card";
  img.className = "img";
  img.setAttribute("src", "");
  img.setAttribute("alt", "");
  desc.className = "descr";
  presentation.className = "presentation";
  titre.className = "titre";
  tempsIcone.className = "tempsIcone fa-regular fa-clock";
  temps.className = "temps";
  detail.className = "detail";
  ingr.className = "ingr";

  recettes.className = "recettes";
  titre.textContent = name;
  temps.textContent = time + " min";
  recettes.textContent = description;

  for (let i = 0; i < ingredients.length; i++) {
    const uningredient = document.createElement("div");
    uningredient.className = "uningredient";
    const { ingredient, quantity, unit } = ingredients[i];
    // uningredient.textContent = ingredient + quantity + unit;
    uningredient.textContent = ingredient;
    if (quantity != undefined) {
      uningredient.textContent += " " + quantity;
    }
    if (unit != undefined) {
      uningredient.textContent += " " + unit;
    }
    ingr.appendChild(uningredient);
  }
  //ingr.appendChild(ingreDOM);
  card.appendChild(img);
  card.appendChild(desc);
  desc.appendChild(presentation);
  desc.appendChild(detail);
  detail.appendChild(ingr);
  detail.appendChild(recettes);
  presentation.appendChild(titre);
  presentation.appendChild(tempsIcone);
  presentation.appendChild(temps);
  return card;
}

export function afficheListe(
  type,
  listeIngrédients,
  listeAppareils,
  listeUstensils
) {
  //rajout des ingrédients connus dans les recettes

  if (type == "I") {
    const btnIngredients = document.querySelector(".btnIngredients");
    btnIngredients.style.visibility = "hidden";
    const sectiontri = document.getElementById("tri");
    const rechercheTextetri = document.querySelector(".recherche__textetri");
    const rechercheBoutontri = document.querySelector(".recherche__boutontri");
    sectiontri.style.visibility = "visible";
    sectiontri.style.backgroundColor = "#3282f7";
    rechercheTextetri.textContent = "Rechercher un ingrédient";
    rechercheTextetri.background = "#3282f7";
    rechercheBoutontri.background = "transparent";
  }
}
