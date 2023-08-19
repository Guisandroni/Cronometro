let tempo = 0;
let intervalo = 0;

let TempoFormato = (tempo) => {
  const horas = Math.floor(tempo / 360000);
  const minutos = Math.floor((tempo % 360000) / 6000);
  const segundos = Math.floor((tempo % 6000) / 100);

  return `${horas.toString().padStart(2, "0")} :
  ${minutos.toString().padStart(2, "0")} :
   ${segundos.toString().padStart(2, "0")}`;
};

const PrepararTempo = (tempo) => {
  let contador = document.getElementById("contar");
  if (!contador) {
    alert("esta errado");
    return;
  }
  contador.innerHTML = TempoFormato(tempo);
};

const tempoRodar = function () {
  const botao = document.getElementById("ligar");
  const fazer = botao.getAttribute("action");

  clearInterval(intervalo);

  if (fazer == "start" || fazer == "continue") {
    intervalo = setInterval(function () {
      tempo += 1;
      PrepararTempo(tempo);
    }, 10);
  }
};

const tempoParar = function () {
  const botao02 = document.getElementById("desligar");
  const parar = botao02.getAttribute("action");

  clearInterval(intervalo);

  if (parar == "desligar") {
    intervalo = setInterval(function () {
      tempo = 1;
      PrepararTempo(tempo);
    }, 10);
  }
};

const tempoResetar = function () {
  const botao03 = document.getElementById("reiniciar");
  const resetar = botao03.getAttribute("action");

  clearInterval(intervalo);

  if (resetar == "reset") {
    intervalo = setInterval(function () {
      tempo = 0;
      PrepararTempo(tempo);
    }, 10);
  }
};

function exibir() {
  const mensagem = document.getElementById("msg");
  mensagem.style.display = "block";
}
window.onload = () => {
  setTimeout(exibir, 5000);
};

document.getElementById("ligar").addEventListener("click", () => {
  tempoRodar();
});
document.getElementById("desligar").addEventListener("click", tempoParar);
document.getElementById("reiniciar").addEventListener("click", tempoResetar);
