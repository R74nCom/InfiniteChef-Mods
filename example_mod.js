// Add a basic ingredient using the 'fruit' ingredient as a base
addIngredient("apple",{
    color:"#ff1f40", //red
    type:"fruit"
});

// Add a detailed ingredient with custom Shape and other properties
// All Shape IDs can be found here: https://R74n.com/shapes/
// A list of properties can be found at the top of: https://R74n.com/cook/foodData.js
addIngredient("apple",{
    color:"#ff1f40", //red
    innerColor:"#ffeda4", //beige
    type:"fruit",
    shape:"fruit_bipod_stem"
});

// Change attributes of existing ingredients
editIngredient("apple",{
    color:"#06b000" //green
});

// Add a recipe
// Add a tool