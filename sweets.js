addIngredient("gummy_bear_head",{
    color:"#FF5E7B", "#FF9B5E", "#FFC95E", "#CCFF5E", "#5EFFA1", "#5ECEFF", "#B65EFF",//red
    type:"circle_ears",
    meltPoint: 120,
    meltInto: "caramel",
    keywords: "candy, gummy, bear"
});
addIngredient("candy_cane",{ 
    color:"white", //white
    type:"cane_striped",
    meltPoint: 120,
    meltInto: "caramel",
    brokenShape: "dots_some_flat"
});
addIngredient("colorful_shelled_pieces",{ 
    color:"#FF5E7B", "#FF9B5E", "#FFC95E", "#CCFF5E", "#5EFFA1", "#5ECEFF", "#B65EFF", //red
    type:"circle_xs",
    meltPoint: 120,
    meltInto: "caramel",
    dishName: "skittles",
    brokenShape: "dots_some_flat",
    keywords: "skittles, candy, pieces"
});
addIngredient("candy_heart",{ 
    color:"#FF5E7B", "#FF9B5E", "#FFC95E", "#CCFF5E", "#5EFFA1", "#5ECEFF", "#B65EFF", //red
    type:"heart_s",
    meltPoint: 120,
    meltInto: "caramel",
    brokenShape: "dots_some_flat"
});
addIngredient("honey_bun",{ 
    color:"#ECAD7A", //beige
    cookColor: "#8C582E", //brown
    cookName: "burnt_honey_bun",
    type:"whorl_circle",
    brokenShape: "dots_some_flat",
    stackShape: "blob_pile"
});
addIngredient("popsicle",{ 
    color:"#FF5E7B", "#FF9B5E", "#FFC95E", "#CCFF5E", "#5EFFA1", "#5ECEFF", "#B65EFF", //red
    type:"popsicle",
    meltPoint: 40,
    meltInto: "puddle",
    keywords: "pop, sicle",
    dissolve: true
});
addIngredient("lady_finger",{ 
    color:"#ECAD7A", //beige
    type:"rectangle_thinner_round",
    brokenShape: "dots",
    keywords: "finger, tiramisu"
});
addIngredient("coffee-covered_lady_finger",{ 
    color:"#8C582E", //brown
    type:"rectangle_thinner_round",
    brokenShape: "dots",
    keywords: "finger, tiramisu"
});
addIngredient("cotton_candy",{ 
    color:"#FFB9F3", "B9EEFF", //pink
    type:"clumps",
    meltPoint: 120,
    meltInto: "caramel",
    dissolve: true,
    keywords: "candy, floss, cotton"
});
addIngredient("dalgona",{ 
    color:"#F8C47B", //yellow
    type:"fisheye",
    meltPoint: 120,
    meltInto: "caramel",
    brokenShape: "dots_some_flat"
});
addIngredient("taiyaki",{ 
    color:"#F8C47B", //beige
    type:"fish",
    cookColor: "#CB894C",
    cookName: "crispy_taiyaki",
    broken: "crumbs"
});
addIngredient("churro",{ 
    color:"#ECAD7A", //beige
    cookColor: "#8C582E",
    cookName: "crispy_churro",
    type:"hexagonal_prism",
    height: 4,
    brokenShape: "dots_some_flat"
});
addIngredient("phyllo",{ 
    color:"#ECAD7A", //beige
    dishName: "phyllo_dough",
    type:"rectangle_thinnest",
    brokenShape: "dots_some_flat",
    keywords: "filo, dough"
});
addIngredient("chocolate_shelled_pieces",{ 
    color:"#FF5E7B", "#FF9B5E", "#FFC95E", "#CCFF5E", "#5EFFA1", "#5ECEFF", "#B65EFF", //red
    type:"circle_xs",
    meltPoint: 40,
    meltInto: "chocolate_icing",
    brokenShape: "dots_some_flat",
    dishName: "m&m's",
    keywords: "m&m, chocolate, candy, pieces"
});
addIngredient("chocolate_lava_cake",{ 
    color:"#602B1B", //brown
    type:"blob_short",
    broken: "chocolate_icing",
    keywords: "chocolate, cake, lava, melt"
});
addIngredient("vanilla_lava_cake",{ 
    color:"#FFCD97", //beige
    type:"blob_short",
    broken: "icing",
    keywords: "vanilla, cake, lava, melt"
});
addIngredient("strawberry_lava_cake",{ 
    color:"#F1C2C2", //pink
    type:"blob_short",
    brokenShape: "liquid_splat",
    keywords: "strawberry, cake, lava, melt"
});
addIngredient("strawberry_sauce",{ 
    color:"#FF7182", //pink
    type:"bottle_handle",
    dropInto: "strawberry_juice",
    dropIntoV: 10,
    keywords: "strawberry, sauce, icing, drizzle"
});
addIngredient("biscoff_cookie",{ 
    color:"#DC9154", //brown
    type:"rectangle_vertical_round",
    height: 2.75, 
    broken: "dots_some_flat",
    keywords: "cookie butter, biscoff, cookie"
});
addIngredient("fortune_cookie",{ 
    color:"#F9B965", //beige
    type:"lens",
    brokenShape: "banner",
    brokenShapeColor: "#FFFFFF", //white
    keywords: "cookie, fortune, chinese"
    adj: "fortunate",
    function showDialog() {
        alert("Your fortune: You are loved!");
    }
});
addIngredient("sour_kids",{ 
    color:"#FF494C", "#FF8C49", "#FFE949", "#49FF49", "#49E3FF" //red
    meltPoint: 120,
    meltInto: "caramel",
    type:"figure",
    broken: "dots",
    keywords: "sour, sour patch kids, kids, candy"
});
addIngredient("candy_corn",{ 
    color:"#FF8C49", "#FFFFFF", "#FFE949", //orange
    type:"triangle_round",
    scale: 0.5,
    brokenShape: "dots_some_flat",
    meltPoint: 120,
    meltInto: "caramel",
    keywords: "candy, halloween, corn"
});
addIngredient("pop_rocks",{ 
    color:"#602B1B", "#8349FF", "#FF49E9",//blue
    type:"dots_some_flat",
    meltPoint: 120,
    meltInto: "caramel",
    keywords: "candy, powder, rocks, pop, popping",
    onCollide: (self, other) => {
        changeIngredient(other,["steam"]);
});
addIngredient("swedish_fish",{ 
    color:"#FF494C", //red
    type:"fish",
    brokenShape: "liquid_splat",
    keywords: "fish, candy, swedish"
});
addIngredient("lady_finger",{
    reactions: {
        coffee: { set1:"coffee-covered_lady_finger" },
    }
});
addIngredient("caramel",{
    reactions: {
        baking_soda: { set1:"dalgona" },
    }
});
addIngredient("batter",{
    reactions: {
        azuki_bean: { set1:"taiyaki" },
    }
});
addIngredient("dough",{
    reactions: {
        oil: { set1:"phyllo" },
    }
});
addIngredient("biscoff_cookie",{
    reactions: {
        butter: { set1:"cookie_butter" },
        milk: { set1:"cookie_butter"},
    }
});

addIngredient("chocolate_ice_cream",{ 
    color:"#602B1B", //brown
    type:"scoop",
    dishWeight: 90,
    meltPoint: 30,
    meltInto: "chocolate_icing"
});

addIngredient("strawberry_ice_cream",{ 
    color:"#F1C2C2", //pink
    type:"scoop",
    dishWeight: 90,
    meltPoint: 30,
    meltInto: "strawberry_juice"
});

addIngredient("mint_ice_cream",{ 
    color:"#B7FF9F", //light green
    type:"scoop",
    dishWeight: 90,
    meltPoint: 30,
    meltInto: "cream"
});
editIngredient("sugar",{
    whipped: "cotton_candy",
});
editIngredient("pistachio",{
    brokenShape: "liquid_splat",
});
addRecipe("sugar+doll","diabetic person");

addRecipe("sugar+giant","diabetic person");

addRecipe("sugar+r74n","diabetic person");

addRecipe("sugar+baby doll","diabetic person");

addRecipe("honey bun+cinnamon+sugar?","cinnamon roll");

addRecipe("ice cream+strawberry ice cream+ chocolate ice cream","neapolitan ice cream");

addRecipe("dough+lemon juice+cream","lemon meringue pie");

addRecipe("dough+lime juice+cream","key lime pie");

addRecipe("cake+cream cheese+strawberry","strawberry shortcake");

addRecipe("banana+ice cream+cherry?+chocolate icing?","banana split");

addRecipe("donut+custard+chocolate icing","boston cream donut");

addRecipe("&stack:caramel+custard","crème brûlée");

addRecipe("&stack:yogurt+granola+strawberry?+blueberry?","parfait");

addRecipe("coffee-covered_lady_finger+custard+chocolate powder","tiramisu");

addRecipe("lady finger+chocolate icing+custard?", "eclair");

addRecipe("bread+egg+milk+sugar+cinnamon?","french toast");

addRecipe("pastry+icing+jam+sprinkles?","poptart");

addRecipe("=doll+candy heart+doll","couple");

addRecipe("=baby doll+candy heart+baby doll","couple");

addRecipe("pumpkin+candy corn","halloween");

addRecipe("=colorful shelled pieces+chocolate shelled pieces","which is which?");

addRecipe("=mint ice cream+chocolate chip","mint chocolate chip ice cream");

addRecipe("=sugar+chocolate powder +cream+eggs","chocolate mousse");

addRecipe("=sugar+vanilla extract+cream+eggs","vanilla mousse");

addRecipe("=giant+candy heart+giant","couple");

addRecipe("=r74n+candy heart+r74n","couple");

addRecipe("=caramel+baking soda","dalgona");

addRecipe("sugar+water+fruit juice","sorbet");

addRecipe("flour+oil+butter+apple","apple strudel");

addRecipe("flour+oil+butter+apple juice","apple strudel");

addRecipe("&stack:phyllo+syrup+nut?","baklava");

addRecipe("=chocolate+phyllo+pistachio","dubai chocolate");

addRecipe("sugar+flour+butter+egg+baking powder+vanilla extract?","blondie");

addRecipe("=batter+chocolate powder+red 40","red velvet cake");
