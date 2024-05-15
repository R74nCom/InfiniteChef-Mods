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
addIngredient ("heavy_water", { //I ong spelled this "addIngridient" I should be coding when I'm more awake ong
  color:"#22b5cc",
  type:"liquid",
  reactions: {
    demon_core: { set1: "tritiated_water" }
  }
});
