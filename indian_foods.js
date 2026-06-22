// Indian foods and Thali Mode.
// Load add_view.js too if you want the dedicated Thali view button.
;(function() {
    function initIndianFoods(attempt) {
        if (typeof addIngredient !== "function" || typeof addRecipe !== "function") {
            if (attempt < 20) setTimeout(function() { initIndianFoods(attempt + 1); }, 250);
            return;
        }

        function withIndianKeywords(data) {
            var copy = Object.assign({}, data);
            copy.keywords = copy.keywords ? copy.keywords + ", indian, india" : "indian, india";
            return copy;
        }

        function addIndianIngredient(id, data) {
            addIngredient(id, withIndianKeywords(data));
        }

        function addIndianRecipe(recipe, result) {
            addRecipe(recipe, result);
        }

        // Spices, pastes, and sauces
        addIndianIngredient("garam_masala", {
            color: "#7a3f18",
            innerColor: "#3f1f0d",
            type: "powder",
            shape: "powder",
            adj: "masala",
            keywords: "spice, warm spice, garam"
        });

        addIndianIngredient("chaat_masala", {
            color: "#9c6335",
            innerColor: "#5a341b",
            type: "powder",
            shape: "powder",
            adj: "tangy",
            keywords: "spice, chaat, tangy"
        });

        addIndianIngredient("coriander_seed", {
            color: "#b79557",
            innerColor: "#6f552c",
            type: "spice",
            shape: "dots_some_flat",
            broken: "ground_coriander",
            keywords: "dhaniya, seed, spice"
        });

        addIndianIngredient("ground_coriander", {
            color: "#b08a45",
            innerColor: "#6c4e22",
            type: "powder",
            shape: "powder",
            adj: "coriander",
            keywords: "dhaniya, coriander, powder"
        });

        addIndianIngredient("fenugreek_seed", {
            color: "#c19738",
            innerColor: "#7a5717",
            type: "spice",
            shape: "dots_some_flat",
            broken: "ground_fenugreek",
            keywords: "methi, seed, spice"
        });

        addIndianIngredient("ground_fenugreek", {
            color: "#a77a22",
            innerColor: "#624515",
            type: "powder",
            shape: "powder",
            adj: "methi",
            keywords: "methi, fenugreek, powder"
        });

        addIndianIngredient("asafoetida", {
            color: "#eadb91",
            innerColor: "#8f7d31",
            type: "powder",
            shape: "powder",
            adj: "hing",
            keywords: "hing, spice, savory"
        });

        addIndianIngredient("ginger_garlic_paste", {
            color: "#d8c47a",
            innerColor: "#8d7b33",
            type: "paste",
            shape: "clumps",
            adj: "aromatic",
            keywords: "ginger, garlic, paste"
        });

        addIndianIngredient("masala_base", {
            color: "#a93c1c",
            innerColor: "#59200f",
            type: "paste",
            shape: "clumps",
            adj: "spiced",
            keywords: "onion tomato, curry base, masala"
        });

        addIndianIngredient("makhani_sauce", {
            color: "#d75b27",
            innerColor: "#7d2d14",
            type: "sauce",
            shape: "liquid",
            adj: "buttery",
            keywords: "butter, tomato, cream, sauce"
        });

        addIndianIngredient("korma_sauce", {
            color: "#e1b45f",
            innerColor: "#8c5b20",
            type: "sauce",
            shape: "liquid",
            adj: "creamy",
            keywords: "cashew, cream, sauce"
        });

        addIndianIngredient("tandoori_marinade", {
            color: "#c0391d",
            innerColor: "#65180e",
            type: "sauce",
            shape: "liquid",
            adj: "tandoori",
            keywords: "yogurt, chili, marinade"
        });

        addIndianIngredient("ghee", {
            color: "#f3c14b",
            innerColor: "#fff1a8",
            type: "oil",
            shape: "liquid",
            adj: "ghee",
            keywords: "clarified butter, butter, fat"
        });

        // Breads, batters, and staples
        addIndianIngredient("basmati_rice", {
            color: "#f4edcf",
            innerColor: "#b9a765",
            type: "rice",
            shape: "dots_some_flat",
            scale: 0.8,
            keywords: "rice, fragrant"
        });

        addIndianIngredient("besan", {
            color: "#d6a839",
            innerColor: "#8b661c",
            type: "flour",
            shape: "powder",
            adj: "chickpea",
            keywords: "gram flour, chickpea flour"
        });

        addIndianIngredient("paneer", {
            color: "#f5efd6",
            innerColor: "#fffdf0",
            type: "cheese",
            shape: "cube",
            broken: "crumbled_paneer",
            adj: "paneer",
            keywords: "cheese, cottage cheese"
        });

        addIndianIngredient("crumbled_paneer", {
            color: "#f5efd6",
            innerColor: "#fffdf0",
            type: "cheese",
            shape: "clumps",
            hidden: true,
            keywords: "paneer, cheese, crumbled"
        });

        addIndianIngredient("roti", {
            color: "#d6a461",
            innerColor: "#8b5a2b",
            type: "flatbread",
            shape: "disc",
            cookColor: "#9d5d27",
            adj: "wheat",
            keywords: "chapati, flatbread, bread"
        });

        addIndianIngredient("naan", {
            color: "#e0b679",
            innerColor: "#9b6a37",
            type: "flatbread",
            shape: "oval_thick_horizontal",
            cookColor: "#a0602b",
            adj: "tandoori",
            keywords: "flatbread, bread"
        });

        addIndianIngredient("paratha", {
            color: "#d4984d",
            innerColor: "#8a5420",
            type: "flatbread",
            shape: "disc",
            cookColor: "#8f4d1c",
            adj: "layered",
            keywords: "flatbread, bread, layered"
        });

        addIndianIngredient("poori", {
            color: "#d9892f",
            innerColor: "#f1c46f",
            type: "flatbread",
            shape: "blob_short",
            adj: "fried",
            keywords: "puri, fried bread"
        });

        addIndianIngredient("dosa_batter", {
            color: "#f0ecd7",
            innerColor: "#b2a983",
            type: "batter",
            shape: "liquid",
            adj: "fermented",
            keywords: "rice, lentil, batter"
        });

        addIndianIngredient("dosa", {
            color: "#c88a3a",
            innerColor: "#f0d69b",
            type: "flatbread",
            shape: "wavy_sheet_flat",
            cookColor: "#8c4c1b",
            adj: "crisp",
            keywords: "crepe, rice, lentil"
        });

        addIndianIngredient("idli", {
            color: "#f6f4e9",
            innerColor: "#beb99b",
            type: "carb",
            shape: "circle",
            scale: 0.8,
            adj: "steamed",
            keywords: "rice cake, steamed"
        });

        addIndianIngredient("papadum", {
            color: "#e1b25c",
            innerColor: "#9a6d27",
            type: "chip",
            shape: "disc",
            scale: 0.75,
            adj: "crisp",
            keywords: "papad, cracker"
        });

        // Chutneys, sides, curries, and dishes
        addIndianIngredient("mint_chutney", {
            color: "#2f8e38",
            innerColor: "#124d1b",
            type: "sauce",
            shape: "liquid",
            adj: "minty",
            keywords: "green chutney, cilantro, mint"
        });

        addIndianIngredient("tamarind_chutney", {
            color: "#5a2917",
            innerColor: "#2d130b",
            type: "sauce",
            shape: "liquid",
            adj: "sweet sour",
            keywords: "imli, tamarind, chutney"
        });

        addIndianIngredient("coconut_chutney", {
            color: "#f2ead2",
            innerColor: "#a49b80",
            type: "sauce",
            shape: "liquid",
            adj: "coconut",
            keywords: "chutney, coconut"
        });

        addIndianIngredient("raita", {
            color: "#e9f0d7",
            innerColor: "#8ba96a",
            type: "yogurt",
            shape: "liquid",
            adj: "cooling",
            keywords: "yogurt, cucumber, side"
        });

        addIndianIngredient("dal", {
            color: "#d6a72e",
            innerColor: "#835c13",
            type: "thick_liquid",
            shape: "liquid",
            adj: "lentil",
            keywords: "lentil, dhal"
        });

        addIndianIngredient("dal_makhani", {
            color: "#4b2417",
            innerColor: "#1f0d08",
            type: "thick_liquid",
            shape: "liquid",
            adj: "creamy",
            keywords: "black lentil, cream, dal"
        });

        addIndianIngredient("sambar", {
            color: "#c56326",
            innerColor: "#713314",
            type: "broth",
            shape: "liquid",
            adj: "tamarind",
            keywords: "lentil stew, south indian"
        });

        addIndianIngredient("rasam", {
            color: "#b33a18",
            innerColor: "#661b0b",
            type: "broth",
            shape: "liquid",
            adj: "peppery",
            keywords: "tomato, tamarind, soup"
        });

        addIndianIngredient("chana_masala", {
            color: "#b15a24",
            innerColor: "#6d2d12",
            type: "thick_liquid",
            shape: "clumps",
            adj: "chickpea",
            keywords: "chickpea, curry"
        });

        addIndianIngredient("rajma", {
            color: "#7c231c",
            innerColor: "#3f100c",
            type: "thick_liquid",
            shape: "clumps",
            adj: "kidney bean",
            keywords: "kidney bean, curry"
        });

        addIndianIngredient("aloo_gobi", {
            color: "#d69b28",
            innerColor: "#7f5a14",
            type: "vegetable",
            shape: "clumps",
            adj: "spiced",
            keywords: "potato, cauliflower"
        });

        addIndianIngredient("palak_paneer", {
            color: "#3d7d2c",
            innerColor: "#f5efd6",
            type: "thick_liquid",
            shape: "clumps",
            adj: "spinach",
            keywords: "paneer, spinach, curry"
        });

        addIndianIngredient("butter_chicken", {
            color: "#c94b22",
            innerColor: "#f0b473",
            type: "meat",
            shape: "clumps",
            adj: "buttery",
            keywords: "murgh makhani, chicken, curry"
        });

        addIndianIngredient("chicken_tikka", {
            color: "#c74222",
            innerColor: "#7a1d0e",
            type: "meat",
            shape: "cutlet",
            adj: "tandoori",
            keywords: "chicken, tikka"
        });

        addIndianIngredient("rogan_josh", {
            color: "#8f211b",
            innerColor: "#3e0c08",
            type: "meat",
            shape: "clumps",
            adj: "kashmiri",
            keywords: "mutton, curry"
        });

        addIndianIngredient("fish_curry", {
            color: "#d27a28",
            innerColor: "#7a3c12",
            type: "fish",
            shape: "fish",
            adj: "coconut",
            keywords: "fish, curry"
        });

        addIndianIngredient("vegetable_korma", {
            color: "#d6a04a",
            innerColor: "#8a5a1f",
            type: "thick_liquid",
            shape: "clumps",
            adj: "korma",
            keywords: "vegetable, cashew, curry"
        });

        addIndianIngredient("biryani", {
            color: ["#f2dc8b", "#d06b27", "#ffffff"],
            innerColor: "#8e5d1f",
            type: "rice",
            shape: "dots_some_flat",
            adj: "spiced",
            keywords: "rice, saffron, biryani"
        });

        addIndianIngredient("khichdi", {
            color: "#d8b33f",
            innerColor: "#806515",
            type: "thick_liquid",
            shape: "liquid",
            adj: "comforting",
            keywords: "rice, lentil"
        });

        addIndianIngredient("samosa", {
            color: "#b66c24",
            innerColor: "#754016",
            type: "pastry",
            shape: "triangle_round",
            cookColor: "#7a3a10",
            adj: "fried",
            keywords: "snack, potato, pastry"
        });

        addIndianIngredient("pakora", {
            color: "#b8731d",
            innerColor: "#6f3d0d",
            type: "fry",
            shape: "clumps",
            adj: "fried",
            keywords: "bhaji, fritter, besan"
        });

        addIndianIngredient("vada", {
            color: "#9e5d1e",
            innerColor: "#572c0c",
            type: "fry",
            shape: "disc_hole",
            adj: "fried",
            keywords: "medu vada, lentil"
        });

        addIndianIngredient("pav_bhaji", {
            color: "#a13a1b",
            innerColor: "#5f1c0d",
            type: "thick_liquid",
            shape: "clumps",
            adj: "buttery",
            keywords: "pav, bhaji, street food"
        });

        addIndianIngredient("pani_puri", {
            color: "#c9933f",
            innerColor: "#5b3b16",
            type: "chip",
            shape: "circle",
            adj: "tangy",
            keywords: "golgappa, puri, chaat"
        });

        // Drinks and sweets
        addIndianIngredient("masala_chai", {
            color: "#9a6137",
            innerColor: "#5a321c",
            type: "tea",
            shape: "liquid",
            adj: "spiced",
            keywords: "chai, tea, milk"
        });

        addIndianIngredient("lassi", {
            color: "#eee9cf",
            innerColor: "#b9ad7c",
            type: "yogurt",
            shape: "liquid",
            adj: "cooling",
            keywords: "drink, yogurt"
        });

        addIndianIngredient("mango_lassi", {
            color: "#f2b83f",
            innerColor: "#a86413",
            type: "yogurt",
            shape: "liquid",
            adj: "mango",
            keywords: "drink, yogurt, mango"
        });

        addIndianIngredient("jaggery", {
            color: "#9d5a1e",
            innerColor: "#5a2c0f",
            type: "sugar",
            shape: "cube",
            adj: "unrefined",
            keywords: "gur, sugar"
        });

        addIndianIngredient("kheer", {
            color: "#efe6bc",
            innerColor: "#b9a96b",
            type: "thick_liquid",
            shape: "liquid",
            adj: "rice",
            keywords: "payasam, rice pudding"
        });

        addIndianIngredient("gulab_jamun", {
            color: "#7e3e16",
            innerColor: "#d28c43",
            type: "candy",
            shape: "circle",
            adj: "syrupy",
            keywords: "sweet, dessert"
        });

        addIndianIngredient("jalebi", {
            color: "#f28c18",
            innerColor: "#a94d0a",
            type: "candy",
            shape: "coil",
            adj: "syrupy",
            keywords: "sweet, dessert"
        });

        addIndianIngredient("halwa", {
            color: "#d97925",
            innerColor: "#8d3f12",
            type: "thick_liquid",
            shape: "clumps",
            adj: "sweet",
            keywords: "sweet, dessert"
        });

        // Plated meals created by regular recipes or Thali Mode.
        addIndianIngredient("vegetarian_thali", {
            color: ["#f2dc8b", "#d6a72e", "#d6a461", "#2f8e38"],
            innerColor: "#d6a461",
            type: "carb",
            shape: "circle",
            scale: 1.25,
            adj: "plated",
            keywords: "thali, plate, meal"
        });

        addIndianIngredient("chana_thali", {
            color: ["#f2dc8b", "#b15a24", "#d6a461", "#e9f0d7"],
            innerColor: "#b15a24",
            type: "carb",
            shape: "circle",
            scale: 1.25,
            adj: "plated",
            keywords: "thali, chickpea, meal"
        });

        addIndianIngredient("paneer_thali", {
            color: ["#f2dc8b", "#3d7d2c", "#f5efd6", "#e0b679"],
            innerColor: "#3d7d2c",
            type: "carb",
            shape: "circle",
            scale: 1.25,
            adj: "plated",
            keywords: "thali, paneer, meal"
        });

        addIndianIngredient("butter_chicken_thali", {
            color: ["#f2dc8b", "#c94b22", "#e0b679", "#e9f0d7"],
            innerColor: "#c94b22",
            type: "carb",
            shape: "circle",
            scale: 1.25,
            adj: "plated",
            keywords: "thali, chicken, meal"
        });

        addIndianIngredient("rogan_josh_thali", {
            color: ["#f2dc8b", "#8f211b", "#d6a461", "#e9f0d7"],
            innerColor: "#8f211b",
            type: "carb",
            shape: "circle",
            scale: 1.25,
            adj: "plated",
            keywords: "thali, mutton, meal"
        });

        addIndianIngredient("south_indian_tiffin", {
            color: ["#c88a3a", "#c56326", "#f2ead2"],
            innerColor: "#c56326",
            type: "carb",
            shape: "circle",
            scale: 1.15,
            adj: "plated",
            keywords: "dosa, sambar, chutney, tiffin"
        });

        addIndianIngredient("idli_sambar_plate", {
            color: ["#f6f4e9", "#c56326", "#f2ead2"],
            innerColor: "#c56326",
            type: "carb",
            shape: "circle",
            scale: 1.15,
            adj: "plated",
            keywords: "idli, sambar, chutney, tiffin"
        });

        addIndianIngredient("poori_bhaji", {
            color: ["#d9892f", "#d69b28", "#5a2917"],
            innerColor: "#d69b28",
            type: "carb",
            shape: "circle",
            scale: 1.15,
            adj: "plated",
            keywords: "poori, bhaji, meal"
        });

        addIndianIngredient("samosa_chaat", {
            color: ["#b66c24", "#2f8e38", "#5a2917", "#e9f0d7"],
            innerColor: "#5a2917",
            type: "carb",
            shape: "circle",
            scale: 1.05,
            adj: "chaat",
            keywords: "samosa, chutney, chaat"
        });

        // Foundational reactions and recipes
        addIndianRecipe("butter&heat", "ghee");
        addIndianRecipe("milk+lemon_juice", "paneer");
        addIndianRecipe("milk+vinegar", "paneer");
        addIndianRecipe("ginger_root+garlic", "ginger_garlic_paste");
        addIndianRecipe("onion+tomato+ginger_garlic_paste+oil", "masala_base");
        addIndianRecipe("cumin+cardamom+cinnamon+clove+black_pepper", "garam_masala");
        addIndianRecipe("ground_coriander+cumin+turmeric+chili_powder", "chaat_masala");
        addIndianRecipe("coriander_seed+knife", "ground_coriander");
        addIndianRecipe("fenugreek_seed+knife", "ground_fenugreek");
        addIndianRecipe("flour+water+ghee?", "roti");
        addIndianRecipe("flour+yogurt+yeast+ghee?", "naan");
        addIndianRecipe("roti+ghee", "paratha");
        addIndianRecipe("flour+water+oil", "poori");
        addIndianRecipe("rice+lentil+water", "dosa_batter");
        addIndianRecipe("dosa_batter&heat", "dosa");
        addIndianRecipe("dosa_batter+steam", "idli");
        addIndianRecipe("lentil+turmeric+cumin+garlic", "dal");
        addIndianRecipe("lentil+tamarind+curry_leaf+vegetable", "sambar");
        addIndianRecipe("tomato+tamarind+black_pepper+cumin", "rasam");
        addIndianRecipe("mint+cilantro+lime_juice+chili_pepper", "mint_chutney");
        addIndianRecipe("tamarind+jaggery+cumin", "tamarind_chutney");
        addIndianRecipe("coconut+yogurt+curry_leaf", "coconut_chutney");
        addIndianRecipe("yogurt+cucumber+cumin+mint?", "raita");
        addIndianRecipe("yogurt+chili_powder+turmeric+garam_masala", "tandoori_marinade");
        addIndianRecipe("tomato+butter+cream+garam_masala", "makhani_sauce");
        addIndianRecipe("cream+cashew_nut+garam_masala", "korma_sauce");

        // Main dishes
        addIndianRecipe("chickpea+masala_base+garam_masala", "chana_masala");
        addIndianRecipe("kidney_bean+masala_base+garam_masala", "rajma");
        addIndianRecipe("potato+cauliflower+turmeric+cumin", "aloo_gobi");
        addIndianRecipe("paneer+spinach+garam_masala+cream?", "palak_paneer");
        addIndianRecipe("chicken+tandoori_marinade&heat", "chicken_tikka");
        addIndianRecipe("chicken_tikka+makhani_sauce+cream?", "butter_chicken");
        addIndianRecipe("mutton+masala_base+garam_masala+yogurt?", "rogan_josh");
        addIndianRecipe("fish+coconut_milk+tamarind+curry_leaf", "fish_curry");
        addIndianRecipe("vegetable+korma_sauce+cashew_nut?", "vegetable_korma");
        addIndianRecipe("basmati_rice+saffron+chicken+garam_masala+yogurt?", "biryani");
        addIndianRecipe("rice+lentil+turmeric+ghee?", "khichdi");
        addIndianRecipe("potato+pea+garam_masala+pastry", "samosa");
        addIndianRecipe("besan+onion+chili_pepper+oil", "pakora");
        addIndianRecipe("lentil+ginger_root+chili_pepper+oil", "vada");
        addIndianRecipe("potato+tomato+butter+bread", "pav_bhaji");
        addIndianRecipe("papadum+tamarind_chutney+mint_chutney+potato", "pani_puri");

        // Drinks and sweets
        addIndianRecipe("tea+milk+cardamom+ginger_root", "masala_chai");
        addIndianRecipe("yogurt+water+sugar?", "lassi");
        addIndianRecipe("lassi+mango", "mango_lassi");
        addIndianRecipe("rice+milk+sugar+cardamom", "kheer");
        addIndianRecipe("milk+flour+syrup+cardamom", "gulab_jamun");
        addIndianRecipe("flour+sugar+syrup+oil", "jalebi");
        addIndianRecipe("carrot+ghee+sugar+milk", "halwa");

        // Regular thali combinations, so they work even without the dedicated view.
        addIndianRecipe("rice+dal+roti+mint_chutney?", "vegetarian_thali");
        addIndianRecipe("basmati_rice+chana_masala+roti+raita?", "chana_thali");
        addIndianRecipe("basmati_rice+palak_paneer+naan+raita?", "paneer_thali");
        addIndianRecipe("basmati_rice+butter_chicken+naan+raita?", "butter_chicken_thali");
        addIndianRecipe("basmati_rice+rogan_josh+roti+raita?", "rogan_josh_thali");
        addIndianRecipe("dosa+sambar+coconut_chutney", "south_indian_tiffin");
        addIndianRecipe("idli+sambar+coconut_chutney", "idli_sambar_plate");
        addIndianRecipe("poori+aloo_gobi+tamarind_chutney?", "poori_bhaji");
        addIndianRecipe("samosa+mint_chutney+tamarind_chutney", "samosa_chaat");

        registerThaliMode(0);
    }

    function registerThaliMode(attempt) {
        if (typeof addView === "function") {
            addView("thali", {
                uisprite: "bowl.png",
                gamesprite: "bowl.png",
                gamespriteLiquid: "bowl_liquid.png",
                gamespriteFront: "bowl_front.png",
                gamespriteLiquidFront: "bowl_liquid_front.png",
                xrecipies: {
                    "rice+dal+roti+mint_chutney?": "vegetarian_thali",
                    "basmati_rice+chana_masala+roti+raita?": "chana_thali",
                    "basmati_rice+palak_paneer+naan+raita?": "paneer_thali",
                    "basmati_rice+butter_chicken+naan+raita?": "butter_chicken_thali",
                    "basmati_rice+rogan_josh+roti+raita?": "rogan_josh_thali",
                    "dosa+sambar+coconut_chutney": "south_indian_tiffin",
                    "idli+sambar+coconut_chutney": "idli_sambar_plate",
                    "poori+aloo_gobi+tamarind_chutney?": "poori_bhaji",
                    "samosa+mint_chutney+tamarind_chutney": "samosa_chaat"
                }
            });
            return;
        }

        if (attempt < 20) {
            setTimeout(function() { registerThaliMode(attempt + 1); }, 250);
            return;
        }

        if (typeof console !== "undefined" && console.warn) {
            console.warn("Indian Foods loaded. Load add_view.js before indian_foods.js to enable Thali Mode.");
        }
    }

    initIndianFoods(0);
})();
