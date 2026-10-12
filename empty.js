// Override this file with your browser's developer tools to test mods locally.

// [Tutorials]
// Chrome: https://developer.chrome.com/docs/devtools/overrides
// Firefox: https://stackoverflow.com/a/38538310
// Microsoft Edge: https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/javascript/overrides
// Safari: https://webkit.org/web-inspector/local-overrides/

(function () {
    "use strict";

    // =========================================================
    // INFINITE CHEF - AFFUMICATORE UNIVERSALE
    // Ricette tramite reactions, senza chiamare addRecipe()
    // Database visivo persistente
    // =========================================================

    const PREFIX = "universal-smoker";
    const DB_KEY = "infinite_chef_smoked_database_v2";

    if (
        !window.ingredients ||
        typeof addIngredient !== "function" ||
        typeof addTool !== "function"
    ) {
        console.error("[Affumicatore] API del gioco non disponibili.");
        alert("Affumicatore: API di Infinite Chef non disponibili.");
        return;
    }

    let database = [];

    try {
        const stored = localStorage.getItem(DB_KEY);
        database = stored ? JSON.parse(stored) : [];

        if (!Array.isArray(database)) {
            database = [];
        }
    } catch (error) {
        database = [];
    }

    // ---------------------------------------------------------
    // NOMI VISIBILI
    // ---------------------------------------------------------

    function prettyName(id) {
        const names = {
            smoker_wood_chips: "Trucioli per affumicatura",
            oak_wood_chips: "Trucioli di quercia",
            apple_wood_chips: "Trucioli di melo",
            cherry_wood_chips: "Trucioli di ciliegio",
            smoked_meat: "Carne affumicata",
            smoked_beef: "Manzo affumicato",
            smoked_pork: "Maiale affumicato",
            smoked_chicken: "Pollo affumicato",
            smoked_bacon: "Pancetta affumicata",
            smoked_ham: "Prosciutto affumicato",
            smoked_salami: "Salame affumicato",
            smoked_fish: "Pesce affumicato",
            smoked_salmon: "Salmone affumicato",
            smoked_tuna: "Tonno affumicato",
            smoked_cheese: "Formaggio affumicato",
            smoked_cheddar: "Cheddar affumicato"
        };

        return names[id] ||
            String(id || "ingrediente sconosciuto")
                .replace(/_/g, " ")
                .replace(/\b\w/g, function (letter) {
                    return letter.toUpperCase();
                });
    }

    // ---------------------------------------------------------
    // INGREDIENTI AFFUMICATI
    // ---------------------------------------------------------

    const definitions = [
        ["smoker_wood_chips", "#a96f3e", "#69411f", "plant"],
        ["oak_wood_chips", "#95613b", "#593820", "plant"],
        ["apple_wood_chips", "#bd8050", "#77482a", "plant"],
        ["cherry_wood_chips", "#a34d4d", "#652b32", "plant"],

        ["smoked_meat", "#75412f", "#48251e", "meat"],
        ["smoked_beef", "#793b32", "#49221f", "beef"],
        ["smoked_pork", "#b66c68", "#75413f", "pork"],
        ["smoked_chicken", "#c49a61", "#82613b", "chicken"],
        ["smoked_bacon", "#b45f58", "#6d302e", "bacon"],
        ["smoked_ham", "#c17a79", "#7c4648", "ham"],
        ["smoked_salami", "#8b3938", "#501f23", "salami"],
        ["smoked_fish", "#8e9892", "#4e625e", "fish"],
        ["smoked_salmon", "#d18467", "#8b4b43", "salmon"],
        ["smoked_tuna", "#8c6d68", "#513d42", "tuna"],
        ["smoked_cheese", "#c9a34e", "#80652e", "cheese"],
        ["smoked_cheddar", "#d18a32", "#8d521c", "cheddar"]
    ];

    definitions.forEach(function (entry) {
        const id = entry[0];

        // Non sovrascrive ingredienti già registrati.
        if (!window.ingredients[id]) {
            addIngredient(id, {
                color: entry[1],
                innerColor: entry[2],
                type: entry[3]
            });
        }
    });

    // ---------------------------------------------------------
    // RICETTE PREDEFINITE TRAMITE REACTIONS
    // ---------------------------------------------------------

    const recipePairs = [
        ["meat", "smoked_meat"],
        ["beef", "smoked_beef"],
        ["pork", "smoked_pork"],
        ["chicken", "smoked_chicken"],
        ["bacon", "smoked_bacon"],
        ["ham", "smoked_ham"],
        ["salami", "smoked_salami"],
        ["fish", "smoked_fish"],
        ["salmon", "smoked_salmon"],
        ["tuna", "smoked_tuna"],
        ["cheese", "smoked_cheese"],
        ["cheddar", "smoked_cheddar"]
    ];

    recipePairs.forEach(function (pair) {
        const baseId = pair[0];
        const resultId = pair[1];
        const base = window.ingredients[baseId];

        if (!base) {
            console.warn(
                "[Affumicatore] Ingrediente base non trovato:",
                baseId
            );
            return;
        }

        if (!base.reactions) {
            base.reactions = {};
        }

        base.reactions.smoke = {
            set1: resultId
        };
    });

    // ---------------------------------------------------------
    // DATABASE VISIVO
    // ---------------------------------------------------------

    function saveDatabase() {
        try {
            localStorage.setItem(DB_KEY, JSON.stringify(database));
        } catch (error) {
            console.warn(
                "[Affumicatore] Salvataggio locale non riuscito.",
                error
            );
        }
    }

    let panel;
    let list;
    let search;
    let count;
    let statusElement;

    function registerSmoked(placed, smokedId) {
        const id = String(smokedId || "unknown");

        const item = {
            id: id,
            name: prettyName(id) + " (affumicato)",
            date: new Date().toLocaleString()
        };

        const index = database.findIndex(function (entry) {
            return entry.id === id;
        });

        if (index === -1) {
            database.unshift(item);
        } else {
            database[index] = item;
        }

        saveDatabase();
        renderDatabase();

        if (statusElement) {
            statusElement.textContent = "Affumicato: " + item.name;
        }
    }

    // ---------------------------------------------------------
    // PULSANTI
    // ---------------------------------------------------------

    function makeButton(text, callback) {
        const button = document.createElement("button");

        button.textContent = text;
        button.style.cssText =
            "padding:7px 10px;border:0;border-radius:7px;" +
            "background:#65402d;color:white;cursor:pointer;";

        button.addEventListener("click", callback);

        return button;
    }

    // ---------------------------------------------------------
    // PANNELLO DATABASE
    // ---------------------------------------------------------

    function createPanel() {
        const existingPanel = document.getElementById(
            PREFIX + "-panel"
        );

        if (existingPanel) {
            panel = existingPanel;
            return;
        }

        panel = document.createElement("div");
        panel.id = PREFIX + "-panel";

        panel.style.cssText =
            "position:fixed;right:14px;bottom:72px;width:320px;" +
            "max-width:calc(100vw - 28px);max-height:70vh;" +
            "overflow:auto;z-index:999999;background:#241a16;" +
            "color:#fff3e6;border:2px solid #986443;border-radius:12px;" +
            "padding:12px;font:14px Arial,sans-serif;display:none;" +
            "box-shadow:0 5px 25px #0009;";

        const heading = document.createElement("div");

        heading.style.cssText =
            "display:flex;justify-content:space-between;" +
            "align-items:center;gap:8px;margin-bottom:10px;";

        const title = document.createElement("strong");
        title.textContent = "🔥 Database affumicati";

        heading.append(
            title,
            makeButton("Chiudi", function () {
                panel.style.display = "none";
            })
        );

        search = document.createElement("input");
        search.type = "search";
        search.placeholder = "Cerca ingrediente...";

        search.style.cssText =
            "box-sizing:border-box;width:100%;padding:9px;" +
            "margin-bottom:9px;border-radius:7px;" +
            "border:1px solid #986443;";

        search.addEventListener("input", renderDatabase);

        count = document.createElement("div");

        count.style.cssText =
            "margin:5px 0 9px;color:#e8b98e;";

        list = document.createElement("div");

        list.style.cssText =
            "display:flex;flex-direction:column;gap:6px;" +
            "max-height:30vh;overflow:auto;";

        statusElement = document.createElement("div");

        statusElement.style.cssText =
            "font-size:12px;color:#e8b98e;margin-top:10px;";

        const buttons = document.createElement("div");

        buttons.style.cssText =
            "display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;";

        buttons.append(
            makeButton("Aggiorna", renderDatabase),
            makeButton("Esporta JSON", exportDatabase),
            makeButton("Svuota", clearDatabase)
        );

        panel.append(
            heading,
            search,
            count,
            list,
            statusElement,
            buttons
        );

        document.body.appendChild(panel);

        renderDatabase();
    }

    // ---------------------------------------------------------
    // RENDER DATABASE
    // ---------------------------------------------------------

    function renderDatabase() {
        if (!list || !count) {
            return;
        }

        list.replaceChildren();

        const query = search
            ? search.value.toLowerCase().trim()
            : "";

        const filtered = database.filter(function (entry) {
            const name = String(entry.name || "").toLowerCase();
            const id = String(entry.id || "").toLowerCase();

            return name.includes(query) || id.includes(query);
        });

        count.textContent =
            "Ingredienti registrati: " + database.length;

        if (filtered.length === 0) {
            const empty = document.createElement("div");

            empty.textContent = database.length
                ? "Nessun risultato trovato."
                : "Nessun ingrediente ancora. Seleziona l'affumicatore e clicca un ingrediente.";

            empty.style.cssText =
                "padding:10px;color:#d9c4b5;";

            list.appendChild(empty);
            return;
        }

        filtered.forEach(function (entry) {
            const row = document.createElement("div");

            row.style.cssText =
                "padding:9px;border-radius:7px;background:#392720;" +
                "border:1px solid #604333;overflow-wrap:anywhere;";

            const name = document.createElement("div");

            name.textContent = "🔥 " + entry.name;
            name.style.fontWeight = "bold";

            const id = document.createElement("small");

            id.textContent = "ID: " + entry.id;

            id.style.cssText =
                "display:block;margin-top:4px;color:#cbb2a0;";

            row.append(name, id);
            list.appendChild(row);
        });
    }

    // ---------------------------------------------------------
    // ESPORTAZIONE JSON
    // ---------------------------------------------------------

    function exportDatabase() {
        const blob = new Blob(
            [JSON.stringify(database, null, 2)],
            { type: "application/json" }
        );

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "database_affumicati.json";

        link.click();

        setTimeout(function () {
            URL.revokeObjectURL(url);
        }, 1000);
    }

    // ---------------------------------------------------------
    // SVUOTA DATABASE
    // ---------------------------------------------------------

    function clearDatabase() {
        if (!confirm("Vuoi svuotare il database degli affumicati?")) {
            return;
        }

        database = [];

        saveDatabase();
        renderDatabase();

        if (statusElement) {
            statusElement.textContent = "Database svuotato.";
        }
    }

    // ---------------------------------------------------------
    // PULSANTE DI AVVIO
    // ---------------------------------------------------------

    function createLauncher() {
        if (document.getElementById(PREFIX + "-launcher")) {
            return;
        }

        const button = makeButton(
            "🔥 Affumicatore / Database",
            function () {
                createPanel();

                panel.style.display =
                    panel.style.display === "none"
                        ? "block"
                        : "none";

                renderDatabase();
            }
        );

        button.id = PREFIX + "-launcher";

        button.style.cssText +=
            "position:fixed;right:14px;bottom:14px;z-index:999999;" +
            "padding:12px;background:#6b3e28;" +
            "border:2px solid #986443;border-radius:10px;" +
            "box-shadow:0 4px 14px #0008;";

        document.body.appendChild(button);
    }

    // ---------------------------------------------------------
    // STRUMENTO AFFUMICATORE UNIVERSALE
    // ---------------------------------------------------------


addTool("smoker", {
    name: "Affumicatore universale",
    shape: "liquid",
    color: "#69412f",
    spin: true,

    onSelect: function () {
        createPanel();

        if (statusElement) {
            statusElement.textContent =
                "Affumicatore pronto: clicca un ingrediente.";
        }
    },

    func: function (placed) {
        if (!placed || typeof placed !== "object") {
            console.warn(
                "[Affumicatore] Oggetto non valido:",
                placed
            );
            return;
        }

        // Evita di elaborare più volte lo stesso oggetto.
        if (
            placed.universalSmokerProcessing ||
            placed.universalSmokerDone
        ) {
            return;
        }

        placed.universalSmokerProcessing = true;

        try {
            console.log(
                "[Affumicatore] Oggetto ricevuto:",
                placed
            );

            // Individua l'ID originale.
            const possibiliId = [
                placed.id,
                placed.ingredientId,
                placed.ingredient_id,
                placed.elementId,
                placed.element_id,
                placed.data && placed.data.id,
                placed.ingredient
            ];

            let originalId = null;

            for (const valore of possibiliId) {
                if (
                    typeof valore === "string" &&
                    valore.trim() !== ""
                ) {
                    originalId = valore;
                    break;
                }

                if (
                    valore &&
                    typeof valore === "object" &&
                    typeof valore.id === "string" &&
                    valore.id.trim() !== ""
                ) {
                    originalId = valore.id;
                    break;
                }
            }

            if (!originalId) {
                console.error(
                    "[Affumicatore] ID non trovato:",
                    Object.keys(placed)
                );

                if (statusElement) {
                    statusElement.textContent =
                        "Non riesco a identificare l'ingrediente.";
                }

                return;
            }

            // Non aggiunge nuovamente il suffisso.
            const smokedId = originalId.endsWith("_smoked")
                ? originalId
                : originalId + "_smoked";

            // Recupera il nome originale.
            const definizione =
                typeof ingredients !== "undefined"
                    ? ingredients[originalId]
                    : null;

            const originalName =
                (definizione && definizione.name) ||
                placed.name ||
                originalId;

            
const nomeBase = originalName.replace(/_smoked$/, "");

const smokedName = nomeBase + " (affumicato)";

// Registra l'affumicato come ingrediente indipendente.
if (
    typeof ingredients !== "undefined" &&
    !ingredients[smokedId]
) {
    addIngredient(smokedId, {
        name: smokedName,
        color: "#69412f",
        h: 20,
        s: 45,
        l: 35,
        reactions: {}
    });
}

// Aggiorna l'oggetto affumicato.
placed.id = smokedId;
placed.name = smokedName;
placed.smoked = true;
placed.universalSmokerDone = true;

placed.h = 20;
placed.s = 45;
placed.l = 35;

// Aggiunge l'ingrediente al database ricercabile.
registerSmoked(placed, smokedId);


            // Aggiorna l'oggetto.
            placed.id = smokedId;
            placed.name = smokedName;
            placed.smoked = true;
            placed.universalSmokerDone = true;

            placed.h = 20;
            placed.s = 45;
            placed.l = 35;

            // Registra nel database già esistente.
            registerSmoked(placed, smokedId);

            if (statusElement) {
                statusElement.textContent =
                    "Affumicato: " + smokedName;
            }

            console.log(
                "[Affumicatore] Risultato:",
                smokedId,
                smokedName
            );
        } catch (errore) {
            console.error(
                "[Affumicatore] Errore:",
                errore
            );
        } finally {
            delete placed.universalSmokerProcessing;
        }
    }
});




    // ---------------------------------------------------------
    // AVVIO
    // ---------------------------------------------------------

    function initialize() {
        createLauncher();
        createPanel();

        if (statusElement) {
            statusElement.textContent =
                "Caricato. Seleziona l'affumicatore e clicca un ingrediente.";
        }

        console.log(
            "[Affumicatore] Caricato correttamente.",
            "Ingredienti:", definitions.length,
            "Ricette tramite reactions:", recipePairs.length
        );
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initialize,
            { once: true }
        );
    } else {
        initialize();
    }
})();


