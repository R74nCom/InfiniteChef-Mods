// Created by Cryonic Industries, https://github.com/Cryonic-Industries. Big thanks to the YouTube channel Tasting History for teaching me so much about Greco-Roman cuisine and history!
// I hope you have fun~! ^.^

// Garum Products

addIngredient("garum", {
    type: "liquid",
    group: "meat",
    shape: "liquid",
    placedShape: "droplets_some",
    landedShape: "liquid_splat",
    stackShape: "liquid_splat",
    behavior: 1,
    adj: "garum covered",
    keywords:"liquamen,fish sauce",
    color: "#6f4e37",
    reactions: {
        water: { set1: "hydrogarum" }
    }
});

addIngredient("hydrogarum", {
    type: "garum",
    group: "meat",
    shape: "liquid",
    placedShape: "droplets_some",
    landedShape: "liquid_splat",
    stackShape: "liquid_splat",
    behavior: 1,
    adj: "hydrogarum covered",
    keywords: "liquamen,fish sauce,diluted",
    color: "#bfa56f"
});

// Grape Must/Syrups

addIngredient("grape_must", {
    type: "liquid",
    group: "fruit",
    shape: "liquid",
    placedShape: "droplets_some",
    landedShape: "liquid_splat",
    stackShape: "liquid_splat",
    behavior: 1,
    adj: "must sweetened",
    keywords: "mustum,hepsema",
    boilPoint: 100,
    boilInto: "caroenum",
    color: "#462119"
});

addIngredient("caroenum", { // Two-thirds of the original volume
    type: "liquid",
    group: "fruit",
    shape: "liquid",
    placedShape: "droplets_some",
    landedShape: "liquid_splat",
    stackShape: "liquid_splat",
    behavior: 1,
    adj: "caroenum covered",
    boilPoint: 110,
    boilInto: "defrutum",
    keywords: "grape must,mustum,hepsema,siraion,syrup,carenum,2/3,two thirds,two-thirds",
    color: "#846b66"
});

addIngredient("defrutum", { // Half of the original volume
    type: "liquid",
    group: "fruit",
    shape: "liquid",
    placedShape: "droplets_some",
    landedShape: "liquid_splat",
    stackShape: "liquid_splat",
    behavior: 1,
    adj: "defrutum covered",
    boilPoint: 120,
    boilInto: "sapa",
    keywords: "grape must,mustum,hepsema,siraion,syrup,1/2,half",
    color: "#a3958f"
});

addIngredient("sapa", { // One-third of the original volume
    type: "paste",
    group: "fruit",
    dissolve: true,
    adj: "sapa covered",
    keywords: "grape must,mustum,hepsema,siraion,syrup,1/3,one third,one-third",
    color: "#c1b5b2",
});

editIngredient("raisin", {
    broken: "grape_must"
});

// Itrion / Pasteli

addRecipe("honey+sesame+nut?+berry?", "itrion");

// Meat Ingredients

addIngredient("blood", {
    type: "liquid",
    group: "meat",
    shape: "liquid",
    placedShape: "droplets_some",
    landedShape: "liquid_splat",
    stackShape: "liquid_splat",
    behavior: 1,
    adj: "blood covered",
    keywords: "sanguis,haima",
    color: "#8a0303",
});

addIngredient("caul_fat", {
    group: "meat",
    shape: "web",
    placedShape: "web",
    behavior: 0,
    adj: "cased",
    keywords: "casing,omentum,membrane,fishnet tights", // The last one LOL
    color: "#f2efe6",
});

/* WIP... addIngredient("flamingo_tongue", {
    type: "liquid",
    group: "meat",
    shape: "liquid",
    placedShape: "droplets_some",
    landedShape: "liquid_splat",
    stackShape: "liquid_splat",
    behavior: 1,
    adj: "flamboyant",
    keywords: "flamboyant,flamboyance",
    color: "#8a0303",
}); */

// Spices

addIngredient("long_pepper", {
    type: "black_pepper",
    shape: "rod_rough_thin",
    stackShape: "rod_rough_thin",
    brokenShape: "squares_some",
    adj: "strongly peppered",
    dishName: "long pepper",
    keywords: "pepper,spice,strong pepper",
});

addIngredient("silphium", {
    type: "herb",
    group: "vegetable",
    shape: "rod_flared_leafy",
    placedShape: "beans_some",
    stackShape: "rod_flared_leafy",
    brokenShape: "beans_some",
    behavior: 0,
    adj: "silphium",
    keywords: "laser,laserwort,laserpicium,lasarpicium,silphion,asafoetida,asafetida,devil's dung,devils dung",
    color: "#c9a227",
});

// Meat Meals

addRecipe("meat+caul_fat", "isicia");
