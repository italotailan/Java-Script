
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

  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;
  //var imc = form.imc.value;

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  //imcTd.textContent = imc;

  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);


  var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

});




  //console.log(imc);
