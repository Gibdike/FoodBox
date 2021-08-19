let prato;
let bebida;
let sobremesa;

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
  bebida = "Coca";
}

function escolherRefresco() {
  document.getElementById("refresco").style.borderColor = "#1db91d";
  document.getElementById("coca").style.borderColor = "white";
  bebida = "Refresco";
}

function escolherPudim() {
  document.getElementById("pudim").style.borderColor = "#1db91d";
  document.getElementById("sorvete").style.borderColor = "white";
  sobremesa = "Pudim";
}

function escolherSorvete() {
  document.getElementById("sorvete").style.borderColor = "#1db91d";
  document.getElementById("pudim").style.borderColor = "white";
  sobremesa = "Sorvete";
}

function finalizarPedido() {
  let mensagem;
 
  if(prato != undefined && bebida != undefined && sobremesa != undefined){
    mensagem =
      "Olá, gostaria de pedir um combo: " +
      prato +
      ", " +
      bebida +
      " e " +
      sobremesa;
      window.open("https://wa.me/+5565992328339?text="+ mensagem);
  } else{
    alert("Por favor selecione todos os itens");
  }
}