// ============================================================
// AFFUMICATORE
// Infinite Chef - R74n
//
// Mod fan-made.
//
// Aggiunge:
// - Affumicatore
// - Carne affumicata
// - Manzo affumicato
// - Maiale affumicato
// - Pollo affumicato
// - Bacon affumicato
// - Prosciutto affumicato
// - Salame affumicato
// - Pesce affumicato
// - Salmone affumicato
// - Tonno affumicato
// - Formaggio affumicato
// - Cheddar affumicato
// - Alcuni tipi di legno/trucioli
//
// L'ingrediente "smoke" è già presente in Infinite Chef.
// ============================================================


// ============================================================
// TRUCIOLI
// ============================================================

addIngredient("smoker_wood_chips", {
    color: "#a96f3e",
    innerColor: "#69411f",
    type: "plant"
});

addIngredient("smoker_oak_chips", {
    color: "#85552f",
    innerColor: "#4e301b",
    type: "plant"
});

addIngredient("smoker_apple_chips", {
    color: "#b36e3d",
    innerColor: "#693a20",
    type: "plant"
});

addIngredient("smoker_cherry_chips", {
    color: "#8f453b",
    innerColor: "#51231f",
    type: "plant"
});


// ============================================================
// PRODOTTI AFFUMICATI
// ============================================================


// Carne
addIngredient("smoked_meat", {
    color: "#67392b",
    innerColor: "#321a14",
    type: "meat"
});


// Manzo
addIngredient("smoked_beef", {
    color: "#66352b",
    innerColor: "#301712",
    type: "beef"
});


// Maiale
addIngredient("smoked_pork", {
    color: "#9d5141",
    innerColor: "#50231c",
    type: "pork"
});


// Pollo
addIngredient("smoked_chicken", {
    color: "#a26741",
    innerColor: "#57311e",
    type: "chicken"
});


// Bacon
addIngredient("smoked_bacon", {
    color: "#a95142",
    innerColor: "#501f1a",
    type: "bacon"
});


// Prosciutto
addIngredient("smoked_ham", {
    color: "#a95b50",
    innerColor: "#572923",
    type: "ham"
});


// Salame
addIngredient("smoked_salami", {
    color: "#833e36",
    innerColor: "#401b18",
    type: "salami"
});


// Pesce
addIngredient("smoked_fish", {
    color: "#796052",
    innerColor: "#3e3029",
    type: "fish"
});


// Salmone
addIngredient("smoked_salmon", {
    color: "#bd624e",
    innerColor: "#642b23",
    type: "salmon"
});


// Tonno
addIngredient("smoked_tuna", {
    color: "#83564c",
    innerColor: "#422d27",
    type: "tuna"
});


// Formaggio
addIngredient("smoked_cheese", {
    color: "#b28d49",
    innerColor: "#60491f",
    type: "cheese"
});


// Cheddar
addIngredient("smoked_cheddar", {
    color: "#c18c36",
    innerColor: "#704d1b",
    type: "cheddar"
});


// ============================================================
// AFFUMICATURA BASE
// ============================================================

addRecipe(
    "meat+smoke",
    "smoked_meat"
);

addRecipe(
    "beef+smoke",
    "smoked_beef"
);

addRecipe(
    "pork+smoke",
    "smoked_pork"
);

addRecipe(
    "chicken+smoke",
    "smoked_chicken"
);

addRecipe(
    "bacon+smoke",
    "smoked_bacon"
);

addRecipe(
    "ham+smoke",
    "smoked_ham"
);

addRecipe(
    "salami+smoke",
    "smoked_salami"
);

addRecipe(
    "fish+smoke",
    "smoked_fish"
);

addRecipe(
    "salmon+smoke",
    "smoked_salmon"
);

addRecipe(
    "tuna+smoke",
    "smoked_tuna"
);

addRecipe(
    "cheese+smoke",
    "smoked_cheese"
);

addRecipe(
    "cheddar+smoke",
    "smoked_cheddar"
);


// ============================================================
// AFFUMICATURA CON TRUCIOLI
// ============================================================

// Trucioli generici
addRecipe(
    "smoker_wood_chips+beef",
    "smoked_beef"
);

addRecipe(
    "smoker_wood_chips+pork",
    "smoked_pork"
);

addRecipe(
    "smoker_wood_chips+chicken",
    "smoked_chicken"
);

addRecipe(
    "smoker_wood_chips+fish",
    "smoked_fish"
);


// Melo
addRecipe(
    "smoker_apple_chips+pork",
    "smoked_pork"
);

addRecipe(
    "smoker_apple_chips+chicken",
    "smoked_chicken"
);

addRecipe(
    "smoker_apple_chips+salmon",
    "smoked_salmon"
);


// Ciliegio
addRecipe(
    "smoker_cherry_chips+beef",
    "smoked_beef"
);

addRecipe(
    "smoker_cherry_chips+pork",
    "smoked_pork"
);

addRecipe(
    "smoker_cherry_chips+cheese",
    "smoked_cheese"
);


// Quercia
addRecipe(
    "smoker_oak_chips+beef",
    "smoked_beef"
);

addRecipe(
    "smoker_oak_chips+pork",
    "smoked_pork"
);

addRecipe(
    "smoker_oak_chips+meat",
    "smoked_meat"
);


// ============================================================
// AFFUMICATORE — STRUMENTO
// ============================================================
//
// L'API ufficiale di Infinite Chef permette a un tool di
// modificare l'oggetto "placed" tramite func(placed).
//
// Qui il tool applica una tonalità scura, simulando l'effetto
// dell'affumicatura.
//
// Le trasformazioni vere e proprie sono gestite dalle ricette
// sopra, usando l'ingrediente ufficiale "smoke".
// ============================================================

addTool("smoker", {

    func: function(placed) {

        // Segna l'ingrediente come trattato.
        placed.smoked = true;

        // Effetto visivo: colore più scuro.
        placed.h = 0;
    },

    onSelect: function() {

        alert(
            "AFFUMICATORE\n\n" +
            "Usalo su un ingrediente per applicare " +
            "l'effetto dell'affumicatura.\n\n" +
            "Per ottenere un prodotto affumicato " +
            "specifico usa le ricette con SMOKE."
        );
    },

    whileOn: function() {
        // Affumicatore selezionato.
    },

    onDeselect: function() {
        // Affumicatore deselezionato.
    },

    shape: "liquid",

    spin: true
});


console.log(
    "Affumicatore.js caricato: " +
    "affumicatore e prodotti affumicati disponibili."
);