// ============================================================
// INNESTATORE.JS — Infinite Chef
// Innesti di livello 1 e 2
// Forme selezionate dal catalogo ufficiale R74n Shapes
// ID descrittivi, nessun nome casuale, nessuna addRecipe()
// ============================================================

(function () {
    "use strict";

    if (typeof addIngredient !== "function" ||
        typeof addTool !== "function") {
        console.error("[Innestatore] API di Infinite Chef non disponibili.");
        return;
    }

    // --------------------------------------------------------
    // FORME UFFICIALI — LIVELLO 1
    // --------------------------------------------------------

    const emojiL1 = [
        "fruit",
        "fruit_bi",
        "fruit_bipod",
        "fruit_bipod_stem",
        "fruit_bipod_thin",
        "fruit_bipod_thin_stem",
        "fruit_extrude",
        "fruit_long",
        "fruit_long_stem",
        "fruit_long_thorny",
        "fruit_nub",
        "fruit_nub_thick",
        "fruit_nubs",
        "fruit_nubs_rough",
        "fruit_pick_stem",
        "fruit_stem",
        "fruit_wide",
        "fruit_wide_stem",
        "leaf",
        "leaf_ginkgo",
        "leaf_maple",
        "leaf_needle",
        "leaf_rough",
        "leaf_stem",
        "leaf_vegetable",
        "leaves_stem",
        "algae",
        "clover",
        "clover_round",
        "flower",
        "flower_circle_leaves",
        "flower_clover",
        "flower_hex",
        "flower_lipped",
        "flower_rose",
        "flower_stem",
        "flower_wavy",
        "flower_x",
        "flower_x_thin",
        "fungus",
        "fungus_flat",
        "fungus_flared",
        "fungus_flared_tall",
        "fungus_flat_tall",
        "fungus_flat_wide",
        "fungus_mounted",
        "fungus_pointy",
        "fungus_pointy_porous",
        "fungus_splayed",
        "fungus_spotted",
        "fungus_tall",
        "fungus_wide",
        "grass",
        "foliage",
        "foliage_bar",
        "foliage_cone",
        "foliage_s",
        "tree",
        "tree_triangle",
        "twig",
        "lotus",
        "cactus",
        "bean",
        "peanut",
        "loaf",
        "poultry",
        "cutlet",
        "tooth",
        "paw",
        "arachnid",
        "arachnid_venomous",
        "bug",
        "clam",
        "crustacean",
        "fish",
        "jellyfish",
        "larva",
        "lobster",
        "worm",
        "heart",
        "heart_s",
        "hearts_bi",
        "star",
        "star_tiny",
        "star_four_point",
        "star_four_point_round",
        "stars_some",
        "sun",
        "sun_eclipse",
        "crescent",
        "flame",
        "cloud_droplets",
        "liquid",
        "liquid_splat",
        "powder",
        "powder_rough",
        "powder_wavy",
        "crystal",
        "crystal_tiny",
        "jewel",
        "microbe",
        "double_helix",
        "atom",
        "brain",
        "gear",
        "handwheel",
        "anchor",
        "bell",
        "book",
        "house",
        "house_chimney",
        "hat",
        "medal",
        "lock",
        "lock_open",
        "shell",
        "popsicle",
        "pretzel",
        "noodles",
        "puddle",
        "droplets_some",
        "droplets_some_flat",
        "egg_yolk",
        "embryo",
        "envelope",
        "eye",
        "face",
        "face_smile",
        "face_frown",
        "skull",
        "hexagon",
        "pentagon",
        "octagon",
        "triangle",
        "oval",
        "circle",
        "square",
        "diamond",
        "heart_broken",
        "snowflake",
        "zap",
        "zap_straight"
    ];

    // --------------------------------------------------------
    // FORME UFFICIALI — LIVELLO 2
    // --------------------------------------------------------

    const emojiL2 = [
        "fruit_bi",
        "fruit_bipod_thin_stem",
        "fruit_long_thorny",
        "fruit_nub_thick",
        "fruit_nubs_rough",
        "fruit_pick_stem",
        "fruit_wide_stem",
        "leaf_ginkgo",
        "leaf_maple",
        "leaf_needle",
        "leaf_rough",
        "leaf_vegetable",
        "leaves_stem",
        "flower_circle_leaves",
        "flower_clover",
        "flower_lipped",
        "flower_rose",
        "flower_wavy",
        "flower_x_thin",
        "fungus_flared",
        "fungus_flared_tall",
        "fungus_flat_tall",
        "fungus_flat_wide",
        "fungus_pointy_porous",
        "fungus_splayed",
        "fungus_mounted",
        "fungus_spotted",
        "arachnid_venomous",
        "heart_broken",
        "heart_hollow",
        "hearts_bi",
        "star_four_point",
        "star_four_point_round",
        "star_prism",
        "stars_some",
        "octagram",
        "octagram_compass",
        "octagram_emblem",
        "octagram_outward",
        "octagram_square",
        "hexagram",
        "hexagram_triangle",
        "hexagon_bevel",
        "hexagon_hole",
        "hexagon_pyramid",
        "hexagon_turned",
        "hexagonal_prism",
        "hexagonal_pyramid",
        "hexagonal_pyramid_top",
        "hexagonal_pyramid_top_turned",
        "pentagon_bevel",
        "pentagonal_prism",
        "pentagonal_pyramid",
        "pentagonal_pyramid_top",
        "octagon_bevel",
        "octagon_bevel_square",
        "octagon_opu",
        "octagonal_prism",
        "octagonal_pyramid",
        "octagonal_pyramid_top",
        "icosahedron",
        "octahedron",
        "dodecahedron",
        "decahedron",
        "tetrahedron",
        "stellated_octahedron",
        "pyramid",
        "pyramid_flat_bottom",
        "pyramid_flat_top",
        "pyramid_segmented",
        "pyramid_tiered",
        "pyramid_top",
        "pyramid_top_turned",
        "hyperboloid",
        "hyperboloid_topless",
        "hemisphere",
        "hemisphere_core",
        "hemisphere_topless",
        "gibbous",
        "jewel",
        "crystal",
        "crystal_tiny",
        "double_helix",
        "helix_strand",
        "honeycomb",
        "jigsaw",
        "chain",
        "lock",
        "lock_open",
        "bottle_ridged",
        "bottle_smooth",
        "bottle_handle",
        "liquid_splat",
        "powder_wavy",
        "powder_rough",
        "clumps",
        "swirl",
        "swirl_pile",
        "blob_pile",
        "jellyfish",
        "lobster",
        "microbe",
        "brain",
        "atom",
        "gear",
        "handwheel",
        "sun_eclipse",
        "crescent_thin",
        "flame",
        "snowflake",
        "circle_bevel",
        "circle_lattice",
        "circle_orbits",
        "circle_porous",
        "circle_ridged",
        "circle_rough",
        "circle_scored",
        "circle_seared",
        "circle_shelled",
        "circle_thorny",
        "circle_thorny_ml",
        "cube",
        "cube_simple",
        "cube_stack",
        "cube_wireframe",
        "cuboid",
        "cuboid_long",
        "cuboid_tall",
        "cylinder",
        "cylinder_disc_stack",
        "cylinder_hole",
        "cylinder_short",
        "cylinder_short_hole",
        "cylinder_topless",
        "torus",
        "torus_thick",
        "torus_thin",
        "wheel",
        "turbine",
        "fan",
        "aperture",
        "hourglass",
        "jigsaw",
        "lattice_straight",
        "polygon_irregular",
        "triangular_prism",
        "triforce",
        "triquetra",
        "quatrefoil",
        "trefoil",
        "peace",
        "taijitu",
        "venn_intersection",
        "venn_union",
        "venn_difference",
        "venn_complement_absolute",
        "venn_complement_relative",
        "zap",
        "zap_straight"
    ];

    // --------------------------------------------------------
// FORME EXTRA DAL CATALOGO UFFICIALE R74n SHAPES
// --------------------------------------------------------

// --------------------------------------------------------
// FORME EXTRA DAL CATALOGO UFFICIALE R74n SHAPES
// --------------------------------------------------------

const formeExtraL1 = [
    "acute_angle", "algae", "angle_left", "angle_right",
    "arbelos", "arch", "arch_thick", "archway",
    "arrow_clockwise", "arrow_counterclockwise",
    "asterisk", "atom", "ball_strung", "banner",
    "bean_tiny", "beans_some", "bell", "blob",
    "blob_short", "bone", "boomerang", "chart_line_increase",
    "chart_pie", "check", "circle_arc", "circle_bi",
    "circle_dot", "circle_leafed", "circle_pile",
    "circle_sector", "circles_five", "circles_nine",
    "clock", "clubs", "coil", "comb", "cone",
    "connector", "crosshair", "crosshair_x", "crossed",
    "cursor_full", "curve", "cyclic_heart",
    "cyclic_star", "decagon", "dial", "die_one",
    "die_two", "die_three", "die_four", "die_five",
    "die_six", "disc", "disc_hole", "dot",
    "dots_some", "dropper", "ear", "elbow",
    "exclamation", "fence", "figure", "fisheye",
    "flat_bottom", "flat_plane", "fluffy", "fork",
    "four_splay", "gas", "gas_thin", "grate",
    "grate_horizontal", "grate_vertical", "heptagon",
    "hook", "hook_stem", "houndstooth", "hypercross",
    "intersection_left", "joystick", "kite", "knife",
    "ladder", "lens", "mallet", "multicross",
    "needle", "nonagon", "obelus", "omnicross",
    "ovoid", "pawn", "peg", "percent",
    "pick", "pickaxe", "plus", "plus_circle",
    "plus_double", "pointer_down", "pointer_up",
    "power", "root", "sail", "scissors",
    "scoop", "shield", "shrimp", "signpost",
    "snail", "snowman", "speaker", "spiral",
    "sprout", "sword", "tag", "talon",
    "tangent", "tongs", "toy_brick", "unknown",
    "web", "window", "whisk", "x_circle",
    "x_curved", "x_sharp"
];

const formeExtraL2 = [
    "angle_bracket_up_thin_top", "arch_rectangle",
    "arch_rectangle_thick", "arch_square",
    "archway_lens", "arrow_diagonal_backward",
    "arrow_clockwise_bi", "arrow_counterclockwise_bi",
    "barrier_circle", "barrier_square", "battery",
    "battery_low", "blob_pile", "circle_bi_stem",
    "circle_chord", "circle_ears", "circle_m",
    "circle_ml", "circle_ms", "circle_ms_calyx",
    "circle_ms_leafed", "circle_quad", "circle_quadrant",
    "circle_quadrant_full", "circle_quadrant_negative",
    "circle_three_dots", "circle_three_dots_vertical",
    "circle_two_dots", "circle_xs", "circle_xs_tri",
    "cone_flat_bottom", "cone_flat_bottom_topless",
    "cone_flat_top", "cone_flat_top_hole",
    "cone_hole", "cone_topless", "cone_up",
    "cuboid_stairs", "cuboid_stairs_corner",
    "cuboid_stairs_corner_inner", "cuboid_stairs_top",
    "cuboid_topless", "cuboid_tall_topless",
    "cuboid_wireframe", "cube_eighth", "cube_fourth",
    "cube_half", "cube_six_eighths",
    "cube_three_eighths", "cube_topless",
    "cyclic_rectangle", "cyclic_rectangle_horizontal",
    "cyclic_rhombus", "cyclic_square", "cyclic_triangle",
    "cylinder_flat", "cylinder_short_topless",
    "decagonal_prism", "diagonal_stripe", "dither",
    "dither_backward", "disc_stack", "disc_stack_hole",
    "dot_pyramid", "dots_some_flat", "drain",
    "droplets_some_flat", "elbow_connector",
    "elbow_connector_smooth", "envelope_open",
    "envelope_open_letter", "figure_eight", "fisheye_dark",
    "fork_bi", "fork_down", "four_splay", "h",
    "h_doublestruck", "helix_strand", "hemisphere",
    "heptagon", "hyperboloid_topless", "i",
    "i_thin", "l_thick", "l_top_left_fold",
    "lens_quad", "lens_vertical", "note_eighth_bi",
    "octagram", "oval_bi", "oval_horizontal",
    "oval_leafy", "oval_thick", "oval_thick_hole",
    "oval_thick_horizontal", "oval_thinner",
    "parabola", "parabolic_curve", "patonce",
    "pentagon", "piano_keyboard", "plus_curved",
    "plus_round", "plus_thick", "rectangle_fold_top_right",
    "rectangle_fold_top_right_bi", "rectangle_handle",
    "rectangle_handle_split", "rectangle_lipped",
    "rectangle_long", "rectangle_punched_sides",
    "rectangle_rough", "rectangle_round",
    "rectangle_round_handle", "rectangle_round_handle_split",
    "rectangle_round_rough", "rectangle_tab",
    "rectangle_thick", "rectangle_thick_round",
    "rectangle_thin", "rectangle_thin_nub",
    "rectangle_thin_round", "rectangle_thinner",
    "rectangle_thinner_ridged", "rectangle_thinner_ring",
    "rectangle_thinner_round", "rectangle_thinner_round_porous",
    "rectangle_thinner_tablet", "rectangle_thinnest",
    "rectangle_thinnish_round_point", "rectangle_torn_top",
    "rectangle_vertical", "rectangle_vertical_ribbed",
    "rectangle_vertical_round", "rectangle_vertical_thick",
    "rectangle_vertical_thick_round", "rectangle_vertical_thinnest",
    "rectangular_prism", "rectangular_prism_flared",
    "rectangled_punched_sides_hole", "reel", "rhomboid",
    "rhombus", "rhombus_bevel", "rhombus_quad",
    "rhombus_thin", "ribbed", "ribbed_hole",
    "ribbed_sharp", "ribbed_thick", "ribbon",
    "ribbon_flat", "rock", "rock_ball", "rod",
    "rod_bulbous", "rod_bumpy", "rod_circle",
    "rod_circle_flared", "rod_flared", "rod_flared_leafy",
    "rod_flat_top", "rod_hollow", "rod_lip",
    "rod_point", "rod_rough", "rod_rough_thin",
    "rod_small", "rod_thin", "rod_thin_splits",
    "rod_tiny", "rod_to_thick", "rod_to_thin",
    "rod_wavy", "rods_some", "rombus_negative",
    "semicircle_bottom", "semicircle_diagonal",
    "semicircle_left", "semicircle_right", "semicircle_top",
    "semiheart", "semioval_left", "semioval_thick_left",
    "semirhombus", "semistar", "semitorus_thick_hollow",
    "semitorus_thick_left", "semitorus_thin_left",
    "semitriangle", "shield_flat", "signpost_arrow_right",
    "signpost_text", "silhouette", "silhouette_hair_long",
    "sine", "spades", "speech_balloon", "speech_oval",
    "speech_rectangle", "spheroid_prolate", "spike_ball",
    "spike_ball_quad", "spike_strip", "spinny_blade",
    "spiral_bi", "spiral_s", "splat", "splat_yolk",
    "square_axes_top_left", "square_bevel",
    "square_curve_left_top", "square_curve_top",
    "square_curve_top_bottom", "square_fold_bottom_right",
    "square_handle", "square_handle_split",
    "square_hollow", "square_hollow_half", "square_knob",
    "square_m", "square_ms", "square_pile",
    "square_quad", "square_quad_leftward", "square_ridged",
    "square_rough", "square_round_diagonal",
    "square_round_hollow", "square_round_rough",
    "square_round_top_both", "square_round_top_both_bottom_left",
    "square_round_top_right", "square_s",
    "square_snip_diagonal", "square_snip_top_both",
    "square_snip_top_both_bottom_left", "square_snip_top_right",
    "square_three_fourths", "square_tiny", "square_two_thirds",
    "square_u_down", "square_u_left", "square_u_right",
    "square_u_thin_top", "square_u_up", "stack",
    "stars_some_flat", "stripes_diagonal", "sus",
    "t", "tack_bi", "tack_bi_fused", "tack_thick_left",
    "thought_balloon", "torus_fourth", "torus_fourth_full",
    "torus_m", "torus_side", "torus_three_fourths",
    "trapezoid", "trapezoid_full", "trapezoid_full_down",
    "trapezoid_l", "triangle_bevel", "triangle_curved",
    "triangle_diagonal", "triangle_diagonal_barbed",
    "triangle_down", "triangle_facing_right",
    "triangle_hollow", "triangle_left_bi",
    "triangle_left_bi_bar", "triangle_m", "triangle_right",
    "triangle_right_bars", "triangle_right_bi",
    "triangle_right_bi_bar", "triangle_right_hollow",
    "triangle_round", "triangle_round_ml", "triangle_s",
    "triangle_tiny", "triangle_up_bar_below",
    "triangle_warning", "triangles_some", "triangles_some_flat",
    "u", "unequal", "venn_tri", "wavy_sheet",
    "wavy_sheet_flat", "wavy_sheet_flat_top", "wedge",
    "wedge_porous", "wedge_right", "wedge_rough",
    "whorl_circle", "x_circles", "x_square", "x_squares",
    "x_thick", "y", "z"
];

// Unisci le forme esistenti con quelle aggiuntive, senza duplicati.
const formeL1Complete = [...new Set([...emojiL1, ...formeExtraL1])];
const formeL2Complete = [...new Set([...emojiL2, ...formeExtraL2])];
    // --------------------------------------------------------
    // PALETTE COLORI
    // --------------------------------------------------------

    const coloriL1 = [
        "#ef476f", "#f94144", "#f3722c", "#f8961e",
        "#f9c74f", "#90be6d", "#43aa8b", "#4d908e",
        "#577590", "#277da1", "#4895ef", "#4361ee",
        "#7209b7", "#b5179e", "#f15bb5", "#9b5de5",
        "#00bbf9", "#00f5d4", "#8ac926", "#6a994e",
        "#bc6c25", "#dda15e", "#e9c46a", "#e76f51",
        "#ffadad", "#ffd6a5", "#fdffb6", "#caffbf",
        "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff",
        "#d8e2dc", "#f1faee", "#a8dadc", "#457b9d",
        "#e63946", "#ff595e", "#ffca3a", "#8ac926",
        "#1982c4", "#6a4c93", "#bc6c25", "#606c38",
        "#dda15e", "#283618", "#ff7b00", "#8338ec"
    ];

    const coloriL2 = [
        "#d00000", "#9d0208", "#e85d04", "#f48c06",
        "#faa307", "#ffba08", "#80b918", "#55a630",
        "#2b9348", "#007f5f", "#0096c7", "#0077b6",
        "#023e8a", "#3a0ca3", "#560bad", "#7209b7",
        "#b5179e", "#f72585", "#ff006e", "#8338ec",
        "#3a86ff", "#00b4d8", "#00f5d4", "#70e000",
        "#ccff33", "#f4a261", "#e76f51", "#9c6644",
        "#7f5539", "#b08968", "#ddb892", "#ede0d4",
        "#6d6875", "#b5838d", "#e5989b", "#ffcdb2",
        "#355070", "#6d597a", "#b56576", "#e56b6f",
        "#eaac8b", "#264653", "#2a9d8f", "#e9c46a",
        "#f4a261", "#e76f51", "#606c38", "#283618"
    ];

    const coloriInterniL1 = [
        "#fff1e6", "#ffe5ec", "#fff0bd", "#e9ffdb",
        "#d8f3dc", "#caf0f8", "#dbe7ff", "#e7c6ff",
        "#f1faee", "#fefae0", "#fff3b0", "#f8edeb"
    ];

    const coloriInterniL2 = [
        "#fff0f3", "#ffe8d6", "#fff3b0", "#e9ffdb",
        "#d8f3dc", "#caf0f8", "#dbe7ff", "#e7c6ff",
        "#f1faee", "#fefae0", "#fae1dd", "#e2ece9"
    ];

    // --------------------------------------------------------
    // STATO INTERNO
    // --------------------------------------------------------

    const livelli = Object.create(null);
    const coppieCreate = Object.create(null);
    const oggettiIngredienti = Object.create(null);

    let ingredienteA = null;
    let livelloA = null;
    let ultimoId = null;
    let ultimoTimestamp = 0;

    function casuale(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function pulisciId(id) {
        return String(id)
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9_]/g, "_")
            .replace(/_+/g, "_")
            .replace(/^_+|_+$/g, "");
    }

    function ricavaId(placed) {
        if (typeof placed === "string") {
            return placed;
        }

        if (!placed || typeof placed !== "object") {
            return null;
        }

        const chiavi = [
            "ingredientId",
            "ingredient_id",
            "ingredient",
            "id",
            "element",
            "item",
            "ingredientName",
            "name"
        ];

        for (let i = 0; i < chiavi.length; i++) {
            const valore = placed[chiavi[i]];

            if (typeof valore === "string" &&
                valore.length > 0) {
                if (ingredients && ingredients[valore]) {
                    return valore;
                }

                if (livelli[valore] !== undefined) {
                    return valore;
                }
            }

            if (valore && typeof valore === "object") {
                if (typeof valore.id === "string") {
                    return valore.id;
                }

                if (typeof valore.name === "string") {
                    return valore.name;
                }
            }
        }

        if (typeof placed.type === "string") {
            if (ingredients && ingredients[placed.type]) {
                return placed.type;
            }
        }

        if (typeof ingredients === "object") {
            for (const id in oggettiIngredienti) {
                if (placed === oggettiIngredienti[id]) {
                    return id;
                }
            }
        }

        return null;
    }

    function livelloDi(id) {
        if (livelli[id] !== undefined) {
            return livelli[id];
        }

        // Gli ingredienti preesistenti sono considerati base.
        return 0;
    }

    function creaIdInnesto(idA, idB, livello) {
        // L'ordine non cambia il risultato della coppia.
        const coppia = [idA, idB].sort();

        return "innesto_" +
            pulisciId(coppia[0]) +
            "_con_" +
            pulisciId(coppia[1]) +
            "_liv" + livello;
    }

function hashStringa(testo) {
    let hash = 2166136261;

    for (let i = 0; i < testo.length; i++) {
        hash ^= testo.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }

    return hash >>> 0;
}

function sceltaDeterministica(array, chiave) {
    return array[hashStringa(chiave) % array.length];
}


    function creaIngrediente(idA, idB, livello) {
        const nuovoId = creaIdInnesto(idA, idB, livello);

        if (ingredients && ingredients[nuovoId]) {
            livelli[nuovoId] = livello;
            return nuovoId;
        }

        const chiaveCoppia = [idA, idB].sort().join("||")
            + "||liv" + livello;

        if (coppieCreate[chiaveCoppia]) {
            return coppieCreate[chiaveCoppia];
        }

        const forme = livello === 1
    ? formeL1Complete
    : formeL2Complete;
        const palette = livello === 1 ? coloriL1 : coloriL2;
        const paletteInterna =
            livello === 1 ? coloriInterniL1 : coloriInterniL2;

      
const coppiaOrdinata = [idA, idB].sort().join("||");
const chiaveDeterministica = coppiaOrdinata + "||liv" + livello;

const forma = sceltaDeterministica(forme, chiaveDeterministica + "||forma");
const colore = sceltaDeterministica(palette, chiaveDeterministica + "||colore");
const coloreInterno = sceltaDeterministica(
    paletteInterna,
    chiaveDeterministica + "||coloreInterno"
);

        const dati = {
            name: nuovoId,
            color: colore,
            innerColor: coloreInterno,
            type: "solid",
            shape: forma
        };

        try {
            addIngredient(nuovoId, dati);

            if (typeof ingredients === "object" &&
                ingredients[nuovoId]) {
                Object.assign(ingredients[nuovoId], dati);
                oggettiIngredienti[nuovoId] = ingredients[nuovoId];
            }

            livelli[nuovoId] = livello;
            coppieCreate[chiaveCoppia] = nuovoId;

            console.log(
                "[Innestatore] Creato:",
                nuovoId,
                "| Livello:", livello,
                "| Forma:", forma,
                "| Colore:", colore
            );

            return nuovoId;
        } catch (errore) {
            console.error(
                "[Innestatore] Errore nella creazione di",
                nuovoId,
                errore
            );
            return null;
        }
    }

    // --------------------------------------------------------
    // LOGICA INNESTATORE
    // --------------------------------------------------------

    function innesta(placed) {
        const id = ricavaId(placed);

        if (!id) {
            console.warn(
                "[Innestatore] Non riesco a identificare l'ingrediente.",
                placed
            );
            return;
        }

        // Evita doppie chiamate ravvicinate sullo stesso ingrediente.
        const adesso = Date.now();

        if (id === ultimoId && adesso - ultimoTimestamp < 180) {
            return;
        }

        ultimoId = id;
        ultimoTimestamp = adesso;

        const livello = livelloDi(id);

        if (livello >= 2) {
            console.log(
                "[Innestatore] Livello massimo raggiunto:",
                id
            );
            ingredienteA = null;
            livelloA = null;
            return;
        }

        if (!ingredienteA) {
            ingredienteA = id;
            livelloA = livello;

            console.log(
                "[Innestatore] Primo ingrediente selezionato:",
                id,
                "| Livello:", livello
            );
            return;
        }

        if (ingredienteA === id) {
            console.log(
                "[Innestatore] Seleziona un ingrediente diverso."
            );
            return;
        }

        const idPrimo = ingredienteA;
        const livelloPrimo = livelloA;

        ingredienteA = null;
        livelloA = null;

        const livelloNuovo = Math.max(livelloPrimo, livello) + 1;

        if (livelloNuovo > 2) {
            console.log(
                "[Innestatore] Non è possibile superare il livello 2."
            );
            return;
        }

        creaIngrediente(idPrimo, id, livelloNuovo);
    }

    // --------------------------------------------------------
    // REGISTRAZIONE STRUMENTO
    // --------------------------------------------------------

    addTool("innestatore", {
        name: "Innestatore",
        color: "#a55eea",
        shape: "liquid",
        func: innesta
    });

    console.log(
    "[Innestatore] Caricato correttamente.",
    "| Forme L1:", formeL1Complete.length,
    "| Forme L2:", formeL2Complete.length,
    "| Forme L1 originali:", emojiL1.length,
    "| Forme L2 originali:", emojiL2.length
);
})();


