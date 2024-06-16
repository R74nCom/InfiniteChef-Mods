// mabuhay! mga pilipino!(long live, filipinos!)

//adding the ingredients
addIngredient("oyster_sauce",{
color:"#352315",
type:"sauce",
group:"sauce"
});

addIngredient("wrap",{
color:"#000000",
type:"utensil",
shape:"wavy_sheet_flat",
hidden:"true"
});

addIngredient("banana_leaf",{
color:"#0B6623",
type:"wrap",
shape:"wavy_sheet_flat",
keywords:"banana, banana_leaf, banana_leaves, leaf_banana, wrap"
});

addIngredient("calamansi",{
color:"#535821",
type:"fruit",
shape:"fruit_nub",
broken:"calamansi_juice",
group:"citrus",
adj:"tangy",
scale:0.5,
keywords:"kalamansi, sour, tangy"
});

addIngredient("calamansi_juice",{
color:"#E7F85E",
type:"juice",
boilPoint:65,
boilInto:"calamansi_juice_gas",
freezePoint:0,
freezeInto:"calamansi_juice_ice",
});

addIngredient("calamansi_juice_gas",{
color:"E7F85E",
type:"juice_gas",
hidden:"true"
});

addIngredient("calamansi_juice_ice",{
color:"E7F85E",
type:"juice_ice",
hidden:"true",
meltPoint:20,
meltInto:"calamansi_juice",
broken:"calamansi_juice_shaved_ice",
brokenShape:"powder_rough",
adj:"iced_tangy"
});

addIngredient("calamansi_juice_shaved_ice",{
color:"E7F85E",
type:"juice_shaved_ice",
shape:"powder_rough",
meltPoint:20,
meltInto:"diluted_and_melted_calamansi_juice_shaved_ice",
dishName:"calamansi_flavored_shaved_ice",
hidden:"true"
});

addIngredient("diluted_and_melted_calamansi_juice_shaved_ice",{
color:"FEFEDA",
type:"juice",
freezePoint:0,
freezeInto:"calamansi_juice_ice",
hidden:"true"
});

addIngredient("milkfish",{
color:"#CCCCCC",
type:"fish",
group:"fish",
shape:"fish"
});

addIngredient("mudfish",{
color:"#362511",
type:"fish",
group:"fish",
shape:"fish"
});

addIngredient("langsat",{
color:"#795C32",
type:"fruit",
shape:"circle_bi_stem",
broken:"langsat_seed"
});

addIngredient("langsat_seed",{
color:"#997950",
type:"seed",
placeShape:"oval",
hidden:"true",
scale:0.7,
reactions: {
water: {set1:"langsat_sprout"}
}
});

addIngredient("lumpia_wrap",{
color:"#B8935B",
type:"wrap",
shape:"wavy_sheet_flat",
adj:"crunchy"
});

addIngredient("fish_sauce",{
color:"#745E43",
type:"sauce",
group:"sauce",
adj:"savory",
keywords:"patis, salty, sauce"
});

addIngredient("shrimp_paste",{
color:"#724438",
type:"sauce",
adj:"shrimpy"
});

addIngredient("choc-nut",{
color:"#775A43",
type:"candy_bar",
shape:"coil",
broken:"choc-nut_powder",
stackShape:"rectangle_thinner_ridged"
});

addIngredient("choc-nut_powder",{
color:"#775A43",
type:"powder",
hidden:"true"
});

addIngredient("nips_candy",{
color:["#0041C2", "#DE0A26", "#FFF200", "#B200ED", "#FF6E00"],
type:"candy",
shape:"circle_bi",
scale:0.5
});

addIngredient("unripe_mango",{
color:"#569203",
type:"fruit",
shape:"oval_thick_horizontal",
broken:"sour_mango_juice"
});

