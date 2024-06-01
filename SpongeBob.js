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
addIngredient("uranium_dust",{
    type:"powder",
    color:"#526752",
    glow:"#00ff00",
    adj:"irritating",
    dissolve:true,
    shape:"powder_rough",
    hidden:true,
    dishWeight:-50
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
editIngredient("crab",{
        color:"#f14d38",
        type:"crustacean",
        keywords:"crustacean,seafood,mr krabs"
});
editIngredient("uranium",{
    shape:"rock",
    color:"#526752",
    glow:"#00ff00",
    adj:"glowy",
    broken:"uranium_dust",
    hidden:true
});

addRecipe("bread+jellyfish","jellyfish roll");
addRecipe("bread+true_krabby_meat+bread?","krabbydog");
addRecipe("uranium_dust+furikake+milkshake","kelp shake");
addRecipe("&stack:bottom_bun+true_krabby_meat+lettuce+cheese+barbecue_sauce+tomato+ketchup+mustard+pickle+top_bun","krabby patty");
addRecipe("&stack:bottom_bun+jellyfish+lettuce+cheese+barbecue_sauce+tomato+ketchup+mustard+pickle+top_bun","jelly patty",);
addRecipe("chocolate+rice_treat+kelp_nougat","kelp nougat crunch");
addRecipe("krabby patty+kelp shake+kelp nougat crunch","krusty krab meal");
