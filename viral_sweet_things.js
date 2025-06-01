addIngredient("gelatin_water", {
    type: "water",
    color: "#ebebeb",
    a: 0.2,
    boilPoint: 100,
    boilInto: "steam",
    freezePoint: 0,
    freezeInto: "ice_cube",
    keywords: "gelatin mixture"
});

addIngredient("melted_chocolate", {
    type: "chocolate",
    shape: "liquid",
    color: "#924b00",
    freezePoint: 45,
    freezeInto: "chocolate"
});

addIngredient("melted_white_chocolate", {
    type: "white_chocolate",
    shape: "liquid",
    color: "#f7e5e4",
    freezePoint: 45,
    freezeInto: "white_chocolate"
});

addIngredient("melted_dark_chocolate", {
    type: "dark_chocolate",
    shape: "liquid",
    color: "#1a0908",
    freezePoint: 45,
    freezeInto: "dark_chocolate"
});

addIngredient("kataifi_dough", {
    type: "dough",
    color: "#f5d398",
    group: "carb",
    cookColor: "#c9842a",
    cookInto: "fried_kataifi"
});

addIngredient("fried_kataifi", {
    type: "kataifi_dough",
    color: "#c9842a",
    dishWeight: 120
});

addIngredient("pistachio_paste", {
    type: "nut_butter",
    color: "#68943b",
    parts: ["pistachio"],
    adj: "pistachio"
});

editIngredient("pistachio", {
    broken: "pistachio_paste"
});

addIngredient("tahini_paste", {
    type: "nut_butter",
    color: "#f7f497",
    parts: ["sesame"],
    adj: "sesame"
});

editIngredient("sesame", {
    broken: "tahini_paste"
});

addIngredient("chocolate_covered_strawberry", {
    type: "strawberry",
    color: "#36100d",
    innerColor: "#F81F3C",
    shape: "pick",
    parts: ["strawberry", "chocolate"]
});

addIngredient("white_chocolate_covered_strawberry", {
    type: "strawberry",
    color: "#f7e5e4",
    innerColor: "#F81F3C",
    shape: "pick",
    parts: ["strawberry", "white_chocolate"]
});

addIngredient("dark_chocolate_covered_strawberry", {
    type: "strawberry",
    color: "#1a0908",
    innerColor: "#F81F3C",
    shape: "pick",
    parts: ["strawberry", "dark_chocolate"]
});

addIngredient("snail_bun", {
    type: "bun",
    shape: "spiral",
    color: "#d9ad61"
});

addIngredient("sugared_rose_flower", {
    type: "sakura",
    shape: "flower_rose",
    color: "#e35984",
    keywords: "candied rose"
});

addIngredient("sugared_lavender", {
    type: "sakura",
    shape: "leaf_rough",
    color: "#ad8aff",
    keywords: "candied lavender"
});

addIngredient("sugared_pansies_flower", {
    type: "sakura",
    shape: "flower_clover",
    color: "#71289e",
    keywords: "candied pansies"
});

addIngredient("rose_kohakutou_jelly", {
    type: "candy",
    shape: "rock",
    color: "#e35984",
    adj: "rose",
    keywords: "gem candy"
});

addIngredient("lavender_kohakutou_jelly", {
    type: "candy",
    shape: "rock_ball",
    color: "#ad8aff",
    adj: "lavender",
    keywords: "gem candy"
});

addIngredient("pansies_kohakutou_jelly", {
    type: "candy",
    shape: "crystal",
    color: "#71289e",
    adj: "pansies",
    keywords: "gem candy"
});

addIngredient("gummy_bear", {
    type: "candy",
    shape: "circle_ears",
    color: ["#c93224", "#c95b24", "#fce321", "#9dfc21", "#9621fc", "#fc218b"],
    keywords: "gummy candy, bear",
    meltPoint: 60,
    meltInto: "sugar"
});

addIngredient("soaked_gummy_bear", {
    type: "gummy_bear",
    color: ["#c93224", "#c95b24", "#fce321", "#9dfc21", "#9621fc", "#fc218b"],
    a: 0.2,
    freezePoint: -10,
    freezeInto: "frozen_soaked_gummy_bear",
    keywords: "expanded gummy, fizzy bear"
});

addIngredient("frozen_soaked_gummy_bear", {
    type: "soaked_gummy_bear",
    color: ["#c93224", "#c95b24", "#fce321", "#9dfc21", "#9621fc", "#fc218b"],
    a: 0.4,
    meltPoint: 5,
    meltInto: "soaked_gummy_bear",
    keywords: "frozen gummy, slushy bear"
});

addRecipe("&stack:chocolate+fried_kataifi+pistachio_paste+tahini_paste", "dubai chocolate");
addRecipe("&stack:snail_bun+cream_cheese+cinnamon", "cinnabon");
addRecipe("sugared_rose_flower+gelatin_water&heat", "rose_kohakutou_jelly");
addRecipe("sugared_lavender+gelatin_water&heat", "lavender_kohakutou_jelly");
addRecipe("sugared_pansies_flower+gelatin_water&heat", "pansies_kohakutou_jelly");
addRecipe("water+gelatin", "gelatin_water");
addRecipe("gummy_bear+seltzer", "soaked_gummy_bear");
addRecipe("soaked_gummy_bear&cold", "frozen_soaked_gummy_bear");

editIngredient("melted_chocolate", {
    reactions: {
        strawberry: { set1: "chocolate_covered_strawberry" }
    }
});

editIngredient("melted_white_chocolate", {
    reactions: {
        strawberry: { set1: "white_chocolate_covered_strawberry" }
    }
});

editIngredient("melted_dark_chocolate", {
    reactions: {
        strawberry: { set1: "dark_chocolate_covered_strawberry" }
    }
});

editIngredient("chocolate", {
    reactions: {
        strawberry: { tempMin: 45, set1: "chocolate_covered_strawberry" }
    }
});

editIngredient("white_chocolate", {
    reactions: {
        strawberry: { tempMin: 45, set1: "white_chocolate_covered_strawberry" }
    }
});

editIngredient("dark_chocolate", {
    reactions: {
        strawberry: { tempMin: 45, set1: "dark_chocolate_covered_strawberry" }
    }
});

editIngredient("seltzer", {
    reactions: {
        gummy_bear: { set1: "soaked_gummy_bear" }
    }
});

editIngredient("soaked_gummy_bear", {
    reactions: {
        cold: { tempMax: -10, set1: "frozen_soaked_gummy_bear" }
    }
});
