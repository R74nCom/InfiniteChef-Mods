// More info about enabling, testing, and submitting mods: https://R74ncom.github.io/InfiniteChef-Mods/

// Add a basic ingredient using the 'fruit' ingredient as a base
addIngredient("nougat",{
    type:"thick_liquid",
    color:"#b69885",
    adj:"nougat",
    reactions: {
        wakame: { set1:"kelp_nougat", set2:null },
    },
});
addIngredient("kelp_nougat",{
    type:"thick_liquid",
    color:"#85B689",
    adj:"kelp",
    hidden:true
});
addIngredient("rice_treat",{
    color:["#d2cdad","#e1d4be"],
    group:"carb",
    shape:"noodles",
    type:"cereal",
    broken:"fluff"
});
addIngredient("wakame",{
    type:"spice",
    color:"#2b8e2b",
    keywords:"seaweed",
    reactions: {
        sesame: { set1:"furikake" , set2:null },
        sugar: { set1:"furikake" , set2:null },
        salt: { set1:"furikake" , set2:null },
    },
});
addIngredient("furikake",{
    type:"spice",
    color:"#2b8e2b",
    keywords:"spice",
    reactions: {
        salt: { set1:"krabby_patty_seasoning" , set2:null },
    },
});
addIngredient("krabby_patty_seasoning",{
    type:"spice",
    color:"#DFE1A4",
    keywords:"seaweed,krabby,seasoning",
    adj:"addictive",
    hidden:true,
    reactions: {
        crab_patty: { set2:"true_krabby_meat" , set1:null },
    },
});
addIngredient("true_krabby_meat",{
    color:"#ff4d58",
    type:"crustacean",
    shape:"rectangle_thinner_round",
    hidden:true,
    height:0.5
});
addIngredient("imitation_crab",{
    color:"#ff9b48",
    cookColor:"#ff6523",
    shape:"foliage_bar",
    keywords:"crustacean,seafood,substitute",
    broken:"crab_patty"
});
addIngredient("crab_patty",{
    color:"#ff9b48",
    cookColor:"#ff6523",
    shape:"rectangle_thinner_round",
    keywords:"crustacean,seafood,substitute"
});
addIngredient("jellyfish",{
    color:"#fec5d6",
    cookColor:"#ffe2ce",
    type:"meat",
    shape:"jellyfish",
    keywords:"pink jellyfish,seafood",
    adj:"squishy",
});
addIngredient("spoon",{
    type:"utensil",
    shape:"rod_circle",
    hidden:true,
    height:0.5,
    r:[90,135]
});

editIngredient("seaweed",{
    color:"#2b8e2b",
    type:"vegetable",
    shape:"algae",
    stackShape:"rectangle_thinner",
    keywords:"algae",
    broken:"wakame"
});
editIngredient("rice",{
    color:"#d2cdad",
    group:"carb",
    shape:"beans_some",
    placedShape:"beans_some",
    type:"powder",
    reactions: {
        marshmallow: { set1:"rice_treat", set2:null, tempMin:180 },
        fluff: { set1:"rice_treat", set2:null, tempMin:180 },
    },
    pin:true,
    broken:"flour"
});

addRecipe("bread+jellyfish","jellyfish roll");
addRecipe("bread+true_krabby_meat+bread?","krabbydog");
addRecipe("uranium+furikake+milkshake","kelp shake");
addRecipe("&stack:bottom_bun+true_krabby_meat+lettuce+cheese+onion+onion+tomato+tomato+ketchup+mustard+pickle+pickle+mayonnaise+top_bun+sesame","krabby patty");
addRecipe("&stack:bottom_bun+jellyfish+lettuce+cheese+onion+onion+tomato+tomato+ketchup+mustard+pickle+pickle+mayonnaise+top_bun+sesame","jelly patty",);
addRecipe("chocolate+rice_treat+kelp_nougat","kelp nougat crunch");