//exotic fruits mod
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
    innerColor:"#eebd4f"
});

addIngredient("longan",{ 
    color:"#dfa776",
    type:"fruit",
    shape:"circle_rough",
    scale:0.5,
    innerColor:"#f9dfd4"
});

editIngredient("lemonade",{
    type:"lemon_juice",
    color:"#fffa8b",
    parts:["lemon"],
    reactions: {
        raspberry: { set1:"pink_lemonade" , set2:null },
    },
});
