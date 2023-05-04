const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const anoNovo = document.getElementById("newYear");
const Natal = document.getElementById("newNatal");

const contagemInfo = document.getElementById("contagem")


const newYear = "1 jan 2024";
const newNatal = "25 dec 2023";

let intervalId; // variável para armazenar o ID do intervalo

const dataInput = document.getElementById("data");

function usuarioContagem(infos) {

  const yourDate = infos;
  const currentDate = new Date()

  const totalSeconds = (yourDate - currentDate) / 1000;

  const day = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  dias.innerHTML = day;
  horas.innerHTML = formatando(hours);
  minutos.innerHTML = formatando(mins);
  segundos.innerHTML = formatando(seconds);
  
}

dataInput.addEventListener("change", function(event) {

  contagemInfo.innerHTML = `Contagem regressiva`;
  event.preventDefault(); // evita que a página recarregue

  const selectedDate = new Date(event.target.value);

  clearInterval(intervalId); // interrompe a execução do intervalo anterior
  intervalId = setInterval(function() {
    usuarioContagem(selectedDate);
  }, 1000);
});


function contagem(infos) {
  const yourDate = new Date(infos);
  const currentDate = new Date();

  const totalSeconds = (yourDate - currentDate) / 1000;

  const day = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  dias.innerHTML = day;
  horas.innerHTML = formatando(hours);
  minutos.innerHTML = formatando(mins);
  segundos.innerHTML = formatando(seconds);
}

function formatando(time) {
  return time < 10 ? `0${time}` : time;
}

anoNovo.addEventListener('click', function(event) {

  dataInput.value = "";
  contagemInfo.innerHTML = "Contagem regressiva para o Ano Novo";

  event.preventDefault(); // evita que a página recarregue
  clearInterval(intervalId); // interrompe a execução do intervalo anterior
  intervalId = setInterval(function() {
    contagem(newYear);
  }, 1000);
});

Natal.addEventListener('click', function(event) {

  dataInput.value = "";
  contagemInfo.innerHTML = "Contagem regressiva para o Natal";

  event.preventDefault(); // evita que a página recarregue

  clearInterval(intervalId); // interrompe a execução do intervalo anterior
  intervalId = setInterval(function() {
    contagem(newNatal);
  }, 1000);
});
