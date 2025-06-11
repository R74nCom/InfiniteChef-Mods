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

addIngredient("rigatoni", {
  color: "#c8a81c",
  innerColor: "#5b4c09",
  type: "pasta",
  shape: "cylinder_topless",
  scale: "0.8",
  keywords:"pasta, italy, italian",
});

addIngredient("ziti", {
  color: "#c8a81c",
  innerColor: "#5b4c09",
  type: "pasta",
  shape: "rod_hollow",
  keywords:"pasta, italy, italian",
});



addIngredient("ricotta", {
  color: "#eeeeee",
  innerColor: "#999999",
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


addIngredient("Ravioli", {
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
  innerColor: "#594820",
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
  keywords:"apple, cider",
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
  innerColor: "#ffff81",
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
  scale: ".7",
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
  scale: ".9",
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
  scale: ".9",
  shape: "cutlet",
  keywords: "meat",
});

addIngredient("burrata", {
  color: "#ffffff",
  innerColor: "#dddddd",
  type: "cheese",
  shape: "blob_short",
  scale: "1.1",
  keywords: "cheese, italy, italian",
});

addIngredient("dried_fig", {
  color: "#8c4b2e",
  innerColor: "#4a1f14",
  type: "fruit",
  shape: "bulb",
  scale: ".9",
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
  shape: "circle_s",
  scale: "0.9",
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

addIngredient("quinoa", {
  color: "#C8A46C",
  innerColor: "#866d46",
  type: "powder",
  shape: "dots_some_flat",
  keywords: "salsa, sauce, parsley",
});

addIngredient("pufferfish", {
  color: "#f1c27d",
  innerColor: "#d99a5b",
  type: "fish",
  shape: "fish",
  scale: 1,
  keywords: "puffer, fish",  
  reactions: {
    fish: {
      set1: "inflated_puffer",
    }
  }
});

addIngredient("inflated_puffer", {
  color: "#f1c27d",
  innerColor: "#d99a5b",
  type: "fish",
  shape: "fish",
  scale: 3,
  keywords: "puffer, fish",
});



addRecipe("spaghetti+ricotta+cherry_tomato+marjoram?", "spaghetti_ricotta_fresca");
addRecipe("duck+blood_orange+honey+salt?+black_pepper?", "duck_a_lorange");
addRecipe("ziti+ricotta+tomato_sauce+mozzarella?+parmesan?", "baked_ziti");
addRecipe("burrata+cherry_tomato+basil+olive_oil+salt?", "burrata_caprese");
addRecipe("rabbit+carrot+onion+potato?+broth", "rabbit_stew");
addRecipe("duck+blood_orange+butter?+thyme??", "duck_a_lorange");  // same as above
addRecipe("biscotti+espresso_powder", "espresso_biscotti");
addRecipe("rabbit+polenta+red_onion+fennel_bulb?", "rabbit_ragu_polenta");
addRecipe("couscous+swiss_chard+red_onion+romano?", "couscous_verdura");
addRecipe("blood_orange+fennel_bulb+white_wine_vinegar+marjoram?", "fennel_orange_salad");
addRecipe("ricotta+flour+egg+sugar+lemon_zest", "ricotta_pancakes");
addRecipe("duck+red_wine+garlic+onion", "braised_duck");
addRecipe("couscous+zucchini+olive_oil+lemon_juice", "couscous_salad");
addRecipe("burrata+fig+balsamic_vinegar+mint?", "burrata_fig_plate");
addRecipe("swiss_chard+garlic+olive_oil+red_pepper_flakes", "sauteed_chard");
addRecipe("ricotta+spinach+parmesan+egg", "ricotta_spinach_filling");
addRecipe("fennel_bulb+orange+radicchio+vinaigrette", "fennel_radicchio_salad");
addRecipe("rabbit+mustard+cream+white_wine", "rabbit_mustard_sauce");
addRecipe("duck+potato+thyme+garlic", "duck_confit_plate");
addRecipe("couscous+tomato+cucumber+mint+lemon_juice", "couscous_tabbouleh");
addRecipe("&stack:grissini+prosciutto+fig", "grissini_prosciutto_stack");
addRecipe("&stack:burrata+cherry_tomato+olive_oil", "stacked_burrata");
addRecipe("&stack:ricotta+biscotti+espresso_powder", "espresso_parfait");
addRecipe("salsa_verde+potato+egg", "argentine_potato_salad");
addRecipe("spaghetti+duck+olive_oil+black_pepper", "duck_pasta");
addRecipe("blood_orange+duck+arugula+vinaigrette", "duck_salad");
addRecipe("chicken+lemon+rosemary", "roast_lemon_rosemary_chicken");
addRecipe("beef+onion+red_wine", "classic_beef_bourguignon");
addRecipe("tomato+mozzarella+basil", "caprese_salad");
addRecipe("eggplant+tomato+sun_dried_tomato+garlic", "eggplant_parmesan_bake");
addRecipe("salmon+dill+lemon", "grilled_dill_salmon");
addRecipe("mushroom+cream+garlic", "creamy_garlic_mushroom_sauce");
addRecipe("clam+garlic+white_wine", "spaghetti_alle_vongole");
addRecipe("potato+cream+cheddar", "cheddar_potato_gratin");
addRecipe("tofu+soy_sauce+ginger_root+garlic", "ginger_garlic_tofu_stirfry");
addRecipe("shrimp+chili_pepper+lime", "spicy_lime_shrimp");
addRecipe("beef+carrot+celery+onion", "hearty_beef_stew");
addRecipe("zucchini+tomato+feta+olive_oil", "greek_style_zucchini_salad");
addRecipe("pork+apple+sage", "sage_apple_pork_roast");
addRecipe("lentils+carrot+onion+cumin", "spiced_lentil_soup");
addRecipe("duck+orange+ginger_root", "orange_ginger_duck");
addRecipe("chickpea+spinach+tomato+cumin", "spinach_chickpea_curry");
addRecipe("pumpkin+coconut_milk+chili_pepper", "spicy_pumpkin_coconut_soup");
addRecipe("beef+black_pepper+soy_sauce", "peppercorn_teriyaki_steak");
addRecipe("cauliflower+curry_powder+coconut_milk", "curried_coconut_cauliflower");
addRecipe("chicken+curry_powder+yogurt+garlic", "creamy_tikka_masala_chicken");
addRecipe("rice+chicken+peas+carrot", "classic_chicken_fried_rice");
addRecipe("beef+onion+soy_sauce+ginger_root", "ginger_soy_teriyaki_beef");
addRecipe("pasta+shrimp+tomato+garlic", "garlic_tomato_shrimp_pasta");
addRecipe("mushroom+spinach+cream+parmesan", "creamy_spinach_mushroom_pasta");
addRecipe("egg+spinach+cheddar", "fluffy_spinach_cheddar_omelette");
addRecipe("quinoa+black_bean+corn+lime", "zesty_quinoa_black_bean_salad");
addRecipe("sweet_potato+black_bean+corn+chili_pepper", "spicy_sweet_potato_bowl");
addRecipe("chicken+peanut_butter+soy_sauce+lime", "thai_peanut_chicken_bowl");
addRecipe("tofu+peanut_butter+ginger_root+lime", "thai_peanut_tofu_stirfry");
addRecipe("&stack:bread+cheddar+tomato+lettuce", "classic_club_sandwich_stack");


addTool("pastafyer", {
  func: function(placed) {
    placed.shape = "semitorus_thick_hollow";  // Change shape only
  },
  onClick: function(x, y) { console.log(x, y); },
  shape: "semitorus_thick_hollow",
  spin: true,
  color: "#c4a41b"  // pasta yellow color
});



