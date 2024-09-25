import { multiplicar, mostrarResultado } from "./ejercicios/ejercicio1.js";
import { mostrarOperacion, operarNumeros } from "./ejercicios/ejercicio2.js";
import { esEstoUnaCallback, estoEsUnaCallback } from "./ejercicios/ejercicio3.js";
import { arrayAFiltrar, mostrarPares } from "./ejercicios/ejercicio4.js";
import { manipular } from "./ejercicios/ejercicio6.js";
import { setAArray } from "./ejercicios/ejercicio7.js";

//multiplicar(10,5,mostrarResultado);
//operarNumeros(25,5,mostrarOperacion);
//esEstoUnaCallback(2000,estoEsUnaCallback);
//arrayAFiltrar([0,1,2,3,4,5,6,7,8,9],mostrarPares);
/* manipular(new Set([1,2,3,4,5]), e => {
    e.delete(3);
    e.add(6);
    console.log(e);
}); */
console.log(setAArray(new Set([1,2,3,4,5]), e => {
    return [...e];
}));