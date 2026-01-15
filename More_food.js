
addIngredient("pork_roll",{
    color:"#f27373ff", 
    type:"meat",
    shape:"puddle",
    keywords: "meat, pork, ham"
});

addIngredient("ramen",{
    color:"#f0f07dff",
    type:"noodle",
    shape:"noodles",
    reactions:{
        water: {
            set1: "soft_ramen",
            tempMin: 90
        }
    },
    keywords: "noodle, ramen"
});

addIngredient("soft_ramen",{
    color:"#e9e952ff",
    type:"noodle",
    shape:"algae",
    stackShape:"foliage_bar",
    keywords: "noodle, ramen",
    dishName: "ramen",
    hidden:true
});

addIngredient("candy_cane", {
    color:"#ff0000ff",
    innerColor:"#ffffffff",
    shape:"cane_striped",
    keywords: "candy, sweet, cane"
});

addIngredient("cocoa_powder",{
    color:"#836333ff",
    shape:"dots_some_flat",
    reactions: {
        water: {
            set1: "hot_cocoa"
        }
    },
    keywords: "chocolate, cocoa, powder"
});

addIngredient("hot_cocoa",{
    color:"#836333ff",
    shape:"liquid",
    type:"liquid",
    stackShape:"liquid_splat",
    keywords: "chocolate, cocoa",
    hidden:true
});

addIngredient("jello",{
    color:"ff000080",
    shape:"bundt",
    keywords: "jelly, jello",
    broken:"jello_chunks",
    meltPoint:"80",
    meltInto:"jello_liquid"
});

addIngredient("honeycomb",{
    color:"#fcb035ff",
    innercolor:"#e69f2eff",
    shape:"honeycomb",
    keywords: "honey, bee"
});

addIngredient("tea_bag",{
    color:"#915f0d",
    shape:"cylinder_flat",
    keywords:"tea, bag",
    broken:"tea_leaf"
});

addIngredient("jello_chunks",{
    color:"#ff0000ff",
    shape:"dots_some_flat",
    keywords:"jello, jelly",
    meltPoint:"80",
    meltInto:"jello_liquid"
});

addIngredient("jello_liquid",{
    color:"#ff0000ff",
    shape:"liquid",
    type:"liquid",
    keywords:"jello, jelly, liquid",
    meltPoint:"100",
    meltInto:"ready_jello_liquid",
    hidden:true
});

addIngredient("ready_jello_liquid",{
    color:"#ff4343ff",
    shape:"liquid",
    type:"liquid",
    keywords:"jello, jelly",
    hidden:true,
    freezePoint:"-10",
    freezeInto:"jello",
    dishName:"jello_liquid"
});

addIngredient("jello_powder",{
    color:"#fb6b6bff",
    shape:"dots_some",
    keywords:"jello, jelly",
    reactions:{
        water:{
            set1:"jello_liquid"
        }
    }
});

addIngredient("doorito",{
    color:"#f66707ff",
    shape:"triangle_round",
    keywords:"dorito, chip, junk food",
    broken:"doorito_dust"
});

addIngredient("doorito_dust",{
    color:"#f66707ff",
    shape:"dots_some",
    keywords:"dorito, chip, junk food",
    hidden:true
});

addRecipe("soft_ramen+soy_sauce","soy ramen noodles");

addRecipe("hard_ramen+soy_sauce","soy crunchy ramen noodles");

addRecipe("hot_cocoa+candy_cane", "peppermint hot cocoa");

addRecipe("tea_bag+water", "tea");

addRecipe("tea_bag+water+ice", "iced tea");

addRecipe("tortia_chip+doorito_dust", "doorito");
