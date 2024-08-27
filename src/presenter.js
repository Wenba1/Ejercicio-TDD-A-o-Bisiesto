//import sumar from "./sumador";
import esBisiesto from "./esBisiesto";

const anioInput = document.querySelector("#anio");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const anio = Number.parseInt(anioInput.value);
  const esBisiestoResult = esBisiesto(anio);
if(esBisiestoResult)
{
  div.innerHTML='<p>El año ${anio} es bisiesto.<\p>';
}else{
  div.innerHTML='<p>El año ${anio} no es bisiesto.<\p>';
}

});