/*
 * iphones.js — Infinite Chef
 * Dimensioni a gruppi e 18 tonalità grigio-azzurre uniche.
 */

const iphoneModels = [
  // iPhone 1–6: grandi
  { id: "iphone_1",  color: "#A7B4C2", shape: "rectangle_vertical_thick_round" },
  { id: "iphone_2",  color: "#9AAFC0", shape: "rectangle_vertical_thick_round" },
  { id: "iphone_3",  color: "#8FA8BC", shape: "rectangle_vertical_thick_round" },
  { id: "iphone_4",  color: "#829FB8", shape: "rectangle_vertical_thick_round" },
  { id: "iphone_5",  color: "#7797B3", shape: "rectangle_vertical_thick_round" },
  { id: "iphone_6",  color: "#6D8EAD", shape: "rectangle_vertical_thick_round" },

  // iPhone 7–12: medi
  { id: "iphone_7",  color: "#AEBAC6", shape: "rectangle_vertical_round" },
  { id: "iphone_8",  color: "#9EB3C5", shape: "rectangle_vertical_round" },
  { id: "iphone_9",  color: "#8DAAC1", shape: "rectangle_vertical_round" },
  { id: "iphone_10", color: "#7EA1BE", shape: "rectangle_vertical_round" },
  { id: "iphone_11", color: "#6F98BA", shape: "rectangle_vertical_round" },
  { id: "iphone_12", color: "#608DB3", shape: "rectangle_vertical_round" },

  // iPhone 13–18: piccoli
  { id: "iphone_13", color: "#BBC5CF", shape: "rectangle_thinner_tablet" },
  { id: "iphone_14", color: "#AABCCB", shape: "rectangle_thinner_tablet" },
  { id: "iphone_15", color: "#98B2C8", shape: "rectangle_thinner_tablet" },
  { id: "iphone_16", color: "#87A8C3", shape: "rectangle_thinner_tablet" },
  { id: "iphone_17", color: "#759DBD", shape: "rectangle_thinner_tablet" },
  { id: "iphone_18", color: "#648FB4", shape: "rectangle_thinner_tablet" }
];

