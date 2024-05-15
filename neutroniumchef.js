addIngredient("demon_core", {
  color: "#bbc1b4",
  innerColor: "#a1c6be",
  shape: "hemisphere_core",
  glow:"#e031dd",
  reactions: {
    water: { set2:"tritiated_water" }
  }
});
addIngredient("tritiated_water", {
  color:"#31e0b7",
  type:"liquid",
  glow:"#e031dd",
  adj: "radioactive"
});
addIngridient ("heavy_water", {
  color:"#22b5cc",
  type:"liquid",
  reactions: {
    demon_core: { set1: "tritiated_water" }
  }
});
