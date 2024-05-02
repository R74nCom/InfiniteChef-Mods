{
let colors = Object.keys(ingredients).filter(k => ingredients[k].color).map(key => ({
    name: key,
    color: ingredients[key].color[0].slice(1).match(/../g).map(a => Math.floor(parseInt(a, 16)))
}))

function distance(rgb, rgb2) {
    return Math.sqrt(Math.pow(rgb[0] - rgb2[0], 2) + Math.pow(rgb[1] - rgb2[1], 2) + Math.pow(rgb[2] - rgb2[2], 2));
}

function drawImage() {
    const file = document.createElement("input");
    file.type = "file";
    file.accept = "image/*";
    let width = canvas.width;
    let height = canvas.height;
    file.onchange = function() {
        setTimeout(function(){
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.onload = function() {
                    const placingImage = img;
                    const canvas = document.createElement("canvas")
                    const ctx = canvas.getContext("2d")
                    let imageWidth = Math.floor(width / ((70 / 2.25) * foodScale));
                    let imageHeight = Math.floor(height / ((70 / 2.25) * foodScale));
                    ctx.drawImage(placingImage, 0, 0, imageWidth, imageHeight);
                    const image = ctx.getImageData(0, 0, imageWidth, imageHeight);
                    for (let i = 0; i < imageWidth; i++) {
                        for (let j = 0; j < imageHeight; j++) {
                            const index = (j * imageWidth + i) * 4;
                            const r = image.data[index];
                            const g = image.data[index + 1];
                            const b = image.data[index + 2];
                            const a = image.data[index + 3];
                            const closest = colors.map(c => ({value: distance([r, g, b], c.color), name: c.name, color: c.color})).sort((a, b) => a.value - b.value);
                            const color = rgbToHsl(...closest[0].color);
                            viewData.bowl.total.push({
                                x: i * (70 / 2.25) * foodScale + (35 / 2.25) * foodScale,
                                y: j * (70 / 2.25) * foodScale + (35 / 2.25) * foodScale,
                                done: true,
                                id: closest[0].name,
                                h: color[0] * 360,
                                s: color[1] * 100,
                                l: color[2] * 100
                            })
                        }
                    }
                }
                img.src = e.target.result;
                file.value = "";
            }
            reader.readAsDataURL(file.files[0]);
        },500);
    }
    file.click();
}

let disableBowl = false;

viewRenderer.bowl = function(hideGUI) {
    // draw from file table.png to fit the whole canvas
    ctx.drawImage(loadImage('table.png'), 0, 0, canvas.width, canvas.height);
    ctx.shadowOffsetY = 7;
    // Heat glow
    if (viewData[currentView].temp >= 20) {
      var heatIndex = Math.min(255, Math.round((viewData[currentView].temp-20)*10));
      ctx.shadowColor = "rgb("+heatIndex+",0,0)"
    }
    else {
      // -30 to 19
      var heatIndex = Math.min(255, Math.round((20-viewData[currentView].temp)*10));
      ctx.shadowColor = "rgb(0,0,"+heatIndex+")"
    }
    ctx.shadowBlur = 20;
    var bowlImg = loadImage('bowl.png');
    // put in the middle on the table
    if (!disableBowl) ctx.drawImage(bowlImg, canvas.width/2 - bowlImg.width/2*5, canvas.height/2 - bowlImg.height/2*5+75, bowlImg.width*5, bowlImg.height*5);
    ctx.shadowColor = "transparent";
    if (viewData.bowl.liquid) {
      var liquidColor = [viewData.bowl.liquidR/viewData.bowl.liquid, viewData.bowl.liquidG/viewData.bowl.liquid, viewData.bowl.liquidB/viewData.bowl.liquid]
      var hsl = rgbToHsl(liquidColor[0], liquidColor[1], liquidColor[2]);
      liquidColor = [Math.round(hsl[0]*360), Math.round(hsl[1]*100), Math.round(hsl[2]*100)];
      var liquidImg = colorizeStandard('bowl_liquid.png', liquidColor[0], liquidColor[1], liquidColor[2]);
      if (liquidImg.loaded === false) {
        if (lastLiquidColor) {
          liquidColor = lastLiquidColor;
          liquidImg = colorizeStandard('bowl_liquid.png', lastLiquidColor[0], lastLiquidColor[1], lastLiquidColor[2]);
        }
      }
      else {
        lastLiquidColor = liquidColor;
      }
      if (!disableBowl) ctx.drawImage(liquidImg, canvas.width/2 - liquidImg.width/2*5, canvas.height/2 - liquidImg.height/2*5+75, liquidImg.width*5, liquidImg.height*5);
    }
    else if (lastLiquidColor) {
      lastLiquidColor = null;
      lastLiquidImg2 = null;
    }
    drawPlaced();
    // draw transparent ingredient at mousePos
    if (!hideGUI) drawCursor();
    if (viewData.bowl.liquid) {
      ctx.globalAlpha = 0.75;
      var liquidImg2 = colorizeStandard('bowl_liquid_front.png', liquidColor[0], liquidColor[1], liquidColor[2]);
      if (liquidImg2.loaded === false) {
        if (lastLiquidImg2) {
          var liquidImg2 = lastLiquidImg2;
          liquidColor = lastLiquidColor;
        }
      }
      else {
        lastLiquidImg2 = liquidImg2;
      }
      if (!disableBowl) ctx.drawImage(liquidImg2, canvas.width/2 - liquidImg2.width/2*5, canvas.height/2 - liquidImg2.height/2*5+75, liquidImg2.width*5, liquidImg2.height*5);
      ctx.globalAlpha = 1;
    }
    var bowlImg2 = loadImage('bowl_front.png');
    if (!disableBowl) ctx.drawImage(bowlImg2, canvas.width/2 - bowlImg.width/2*5, canvas.height/2 - bowlImg.height/2*5+75, bowlImg.width*5, bowlImg.height*5);
    // draw line in yellow
    // ctx.fillStyle = "rgba(255,255,0)";
    // ctx.fillRect(leftBound, hitLine, rightBound - leftBound, 5);
}

const controls = document.getElementById("prepControls");
const disableBowlButton = document.createElement("button");
disableBowlButton.id = "button-disableBowl";
disableBowlButton.onclick = () => {
    disableBowl = !disableBowl;
    toggle("disableBowl");
}
disableBowlButton.setAttribute("on", "true")

const bowlIconImage = document.createElement("img");
bowlIconImage.src = "../shapes/png/hemisphere.png";
bowlIconImage.className = "pixelart";
disableBowlButton.appendChild(bowlIconImage);

const imageButton = document.createElement("button");
imageButton.id = "button-imageButton";
imageButton.onclick = () => {
    drawImage();
}
const randomImage = document.createElement("img");
randomImage.src = "../shapes/png/assorted.png";
randomImage.className = "pixelart";
imageButton.appendChild(randomImage);

const setSizeButton = document.createElement("button");
setSizeButton.id = "button-imageButton";
setSizeButton.onclick = () => {
    const size = prompt("Enter food scale");
    if (isNaN(parseFloat(size))) alert("Invalid food scale");
    else foodScale = size;
}
const sizeImage = document.createElement("img");
sizeImage.src = "../shapes/png/arrow_diagonal_forward.png";
sizeImage.className = "pixelart";
setSizeButton.appendChild(sizeImage);

controls.append(disableBowlButton, imageButton, setSizeButton)
}