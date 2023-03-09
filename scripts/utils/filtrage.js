function normalizeChaine(chaine) {
  const minuscule = chaine.trim().toLowerCase();

  const accent = minuscule.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return accent;
}

export function filtrageInputPrincipal(recipes) {
  const champsSaisi = document.getElementById("recherche__texte");
  const messerreur = document.querySelector(".messerreur");
  var recettesTriees = [];
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

  if (champsSaisi.value.length === 0) {
    return recipes;
  } else {
    // const champsSaisiFormate = normalizeChaine(champsSaisi.value);

    // var recettesTriees = recipes.filter(function (recipe) {
    //   return recipe.name.toLowerCase().includes(champsSaisiFormate);
    // });
    // return recettesTriees;
    const champsSaisiFormate = normalizeChaine(champsSaisi.value);

    var recettesTriees = recipes.filter(function (recipe) {
      if (normalizeChaine(recipe.name).includes(champsSaisiFormate) === true) {
        return normalizeChaine(recipe.name).includes(champsSaisiFormate);
      } else {
        if (
          normalizeChaine(recipe.description).includes(champsSaisiFormate) ===
          true
        ) {
          return normalizeChaine(recipe.description)
            .toLowerCase()
            .includes(champsSaisiFormate);
        } else {
          recipe.ingredients.forEach(({ ingredient }) => {
            if (
              normalizeChaine(ingredient).includes(champsSaisiFormate) === true
            ) {
              return normalizeChaine(ingredient)
                .toLowerCase()
                .includes(champsSaisiFormate);
            }
          });
        }
      }
    });
    return recettesTriees;
  }
}
export function filtrageIngredients(recettesFiltrees) {
  var ingredients = [];
  let j = 0;
  for (let i = 0; i < recettesFiltrees.length; i++) {
    for (let k = 0; k < recettesFiltrees[i].ingredients.length; k++) {
      ingredients[j] = recettesFiltrees[i].ingredients[k].ingredient;
      ingredients[j] = normalizeChaine(ingredients[j]);
      j++;
    }
  }

  return ingredients.filter((x, i) => ingredients.indexOf(x) === i);
}
export function filtrageAppareils(recettesFiltrees) {
  var appliances = [];
  let j = 0;
  for (let i = 0; i < recettesFiltrees.length; i++) {
    appliances[j] = recettesFiltrees[i].appliance;
    appliances[j] = normalizeChaine(appliances[j]);
    j++;
  }

  return appliances.filter((x, i) => appliances.indexOf(x) === i);
}
export function filtrageUstensils(recettesFiltrees) {
  var ustensils = [];
  let j = 0;
  for (let i = 0; i < recettesFiltrees.length; i++) {
    for (let k = 0; k < recettesFiltrees[i].ustensils.length; k++) {
      ustensils[j] = recettesFiltrees[i].ustensils[k];
      ustensils[j] = normalizeChaine(ustensils[j]);
      j++;
    }
  }

  return ustensils.filter((x, i) => ustensils.indexOf(x) === i);
}