for (const phone of iphoneModels) {
  addIngredient(phone.id, {
    color: phone.color,
    innerColor: "#202B36",
    type: "fruit",
    shape: phone.shape
  });
}


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


// pokemon_acqua.js
// Infinite Chef — R74n
// Pokémon di tipo Acqua, generazioni I-IX
// Include specie, forme regionali e forme speciali.

const pokemonAcqua = `
Squirtle|#65B8F0
Wartortle|#559FE0
Blastoise|#4689D8
Mega Blastoise|#3978C4
Gigantamax Blastoise|#3978C4
Psyduck|#F5D85E
Golduck|#4C8DD9
Poliwag|#77BFFF
Poliwhirl|#559BE8
Poliwrath|#4775C8
Politoed|#65B8F0
Tentacool|#77B9E8
Tentacruel|#6B8CD8
Slowpoke|#E99B9B
Slowbro|#DB8585
Mega Slowbro|#DB8585
Slowking|#C78DCE
Seel|#E5F4FA
Dewgong|#C5E9F5
Shellder|#8F9DF5
Cloyster|#A1A9E8
Krabby|#E88762
Kingler|#DF7754
Gigantamax Kingler|#DF7754
Horsea|#65BFEA
Seadra|#4D9FD6
Goldeen|#F2A75C
Seaking|#E98B4B
Staryu|#DCA15C
Starmie|#A58BDD
Magikarp|#F5A35A
Gyarados|#5286E8
Mega Gyarados|#3559A8
Lapras|#75BFD8
Gigantamax Lapras|#75BFD8
Ditto|#8C83C6
Vaporeon|#5B9FE8
Omanyte|#8CCFF0
Omastar|#559FE0
Kabuto|#DCA15C
Kabutops|#A58BDD
Totodile|#69B5F0
Croconaw|#559FE0
Feraligatr|#4D8FD8
Chinchou|#75BFD8
Lanturn|#5599D6
Marill|#65B8F0
Azumarill|#4D9FD6
Politoed|#68B887
Wooper|#75BFD8
Quagsire|#559FE0
Slowking|#A58BDD
Qwilfish|#E88762
Qwilfish Hisui|#7C6C9D
Corsola|#F5A3B5
Remoraid|#8CCFF0
Octillery|#E88762
Delibird|#E5F4FA
Mantine|#65B8F0
Kingdra|#477AC0
Suicune|#559FE0
Mudkip|#77BCE8
Marshtomp|#629FD0
Swampert|#4D83BD
Mega Swampert|#477AC0
Lotad|#75BFD8
Lombre|#65B8F0
Ludicolo|#559FE0
Wingull|#E5F4FA
Pelipper|#8CCFF0
Surskit|#75BFD8
Masquerain|#8CCFF0
Carvanha|#559FE0
Sharpedo|#477AC0
Wailmer|#65B8F0
Wailord|#559FE0
Numel|#DCA15C
Barboach|#8CCFF0
Whiscash|#559FE0
Corphish|#E88762
Crawdaunt|#DF7754
Feebas|#9BC9D8
Milotic|#E9A6C7
Castform Pioggia|#65B8F0
Spheal|#8CCFF0
Sealeo|#65B8F0
Walrein|#559FE0
Clamperl|#8CCFF0
Huntail|#559FE0
Gorebyss|#E9A6C7
Relicanth|#8CCFF0
Luvdisc|#E9A6C7
Kyogre|#477AC0
Kyogre Primordiale|#3559A8
Piplup|#8CC9F0
Prinplup|#65A9E0
Empoleon|#477AC0
Bibarel|#8CCFF0
Buizel|#E88762
Floatzel|#DF7754
Shellos Mare Ovest|#E9A6C7
Shellos Mare Est|#75BFD8
Gastrodon Mare Ovest|#E9A6C7
Gastrodon Mare Est|#75BFD8
Finneon|#75BFD8
Lumineon|#559FE0
Mantyke|#8CCFF0
Rotom Wash|#559FE0
Palkia|#E9A6C7
Palkia Forma Origine|#A58BDD
Phione|#65B8F0
Manaphy|#559FE0
Arceus Acqua|#65B8F0
Oshawott|#8CCFF0
Dewott|#6BAFE0
Samurott|#5789C9
Samurott Hisui|#477AC0
Panpour|#65B8F0
Simipour|#559FE0
Tympole|#8CCFF0
Palpitoad|#75BFD8
Seismitoad|#559FE0
Basculin Rosso|#559FE0
Basculin Blu|#477AC0
Basculin Bianco|#E5F4FA
Tirtouga|#8CCFF0
Carracosta|#477AC0
Ducklett|#E5F4FA
Swanna|#8CCFF0
Frillish|#A58BDD
Jellicent|#8CCFF0
Alomomola|#E9A6C7
Keldeo|#65B8F0
Keldeo Risoluto|#559FE0
Froakie|#75BFE8
Frogadier|#65A9E0
Greninja|#4D82C9
Greninja Ash|#3559A8
Binacle|#DCA15C
Barbaracle|#DF7754
Skrelp|#75BFD8
Clauncher|#559FE0
Clawitzer|#477AC0
Volcanion|#DF7754
Popplio|#83D4EF
Brionne|#A6CFF5
Primarina|#A6CFF5
Wishiwashi Solo|#559FE0
Wishiwashi Banco|#477AC0
Mareanie|#A58BDD
Toxapex|#8B91B5
Dewpider|#8CCFF0
Araquanid|#559FE0
Wimpod|#E5F4FA
Golisopod|#559FE0
Pyukumuku|#252525
Bruxish|#E9A6C7
Tapu Fini|#A58BDD
Sobble|#8CCBF0
Drizzile|#70B5E0
Inteleon|#5599D6
Gigantamax Inteleon|#477AC0
Chewtle|#65B8F0
Drednaw|#477AC0
Gigantamax Drednaw|#3559A8
Cramorant|#559FE0
Cramorant Gulping|#559FE0
Cramorant Gorging|#477AC0
Arrokuda|#65B8F0
Barraskewda|#477AC0
Dracovish|#559FE0
Arctovish|#8CCFF0
Eiscue|#E5F4FA
Darmanitan Zen Galar|#DF7754
Urshifu Colpo Rapido|#477AC0
Gigantamax Urshifu Colpo Rapido|#3559A8
Basculegion Maschio|#477AC0
Basculegion Femmina|#A58BDD
Overqwil|#252525
Quaxly|#83D5F5
Quaxwell|#68BFE0
Quaquaval|#4DAAC9
Wiglett|#E5F4FA
Wugtrio|#E5F4FA
Tauros Paldea Acqua|#477AC0
Finizen|#65B8F0
Palafin Zero|#559FE0
Palafin Eroe|#477AC0
Veluza|#A58BDD
Dondozo|#559FE0
Tatsugiri Ricciolo|#E9A6C7
Tatsugiri Cadente|#F5A35A
Tatsugiri Teso|#DF7754
Clodsire|#8C83C6
Walking Wake|#477AC0
Iron Bundle|#8CCFF0
Ogerpon Maschera Pozzo|#559FE0
`.trim();

