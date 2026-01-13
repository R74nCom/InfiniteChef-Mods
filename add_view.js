//This mod has some bugs feel free to fix them
//use addView to add new view mods
function addView(name, config) {
    if (!window.viewInfo || !window.viewRenderer || !document.getElementById('controlsBar') || !window.ingredients) {
        setTimeout(() => addView(name, config), 500);
        return;
    }

    const modeName = name.toLowerCase();
    const winSize = config.windowSize || 0;
    const scale = 5;

    // Simple global cache so we don't recreate Image objects every frame
    window._assetCache = window._assetCache || {};
    const loadOnce = (src) => {
        if (!src) return null;
        if (window._assetCache[src]) return window._assetCache[src];
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        window._assetCache[src] = img;
        return img;
    };

    // Helper to create a masked bricks image (bricks with table-area punched out)
    const createMaskedBricks = (bricksImg, tableImg, targetW, targetH) => {
        // use a cache key that depends on sizes so we recreate if canvas size changes
        const key = `bricks_masked_table::${targetW}x${targetH}`;
        if (window._assetCache[key]) return window._assetCache[key];

        // offscreen canvas
        const oc = document.createElement('canvas');
        oc.width = targetW;
        oc.height = targetH;
        const octx = oc.getContext('2d');

        // draw bricks full size
        octx.drawImage(bricksImg, 0, 0, targetW, targetH);

        // punch out where the table is opaque: draw table using destination-out
        // This removes bricks pixels in areas where table is drawn (so bricks won't show under table)
        octx.globalCompositeOperation = 'destination-out';
        octx.drawImage(tableImg, 0, 0, targetW, targetH);
        octx.globalCompositeOperation = 'source-over';

        // convert to image for faster drawImage calls later
        const masked = new Image();
        masked.src = oc.toDataURL();
        window._assetCache[key] = masked;
        return masked;
    };

    viewInfo[modeName] = {
        image: config.gamesprite || 'bowl.png',
        imageFront: config.gamespriteFront || 'bowl_front.png',
        imageLiquid: config.gamespriteLiquid || 'bowl_liquid.png',
        imageLiquidFront: config.gamespriteLiquidFront || 'bowl_liquid_front.png',
        holdsLiquid: true,
        doRotation: true,
        maxHeight: 0.45,
        placedHeightMul: 0.5,
        hitLineOffset: winSize > 0 ? (110 + (winSize * 2)) : 100,
        sideBoundOffset: 70,
        tempReact: true
    };

    viewRenderer[modeName] = function(hideGUI) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // ASSETS
        const bricksImg = loadOnce('bricks.png');
        const tableImg = loadOnce('table.png');
        const modeImg = loadOnce(config.gamesprite || 'bowl.png');

        // fallback sizes (avoid zeros)
        const fallbackW = 128;
        const fallbackH = 128;
        const viewImgW = (modeImg && modeImg.width) ? modeImg.width : (window.viewImageWidth || fallbackW);
        const viewImgH = (modeImg && modeImg.height) ? modeImg.height : (window.viewImageHeight || fallbackH);

        // vData guard
        if (!viewData[currentView]) {
            // if images loaded, draw a minimal background (masked bricks if possible)
            if (bricksImg && bricksImg.complete && tableImg && tableImg.complete) {
                const masked = createMaskedBricks(bricksImg, tableImg, canvas.width, canvas.height);
                if (masked && masked.complete) ctx.drawImage(masked, 0, 0, canvas.width, canvas.height);
                else ctx.drawImage(bricksImg, 0, 0, canvas.width, canvas.height);
                if (tableImg && tableImg.complete) ctx.drawImage(tableImg, 0, 0, canvas.width, canvas.height);
            } else {
                if (bricksImg && bricksImg.complete) ctx.drawImage(bricksImg, 0, 0, canvas.width, canvas.height);
                if (tableImg && tableImg.complete) ctx.drawImage(tableImg, 0, 0, canvas.width, canvas.height);
            }
            return;
        }

        var vData = viewData[currentView] || { temp: 20 };

        // 1) BRICKS (masked so no bricks under the table)
        if (bricksImg && bricksImg.complete && tableImg && tableImg.complete) {
            const masked = createMaskedBricks(bricksImg, tableImg, canvas.width, canvas.height);
            // masked image may still be loading from toDataURL; fallback to raw bricks until masked ready
            if (masked && masked.complete && masked.naturalWidth > 0) {
                ctx.drawImage(masked, 0, 0, canvas.width, canvas.height);
            } else {
                ctx.drawImage(bricksImg, 0, 0, canvas.width, canvas.height);
            }
        } else if (bricksImg && bricksImg.complete) {
            ctx.drawImage(bricksImg, 0, 0, canvas.width, canvas.height);
        }

        // 2) TABLE (draw above bricks)
        if (tableImg && tableImg.complete) {
            ctx.drawImage(tableImg, 0, 0, canvas.width, canvas.height);
        }

        // compute centered draw position for pot
        var drawX = canvas.width/2 - (viewImgW * scale)/2;
        var drawY = canvas.height/2 - (viewImgH * scale)/2 + 75;

        // 3) Glow and POT (back)
        ctx.save();
        ctx.shadowOffsetY = 7;
        ctx.shadowBlur = 20;
        var deltaTemp = (vData.temp || 20) - 20;
        var heatIndex = Math.min(255, Math.round(Math.abs(deltaTemp) * 10));
        if (deltaTemp >= 0) ctx.shadowColor = "rgb(" + heatIndex + ",0,0)";
        else ctx.shadowColor = "rgb(0,0," + heatIndex + ")";
        if (modeImg && modeImg.complete) ctx.drawImage(modeImg, drawX, drawY, viewImgW * scale, viewImgH * scale);
        ctx.restore();

        // 4) If there's a window, draw the scene inside the window area (so interior shows TABLE not BRICKS)
        if (winSize > 0) {
            ctx.save();
            const cx = canvas.width / 2;
            const cy = canvas.height / 2 + 75;
            const wSizeScaled = winSize * scale;

            ctx.beginPath();
            ctx.rect(cx - wSizeScaled, cy - wSizeScaled, wSizeScaled * 2, wSizeScaled * 2);
            ctx.clip();

            // draw the table into the window (so bricks don't show through)
            if (tableImg && tableImg.complete) {
                ctx.drawImage(tableImg, 0, 0, canvas.width, canvas.height);
            }
            ctx.restore();
        }

        // 5) LIQUID / INGREDIENTS
        if (vData.liquid && vData.liquid > 0) {
            const r = (vData.liquidR || 0);
            const g = (vData.liquidG || 0);
            const b = (vData.liquidB || 0);
            const tot = vData.liquid || 1;
            var liquidColor = [r / tot, g / tot, b / tot];
            var hsl = rgbToHsl(liquidColor[0], liquidColor[1], liquidColor[2]);
            var liquidImg = colorizeStandard(viewInfo[currentView].imageLiquid, Math.round(hsl[0]*360), Math.round(hsl[1]*100), Math.round(hsl[2]*100));
            if (liquidImg && liquidImg.loaded) {
                var lW = (liquidImg.width && liquidImg.width>0) ? liquidImg.width : viewImgW;
                var lH = (liquidImg.height && liquidImg.height>0) ? liquidImg.height : viewImgH;
                ctx.drawImage(liquidImg, canvas.width/2 - (lW*scale)/2, canvas.height/2 - (lH*scale)/2 + 75, lW*scale, lH*scale);
            }
        }

        drawPlaced();
        if (!hideGUI) drawCursor();

        // 6) POT FRONT / WINDOW ALPHA
        if (winSize > 0) {
            ctx.globalAlpha = 0.4;
            if (modeImg && modeImg.complete) ctx.drawImage(modeImg, drawX, drawY, viewImgW * scale, viewImgH * scale);

            ctx.save();
            ctx.beginPath();
            ctx.rect(0, 0, canvas.width, canvas.height);
            const cx = canvas.width / 2;
            const cy = canvas.height / 2 + 75;
            const wSizeScaled = winSize * scale;
            ctx.rect(cx - wSizeScaled, cy - wSizeScaled, wSizeScaled * 2, wSizeScaled * 2);
            ctx.clip("evenodd");

            ctx.globalAlpha = 1.0;
            if (modeImg && modeImg.complete) ctx.drawImage(modeImg, drawX, drawY, viewImgW * scale, viewImgH * scale);
            ctx.restore();
        } else {
            if (modeImg && modeImg.complete) ctx.drawImage(modeImg, drawX, drawY, viewImgW * scale, viewImgH * scale);
        }

        ctx.globalAlpha = 1.0;
    };

    // UI button & initial view data (kept as you had it)
    var controlsBar = document.getElementById('controlsBar');
    if (!document.getElementById(`button-${modeName}`)) {
        var button = document.createElement('button');
        button.id = `button-${modeName}`;
        button.setAttribute('onclick', `changeView('${modeName}')`);
        button.innerHTML = `<img src="${config.uisprite || 'bowl.png'}" class="pixelart">`;
        Object.assign(button.style, { flexGrow: '1', borderBottom: '3px solid gray', borderRadius: '0', margin: '0', backgroundColor: '#edebe6', color: 'black', boxSizing: 'border-box' });
        var clearButton = document.getElementById('button-clear');
        if (clearButton) controlsBar.insertBefore(button, clearButton);
    }
    if (!viewData[modeName]) viewData[modeName] = { total: [], contained: [], liquid: 0, liquidR: 0, liquidG: 0, liquidB: 0, liquidSolid: false, temp: 20 };
    if (config.xrecipies) {
        for (let [recipe, result] of Object.entries(config.xrecipies)) {
            const firstIng = recipe.split('+')[0];
            if (typeof result === 'object' && result.set1 && ingredients[firstIng]) {
                if (!ingredients[firstIng].reactions) ingredients[firstIng].reactions = {};
                ingredients[firstIng].reactions[recipe.split('+')[1] || 'generic'] = { set1: result.set1, tempMin: result.tempMin, tempMax: result.tempMax, chance: result.chance, create: result.create };
            } else if (typeof result === 'string') { addRecipe(`&${modeName}:${recipe}`, result); }
        }
    }
}
