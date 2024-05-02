const controls = document.getElementById("prepControls");

const setSizeButton = document.createElement("button");
setSizeButton.id = "button-imageButton";
setSizeButton.onclick = () => {
    const size = prompt("Enter Food Size (default is 3)");
    if (isNaN(parseFloat(size))) alert("Size must be a number!");
    else foodScale = size;
}
const sizeImage = document.createElement("img");
sizeImage.src = "../shapes/png/arrow_diagonal_forward.png";
sizeImage.className = "pixelart";
setSizeButton.appendChild(sizeImage);

controls.append(setSizeButton)
