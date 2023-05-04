const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const anoNovo = document.getElementById("newYear");
const Natal = document.getElementById("newNatal");

const newYear = "1 jan 2024";
const newNatal = "25 dec 2023";

let intervalId; // variável para armazenar o ID do intervalo

function contagem(infos) {
  const newYearDate = new Date(infos);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

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
  event.preventDefault(); // evita que a página recarregue
  clearInterval(intervalId); // interrompe a execução do intervalo anterior
  intervalId = setInterval(function() {
    contagem(newYear);
  }, 1000);
});

Natal.addEventListener('click', function(event) {
  event.preventDefault(); // evita que a página recarregue

  clearInterval(intervalId); // interrompe a execução do intervalo anterior
  intervalId = setInterval(function() {
    contagem(newNatal);
  }, 1000);
});
