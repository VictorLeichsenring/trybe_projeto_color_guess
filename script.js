const textRGB = document.getElementById('rgb-color');
const options = document.getElementById('options');
const answer = document.getElementById('answer');
const btnResetGame = document.getElementById('reset-game');

function reset() {
    textRGB.innerText = generateColor();
    generateOptions(6);
    answer.innerText = 'Escolha uma cor';
    
}

function play(event) {
    const choice = event.target;
    if (choice.style.backgroundColor === textRGB.innerText) {
        answer.innerText = 'Acertou!';
    } else {
        answer.innerText = 'Errou! Tente novamente!';
    }
}
function generateOptions(quantidade){
    const optionsElements = options.querySelectorAll('.ball');
    optionsElements.forEach((elemento) => {
        elemento.remove();
    })
    const positionRandom = generateRandomInt(0, quantidade);
    const winnerColor = textRGB.innerText;
    for (let i = 0; i < quantidade; i += 1) {
        const element = document.createElement('div');
        element.classList.add('ball');
        if (i === positionRandom) {
            element.style.backgroundColor = winnerColor
        } else {
            element.style.backgroundColor = generateColor();
        }
        options.appendChild(element);
        element.addEventListener('click', play);
    }
}

function generateColor() {
    const red = generateRandomInt(0, 255);
    const green = generateRandomInt(0, 255);
    const blue = generateRandomInt(0, 255);
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

function generateRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

textRGB.innerText = generateColor();
generateOptions(6);
btnResetGame.addEventListener('click', reset);
