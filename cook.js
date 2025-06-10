addIngredient("wet_spaghetti", {
  color: "#c4a41b",
  innerColor: "#5b4c09",
  type: "pasta",
  shape: "helix_strand",
  keywords:"italy, italian, pasta, spaghetti, noodle",
});

addIngredient("spaghetti", {
  color: "#c8b81c",
  innerColor: "#5bba09",
  type: "pasta",
  shape: "rectangle_vertical_thinnest",
  keywords:"pasta, italy, italian, noodle",
  reactions: {
    water: {
      set1: "wet_spaghetti",
      tempMin: 90
    }
  }
});

addIngredient("Rigatoni", {
  color: "#c8a81c",
  innerColor: "#5b4c09",
  type: "pasta",
  shape: "rod_hollow",
  keywords:"pasta, italy, italian",
});


addIngredient("ricotta", {
  color: "#eeeeee",
  innerColor: "#999999",
  type: "cheese",
  type:"thick_liquid",
  shape: "clumps",
  keywords:"cheese, italy, italian",
});

addIngredient("farfalle", {
  color: "#c8a81c",
  innerColor: "#5b4c09",
  type: "pasta",
  shape: "bowtie",
  keywords:"pasta, italy, italian",
});


addIngredient("Fusilli", {
  color: "#c8a81c",
  innerColor: "#5b4c09",
  type: "pasta",
  shape: "coil",
  keywords:"pasta, italy, italian",
});


addIngredient("Ravioli.", {
  color: "#c8a81c",
  innerColor: "#5b4c09",
  type: "pasta",
  shape: "square_ridged",
  keywords:"pasta, italy, italian",
});


addIngredient("balsamic_vinegar", {
  color: "#272622",
  innerColor: "#111111",
  type: "liquid",
  shape: "liquid",
  adj: "balsamic",
  keywords:"vinegar, italy, italian",
});

addIngredient("romano", {
  color: "#eeeecc",
  innerColor: "#ccccaa",
  type: "cheese",
  shape: "wedge",
  keywords:"cheese, italy, italian",
});


addIngredient("asiago", {
  color: "#ddddbb",
  innerColor: "#aaaa88",
  type: "cheese",
  shape: "wedge",
  keywords:"cheese, italy, italian",
});


addIngredient("grissini", {
  color: "#b59038",
  innerColor: "#5948208",
  type: "bread",
  scale: "1.5",
  shape: "rectangle_thinnest",
  keywords:"bread, italy, italian",
});

addIngredient("red_wine_vinegar", {
  color: "#a31b2e",
  innerColor: "#6b0d0a",
  type: "liquid",
  shape: "liquid",
  adj: "red_wine",
  keywords:"vinegar, italy, italian, red",
});

addIngredient("apple_cider_vinegar", {
  color: "#dd7737",
  innerColor: "#97552c",
  type: "liquid",
  shape: "liquid",
  keywords:"vinegar, apple, cider",
});

addIngredient("apple_cider", {
  color: "#B35F23",
  innerColor: "#88481b",
  type: "liquid",
  shape: "liquid",
  adj: "cider",
  keywords:"vinegar, apple, cider",
});

addIngredient("white_wine_vinegar", {
  color: "#e5f3e0",
  innerColor: "#909f96",
  type: "liquid",
  shape: "liquid",
  adj: "white_wine",
  keywords:"vinegar, italy, italian, white",
});

addIngredient("espresso", {
  color: "#552e0d",
  innerColor: "#271606",
  type: "liquid",
  shape: "liquid",
  adj: "caffeinated",
  keywords:"coffee, strong, caffeine",
});

addIngredient("biscotti", {
  color: "#c89971",
  innerColor: "#ffffff",
  type: "bread",
  scale: "1.2",
  shape: "rectangle_thinner_round_porous",
  keywords:"bread, italy, italian",
});

addIngredient("limoncello", {
  color: "#FFFF30",
  innerColor: "##ffff81",
  type: "liquid",
  shape: "liquid",
  adj: "limon",
  keywords:"lemon, italy, italian, alcohol",
});


addIngredient("espresso_powder", {
  color: "#3a1f0f",
  innerColor: "#1d0f08",
  type: "powder",
  shape: "powder",
  keywords: "powder, coffee, caffeine, italy, italian",
});


addIngredient("couscous", {
  color: "#f2e8b3",
  innerColor: "#b39a67",
  type: "grain",
  shape: "dots_some_flat",
  keywords: "grain, italy, italian",
});

addIngredient("polenta", {
  color: "#e8d17a",
  innerColor: "#8c6a3d",
  type: "thick_liquid",
  shape: "powder",
  keywords: "cornmeal, italy, italian",
});

addIngredient("duck", {
  color: "#c99b7a",
  innerColor: "#7a463a",
  type: "meat",
  shape: "cutlet",
  keywords: "meat",
});

addIngredient("lamb", {
  color: "#e9b9b3",
  innerColor: "#8b5640",
  type: "meat",
  shape: "cutlet",
  keywords: "meat",
});

addIngredient("rabbit", {
  color: "#d9afb3",
  innerColor: "#8a6e42",
  type: "meat",
  shape: "cutlet",
  keywords: "meat",
});

addIngredient("burrata", {
  color: "#ffffff",
  innerColor: "#dddddd",
  type: "cheese",
  shape: "blob_short",
  keywords: "cheese, italy, italian",
});

addIngredient("dried_fig", {
  color: "#8c4b2e",
  innerColor: "#4a1f14",
  type: "fruit",
  shape: "bulb",
  keywords: "fruit, dried",
});

addIngredient("blood_orange", {
  color: "#d84315",
  innerColor: "#7a1f0a",
  type: "fruit",
  shape: "circle",
  keywords: "fruit, orange, blood",
});

addIngredient("swiss_chard", {
  color: "#5e8c46",
  innerColor: "#324e23",
  type: "vegetable",
  shape: "leaf",
  keywords: "vegetable, swiss, chard",
});


addIngredient("fennel_bulb", {
  color: "#dfe8d6",
  innerColor: "#7a8872",
  type: "vegetable",
  shape: "bulb",
  keywords: "vegetable, fennel, bulb",
});

addIngredient("red_onion", {
  color: "#c2636e",
  innerColor: "#6b2e36",
  type: "vegetable",
  shape: "bulb",
  keywords: "vegetable, onion, red",
});

addIngredient("cherry_tomato", {
  color: "#e74c3c",
  innerColor: "#a31b2e",
  type: "vegetable",
  shape: "circle",
  scale: "0.4",
  keywords: "vegetable, tomato, cherry",
});

addIngredient("marjoram", {
  color: "#7c8f5a",
  innerColor: "#4a5931",
  type: "herb",
  shape: "leaf",
  scale: ".8",
  keywords: "herb, leaf",
});


addIngredient("salsa_verde", {
  color: "#6b8c4a",
  innerColor: "#3a5028",
  type: "sauce",
  shape: "liquid",
  keywords: "salsa, sauce, parsley",
});
