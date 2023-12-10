let numeroActual = 1;
let numeroMaximo = 25;
let numbers, numbers2;
let contadorSecundario = 0;
let Actual = document.getElementById('numero-actual');
let formattedTime;

//funciones de divs
function generateDivs(n) {
  // encuentra donde hay que meter lo que se generara
  const container = document.getElementById('divNumero');

  if (container) {
    // loop para generar divs
    for (let i = 0; i < n; i++) {
      // crea el div
      const div = document.createElement('div');

      // contenido del div
      div.textContent = `${numbers[i]}`;
      div.classList.add('container-numero');
      div.onclick = function () {
        divPulsado(div);
      }
      //añade el div
      container.appendChild(div);
    }
  } else {
    console.error('Container not found.');
  }
}

//cuando pulsas un div decide que pasa
function divPulsado(div) {
  if (div.textContent == numeroActual) {
    if (numeroActual < 26) {
      if (numeroActual == 1) {
        startTimer();
      }
      changeDiv(div);
    } else if (numeroActual > 25) {
      hideDiv(div);
    }
    numeroActual++;
    Actual.textContent = numeroActual;
  }

}

//esconde el div pulsado y llama a funciones necesarias
function hideDiv(div) {
  div.textContent = ``;
  div.style.border = 'none';
  div.style.backgroundColor = 'transparent';
  //cuando se pulsa el boton 50 se acaba el juego
  if (numeroActual == 50) {
    stopTimer();
    document.getElementById('tiempo-final').textContent = formattedTime;
    document.getElementById('div-resultados').style.zIndex = '1';
    document.getElementById('div-resultados').style.opacity = '1';
    numeroActual--;
    stop();
  }
}

//cambia el numero del div y el color de fondo
function changeDiv(div) {
  div.textContent = `${numbers2[contadorSecundario]}`;
  div.style.backgroundColor = '#335599';
  contadorSecundario++;
}

//genera numeros aleatorios para mezlar los arrays
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//mezcla el array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = getRandomInt(0, i);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//genera dos arrays con 25 numeros cada uno
function generateRandomNumbers() {
  //array de los primeros 25 numeros
  numbers = Array.from({ length: 25 }, (_, index) => index + 1);
  shuffleArray(numbers);
  //array con los siguientes 25 numeros
  numbers2 = Array.from({ length: 25 }, (_, index) => index + 26);
  shuffleArray(numbers2);
}

//funciones del reloj

//empieza el reloj
function startTimer() {
  startTime = new Date().getTime();

  //actualiza el reloj cada 10 milisegundos
  timerInterval = setInterval(updateTimer, 10);
}

//para el reloj
function stopTimer() {
  clearInterval(timerInterval);
}

//actializa el reloj
function updateTimer() {
  // calcula el tiempo que hapasado
  const elapsedTime = new Date().getTime() - startTime;

  // formatea el tiempo transcurido a una precision de 0.000 para mostrarlo en segundos
  formattedTime = (elapsedTime / 1000).toFixed(3);

  // actualiza el html donde esta el cronometro
  document.getElementById('cronometro').textContent = formattedTime;
}


//funciones que se ejecutan al iniciar la pagina
generateRandomNumbers();

generateDivs(numeroMaximo);