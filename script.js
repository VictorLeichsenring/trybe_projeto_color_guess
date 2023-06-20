const textRGB = document.getElementById('rgb-color');
const options = document.getElementById('options');

function generateOptions(quantidade){
    for (let i = 0; i < quantidade; i += 1) {
        const element = document.createElement('div');
        element.classList.add('ball');
        options.appendChild(element);
    }    
}

function generateColor() {
    const red = generateRandomInt();
    const green = generateRandomInt();
    const blue = generateRandomInt();
    const color = `rba(${red}, ${green}, ${blue})`;
    return color;
}

function generateRandomInt() {
    return Math.floor(Math.random()* (255 - 0) + 0) + 0;
}

textRGB.innerText = generateColor();
generateOptions(6);