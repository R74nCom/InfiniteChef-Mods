(() => {
  window.addEventListener('load', () => {
    // Add dexcom_g7 ingredient if not already present
    addIngredient("dexcom_g7", {
      shape: "rectangle",
      color: ["#4a90e2", "#0f64c1"],
      glow: "#7fd1ff",
      adj: "smart",
      hidden: false
    });

    // Add glucose ingredient (if needed)
    addIngredient("glucose", {
      shape: "hexagon",
      color: ["#f5deb3", "#deb887"],
      glow: "#ffe4b5",
      adj: "sweet",
      hidden: false
    });

    // Add a recipe combining dexcom_g7 + glucose => calibrated_glucose_monitor
    addRecipe(["dexcom_g7", "glucose"], "calibrated_glucose_monitor");

    // Add the new ingredient calibrated_glucose_monitor
    addIngredient("calibrated_glucose_monitor", {
      shape: "rectangle",
      color: ["#5dade2", "#2e86c1"],
      glow: "#a9cce3",
      adj: "calibrated",
      hidden: false
    });

    console.log("Added recipe: dexcom_g7 + glucose = calibrated_glucose_monitor");
  });
})();
