//exotic stuff mod upd 1
addIngredient("mangosteen",{ 
    color:["#854752","#e96668"],
    type:"fruit", 
    shape:"fruit_bi",
    innerColor:"#dfdade"
});

addIngredient("pink_lemonade",{ 
    color:"#f4918b",
    type:"lemonade", 
    hidden:"true"
});

addIngredient("jackfruit",{ 
    color:"#e2ee27",
    type:"fruit",
    shape:"circle_thorny",
    innerColor:"#eebd4f",
    scale:1.2
});

addIngredient("longan",{ 
    color:"#dfa776",
    type:"fruit",
    shape:"circle_rough",
    scale:0.5,
    innerColor:"#dfdade"
});

editIngredient("lemonade",{
    type:"lemon_juice",
    color:"#fffa8b",
    parts:["lemon"],
    reactions: {
        raspberry: { set1:"pink_lemonade" , set2:null },
    },
});

addIngredient("rasp_berry",{
    color:"#E30B5D",
    type:"berry",
    shape:"bunch",
    scale:0.75,
    hidden:true
});

editIngredient("blue_raspberry",{
    color:"#0b19e3",
    type:"rasp_berry"
//reminder to make edited raspberry compatible w other mods
});

addIngredient("black_gojiberry",{
    color:"#1a1a1a",
    type:"berry",
    shape:"fruit_nub_thick",
    scale:0.5,
    reactions: {
        water: { set1:"tea" , set2:null },
    },
});

addIngredient("sapote",{
    color:"#9f6e3d",
    type:"fruit",
    shape:"fruit_extrude",
    innerColor:"#f88431",
    scale:1.2
});

addIngredient("canistel",{
    color:"#fbb70e",
    shape:"lens_vertical",
    type:"fruit"
});

addIngredient("edameme",{
    color:"#a0ce5e",
    shape:"curve_thick",
    broken:"edameme_beans"
});

addIngredient("edameme_beans",{
    type:"bean",
    color:"#a0ce5e",
    hidden:true
});
