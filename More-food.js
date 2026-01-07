
addIngredient("pork_roll",{
    color:"#f27373ff", 
    type:"meat",
    shape:"puddle",
    keywords: "meat, pork, ham"
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
    },
    keywords: "noodle, ramen"
});

addIngredient("soft_ramen",{
    color:"#e9e952ff",
    type:"noodle",
    shape:"algae",
    stackShape:"foliage_bar",
    keywords: "noodle, ramen"
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
            set1: "hot_cocoa",
            tempMin: 90
        }
    },
    keywords: "chocolate, cocoa, powder"
});

addIngredient("hot_cocoa",{
    color:"#836333ff",
    shape:"liquid",
    type:"liquid",
    stackShape:"liquid_splat",
    keywords: "chocolate, cocoa"
});

addIngredient("jello",{
    color:"ff000080",
    shape:"bundt",
    keywords: "jelly, jello"
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
    keywords:"tea, bag"
});

addRecipe("soft_ramen+soy_sauce","soy ramen noodles");

addRecipe("hard_ramen+soy_sauce","soy crunchy ramen noodles");

addRecipe("hot_cocoa+candy_cane", "peppermint hot cocoa");

addRecipe("tea_bag+water", "tea");

addRecipe("tea_bag+water+ice", "iced tea);
