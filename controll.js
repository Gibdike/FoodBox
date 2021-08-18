let prato;

function escolherFrango() {
  document.getElementById("frango").style.borderColor = "#1db91d";
  document.getElementById("carne").style.borderColor = "white";
  prato = "Frango";
  escolher();
}

function escolherCarne() {
  document.getElementById("carne").style.borderColor = "#1db91d";
  document.getElementById("frango").style.borderColor = "white";
  prato = "Carne";
}

function escolherCoca() {
  document.getElementById("coca").style.borderColor = "#1db91d";
  document.getElementById("refresco").style.borderColor = "white";
}

function escolherRefresco() {
  document.getElementById("refresco").style.borderColor = "#1db91d";
  document.getElementById("coca").style.borderColor = "white";
}

function escolherPudim() {
  document.getElementById("pudim").style.borderColor = "#1db91d";
  document.getElementById("sorvete").style.borderColor = "white";
}

function escolherSorvete() {
  document.getElementById("sorvete").style.borderColor = "#1db91d";
  document.getElementById("pudim").style.borderColor = "white";
}
//function escolher(){
  //var produto = document.getElementById('teste');
  //produto.addEventListener('click', function(e) {
      //var clickId=e.target.id; 
      //alert(clickId);
  //});
  //document.getElementById(clickId).style.borderColor = "#1db91d";
//}
function finalizarPedido() {
  alert(prato);
  // pegar os produtos escolhidos
  // montar uma frase com o pedido
  // integracao com o whatsapp
}