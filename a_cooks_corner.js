//hi
//im making this mod because i need to push out the first good food mod
//haha fuck you sq achefsdream ic edition wont be the first good food mod :)


//flowers

addIngredient("blue_jazz",{
    color:"#3B55F7",
    type:"decor",
    shape:"foliage",
    scale:0.5,
    keywords:"flower,petal"
});

addIngredient("tulip",{
    color:["#F74040","#FF540A","#FF9FBF","#FFBEFF","#E8C3FF","#FFFA0A"],
    type:"decor",
    shape:"flower",
    scale:0.5,
    keywords:"flower,petal"
});

addIngredient("poppy",{
    color:["#FC0000","#FCA800","#FBFBFD"],
    type:"decor",
    shape:"circle_orbits",
    scale:0.5,
    keywords:"flower,petal"
});

addIngredient("sunflower",{
    color:["#FFBE00"],
    type:"decor",
    shape:"flower_clover",
    scale:0.5,
    keywords:"flower,petal",
    broken:"sunflower_seed",
});

//artisan others

addIngredient("goat_cheese",{
    type:"cheese",
    color:"#FFFFC9",
});

addIngredient("jelly",{
    type:"paste",
    color:"#AE0000",
});
addIngredient("caviar",{
    type:"powder",
    color:"#1B1A1D",
});

addIngredient("fried_egg",{
    color:"#FFF0B2",
    shape:"egg_yolk",
    placedShape:"egg_yolk",
    type:"thick_liquid",
    group:"protein_other",
    dishName:"fried_egg",
    dissolve:true,
    dishWeight:-50,
    parts:null
});

//vegetables

addIngredient("hops",{
    color:"#45B73A",
    group: "vegetable",
    type:"vegetable",
    shape:"ovoid_scaly",
    broken:"pale_ale",
    dishWeight:-30,
});

addIngredient("truffle",{
    color:"#7C3412",
    group: "vegetable",
    type:"vegetable",
    shape:"gas",
    broken:"truffle_oil",
    dishWeight:-30,
});

addIngredient("morel",{
    type:"mushroom",
    color:"#CD8847",
    shape: "honeycomb",
});

addIngredient("red_mushroom",{
    type:"mushroom",
    color:"#D33300",
});


//fruit

addIngredient("salmonberry",{
    type:"berry",
    color:"#D80033",
    shape: "bunch",
});

addIngredient("spice_berry",{
    type:"berry",
    color:"#CE6104",
    shape: "bunch",
});

//fish
/*
addIngredient("pufferfish",{
        color:"#005982",
        type:"fish",
        scale:0.8
});
*/
addIngredient("anchovy",{
        color:"#4391BA",
        type:"fish",
        scale:1.1
    });
addIngredient("sardine",{
        color:"#79BCD2",
        type:"fish"
    });
addIngredient("bream",{
        color:"#3084A3",
        type:"fish",
        scale:1.1
    });
addIngredient("largemouth_bass",{
        color:"#598F0A",
        type:"fish",
        scale:1.3
    });
addIngredient("smallmouth_bass",{
        color:"#B77416",
        type:"fish"
    });
addIngredient("rainbow_trout",{
        color:"#F7AF53",
        type:"fish",
        scale:1.1
    });
addIngredient("walleye",{
        color:"#AA8D2D",
        type:"fish",
        scale:1.1
    });
addIngredient("perch",{
        color:"#C49825",
        type:"fish"
    });
addIngredient("carp",{
        color:"#E5B650",
        type:"fish",
        scale:1.1
    });
