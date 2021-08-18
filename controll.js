let prato;

function escolherFrango() {
  document.getElementById("frango").style.borderColor = "green";
  document.getElementById("carne").style.borderColor = "white";
  prato = "Frango";
}

function escolherCarne() {
  document.getElementById("carne").style.borderColor = "green";
  document.getElementById("frango").style.borderColor = "white";
  prato = "Carne";
}

function escolherCoca() {
  document.getElementById("coca").style.borderColor = "green";
  document.getElementById("refresco").style.borderColor = "white";
}

function escolherRefresco() {
  document.getElementById("refresco").style.borderColor = "green";
  document.getElementById("coca").style.borderColor = "white";
}

function escolherPudim() {
  document.getElementById("pudim").style.borderColor = "green";
  document.getElementById("sorvete").style.borderColor = "white";
}

function escolherSorvete() {
  document.getElementById("sorvete").style.borderColor = "green";
  document.getElementById("pudim").style.borderColor = "white";
}

function finalizarPedido() {
  alert(prato);
  // pegar os produtos escolhidos
  // montar uma frase com o pedido
  // integracao com o whatsapp
}