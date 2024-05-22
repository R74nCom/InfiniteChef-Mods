addIngredient("moss",{
    color: "#234219",
    innerColor:"#69a655",
    type:"plant",
    shape:"leaves_stem",
});

addIngredient("cheesy",{
    color:"#fec118",
    group:"dairy",
    shape:"wedge",
    adj:"cheesy",
    dishWeight:-55,
    broken:"cheese_powder",
    meltPoint:60,
    stackShape:"rectangle_thinner"
});

addIngredient("soggy",{
    type:"liquid",
    color:"#bfd8df",
    reactions: {
        meat: { set1:"broth" },
        vegetable: { set1:"broth", tempMin:60 },
        bone: { set1:"broth", tempMin:60 },
        bouillon_cube: { set1:"broth", set2:null },
    },
    adj:"soggy",
    boilPoint:100,
    boilInto:"steam",
    freezePoint:0,
    freezeInto:"ice_cube",
    keywords:"liquid,wet,h2o,h2O"
});

addIngredient("battery_acid",{
    type:"liquid",
    color:"#E1FF21",
    adj:"electric",
    pin:false,
    boilPoint:100,
    boilInto:"stench",
    freezePoint:0,
    freezeInto:"battery_acid_ice",
    keywords:"liquid,wet,battery,acid"
});

addIngredient("battery_acid_ice",{
    color:"#b4efff",
    innerColor: "#E1FF21",
    a:0.75,
    shape:"cube",
    adj:"electrically iced",
    dishName:"electric ice",
    dishWeight:-35,
    meltPoint:30,
    meltInto:"battery_acid",
    broken:"shaved_ice"
});

addIngredient("stench",{
    type:"gas",
    color:"#5A853F",
    keywords:"smell,gas",
    hidden:true
});

addIngredient("candy_bar",{
    type:"candy",
    shape: "ribbed",
    color:"#AC6547",
    keywords:"candy,sweet",
    broken:"ground_candy_bar",
    hidden:true
});

addIngredient("ground_candy_bar",{
    color:"#7C4934",
    type:"powder",
    shape:"powder_rough",
    hidden:true,
    dishWeight:-20,
    adj:"candy_bar",
    meltPoint:45,
});

addIngredient("twix",{
    type:"candy_bar",
    color:"#924F32",
    hidden:false
});

addIngredient("frog_leg",{
    type:"poultry",
    color: "#D3A772",
    keywords:"frog, snorp",
});

addIngredient("shrnorp_mushroom",{
    name: "shrnorp",
    type:"mushroom",
    color:"#BF9372",
});

addIngredient("glass_shards",{
    type:"spice",
    adj: "sharp",
    color:"#5A6B7B",
    dissolve:false,
});

addIngredient("sand",{
    type:"spice",
    adj: "sandy",
    color:"#D5DB87",
    dissolve:false,
});

addIngredient("blue_paint",{
    type:"dye",
    adj: "gooey",
    shape:"liquid",
    color:"#497DFF",
    dissolve:true,
});

editIngredient("boulder",{
    broken:"sand",
});


addRecipe("moss+moss","moss salad")

addRecipe("sand+ryan","sandboxels")

addRecipe("moss+plant","garden")

addRecipe("battery_acid+noodles","battery acid spaghetti")

addRecipe("battery_acid+cake","battery acid pie")

addRecipe("ground_candy_bar+ice_cream","twix suprise")

addRecipe("twix+beef+twix","lord jesus twix's burger")

addRecipe("shnorp_mushroom+broth+cream","shrnorp soup")

addRecipe("corn_flakes+broccoli+sand","sandtrader's sandy desert")

addRecipe("glass_shards+blue_paint","isoextension's CD-ROM")

addRecipe("apple+caramel","applicon's glazed apples")

addRecipe("moss+plant","garden")

addRecipe("bread+frog_leg+bread","snorp sandwich")

addRecipe("kale+salmon+alfalfa_sprout","salmonfishy's salmon dinner")

addRecipe("noodles+frog_leg+broccoli","sandboxels supreme")

addRecipe("cake+chocolate+chocolate_icing?","lucifer's lava cake")

addRecipe("acai+milk+corn_flake","just an acai bowl")

addRecipe("smallmouth_bass+rice+seaweed","sb's sushi")

addRecipe("moss+butter+seaweed","mossy moss mash")

addRecipe("eggplant+goat_cheese","expolyst's eggplant")

addRecipe("sausage+rice+black_pepper","jayd's jambalaya")

addRecipe("pasta+cream+cheese","rtx's ravioli")

addRecipe("bread+meat+ketchup+bread","matrem's meatloaf")

addRecipe("lemonade+apple+cactus_pear","just an account's juice")

addRecipe("bread+goat_cheese+tomato+bread","goobernaut's grilled cheese")

addRecipe("moss+yogurt+milkshake","mossbot's moss smoothie")

addRecipe("spaghetti+goat_cheese","infinite chef infinite pasta")

addRecipe("pizza+twix","lord jesus twix's pizza")

addRecipe("shrnorp_mushroom+shrimp+butter","shrnorp shrimp")

addRecipe("twix+taco_shell+ice_cream","twix tart")

addRecipe("moss+cake+sprinkles?","moss' favorite moss cake")

addRecipe("&bowl:apple+cherry+jam","red birdly's red bowl")

addRecipe("gelatin+mango","ggod's invisible mango jelly")

addRecipe("energy+gelatin","nomealfound")

addRecipe("pasta+cheese+turmeric","goldninja's golden pasta")

addRecipe("bottom_bun+ham+top_bun","steamed hams")
