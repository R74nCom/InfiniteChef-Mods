// More info about enabling, testing, and submitting mods: https://R74ncom.github.io/InfiniteChef-Mods/

// Add a basic ingredient using the 'jam' ingredient as a base
addIngredient("dirt",{
    color:"#593b1d", //brown
    type:"jam", //will inherit all properties of the 'fruit' ingredient
    reactions: {
    water: {set1: "mud"}
    }
});

// Add a detailed ingredient with custom Shape and other properties
// All Shape IDs can be found here: https://R74n.com/shapes/
// A list of properties can be found at the top of: https://R74n.com/cook/foodData.js
addIngredient("dirt_that_has_been_left_for_days",{ //ID should be lowercase with underscores
    color:"#593b1d", //brown
    innerColor:"#593b1d", //brown
    type:"brownie", ///type can be any other ingredient
});

// Add ingredient with reactions
addIngredient("mud",{
    type:"water",
    color:"#593b1d",
    reactions: {
        // meat: { set1:"" },
       // vegetable: { set1:"", tempMin:60 },
       // oil: { set1: "dirty oil" }
    }   
});

addIngredient("dirt_castle", {
  type:"bread",
  color:"#593b1d",
  reactions: {
     //meat: { set1: "dirty castle meat"},
     //vegetable { set1: "vegetable castle unwashed"},
   // oil: { set1: ""}
  }
});
// Change attributes of existing ingredients
// Add a simple recipe
addRecipe("water+dirt","mud")

// Add a recipe only in Stack Mode
addRecipe("&stack:dirt+dirt","dirt castle");

// Add a recipe that can't have any other ingredients
addRecipe("=dirt+dirt","dirt sandwitch");

addRecipe("dirt+cheese", "dirty cheese bruh");
addRecipe("dirt+cheese_sauce", "dirty i like my cheese drippy bruh");
// Add a recipe with an optional ingredient
addRecipe("cake+sprinkles?+chocolate+dirt","dirty chocolate cake");

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
