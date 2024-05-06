//this is my first mod in any game ever lol

addIngredient("rubber ball", {
    shape:"circle",
    color:"#eb3489",
    adj:"bouncy",
    meltPoint:"50",
    meltInto:"melted_rubber"
    }
);
addIngredient("rubber eraser", {
    shape:"rhomboid",
    color:"#eb3489",
    adj:"clean",
    meltPoint:"50",
    meltInto:"melted_rubber"
    }
);
addIngredient("rubber", {
    shape:"torus",
    color:"#eb3489",
    adj:"elastic",
    meltPoint:"50",
    meltInto:"melted_rubber"

    }
);
addIngredient("melted_rubber", {
    name:"Melted Rubber",
    shape:"liquid",
    behavior:1,
    color:"#eb3489",
    adj:"elastic",
    hidden:true,
    freezePoint:"-10",
    freezeInto:"rubber"
    }
);
addIngredient("rubber74n", {
    shape:"R74n",
    color:"#eb3489",
    adj:"elastic",
    meltPoint:"50",
    meltInto:"melted_rubber"
    }
);