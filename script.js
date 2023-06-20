const textRGB = document.getElementById('rgb-color');
const options = document.getElementById('options');
const answer = document.getElementById('answer');
const btnResetGame = document.getElementById('reset-game');
const score = document.getElementById('score');

function generateRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateColor() {
  const red = generateRandomInt(0, 255);
  const green = generateRandomInt(0, 255);
  const blue = generateRandomInt(0, 255);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

function play(event) {
  const choice = event.target;
  const pontos = parseInt(score.innerText, 10);
  if (choice.style.backgroundColor === textRGB.innerText) {
    const novoPontos = pontos + 3;
    score.innerText = novoPontos;
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function generateOptions(quantidade) {
  const optionsElements = options.querySelectorAll('.ball');
  optionsElements.forEach((elemento) => {
    elemento.remove();
  });
  const positionRandom = generateRandomInt(0, quantidade);
  const winnerColor = textRGB.innerText;
  for (let i = 0; i < quantidade; i += 1) {
    const element = document.createElement('div');
    element.classList.add('ball');
    if (i === positionRandom) {
      element.style.backgroundColor = winnerColor;
    } else {
      element.style.backgroundColor = generateColor();
    }
    options.appendChild(element);
    element.addEventListener('click', play);
  }
}

function reset() {
  textRGB.innerText = generateColor();
  generateOptions(6);
  answer.innerText = 'Escolha uma cor';
}

textRGB.innerText = generateColor();
generateOptions(6);
btnResetGame.addEventListener('click', reset);
