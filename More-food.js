
addIngredient("pork_roll",{
    color:"#f27373ff", 
    type:"meat",
    shape:"puddle"
});

addIngredient("hard_ramen",{
    color:"#f0f07dff",
    type:"noodle",
    shape:"noodles",
    reactions:{
        water: {
            set1: "soft_ramen",
            tempMin: 90
        }
    }
});

addIngredient("soft_ramen",{
    color:"#e9e952ff",
    type:"noodle",
    shape:"algae",
    stackShape:"foliage_bar"
});

addIngredient("candy_cane", {
    color:"#ff0000ff",
    innerColor:"#ffffffff",
    shape:"cane_striped"
});

addIngredient("cocoa_powder",{
    color:"#836333ff",
    shape:"dots_some_flat",
    reactions: {
        water: {
            set1: "hot_cocoa",
            tempMin: 90
        }
    }
});

addIngredient("hot_cocoa",{
    color:"#836333ff",
    shape:"liquid",
    type:"liquid",
    stackShape:"liquid_splat"
});


addRecipe("soft_ramen+soy_sauce","soy ramen noodles");

addRecipe("hard_ramen+soy_sauce","soy crunchy ramen noodles");

addRecipe("hot_cocoa+candy_cane", "peppermint hot cocoa");
