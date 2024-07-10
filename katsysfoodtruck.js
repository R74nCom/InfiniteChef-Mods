// wowwowwow this is my first ever github mod
// hey guys?!?!
// are some of these edible? no. are they cookable? yes!!!11


addIngredient("ice_pop", {
    color: "#5351FF",
    shape: "popsicle",
    type: "other",
    meltPoint: 20,
    meltInto: "juice",
    innerColor: "#1814FF",
    stackShape: "rod_to_thick",
    broken: "juice",
    keywords: "popsicle,ice,cold,sweet"
})

addIngredient("vomit", {
    color: "#608A5A",
    shape: "splat",
    type: "oil",
    innerColor: "#1814FF",
    stackShape: "liquid_splat"
});

addIngredient("bottle", {
    color: "#22515F",
    shape: "bottle_ridged",
    type: "other",
    innerColor: "##9BE8FF",
    broken: "microplastic",
    keywords: "bottle,water,cap,plastic,container"
});

addIngredient("soap", {
    color: "#DAF7FF",
    shape: "rectangle",
    type: "other",
    stackShape: "rectangle_thin",
    broken: "soap_powder",
    keywords: "clean",
    reactions: {
        water: { set1:"bubbles" },
}});

 addIngredient("soap_powder", {
    color: "#DAF7FF",
    shape: "powder",
    type: "powder",
 reactions: {
        water: { set1:"bubbles" },
}});

 addIngredient("bubbles", {
    color: "#AFEDFF",
    shape: "dots",
    type: "gas",
    opacity: "20",
    hidden: "true"
});

addIngredient("gumdrop", {
    color: "#ff0000",
    shape: "flat_bottom",
    type: "jelly",
    broken: "gelatin",
    keywords: "candy,gummy,sugar,sweet",
});

addIngredient("gummy_worm", {
    color: "#ff0000",
    shape: "worm",
    type: "jelly",
    meltPoint: 30,
    meltInto: "melted_gummy",
    broken: "gelatin",
    keywords: "candy,gummy,sugar,sweet",
  reactions: {
        citric_acid: { set1:"sour_gummy_worm" },
}})

addIngredient("sour_gummy_worm", {
    color: "#ff0000",
    shape: "worm",
    type: "jelly",
    meltPoint: 30,
    meltInto: "melted_gummy",
    broken: "gelatin",
    hidden: "true",
    keywords: "candy,gummy,sugar,sweet",
});

addIngredient("paper", {
    color: "#ffffff",
    shape: "wavy_sheet_flat",
    type: "other",
    stackShape: "rectangle_thinnest",
    broken: "powder",
});

addIngredient("cookbook", {
    color: "#21561F",
    innerColor: "#4EB44A",
    shape: "book",
    type: "other",
    stackShape: "rectangle_thin",
    broken: "paper",
});

addIngredient("cheesecake", {
    color: "#E3652A",
    innerColor: "#FFEDDF",
    meltPoint: 50,
    meltInto: "cream_cheese",
    shape: "wedge",
    type: "cheese",
    broken: "cream_cheese",
});

addIngredient("money", {
    color: "#237323",
    innerColor: "#61D661",
    shape: "sheet_wavy_flat",
    type: "other",
    broken: "powder",
})
    
addIngredient("chicken_nugget", {
    color: "#FFC9C2",
    cookColor:"#D37F41",
    shape: "bean_l",
    type: "meat",
    broken: "ground_chicken",
});

editIngredient("water", {
    color: "#47C7FF",
    shape: "drop",
    placedShape: "puddle",
    type: "water",
    opacity: "70",
});

editIngredient("marshmellow", {
    meltPoint: 30,
    meltInto: "fluff"
})

// fun recipes i made because i wanted them
addRecipe("&bowl:ground_chicken+noodles+broth","chicken noodle soup");
addRecipe("&stack:cheesecake+strawberry","strawberry cheesecake");
addRecipe("&stack:chicken_nugget+french_fry+french_fry","nuggets n' fries");
addRecipe("rice+fluff+sugar","rice_krispy_treat");
