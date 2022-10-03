/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Se definen los arrays de palos y cartas
let palos = ["corazon", "diamante", "picas", "trebol"];
let cartas = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let arrayCartas;
let arrayCartasOrdenado;

window.onload = function() {};

//Devuelve un número aleatorio entre el mínimo y el máximo
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Boton Generar Cartas
let btn = document.getElementById("btnGenerarCartas");
btn.textContent = "Generar Cartas";
btn.addEventListener(
  "click",
  function() {
    generarCartas();
  },
  false
);

//Funcion para generar las cartas aleatoreas
function generarCartas() {
  arrayCartas = new Array();

  const cantidadCartas = document.getElementById("inputCantidad").value;
  let contenedorCartas = document.getElementById("cardsContainer"); //Se obtiene el contenedor de cartas
  contenedorCartas.innerHTML = "";

  for (let i = 0; i < cantidadCartas; i++) {
    let carta = crearCarta(i);

    contenedorCartas.innerHTML += carta[0]; //Se agrega la carta al HTML
    arrayCartas.push([carta[0], carta[1]]);
  }
}

//Funcion para crear la carta
function crearCarta(i) {
  //Se asigna un valor random al valor de la carta
  let numeroCarta = cartas[getRandom(0, cartas.length)];

  //Se asigna un palo random
  let palo = palos[getRandom(0, palos.length)];

  let cardHtml = `<div id="card-${i}" class="card m-3 d-flex flex-column align-items-center justify-content-center ${palo}">
            <h1 id="h1-${i}">${numeroCarta}</h1>
            </div>
            `;

  return [cardHtml, numeroCarta];
}

//Boton Ordenar Cartas
let btnOrdenarCartas = document.getElementById("btnOrdenarCartas");
btnOrdenarCartas.textContent = "Ordenar Cartas";
btnOrdenarCartas.addEventListener(
  "click",
  function() {
    arrayCartasOrdenado = new Array();
    arrayCartasOrdenado = bubbleSort(arrayCartas);

    let contenedorCartas = document.getElementById("cardsContainer");
    contenedorCartas.innerHTML = "";

    for (let i = 0; i < arrayCartasOrdenado.length; i++) {
      contenedorCartas.innerHTML += arrayCartasOrdenado[i][0];
    }
  },
  false
);

//Funcion BubbleSort
const bubbleSort = arr => {
  let wall = arr.length - 1; //iniciamos el wall o muro al final del array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      let valor1 = arr[index][1];
      let valor2 = arr[index + 1][1];

      switch (valor1) {
        case "J":
          valor1 = 11;
          break;
        case "Q":
          valor1 = 12;
          break;
        case "K":
          valor1 = 13;
          break;
        case "A":
          valor1 = 1;
          break;
      }

      switch (valor2) {
        case "J":
          valor2 = 11;
          break;
        case "Q":
          valor2 = 12;
          break;
        case "K":
          valor2 = 13;
          break;
        case "A":
          valor2 = 1;
          break;
      }

      //comparar las posiciones adyacentes, si la correcta es más grande, tenemos que intercambiar
      if (valor1 > valor2) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //disminuir la pared para optimizar
  }
  return arr;
};