// Database colori Pokémon ampliato
const coloriExtra = [
    "#65B8F0", // Blu acqua
    "#559FE0", // Blu oceano
    "#477AC0", // Blu profondo
    "#8CCFF0", // Azzurro
    "#A58BDD", // Viola
    "#E9A6C7", // Rosa
    "#68B887", // Verde acqua
    "#F5A35A", // Arancione
    "#75BFD8", // Turchese

    // 10 nuovi colori
    "#00CED1", // Turchese brillante
    "#1E90FF", // Blu dodger
    "#4169E1", // Blu reale
    "#7B68EE", // Viola medio
    "#48D1CC", // Turchese medio
    "#20B2AA", // Verde mare
    "#87CEFA", // Azzurro cielo
    "#6495ED", // Blu fiordaliso
    "#40E0D0", // Turchese
    "#9370DB"  // Viola medio

];


const aggiunti = new Set();

for (const riga of pokemonAcqua.split("\n")) {
    const [nome, colore] = riga.split("|");
    if (!nome || aggiunti.has(nome)) continue;

    aggiunti.add(nome);

    const id = "pokemon_" + nome
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "_")
        .replace(/^_|_$/g, "");

    addIngredient(id, {
        color: colore || coloriExtra[aggiunti.size % coloriExtra.length],
        type: "water"
    });
}

