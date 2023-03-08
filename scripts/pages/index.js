//Affichages
import { displayRecipes } from "../utils/display.js";
import { afficheListe } from "../utils/display.js";
//Filtrage
import { filtrageInputPrincipal } from "../utils/filtrage.js";
import { filtrageIngredients } from "../utils/filtrage.js";
import { filtrageAppareils } from "../utils/filtrage.js";
import { filtrageUstensils } from "../utils/filtrage.js";

let recettesInitiales = [];
let recettesFiltrees = [];
let listeIngredients = [];
let listeAppareils = [];
let listeUstensils = [];

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
  const modalRecherche = document.querySelector(".recherche__bouton");
  modalRecherche.addEventListener("click", (e) => {
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
    console.log(listeIngredients);
    afficheListe("I", listeIngredients, listeAppareils, listeUstensils);
  });
  triAppareils.addEventListener("click", (e) => {
    e.preventDefault();
    listeIngredients = filtrageAppareils(recettesFiltrees);
    afficheListe("A", listeIngredients, listeAppareils, listeUstensils);
  });
  triUstensils.addEventListener("click", (e) => {
    e.preventDefault();
    listeIngredients = filtrageUstensils(recettesFiltrees);
    afficheListe("U", listeIngredients, listeAppareils, listeUstensils);
  });
}

init();
