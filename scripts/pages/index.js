//Affichages
import { displayRecipes, afficheListe } from "../utils/display.js";

//Filtrage
import {
  filtrageInputPrincipal,
  filtrageIngredients,
  filtrageAppareils,
  filtrageUstensils,
} from "../utils/filtrage.js";

let recettesInitiales = [];
let recettesFiltrees = [];
let listeIngredients = [];
let listeAppareils = [];
let listeUstensils = [];

//Convertir les chaines de caractères en minuscule et sans accents
import { normalizeChaine } from "../utils/normalize.js";

async function getRecettes() {
  return fetch("./data/recipes.json")
    .then((reponse) => reponse.json())
    .then((data) => data.recipes);
}

function afficheRecettes(recettesInitiales) {
  //rajout des recettes contenues ds le fichier
  const recettesSection = document.getElementById("recettes");

  while (recettesSection.firstChild) {
    recettesSection.removeChild(recettesSection.firstChild);
  }

  for (let i = 0; i < recettesInitiales.length; i++) {
    const cardDOM = displayRecipes(recettesInitiales[i]);
    recettesSection.appendChild(cardDOM);
  }
}

async function init() {
  // Récupère les datas
  recettesInitiales = await getRecettes();
  afficheRecettes(recettesInitiales);
  recettesFiltrees = recettesInitiales;

  // Récupère la valeur saisie de la zone recherche et affiche les recettes triees
  //const modalRecherche = document.querySelector(".recherche__bouton");
  const modalRecherche = document.getElementById("recherche__texte");

  modalRecherche.addEventListener("keyup", (e) => {
    e.preventDefault();
    recettesFiltrees = filtrageInputPrincipal(recettesInitiales);

    afficheRecettes(recettesFiltrees);
  });
  //Affiche les critères de tri par catégories
  const triIngredients = document.querySelector(".btnIngredients");
  const triAppareils = document.querySelector(".btnAppareils");
  const triUstensils = document.querySelector(".btnUstensils");
  triIngredients.addEventListener("click", (e) => {
    e.preventDefault();
    listeIngredients = filtrageIngredients(recettesFiltrees);

    afficheListe("I", listeIngredients, listeAppareils, listeUstensils);
  });
  triAppareils.addEventListener("click", (e) => {
    e.preventDefault();
    listeAppareils = filtrageAppareils(recettesFiltrees);

    afficheListe("A", listeIngredients, listeAppareils, listeUstensils);
  });
  triUstensils.addEventListener("click", (e) => {
    e.preventDefault();
    listeUstensils = filtrageUstensils(recettesFiltrees);
    afficheListe("U", listeIngredients, listeAppareils, listeUstensils);
  });
}

init();
