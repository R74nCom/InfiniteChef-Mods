addIngredient("gummy_bear_head",{
    color:"#FF5E7B", "#FF9B5E", "#FFC95E", "#CCFF5E", "#5EFFA1", "#5ECEFF", "#B65EFF",
    shape:"circle_ears",
    type: "candy",
    meltPoint: 120,
    meltInto: "caramel",
    keywords: "candy, gummy, bear"
});
addIngredient("candy_cane",{ 
    color:"white", //white
    type: "candy",
    shape:"cane_striped",
    meltPoint: 120,
    meltInto: "caramel",
    brokenShape: "dots_some_flat"
});
addIngredient("colorful_shelled_pieces",{ 
    color:"#FF5E7B", "#FF9B5E", "#FFC95E", "#CCFF5E", "#5EFFA1", "#5ECEFF", "#B65EFF",
    shape:"circle_xs",
    meltPoint: 120,
    type: "candy",
    meltInto: "caramel",
    dishName: "skittles",
    brokenShape: "dots_some_flat",
    keywords: "skittles, candy, pieces"
});
addIngredient("candy_heart",{ 
    color:"#FF5E7B", "#FF9B5E", "#FFC95E", "#CCFF5E", "#5EFFA1", "#5ECEFF", "#B65EFF",
    shape:"heart_s",
    type: "candy",
    meltPoint: 120,
    meltInto: "caramel",
    brokenShape: "dots_some_flat"
});
addIngredient("honey_bun",{ 
    color:"#ECAD7A", //beige
    type: "carb",
    cookColor: "#8C582E", //brown
    cookName: "burnt_honey_bun",
    shape:"whorl_circle",
    brokenShape: "dots_some_flat",
    stackShape: "blob_pile"
});
addIngredient("popsicle",{ 
    color:"#FF5E7B", "#FF9B5E", "#FFC95E", "#CCFF5E", "#5EFFA1", "#5ECEFF", "#B65EFF",
    shape:"popsicle",
    meltPoint: 40,
    meltInto: "puddle",
    keywords: "pop, sicle",
    dissolve: true
});
addIngredient("lady_finger",{ 
    color:"#ECAD7A", //beige
    type: "carb",
    shape:"rectangle_thinner_round",
    brokenShape: "dots",
    keywords: "finger, tiramisu"
});
addIngredient("coffee-covered_lady_finger",{ 
    color:"#8C582E", //brown
    type: "carb",
    shape:"rectangle_thinner_round",
    brokenShape: "dots",
    keywords: "finger, tiramisu"
});
addIngredient("cotton_candy",{ 
    color:"#FFB9F3", "B9EEFF", //pink
    shape:"clumps",
    type: "candy",
    meltPoint: 120,
    meltInto: "caramel",
    dissolve: true,
    keywords: "candy, floss, cotton"
});
addIngredient("dalgona",{ 
    color:"#F8C47B", //yellow
    shape:"fisheye",
    type: "candy",
    meltPoint: 120,
    meltInto: "caramel",
    brokenShape: "dots_some_flat"
});
addIngredient("taiyaki",{ 
    color:"#F8C47B", //beige
    type: "carb",
    shape:"fish",
    cookColor: "#CB894C",
    cookName: "crispy_taiyaki",
    broken: "crumbs"
});
addIngredient("churro",{ 
    color:"#ECAD7A", //beige
    type: "carb",
    cookColor: "#8C582E",
    cookName: "crispy_churro",
    shape:"hexagonal_prism",
    height: 4,
    brokenShape: "dots_some_flat"
});
addIngredient("phyllo",{ 
    color:"#ECAD7A", //beige
    type: "carb",
    dishName: "phyllo_dough",
    shape:"rectangle_thinnest",
    brokenShape: "dots_some_flat",
    keywords: "filo, dough"
});
addIngredient("chocolate_shelled_pieces",{ 
    color:"#FF5E7B", "#FF9B5E", "#FFC95E", "#CCFF5E", "#5EFFA1", "#5ECEFF", "#B65EFF",
    shape:"circle_xs",
    type: "candy",
    meltPoint: 40,
    meltInto: "chocolate_icing",
    brokenShape: "dots_some_flat",
    dishName: "m&m's",
    keywords: "m&m, chocolate, candy, pieces"
});
addIngredient("chocolate_lava_cake",{ 
    color:"#602B1B", //brown
    type: "cake",
    shape:"blob_short",
    broken: "chocolate_icing",
    keywords: "chocolate, cake, lava, melt"
});
addIngredient("vanilla_lava_cake",{ 
    color:"#FFCD97", //beige
    type: "cake",
    shape:"blob_short",
    broken: "icing",
    keywords: "vanilla, cake, lava, melt"
});
addIngredient("strawberry_lava_cake",{ 
    color:"#F1C2C2", //pink
    type: "cake",
    shape:"blob_short",
    brokenShape: "liquid_splat",
    keywords: "strawberry, cake, lava, melt"
});
addIngredient("strawberry_sauce",{ 
    color:"#FF7182", //pink
    type: "liquid",
    shape:"bottle_handle",
    dropInto: "strawberry_juice",
    dropIntoV: 10,
    keywords: "strawberry, sauce, icing, drizzle"
});
addIngredient("biscoff_cookie",{ 
    color:"#DC9154", //brown
    type: "carb",
    shape:"rectangle_vertical_round",
    height: 2.75, 
    broken: "dots_some_flat",
    keywords: "cookie butter, biscoff, cookie"
});
addIngredient("fortune_cookie",{ 
    type: "carb",
    color:"#F9B965", //beige
    shape:"lens",
    brokenShape: "banner",
    brokenShapeColor: "#FFFFFF", //white
    keywords: "cookie, fortune, chinese",
    adj: "fortunate",
    function showDialog() {
        alert("Your fortune: You are loved!");
    }
});
addIngredient("sour_kids",{ 
    color:"#FF494C", "#FF8C49", "#FFE949", "#49FF49", "#49E3FF",
    type: "candy",
    meltPoint: 120,
    meltInto: "caramel",
    shape:"figure",
    broken: "dots",
    keywords: "sour, sour patch kids, kids, candy"
});
addIngredient("candy_corn",{ 
    color:"#FF8C49", "#FFFFFF", "#FFE949",
    shape:"triangle_round",
    type: "candy",
    scale: 0.5,
    brokenShape: "dots_some_flat",
    meltPoint: 120,
    meltInto: "caramel",
    keywords: "candy, halloween, corn"
});
addIngredient("pop_rocks",{ 
    color:"#602B1B", "#8349FF", "#FF49E9",
    shape:"dots_some_flat",
    type: "candy",
    meltPoint: 120,
    meltInto: "caramel",
    keywords: "candy, powder, rocks, pop, popping",
    onCollide: (self, other) => {
        changeIngredient(other,["steam"]);
});
addIngredient("swedish_fish",{ 
    color:"#FF494C", //red
    type: "candy",
    shape:"fish",
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
    shape:"scoop",
    type: "dairy",
    dishWeight: 90,
    meltPoint: 30,
    meltInto: "chocolate_icing"
});

addIngredient("strawberry_ice_cream",{ 
    color:"#F1C2C2", //pink
    type: "dairy",
    shape:"scoop",
    dishWeight: 90,
    meltPoint: 30,
    meltInto: "strawberry_juice"
});

addIngredient("mint_ice_cream",{ 
    color:"#B7FF9F", //light green
    type: "dairy",
    shape:"scoop",
    dishWeight: 90,
    meltPoint: 30,
    meltInto: "cream"
});
addIngredient("creme_egg",{
    color:"#602B1B","#FFCD97", //brown
    shape:"ovoid",
    meltPoint: 40,
    meltInto: "chocolate_icing",
    dropInto: "cream",
    dropIntoV: 10,
    dishWeight: -50,
    brokenShape: "dots_some_flat",
    keywords: "cadbury, cream, egg, creme, easter"
});
addIngredient("dragon's_beard",{
    color:"#9EEAFF", //blue
    type: "candy",
    shape:"noodles",
    meltPoint: 120,
    meltInto: "caramel",
    keywords: "beard, candy, dragon",
    dissolve: true
});
addIngredient("pixie_dust",{
    color: shapeMeta.colorsPastel,
    glow: "#FFFBE3",
    shape:"powder_wavy",
    placedShape:"dots_some",
    meltPoint: 40,
    meltInto: "sugar",
    keywords: "dust, pixie, candy, sugar",
    dissolve: true
});
addIngredient("chocolate_coin",{
    color:"#C0923C", //gold
    type: "chocolate",
    shape:"circle_m",
    stackShape:"disc",
    meltPoint: 120,
    meltInto: "chocolate icing",
    brokenShape: "dots_some_flat",
    keywords: "coin, candy, money, chocolate",
});
addIngredient("star_candy",{
    color: shapeMeta.colorsPastel,
    type: "candy",
    shape:"stellated_octahedron",
    glow: "FFFBE3",
    meltPoint: 40,
    meltInto: "sugar"
    broken: "pixie_dust"
    keywords: "star, candy",
    dissolve: true
});
addIngredient("magic_wand",{
    color:"#9EEAFF", //blue
    shape:"rod_thin",
    glow: "FFFBE3",
    type:"utensil",
    adj: "magical",
    pin: true,
    keywords: "wand, magical",
    onCollide: (self, other) => {
        if (other.id === "magic_wand") return;
        // deleteIngredient(other);
        // uncontainAll();
        changeIngredient(other,["pixie_dust"]);
        self.skipContain = true;
    },
});
addIngredient("jawbreaker",{
    color:"#FFFFFF", //white
    type:"candy",
    shape:"circle",
    meltPoint: 120,
    meltInto: "caramel",
    dishWeight: -50,
    dropIntoV: 15,
    broken: "sprinkles",
    keywords: "candy, break",
    dissolve: true
});
addIngredient("chocolate_orange",{
    color:"#602B1B", //brown
    type:"chocolate",
    shape:"circle",
    dropIntoV: 15,
    dropInto: "chocolate_icing",
    brokenShape: "dots_some_flat",
    keywords: "orange, chocolate, terry",
});
addIngredient("bundt_cake",{
    color:"#FFCD97", //beige
    type:"carb",
    shape: "bundt",
    brokenShape: "dots_some",
    keywords: "cake",
    cookColor: "#CB894C",
    cookName: "crispy_bundt_cake"
});
addIngredient("rock_candy",{
    color: "#FF5E7B", "#FF9B5E", "#FFC95E", "#CCFF5E", "#5EFFA1", "#5ECEFF", "#B65EFF",
    type:"candy",
    shape:"crystal",
    meltPoint: 120,
    meltInto: "caramel",
    brokenShape: "crystal_tiny",
    keywords: "candy, rock, crystal",
});
editIngredient("sugar",{
    whipped: "cotton_candy",
});
editIngredient("pistachio",{
    brokenShape: "liquid_splat",
});
addRecipe("sugar+doll","diabetic person");

addRecipe("=chocolate orange+doll","terry");

addRecipe("sugar+giant","diabetic person");

addRecipe("sugar+r74n","diabetic person");

addRecipe("sugar+baby doll","diabetic person");

addRecipe("honey bun+cinnamon+sugar?","cinnamon roll");
addRecipe("chocolate coin+doll","leprechaun");

addRecipe("chocolate coin+baby doll","leprechaun");

addRecipe("chocolate coin+r74n","leprechaun");

addRecipe("pixie dust+doll","fairy");

addRecipe("pixie dust+baby doll","fairy");

addRecipe("pixie dust+r74n","fairy");
    
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

addRecipe("doll+doll+doll+candy heart","polyamary");

addRecipe("=r74n+candy heart+r74n","couple");

addRecipe("=caramel+baking soda","dalgona");

addRecipe("sugar+water+fruit juice","sorbet");

addRecipe("flour+oil+butter+apple","apple strudel");

addRecipe("flour+oil+butter+apple juice","apple strudel");

addRecipe("sugar+sugar+sugar+sugar","sugar rush!");

addRecipe("chocolate coin+chocolate coin+chocolate coin+chocolate coin", "cha-ching!")

addRecipe("&stack:phyllo+syrup+nut?","baklava");

addRecipe("=chocolate+phyllo+pistachio","dubai chocolate");

addRecipe("sugar+flour+butter+egg+baking powder+vanilla extract?","blondie");

addRecipe("=batter+chocolate powder+red 40","red velvet cake");
