// utiliza todos los metodos que creaste en las clases del archivo 02_class.js

import { Uno } from "./02_class.js";
import { Dos } from "./02_class.js";

let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let btn = document.getElementById("btn");
let verA = document.getElementById("verA");
let verB = document.getElementById("verB");
let verC = document.getElementById("verC")
let verD = document.getElementById("verD")

let objeto1 = new Uno();
let objeto2 = new Dos();

btn.addEventListener("click", function () {
    objeto1.editarUno(a.value, b.value);
    objeto2.asignarDos(c.value, d.value);
    verA.innerHTML = "Nombre de la primer persona: " + objeto1.consultarUno().Dato1;
    verB.innerHTML = "Edad de " + objeto1.consultarUno().Dato1 + ": " + objeto1.consultarUno().Dato2 + " años";
    verC.innerHTML = "Nombre de la segunda persona: " + objeto2.consultarDos().Dato3;
    verD.innerHTML = "Edad de " + objeto2.consultarDos().Dato3 + ": " + objeto2.consultarDos().Dato4 + " años";
});