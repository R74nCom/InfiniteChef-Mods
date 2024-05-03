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
    pin:true,
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

addRecipe("moss+plant","garden")
addRecipe("battery_acid+noodles","battery acid spaghetti")
addRecipe("battery_acid+cake","battery acid pie")
