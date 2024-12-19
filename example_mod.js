// More info about enabling, testing, and submitting mods: https://R74ncom.github.io/InfiniteChef-Mods/

// Add a basic ingredient using the 'fruit' ingredient as a base
addIngredient("computer",{
    color:"#c2c8d1", //grey
    type:"electronics" //will inherit all properties of the 'fruit' ingredient
});

// Add a detailed ingredient with custom Shape and other properties
// All Shape IDs can be found here: https://R74n.com/shapes/
// A list of properties can be found at the top of: https://R74n.com/cook/foodData.js
addIngredient("broken_computer",{ //ID should be lowercase with underscores
    color:"#c2c8d1", //red
    innerColor:"#c2c8d1", //beige
    type:"computer", ///type can be any other ingredient
    shape:"rectangle_inner_black_rectangle"
});

// Add ingredient with reactions
addIngredient("water",{
    type:"liquid",
    color:"#fce700",
    reactions: {
        meat: { set1:"broth" },
        vegetable: { set1:"broth", tempMin:60 }
    }
});

// Change attributes of existing ingredients
editIngredient("computer",{
    color:"#06b000" //green
});

// Add a simple recipe
addRecipe("oil+glass","computer");

// Add a recipe only in Stack Mode
addRecipe("&stack:metal+oil","computer");

// Add a recipe that can't have any other ingredients
addRecipe("=computer+computer","double computer");

// Add a recipe with an optional ingredient
addRecipe("computer+oil?+ink","printer pc");

// Add a simple tool to interact with ingredients
addTool("red_dyer", {
    func: function(placed) { placed.h = 0; },
    shape:"liquid"
})

// Add a tool with more properties
addTool("red_dyer", {
    func: function(placed) { placed.h = 0; },
    onSelect: function() { alert("Use on an ingredient to dye it red!"); },
    whileOn: function() { console.log("Dyer selected."); },
    onDeselect: function() { alert("Goodbye!"); },
    onClick: function(x,y) { console.log(x,y) },
    shape:"liquid",
    spin: true
})