console.log(
    `Pokémon Acqua registrati: ${aggiunti.size}`
);



/*
 * stranger_things.js
 * Infinite Chef — R74n
 * Ingredienti ispirati a Stranger Things
 *
 * Le forme usate provengono dal catalogo pubblico di R74n.
 */

// Hawkins
addIngredient("hawkins", {
    color: "#477A45",
    innerColor: "#B8C9A4",
    type: "fruit",
    shape: "house"
});

// Il Sottosopra
addIngredient("the_upside_down", {
    color: "#351D45",
    innerColor: "#8C3150",
    type: "fruit",
    shape: "fungus_pointy"
});

// Demogorgone
addIngredient("demogorgon", {
    color: "#A63D42",
    innerColor: "#E8A0A0",
    type: "fruit",
    shape: "fungus_pointy"
});

// Vecna
addIngredient("vecna", {
    color: "#713C43",
    innerColor: "#C87872",
    type: "fruit",
    shape: "brain"
});

// Mind Flayer
addIngredient("mind_flayer", {
    color: "#3A304E",
    innerColor: "#78658D",
    type: "fruit",
    shape: "jellyfish"
});

// Undici (Eleven)
addIngredient("eleven", {
    color: "#C7A0B8",
    innerColor: "#F4D9E8",
    type: "fruit",
    shape: "eye"
});

