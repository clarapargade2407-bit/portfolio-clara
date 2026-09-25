/* ------------------------------
   MESSAGE DE CHARGEMENT
------------------------------ */

console.log("Portfolio de Clara chargé !");


/* ------------------------------
   CARTES
------------------------------ */

const cartes = document.querySelectorAll(".card");

cartes.forEach(function (carte) {

  carte.addEventListener("mouseenter", function () {

    carte.style.cursor = "default";

  });

});


/* ------------------------------
   BOUTON CONTACT
------------------------------ */

const boutonContact = document.querySelector(".bouton-clair");

boutonContact.addEventListener("click", function () {

  console.log("Le recruteur souhaite contacter Clara.");

});
