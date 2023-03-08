export function filtrageInputPrincipal(recipes) {
  const champsSaisi = document.getElementById("recherche__texte");
  const messerreur = document.querySelector(".messerreur");
  //validation du nombre de caractère saisi
  if (champsSaisi.value.length < 3 && champsSaisi.value.length != 0) {
    messerreur.style.display = "block";
    messerreur.textContent =
      "Veuillez entrer 3 caractères ou plus pour le champ du nom.";

    champsSaisi.focus();
    return false;
  } else {
    messerreur.style.display = "none";
  }

  //   var recettesTriees = recipes.filter(function (recipe) {
  //     console.log(recipe.name);
  //     console.log(champsSaisi.value);
  //     if (recipe.name.toLowerCase() === champsSaisi.value.toLowerCase())
  //       return true;

  //   });
  //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  console.log(champsSaisi.value.length);
  if (champsSaisi.value.length === 0) {
    recettesTriees = recipes;
  } else {
    const regex = new RegExp(`${champsSaisi.value.trim().toLowerCase()}`);
    var recettesTriees = recipes.filter(function (recipe) {
      if (regex.test(recipe.name)) {
        return true;
      } else if (regex.test(recipe.description)) {
        return true;
      }
      recipe.ingredients.forEach(({ ingredient }) => {
        if (regex.test(ingredient)) {
          return true;
        }
      });
    });
  }
  console.log(recettesTriees);
  return recettesTriees;
}
export function filtrageIngredients(recettesFiltrees) {
  recettesFiltrees.forEach((recette) =>
    recette.ingredients.filter((x, i) => recette.ingredients.indexOf(x) === i)
  );
}
export function filtrageAppareils(recettesFiltrees) {
  console.log("A");
}
export function filtrageUstensils(recettesFiltrees) {
  console.log("U");
}