addIngredient("sour_mango_juice",{
color:"C0FF02",
type:"juice",
boilPoint:70,
boilInto:"sour_mango_juice_gas",
freezePoint:0,
freezeInto:"sour_mango_juice_ice",
reactions: {
  sugar: {set1:"mango_juice"}
}
});

addIngredient("juice_gas",{
color:"#000000",
type:"gas",
hidden:"true"
});

addIngredient("juice_ice",{
color:"#000000",
type:"solid",
broken:"juice_shaved_ice",
brokenShape:"powder_rough",
hidden:"true"
});

addIngredient("juice_shaved_ice",{
color:"#000000",
type:"solid",shape:"powder_rough",
hidden:"true"
});

addIngredient("sour_mango_juice_gas",{
color:"C0FF02",
type:"juice_gas",
hidden:"true"
});

addIngredient("sour_mango_juice_ice",{
color:"C0FF02",
type:"juice_ice",
meltPoint:35,
meltInto:"sour_mango_juice",
broken:"sour_mango_juice_shaved_ice",
brokenShape:"powder_rough",
hidden:"true"
});

addIngredient("sour_mango_juice_shaved_ice",{
color:"C0FF02",
type:"juice_shaved_ice",
meltPoint:35,
meltInto:"diluted_and_melted_sour_mango_juice_shaved_ice",
hidden:"true"
});

addIngredient("diluted_and_melted_sour_mango_juice_shaved_ice",{
color:"#E5FF99",
type:"juice",
freezePoint:0,
freezeInto:"sour_mango_juice_ice",
hidden:"true"
});

addIngredient("sour_mango_juice_gas",{
color:"C0FF02",
type:"juice_gas",
hidden:"true"
});

addIngredient("sour_mango_juice_ice",{
color:"C0FF02",
type:"juice_ice",
meltPoint:35,
meltInto:"sour_mango_juice",
broken:"sour_mango_juice_shaved_ice",
hidden:"true"
});

addIngredient("sour_mango_juice_shaved_ice",{
color:"C0FF02",
type:"juice_shaved_ice",
meltPoint:35,
meltInto:"diluted_and_melted_sour_mango_juice_shaved_ice",
hidden:"true"
});

addIngredient("diluted_and_melted_sour_mango_shaved_ice",{
color:"#E5FF99",
type:"juice",
freezePoint:0,
freezeInto:"sour_mango_juice_ice",
hidden:"true"
});


addIngredient("mango_juice",{
color:"#FFC324",
dishName:"mango_juice",
type:"juice",
boilPoint:100,
boilInto:"mango_juice_gas",
freezePoint:0,
freezeInto:"mango_juice_ice"
});

addIngredient("mango_juice_gas",{
color:"#FFC324",
type:"juice_gas",
hidden:"true"
});

addIngredient("mango_juice_ice",{
color:"#FFC324",
type:"juice_ice",
meltPoint:50,
meltInto:"mango_juice",
broken:"mango_juice_shaved_ice",
hidden:"true"
});

addIngredient("mango_juice_shaved_ice",{
color:"#FFC324",
type:"juice_shaved_ice",
meltPoint:50,
meltInto:"diluted_and_melted_mango_juice_shaved_ice",
hidden:"true"
});

addIngredient("diluted_and_melted_mango_juice_shaved_ice",{
color:"#FFD588",
type:"juice",
freezePoint:0,
freezeInto:"mango_juice_ice",
hidden:"true"
});

addIngredient("rambutan_seed",{
color:"#4B3A26",
type:"seed",
placeShape:"oval_thick",
scale:0.7,
reactions: {
water: {set1:"rambutan_sprout"}
}
});

addIngredient("gulaman_powder",{
color:"#A6E8D8",
type:"powder",
stain:"true",
reactions: {
  water: {set1:"gulaman_jelly"},
}
});

addIngredient("growing_plant",{
color:"#000000",
type:"plant",
hidden:"true",
});

addIngredient("rambutan_sprout",{
color:"#C4D79B",
type:"growing_plant",
hidden:"true",
reactions: {
water: {set1:"rambutan"}
}
});

