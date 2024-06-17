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
    stackShape: "rod_to_thick"
    broken: "juice"
    keywords: "popsicle,ice,cold,sweet"
})

function randomizeHue() {
    ingredients.ice_pop.h = Math.floor(Math.random() * 360);
});

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
    broken: "mircoplastics"
    keywords: "bottle,water,cap,plastic,container"
});

addIngredient('mircoplastics", {
    color: "#7E878A",
    shape: "powder_rough",
    type: "powder",
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
});

 addIngredient("soap_powder", {
    color: "#DAF7FF",
    shape: "powder",
    type: "powder",
 reactions: {
        water: { set1:"bubbles" },
});

 addIngredient("bubbles", {
    color: "#AFEDFF",
    shape: "dots",
    type: "gas",
    transparency: "20"
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
})

function randomizeHue() {
    ingredients.gummy_worm.h = Math.floor(Math.random() * 360);
})
function randomizeHue() {
    ingredients.sour_gummy_worm.h = Math.floor(Math.random() * 360);
});
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
    innerColor: "#4EB44A"
    shape: "book",
    type: "other",
    stackShape: "rectangle_thin",
    broken: "paper",
});

addIngredient("cheesecake", {
    color: "#ffffff",
    innerColor: "#FFEFC8"
    meltPoint: 50,
    meltInto: "cream",
    shape: "wedge",
    type: "cheese",
    broken: "cream",
});