addIngredient("catfish",{
        color:"#54473C",
        type:"fish",
        scale:1.2
});
addIngredient("pike",{
    color:"#C3A646",
    type:"fish"
});
addIngredient("sunfish",{
    color:"#855325",
    type:"fish"
});
addIngredient("red_mullet",{
    color:"#FF9393",
    type:"fish",
    scale:1.1
});
addIngredient("eel",{
    color:"#E2B212",
    shape: "worm",
    type:"fish",
    scale:1.3
});
addIngredient("red_snapper",{
    color:"#E05555",
    type:"fish",
    scale:0.7
});
addIngredient("flounder",{
    color:"#F1B25C",
    type:"fish",
    scale:1.4
});
addIngredient("sturgeon",{
    color:"#F4C2BE",
    type:"fish"
});
addIngredient("tiger_trout",{
    color:"#8E5C15",
    type:"fish"
});
addIngredient("bullhead",{
    color:"#953B0A",
    type:"fish"
});
addIngredient("tilapia",{
    color:"#C08665",
    type:"fish",
    scale:1.1
});
addIngredient("chub",{
    color:"#ADA497",
    type:"fish",
    scale:0.9
});
addIngredient("dorado",{
    color:"#EF782D",
    type:"fish",
    scale:1.1
});
addIngredient("albacore",{
    color:"#0088F4",
    type:"fish"
});
addIngredient("shad",{
    color:"#729171",
    type:"fish"
});
addIngredient("lingcod",{
    color:"#986E55",
    type:"fish"
});
addIngredient("halibut",{
    color:"#515151",
    type:"fish",
    scale:1.1
});
/*
addIngredient("stingray",{
    color:"#E5B650",
    type:"fish"
});
*/
addIngredient("lionfish",{
    color:"#FF6729",
    type:"fish"
});
addIngredient("blue_discus",{
    color:"#16D0E5",
    type:"fish",
    scale:0.8
});
addIngredient("goby",{
    color:"#B96F00",
    type:"fish"
});
addIngredient("crayfish",{
    color:"#4C3F3A",
    shape: "lobster",
    type:"fish"
});


//liquids
addIngredient("pale_ale",{
    type:"alcohol",
    color:"#FFD284",
    reactions:null
});

addIngredient("truffle_oil",{
    type:"oil",
    color:"#FFD063",
    reactions:null
});

addIngredient("mead",{
    type:"alcohol",
    color:"#FFDF60",
    reactions:null
});

addIngredient("goat_milk",{
    type:"milk",
    color:"#F7EFE1",
});



addIngredient("truffle_oil",{
    type:"oil",
    color:"#FFD063",
    reactions:null
});



//tools

//edits


/*
editIngredient("vinegar",{
    reactions: {
        goat_milk: { set1: null, set2:"goat_cheese" },
        milk: { set1: null, set2:"cheese" },
    },
});

if (!ingredients.alcohol.reactions) {
editIngredient("alcohol",{
    reactions: {
        honey: { set1:"mead", set2:null },
        hops: { set1:"pale_ale", set2:null },
    },
});
}

editIngredient("yolk",{
    meltPoint:80,
    meltInto:"fried_egg",
});
*/

//recipes

addRecipe("cauliflower+cheese","cheese cauliflower");

addRecipe("&bowl:parsnip+milk+vinegar","parsnip soup");

addRecipe("&stack:tomato+beetroot","vegetable medley");

addRecipe("&stack:sunfish+bream+flour","baked fish");

addRecipe("&stack:potato+oil","hashbrowns");

addRecipe("&stack:hashbrowns+pancake+fried_egg+milk","complete breakfast");

addRecipe("&stack:squid+flour+oil","fried calamari");

addRecipe("&stack:mushroom+mushroom+oil","fried mushroom");

addRecipe("&bowl:green_bean+green_bean+water","bean hotpot");

addRecipe("yam+icing","glazed yams");

addRecipe("carp+lettuce+pea","carp suprise");

addRecipe("&stack:salmon+kale","salmon dinner");

addRecipe("largemouth_bass+flour","crispy bass");

addRecipe("pepper+cheese","pepper poppers");

addRecipe("&bowl:coconut+shrimp+mushroom+broth","tom kha soup");

addRecipe("&bowl:rainbow_trout+broth+herb","trout soup");

addRecipe("cake+sprinkles?+chocolate","chocolate cake");

addRecipe("cake+sprinkles?+melon","pink cake");

addRecipe("cake+sprinkles?+rhubarb","rhubarb pie");

addRecipe("eel+flour","fried eel");

addRecipe("fish+rice+seaweed","maki roll");

addRecipe("&stack:red_cabbage+radish+tomato_sauce","red plate");

addRecipe("&stack:eggplant+parmesan+tomato_sauce","eggplant parmesan");

addRecipe("&bowl:rice+sugar","rice pudding");

addRecipe("&stack:blueberry+sugar+bread","blueberry tart");

addRecipe("&bowl:pumpkin+milk","pumpkin soup");

addRecipe("&bowl:bread+cranberry+sugar","stuffing");