addIngredient("langsat_sprout",{
color:"C4D79B",
type:"growing_plant",
hidden:"true",
reactions: {
water: {set1:"langsat"}
}
});

addIngredient("star_apple",{
color: ["#51304E", "#76CD26"],
type:"fruit",
shape:"circle_bi_stem"
});

addIngredient("gulaman_jelly",{
color:"#C4D79B",
type:"solid",
placeShape:"octagon_bevel"
});

addIngredient("condensed_milk",{
color:"#FFFFE4",
type:"paste",
group:"cream"
});

addIngredient("lychee_seed",{
color:"#7F2B0A",
type:"seed",
hidden:"true",
reactions: {
    water:{set1:"lychee_sprout"}
}
});

addIngredient("lychee_sprout",{
color:"#C4D79B",
type:"growing_plant",
hidden:"true",
reactions: {
    water:{set1:"lychee"}
}
});

addIngredient("labuyo_chili",{
    color:"#FF2F00",
    type:"pepper",
    scale:0.5,
    shape:"hook_stem"
});

addIngredient("mamon",{
    color:"#FDEFB2",
    type:"cake",
    shape:"circle_ridged"
});

addIngredient("water_spinach",{
    color:"#607D3B",
    type:"vegetable",
    group:"vegetable",
    shape:"leaf",
    keywords:"kangkong, water_spinach, madahon, gulay"
});

addIngredient("chinese_cabbage",{
    color:"#5DBB63",
    type:"vegetable",
    group:"vegetable",
    shape:"foliage",
    keywords:"petchay, cabbage, chinese"
});

addIngredient("young_coconut",{
    color:"#39FF14",
    type:"fruit",
    group:"fruit",
    shape:"blob_short",
    broken:"coconut_water",
    keywords:"buko, coconut, coconut_water"
});

addIngredient("coconut_water",{
    color:"#F2F3F4",
    type:"water"
});

addIngredient("chayote",{
    color:"#3FFF0",
    type:"vegetable",
    group:"vegetable",
    shape:"gas",
    keywords:"sayote, chayote, vegetable"
});

addIngredient("rice_flour",{
    color:"#FAF9F6",
    type:"flour",
    shape:"powder_rough"
});

addIngredient("red_rice",{
    color:"#800000",
    type:"rice",
    cookColor:"#3C0008",
    cookName:"fried_rice"
});

addIngredient("cured_pork",{
    color:"#C1342E",
    type:"meat"
});

addIngredient("cured_beef",{
    color:"#AA3C38",
    type:"meat"
});

addIngredient("atchara",{
    color:"#FAB972",
    type:"sauce",
    group:"sauce"
});

addIngredient("soursop",{
    color:"#C7EA46",
    type:"fruit",
    group:"fruit",
    shape:"ovoid_scaly",
    adj:"sour"
});

addIngredient("sweetsop",{
    color:"#C7EA46",
    type:"fruit",
    group:"fruit",
    shape:"ovoid_scaly",
    adj:"sweet"
});

addIngredient("bittergourd",{
    color:"#1E4620",
    type:"vegetable",
    group:"vegetable",
    shape:"rod_wavy",
    adj:"bitter"
});

editIngredient("rambutan",{
broken:"rambutan_seed"
});

editIngredient("mango",{
name:"ripe_mango"
});

editIngredient("milk",{
    name:"evaporated_milk"
});

editIngredient("lychee",{
    broken:"lychee_seed"
});

addRecipe("=pork+chili_pepper+onion+calamansi?+soy_sauce?+msg?", "pork_sisig");

addRecipe("=noodles+carrot?+lettuce?+meat?+pork?+beef?+chicken?+shrimp+egg", "pancit_palabok");

addRecipe("=chicken+soy_sauce+chili_pepper?+water", "chicken adobo");

addRecipe("=ube+condensed_milk+butter", "ube_halaya");
