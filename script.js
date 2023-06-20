const textRGB = document.getElementById('rgb-color');

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