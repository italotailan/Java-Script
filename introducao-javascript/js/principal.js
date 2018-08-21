
var titulo = document.querySelector(".titulo");
titulo.textContent ="Aparecida Nutrição"; // alterea o valor da string


var pacientes = document.querySelectorAll(".paciente");
// querySelector tras apenas o 1 resultado querySelectorAll tras todos !

for(i=0 ; i < pacientes.length; i++){

  var paciente= pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura= tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var alturaEhValida = true;
  var pesoEhValido = true;

if(peso <= 0 || peso >=300){
  console.log("peso invalido");
  tdImc.textContent ="Peso Invalido !";
  pesoEhValido = false;
  paciente.classList.add("paciente-invalido");   // classList retorna todas as classes do objeto
  // add adiciona uma classe
}

if(altura <= 0 || altura >=3.00){
  console.log("altura invalido");
  tdImc.textContent = "Altura Invalida";
  alturaEhValida = false;
  paciente.classList.add("paciente-invalido");
}


if (pesoEhValido && alturaEhValida) {
var imc = peso /(altura * altura);
tdImc.textContent = imc.toFixed(2); // tras o resultado do IMC e o toFixed limita o numero casa decimais
}
}
var botaoAdcionar = document.querySelector("#adicionar-paciente");
botaoAdcionar.addEventListener("click",function(event) {
  event.preventDefault();
  console.log("fui clicado !");

});