// Waffle Eggo
addIngredient("eggo_waffle", {
    color: "#DDAA45",
    innerColor: "#F6D58A",
    type: "fruit",
    shape: "egg_yolk"
});

// Dadi di Dungeons & Dragons
addIngredient("dnd_dice", {
    color: "#4169A1",
    innerColor: "#A9D4F5",
    type: "fruit",
    shape: "icosahedron"
});

// Libro di D&D
addIngredient("dnd_manual", {
    color: "#754C32",
    innerColor: "#E6D1A8",
    type: "fruit",
    shape: "book"
});

// Luci natalizie di Joyce
addIngredient("christmas_lights", {
    color: "#E7C94C",
    innerColor: "#F7F0B0",
    type: "fruit",
    shape: "bulb"
});

// Portale dimensionale
addIngredient("dimensional_gate", {
    color: "#7D274F",
    innerColor: "#E85D8B",
    type: "fruit",
    shape: "circle_orbits"
});

// Fuoco di Hawkins
addIngredient("hawkins_fire", {
    color: "#E66B24",
    innerColor: "#FFD166",
    type: "fruit",
    shape: "flame"
});

// Ricette tematiche
addRecipe("eggo_waffle+eleven", "Eleven's Favorite");
addRecipe("dnd_dice+dnd_manual", "Hellfire Club");
addRecipe("the_upside_down+demogorgon", "Upside Down Monster");
addRecipe("vecna+mind_flayer", "Mind Flayer's Curse");
addRecipe("hawkins+christmas_lights", "Joyce's Christmas Lights");
addRecipe("dimensional_gate+the_upside_down", "Gate to the Upside Down");
