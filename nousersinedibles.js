addIngredient("gallium", {
    color: "#779fb6",
    group: "other",
    meltPoint: 29,
    meltInto: "molten_gallium",
    shape: "rock",
    adj: "gallated",
    reactions: {
        "aluminum_foil": {set1: "gallanylidynealumane", set2: "gallanylidynealumane"}
    }
})
addIngredient("molten_gallium", {
    color: "#779fb6",
    group: "other",
    freezePoint: 28,
    freezeInto: "gallium",
    shape: "liquid",
    type: "liquid",
    adj: "gallated",
    reactions: {
        "aluminum_foil": {set1: "gallanylidynealumane", set2: "gallanylidynealumane"}
    }
})
addIngredient("gold_bar", {
    broken: "gold_leaf",
    color: "#a8872d",
    adj: "golden",
    shape: "trapezoid",
    group: "other",
    height: 0.8
}
)
addIngredient("gold_leaf", {
    color: "#a8872d",
    shape: "foliage",
    group: "other",
    keywords: "foil",
    adj: "golden",
    stackShape: "foliage_bar",
})
addIngredient("aluminum_foil", {
    color: "#afa591",
    shape: "foliage",
    group: "other",
    adj: "metallic",
    stackShape: "foliage_bar",
})
addIngredient("wood_chips", {
    color: "#796147",
    shape: "squares_some",
    group: "other",
    stackShape: "squares_some_flat",
})
addIngredient("gallanylidynealumane", {
    color: "#7e8b92",
    shape: "powder_rough",
    group: "other",
    stackShape: "squares_some_flat",
})