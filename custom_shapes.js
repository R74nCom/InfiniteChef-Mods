//use addShape("<name>",{url:"<image url>"}); and then use it in any function that can use shapes 
const customImageCache = Object.create(null);
const originalLoadImage = window.loadImage;
window.loadImage = function (src) {
    if (typeof src === "string" && src.includes("/shapes/")) {
        const name = src.split("/").pop().replace(/\.(png|jpg|jpeg|webp)$/i, "");
        if (customImageCache[name]) return customImageCache[name];
    }
    return originalLoadImage(src);
};

function applyBasePhysicsToShape(shapeName) {
    if (!window.shapeMeta || !window.shapes) return false;
    const targetMeta = window.shapeMeta[shapeName];
    const targetImg = window.shapes[shapeName];
    if (!targetMeta) return false;
    const base = window.shapeMeta.cube || window.shapeMeta.square || window.shapeMeta.block || window.shapeMeta.tile || window.shapeMeta.plate;
    if (!base) return false;
    try {
        Object.keys(base).forEach(function (k) {
            if (!(k in targetMeta)) targetMeta[k] = base[k];
        });
    } catch (e) {}
    if (targetImg && typeof targetImg === "object") {
        try {
            Object.keys(base).forEach(function (k) {
                if (!(k in targetImg)) targetImg[k] = base[k];
            });
        } catch (e) {}
    }
    customImageCache[shapeName] = customImageCache[shapeName] || {};
    customImageCache[shapeName].physicsApplied = true;
    return true;
}

window.addShape = (function (origAdd) {
    return function (shapeName, options) {
        if (!options || !options.url) return;
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = options.url;
        customImageCache[shapeName] = img;
        window.shapes = window.shapes || {};
        window.shapeMeta = window.shapeMeta || {};
        window.shapeMeta.short = window.shapeMeta.short || [];
        window.shapes[shapeName] = img;
        window.shapeMeta[shapeName] = function (c, x, y, w, h) {
            if (img.complete && img.naturalWidth) {
                c.drawImage(img, x - w / 2, y - h / 2, w, h);
            }
        };
        if (!window.shapeMeta.short.includes(shapeName)) window.shapeMeta.short.push(shapeName);
        if (!applyBasePhysicsToShape(shapeName)) {
            let attempts = 0;
            const maxAttempts = 60;
            const iv = setInterval(function () {
                attempts += 1;
                if (applyBasePhysicsToShape(shapeName) || attempts >= maxAttempts) {
                    clearInterval(iv);
                }
            }, 100);
            }
        return;
    };
})(window.addShape);

const originalAddIngredient = window.addIngredient;
window.addIngredient = function (id, data) {
    if (!data) return originalAddIngredient(id, data);
    if (data.shape && customImageCache[data.shape]) {
        if (data.scale == null) data.scale = 0.1;
        if (data.stackable == null) data.stackable = true;
        if (data.solid == null) data.solid = true;
        if (data.collides == null) data.collides = true;
        if (data.stack == null) data.stack = true;
    }
    return originalAddIngredient(id, data);
};        
