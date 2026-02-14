import estilos from "./card.module.css";

const num1: number = 5;
const num2: number = 2;

const resultado = `la suma es : ${num1 + num2}`;

const titulo = document.createElement("h1");
titulo.textContent = resultado;
titulo.className = estilos.card;

document.body.appendChild(titulo);

console.log(import.meta.env.VITE_APP_ENV);
