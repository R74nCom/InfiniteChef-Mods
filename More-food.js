
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




addRecipe("soft_ramen+soy_sauce","soy ramen noodles");

addRecipe("hard_ramen+soy_sauce","soy crunchy ramen noodles");

