// SECCION SIN REACT

import logo from "./content/logo-lemon.png";
import "./styles.scss";

console.log(logo);
const img = document.createElement("img");

img.src = logo;

document.getElementById("imgContainer").appendChild(img);

// SECCION CON REACT

import React from "react";
import { createRoot } from "react-dom/client";
import { HolaMundoComponent } from "./componente-hola-mundo";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <HolaMundoComponent />
  </div>,
);
