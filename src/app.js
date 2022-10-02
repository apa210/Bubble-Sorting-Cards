/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Se definen los arrays de palos y cartas
let palos = ["corazon", "diamante", "picas", "trebol"];
let cartas = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

window.onload = function() {
  crearCarta();

  //Boton
  document.querySelector(".btn").textContent = "Generar";
  document.querySelector(".btn").addEventListener("click", function() {
    for (let i = 0; i < palos.length; i++) {
      if (card.classList.contains(palos[i])) {
        card.classList.remove(palos[i]);

        card.classList.add(palos[getRandom(0, palos.length)]);
      }
    }

    cardValor.innerHTML = cartas[getRandom(0, cartas.length)];
  });
};

//Devuelve un número aleatorio entre el mínimo y el máximo
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generarCartas(cantidadCartas) {
  console.log("Entro en generarCartas!");
}

function crearCarta() {
  //Se obtiene el contenedor de cartas
  let contenedorCartas = document.getElementById("cardsContainer");

  contenedorCartas.innerHTML +=
    '<div class="card m-3 d-flex flex-column align-items-center justify-content-center">';
  contenedorCartas.innerHTML += "<h1></h1>";
  contenedorCartas.innerHTML += "</div>";

  let card = document.querySelector(".card"); //Se obtiene la card
  let cardValor = document.querySelector("h1"); //Se obtiene el numero de la card

  //Se asigna un valor random al valor de la carta
  cardValor.innerHTML = cartas[getRandom(0, cartas.length)];

  //Se asigna un palo random
  card.classList.add(palos[getRandom(0, palos.length)]);
}
