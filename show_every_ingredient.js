// made by 3pm
// scroll down to see the list

console.clear();
console.log("show_every_ingredient.js | Initializing...");
title = document.createElement("h1");
title.innerText = "Ingredient List";
document.body.appendChild(title);
credits = document.createElement("h3");
credits.innerText = "show_every_ingredient.js by 3pm";
document.body.appendChild(credits);
reloadButton = document.createElement("button");
reloadButton.innerText = "Reload Ingredient List";
reloadButton.id = "reloadButton";
document.body.appendChild(reloadButton);
document.getElementById("reloadButton").onclick = () => {loadIngredientList()}
ingredientList = document.createElement("div");
ingredientList.id = "ingredientList";
document.body.appendChild(ingredientList);
loadIngredientList();
console.clear();
console.log("show_every_ingredient.js | Initialized. Ready.");
console.log("show_every_ingredient.js by 3pm");

function loadIngredientList() {
    console.clear();
    ingredientId = 0
    console.log("show_every_ingredient.js | Reloading Ingredient List...");
    ingredientList.innerHtml = ""
    for (ingredient in ingredients) {
        ingredientId++;
        var ingredient2 = "";
        for (char in ingredient) {
            if (ingredient[char] == "_") {
                ingredient2 += " ";
            } else {
                ingredient2 += ingredient[char];
            }
        }
        console.clear();
        console.log("show_every_ingredient.js | Making Text Element for Ingredient n°" + ingredientId + " & Appending to Ingredient List...");
        element = document.createElement("p");
        element.innerText = ingredient2;
        ingredientList.appendChild(element);
    }
    console.clear();
    console.log("show_every_ingredient.js | Done Reloading Ingredient List.");
    console.log("show_every_ingredient.js by 3pm");
}