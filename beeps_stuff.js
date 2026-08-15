// Thanks to tecnomansad2005-xo on GitHub for addShape function!
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

// By PlatypusBEEPBEEP on GitHub.
document.getElementsByClassName("pagetitle").item(0).innerHTML = "Infinite Chef Beep's Edition"

addShape("platypus",{url:"https://i.postimg.cc/9Qn2XpTR/64-bit-platypus.png"})

addIngredient("error",{
	shape:"triangle_warning",
	color:"#ffff00", // Yellow.
	keywords:"warning",
	onCollide: (self, other) => {
		if (other.id != "error"){
			changeIngredient(other,["error"])
		}
	}
})

addIngredient("among_us",{
	shape:"sus",
	color:["#ff0000","#ff6600","#ffff00","#00ffff","#0000ff","#aa00ff","#ffaaff","#000000","#ffffff"], // Red, orange, yellow, green, light blue, blue, purple, pink, black, and white.
	keywords:"sus,imposter,crewmate,amogus"
})

addIngredient("science",{
	shape:"atom",
	color:"#00ffff",
	reactions: {
		rock: { set1:"uranium", set2:null },
		wormhole: { set1:"aperture", set2:null }
	}
})

addIngredient("cheez_it",{
	shape:"square_ridged",
	stackShape:"rectangle_thinner_ridged",
	color:"#ff8e2b", // Orange
	keywords:"cheese_it,cheese_square,square"
})

addIngredient("r74n",{
	shape:"R74n",
	color:"#00ffff", // Blue
	broken:"error",
	keywords:"website,internet,infinite_chef"
})

addIngredient("platypus",{
	shape:"platypus",
	scale:1
})

addIngredient("chocolate_syrup",{
	type:"liquid",
	color:"#965a2f",
	keywords:"cocoa_syrup,syrup"
})

addIngredient("wormhole",{
    shape:"octagon_bevel",
    color:"#a200ff",
	keywords:"portal,cosmos,space"
})

addIngredient("aperture",{
	shape:"aperture",
	color:"#00aaff",
	keywords:"portal_2,portal_two,portal_gun"
})

editIngredient("ice_cream",{
	color:["#fefdf8","#6e3e0e","#f593ee"] // Vanilla, chocolate, and strawberry.
})



addRecipe("&stack:=platypus+platypus","platypus stack")
addRecipe("&stack:=ice_cream+potato_chip+chocolate_syrup","platypus sundae") // This line doesn't work.
addRecipe("&stack:=platypus+ice_cream","alive platypus sundae")

addTool("flavor_changer",{
	func:function(placed){
		if (placed.id == "ice_cream"){
			if (
				placed.h == 50 &&
				placed.s == 75 &&
				placed.l == 98
			){
				placed.h = 30
				placed.s = 77
				placed.l = 24
			} else if (
				placed.h == 30 &&
				placed.s == 77 &&
				placed.l == 24
			){
				placed.h = 304
				placed.s = 83
				placed.l = 77
			} else {
				placed.h = 50
				placed.s = 75
				placed.l = 98
			}
		}
	},
	onSelect:function(){alert("Use this to change ice cream's flavor")},
	onClick:function(x,y){console.log(x,y)},
	shape:"scoop",
	color:"#fefdf8",
	spin:true
})