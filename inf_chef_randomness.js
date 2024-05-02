urlParams = new URLSearchParams(window.location.search);
var WFSN = (urlParams.get("enableNsf" + String.fromCharCode(119)) !== null)

function naiveReverse(string) { //Does not work for astral characters, which are stored as surrogate pairs
    return string.split("").toReversed().join("")
};

if(WFSN) {
	ingredients.cum = {
		type: "liquid",
		color: [ "#d6d6cb" ],
		keywords: naiveReverse('tun,knups,zzij,mreps,nemes'),
		dishWeight: -55,
		adj: "cummy",
		"h": 60,
		"s": 12,
		"l": 82,
		"shape": "liquid"
	};

	ingredients.poop = {
		shape:"blob",
		type:"paste",
		color:["#5c3508"],
		h: 32,
		s: 84,
		l: 20,
		adj:"toxic",
		hidden:true,
		keywords:naiveReverse('drut,2#,2 rebmun,gnud,tacs,secef,parc,tihs,ood')
	}
}

ingredients.monosodium_glutamate = {
    "type": "powder",
    "shape": "powder",
    "color": [
        "#e3e3e3"
    ],
    "dissolve": true,
    "adj": "savory",
    "dishWeight": -75,
    "keywords": "msg,e621",
    "h": 0,
    "s": 0,
    "l": 89.01960784313725
};

ingredients.sus = {
    "type": "powder",
    "shape": "sus",
    "color": [
        "#cf3f4f"
    ],
    "dissolve": true,
    "adj": "suspicious",
    "dishWeight": -75,
    "keywords": "amogus,baka,among us",
    "h": 352,
    "s": 79,
    "l": 48
};

ingredients.steel_cube = {
    "color": [ "#7e7f80" ],
    "shape": "cube",
    "adj": "steeled",
    "dishName": "steel",
    "dishWeight": -35,
    "meltPoint": 1456, //sandboxels reference
    "meltInto": "molten_steel",
    "broken": "steel_shavings",
    "h": 210,
    "s": 1,
    "l": 64,
    "group": "other",
    "keywords": "metal,iron,steel"
};

ingredients.steel_shavings = {
    "color": [
        "#7e7f80"
    ],
    "type": "powder",
    "adj": "steel-dusted",
    "meltPoint": 1456,
    "meltInto": "molten_steel",
    "parts": [
        "steel_cube"
    ],
    "h": 210,
    "s": 1,
    "l": 64,
    "shape": "powder",
    "group": "other",
    "keywords": "metal,iron,steel,scrap"
}

ingredients.molten_steel = {
    "type": "liquid",
    "color": [
        "#ff7a00"
    ],
	glow: "#ffb16e",
    /*"reactions": {
        "meat": {
            "set1": "broth"
        },
        "vegetable": {
            "set1": "broth",
            "tempMin": 60
        },
        "bone": {
            "set1": "broth",
            "tempMin": 60
        }
    },*/
    "adj": "steel-dipped",
    "boilPoint": 2750,
    "boilInto": "steel_vapor",
    "freezePoint": 1456,
    "freezeInto": "steel_cube",
    "keywords": "metal,molten,liquid,iron",
    "h": 29,
    "s": 100,
    "l": 50,
    "shape": "liquid",
    "group": "other",
    "tempReact": true
};

