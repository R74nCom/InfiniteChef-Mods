Attiva notifiche desktop per Gmail.
   OK  No, grazie
Conversazioni
44% di 15 GB utilizzati
Termini · Privacy · Norme del programma
Ultima attività dell'account: 25 minuti fa
Dettagli
// ============================================================
// MULINO BIANCO
// Infinite Chef - R74n
//
// Mod fan-made.
// Aggiunge biscotti ispirati a prodotti Mulino Bianco.
//
// Biscotti:
// - Abbracci
// - Pan di Stelle
// - Gocciole
// - Baiocchi
// - Macine
// - Tarallucci
// - Ritornelli
// - Batticuori
// - Nascondini
// - Molinetti
// - Campagnole
// - Baiocchi al cacao
// ============================================================

// ============================================================
// IMPASTI
// ============================================================

// Impasto alla vaniglia
addIngredient("mb_vanilla_dough", {
    color: "#d9b77b",
    innerColor: "#a47b45",
    type: "dough"
});

// Impasto al cacao
addIngredient("mb_cocoa_dough", {
    color: "#76503b",
    innerColor: "#392116",
    type: "dough"
});

// Crema alla nocciola
addIngredient("mb_hazelnut_cream", {
    color: "#8b522d",
    innerColor: "#4b2817",
    type: "thick_liquid"
});

// Crema al cacao
addIngredient("mb_chocolate_cream", {
    color: "#552d1d",
    innerColor: "#29150d",
    type: "thick_liquid"
});

// ============================================================
// BISCOTTI
// ============================================================

// ------------------------------------------------------------
// ABBRACCI
// Vaniglia + cacao
// ------------------------------------------------------------

addIngredient("abbracci", {
    color: "#a87548",
    innerColor: "#4b2a1b",
    type: "cookie"
});

addRecipe(
    "mb_vanilla_dough+mb_cocoa_dough",
    "abbracci"
);

// ------------------------------------------------------------
// PAN DI STELLE
// Cacao + zucchero
// ------------------------------------------------------------

addIngredient("pan_di_stelle", {
    color: "#3e2921",
    innerColor: "#21140f",
    type: "cookie"
});

addRecipe(
    "mb_cocoa_dough+sugar",
    "pan_di_stelle"
);

// ------------------------------------------------------------
// GOCCIOLE
// Impasto + gocce di cioccolato
// ------------------------------------------------------------

addIngredient("gocciole", {
    color: "#ad7547",
    innerColor: "#472519",
    type: "cookie"
});

addRecipe(
    "dough+chocolate_chip",
    "gocciole"
);

// ------------------------------------------------------------
// BAIOCCHI
// Biscotto + crema alla nocciola
// ------------------------------------------------------------

addIngredient("baiocchi", {
    color: "#b57a45",
    innerColor: "#713d20",
    type: "cookie"
});

addRecipe(
    "dough+mb_hazelnut_cream",
    "baiocchi"
);

// ------------------------------------------------------------
// MACINE
// Biscotto alla panna
// ------------------------------------------------------------

addIngredient("macine", {
    color: "#d5ae72",
    innerColor: "#875d31",
    type: "cookie"
});

addRecipe(
    "dough+cream",
    "macine"
);

// ------------------------------------------------------------
// TARALLUCCI
// Biscotto semplice con uovo e zucchero
// ------------------------------------------------------------

addIngredient("tarallucci", {
    color: "#d4aa6b",
    innerColor: "#80552d",
    type: "cookie"
});

addRecipe(
    "dough+egg+sugar",
    "tarallucci"
);

// ------------------------------------------------------------
// RITORNELLI
// Cacao + mandorla
// ------------------------------------------------------------

addIngredient("ritornelli", {
    color: "#8d684d",
    innerColor: "#3e281b",
    type: "cookie"
});

addRecipe(
    "dough+almond+cocoa_bean",
    "ritornelli"
);

// ------------------------------------------------------------
// BATTICUORI
// Cacao + cioccolato
// ------------------------------------------------------------

addIngredient("batticuori", {
    color: "#5a3022",
    innerColor: "#29140e",
    type: "cookie"
});

addRecipe(
    "mb_cocoa_dough+chocolate",
    "batticuori"
);

// ------------------------------------------------------------
// NASCONDINI
// Biscotto con ripieno al cacao
// ------------------------------------------------------------

addIngredient("nascondini", {
    color: "#a66f43",
    innerColor: "#452318",
    type: "cookie"
});

addRecipe(
    "dough+mb_chocolate_cream",
    "nascondini"
);

// ------------------------------------------------------------
// MOLINETTI
// Farina + zucchero + burro
// ------------------------------------------------------------

addIngredient("molinetti", {
    color: "#c49b65",
    innerColor: "#76502e",
    type: "cookie"
});

addRecipe(
    "dough+flour+sugar+butter",
    "molinetti"
);

// ------------------------------------------------------------
// CAMPAGNOLE
// Latte + burro
// ------------------------------------------------------------

addIngredient("campagnole", {
    color: "#dfbd83",
    innerColor: "#93683c",
    type: "cookie"
});

addRecipe(
    "dough+milk+butter",
    "campagnole"
);

// ------------------------------------------------------------
// BAIOCCHI AL CACAO
// Variante al cacao e nocciola
// ------------------------------------------------------------

addIngredient("baiocchi_cacao", {
    color: "#75462c",
    innerColor: "#3c2014",
    type: "cookie"
});

addRecipe(
    "mb_cocoa_dough+mb_hazelnut_cream",
    "baiocchi_cacao"
);

// ============================================================
// RICETTE EXTRA
// ============================================================

// Impasto alla vaniglia
addRecipe(
    "dough+vanilla",
    "mb_vanilla_dough"
);

// Impasto al cacao
addRecipe(
    "dough+cocoa_bean",
    "mb_cocoa_dough"
);

// Crema alla nocciola
addRecipe(
    "hazelnut+chocolate+cream",
    "mb_hazelnut_cream"
);

// Crema al cacao
addRecipe(
    "chocolate+cream+sugar",
    "mb_chocolate_cream"
);

// ============================================================
// LOG
// ============================================================

console.log(
    "Mulino_Bianco.js caricato: " +
    "12 biscotti e ricette aggiuntive disponibili."
);
