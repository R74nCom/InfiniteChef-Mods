addIngredient("staircase", {
    "color": [
        "8b6950"
    ],
    "shape": "cuboid_stairs",
    "keywords": "stairs",
    "hidden": true,
    "broken": "sawdust"
});

addIngredient("sawdust", {
    "type": "powder",
    "color": [
        "8b6950"
    ],
    "shape": "powder_rough",
    "keywords": "wood",
    "hidden": true,
    reactions: {
        water: { set1:"paper" , set2:null }
    }
});

addIngredient("paper",{
    "color": "#e3e9f2",
    "stackShape": "rectangle_thinnest",
    "hidden": true,
    "adj": "writable",
    "height": "0.2",
    "shape": "rectangle_fold_top_right",
    reactions: {
        microplastic: { set1:"confetti" , set2:null }
    }
});

addIngredient("confetti",{
    "type": "powder",
    "color": ["#d93e48","#ef7d57","#ffe478","#a7f070","#00a3ca","#c53a9d"],
    hidden:true
});

addRecipe("&stack:staircase+doll+soy_sauce", "incident");
addRecipe("paper+sand", "sandpaper");
addRecipe("&stack:paper+sawdust+cream", "sawdust tortilla");
addRecipe("crab+confetti", "crab rave")