ingredients.steel_vapor = {
    "type": "gas",
    "color": [
        "#ffb16e"
    ],
	"a": 0.8,
	glow: "#ffb16e",
    "keywords": "gas,boiled,vapor,vapour,metal,iron",
    "h": 28,
    "s": 100,
    "l": 72,
    "shape": "gas",
    "group": "other"
};

  tempCheck = function() { //I HATE REPLACING FUNCTIONS but there's no other way :(
    var view = viewData[currentView];
    view.temp = Math.min(3000, Math.max(-30, view.temp));
    // loop through view.total
    if (view.temp > 50) { // Cooking
      for (var i = 0; i < view.total.length; i++) {
        var ingredient = view.total[i];
        if ((!ingredient.done && !ingredient.done2) || ingredient.cook >= 1) continue;
        var cookColor = ingredientAttr(ingredient.id, "cookColor");
        if (cookColor && ticks % 5 === 0) {
          var rgb1 = hslToRgb(ingredient.h/360, ingredient.s/100, ingredient.l/100);
          var rgb2 = hslToRgb(cookColor[0]/360, cookColor[1]/100, cookColor[2]/100);
          // get 1% closer to cookColor
          var r = rgb1[0] + (rgb2[0] - rgb1[0]) * 0.01;
          var g = rgb1[1] + (rgb2[1] - rgb1[1]) * 0.01;
          var b = rgb1[2] + (rgb2[2] - rgb1[2]) * 0.01;
          var hsl = rgbToHsl(r, g, b);
          ingredient.h = hsl[0] * 360;
          ingredient.s = hsl[1] * 100;
          ingredient.l = hsl[2] * 100;
          ingredient.cook = (ingredient.cook ?? 0) + 0.005;
        }
        if (ingredientAttr(ingredient.id, "tempReact")) {
          checkReactions(ingredient);
        }
      }
    }
    for (var i = 0; i < view.total.length; i++) { // State Changes
      var ingredient = view.total[i];
      if (ingredient.hide) continue;
      if ((!ingredient.done && !ingredient.done2) || ingredient.pseudo || Math.random() > 0.1) continue;
      var meltPoint = ingredientAttr(ingredient.id, "meltPoint");
      if (view.temp >= meltPoint) {
        var meltInto = choose(ingredientAttr(ingredient.id, "meltInto"));
        if (meltInto) changeIngredient(ingredient, meltInto);
        else if (viewInfo[currentView].holdsLiquid) {
          addLiquid(ingredient.h, ingredient.s, ingredient.l);
          ingredient.pseudo = true;
          ingredient.hide = true;
          uncontainAll();
        }
        else {
          ingredient.shape = "liquid_splat";
          ingredient.pseudo = true;
          uncontainAll();
        }
        continue;
      }
      var boilPoint = ingredientAttr(ingredient.id, "boilPoint");
      if (boilPoint !== undefined) {
        var boilInto = choose(ingredientAttr(ingredient.id, "boilInto")) || "gas";
        if (view.temp >= boilPoint) {
          deleteIngredient(ingredient);
        }
        var boiledBehavior = ingredientAttr(boilInto, "behavior");
        if (ticks-lastPlacedGas >= 10 && view.temp >= boilPoint-30 && (view.temp >= boilPoint || (Math.random() < 0.25 && boiledBehavior === 3))) {
          // x = random number between leftBound and rightBound
          var x = Math.random() * (rightBound - leftBound) + leftBound;
          placeIngredient(boilInto, x, hitLine-50);
          lastPlacedGas = ticks;
          continue;
        }
      }
      var freezePoint = ingredientAttr(ingredient.id, "freezePoint");
      if (view.temp <= freezePoint) {
        var freezeInto = choose(ingredientAttr(ingredient.id, "freezeInto"));
        if (freezeInto) {
          changeIngredient(ingredient, freezeInto);
          continue;
        }
      }
    }
  }

function drain() {
	if(currentView !== "bowl") {
		if(!(confirm("Drain bowl?"))) { return }
	};
	for(var i = viewData.bowl.total.length - 1; i >= 0; i--) {
		var ingredient = viewData.bowl.total[i];
		if(!ingredient) { continue };
		if(ingredients[ingredient.id].shape == "liquid" && !(ingredient.lastImg.startsWith("../shapes/png/liquid_splat.png")) ) {
			viewData.bowl.total.splice(i,1)
		};
		viewData.bowl.liquid = viewData.bowl.liquidR = viewData.bowl.liquidG = viewData.bowl.liquidB = 0
	}
};

var options = document.getElementById("prepControls");
if(options) {
	if(document.getElementById("button-drain") == null) {
		var drainButton = document.createElement("button");
		drainButton.setAttribute("title","Drain");
		drainButton.setAttribute("id","button-drain");
		drainButton.setAttribute("onclick","drain()");
		var icon = document.createElement("img");
		icon.setAttribute("src","https://r74n.com/shapes/png/disc_hole.png");
		icon.classList.add("pixelart");
		icon.style.filter = "saturate(0) brightness(0.8) contrast(0.8)";
		drainButton.appendChild(icon);
		options.appendChild(drainButton)
	}
}
