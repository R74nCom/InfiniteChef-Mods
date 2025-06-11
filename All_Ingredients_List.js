// Ingredient List Sidebar Mod
;(function(){

  // 1) List of all ingredient IDs you provided
  const allIDs = [ "acai","acid","ackee","acorn","acorn_squash","air","alcohol","alfalfa_sprout","allspice","almond","almond_milk","american_cheese","anchovy","anise","apple","apple_juice","apricot","artichoke","asparagus","avocado","azuki_bean","baby_doll","bacon","bacteria","bagel","baguette","baking_powder","baking_soda","balut","bamboo_shoot","banana","barbecue_sauce","barley","basil","batter","bay_leaf","bean","bean_sprout","beef","beef_patty","beef_tongue","beer","beetroot","bell_pepper","berry","black_bean","black_eyed_pea","black_pepper","black_rice","blackberry","blue_cheese","blue_corn","blue_crab","blue_dye","blue_lobster","blue_raspberry","blueberry","boiled_egg","bok_choy","bone","bottom_bun","bouillon_cube","boulder","boysenberry","brazil_nut","bread","breadcrumbs","breadfruit","broccoli","broccolini","broth","brown_rice","brown_sugar","brownie","brussels_sprout","bubblegum","buddhas_hand","bug_juice","bun","butter","buttercream","buttermilk","butternut_squash","butterscotch","cabbage","cake","calf_brain","candy","cantaloupe","caramel","carbon_dioxide","cardamom","carrot","cashew_nut","cassava","cauliflower","cayenne","celery","cephalopod","cereal_plant","chard","cheddar","cheese","cheese_powder","cheese_sauce","cheese_wheel","cheeseball","cherries","cherry","chestnut","chicken","chicken_foot","chicken_nugget","chicken_patty","chickpea","chicory_root","chili_pepper","chili_powder","chili_sauce","chip","chive","chocolate","chocolate_chip","chocolate_cup","chocolate_icing","chocolate_milk","chocolate_powder","chocolate_wafer","cilantro","cinnamon","cinnamon_strip","citric_acid","citron","citrus","citrus_juice","clam","cloudberry","clove","cocoa_bean","coconut","coconut_milk","cod","coffee","coffee_bean","coffee_ground","collards","cooked_yolk","cookie","cookie_butter","corn","corn_chip","corn_flake","corn_syrup","cornstarch","crab","cracker","cranberry","crayfish","cream","cream_cheese","cress","crouton","crumbs","crustacean","cucumber","cumin","cupcake_wrapper","currant","curry_leaf","daikon","dark_chocolate","date","decor","dill","doll","donut","dough","dragonfruit","dreamberry","dressing","duck","durian","dye","easter_egg","eel","egg","eggplant","elderberry","endive","energy","enoki","eye","fat","fava_bean","fennel_seed","feta","fiddlehead","fig","fish","flatbread","flour","fluff","fork","frog_leg","frozen_yogurt","fruit","fruit_curd","fruit_juice","fry","gallium","garlic","garlic_powder","gas","gelatin","ghost_pepper","giant","ginger_root","gingerbread_man","ginseng","glue","goat","goose","gooseberry","graham_cracker","granola","grape","grapefruit","gravy","grease","green_bean","green_dye","ground_almond","ground_meat","ground_nut","ground_peanut","guacamole","guava","gumball","gumdrop","gummy_worm","habanero","ham","hat","hazelnut","herb","herring","himalayan_salt","hoisin_sauce","honey","honeydew","horse","horseradish","hot_sauce","huckleberry","hummus","ice_cream","ice_cube","icing","indigo_dye","insect","jackfruit","jalapeno","jam","jelly","jelly_bean","jellyfish","jicama","juice","kale","kangaroo","ketchup","kidney_bean","kiwi","knife","kohlrabi","kumquat","lamb","lava","lavender","leaf_vegetable","leavener","leek","legume","lemon","lemon_juice","lemon_water","lemonade","lentil","lettuce","licorice","licorice_root","lima_bean","lime","lime_juice","liquid","liquor","lobster","lychee","macadamia","macaroni","mackerel","maggot","mandarin_orange","mango","mangosteen","maple_syrup","margarine","marmalade","marshmallow","mashed_banana","mashed_potato","matcha","mayonnaise","meat","meat_sauce","meatball","melon","melted_butter","microplastic","milk","milkoid","mint","miso","mochi","molasses","morel","mozzarella","mozzarella_stick","msg","mulberry","mung_bean","mushroom","mussel","mustard","mustard_greens","mustard_seed","mutton","noodles","nut","nut_butter","nutmeg","oat","oat_seed","octopus","oil","okra","olive","olive_oil","onion","onion_powder","orange","orange_dye","orange_juice","orange_slice","oregano","ostrich_egg","oyster","pancake","pandan_extract","papaya","paprika","parmesan","parsley","parsnip","passionfruit","pasta","paste","pastry","pea","peach","peanut","peanut_butter","pear","pepper","pepper_x","peppermint","pepperoni","persimmon","pesto","pickle","pine_nut","pineapple","pinto_bean","pistachio","plant","plant_patty","plantain","plum","poison","pomegranate","pomelo","popcorn","poppy_seed","pork","pork_liver","portabella","potato","poultry","powder","prawn","pretzel","prickly_pear","provolone","prune","pumpkin","pumpkin_mash","pumpkin_seed","purple_potato","quail_egg","quince","r74n","rabbit","radish","raisin","rambutan","ranch_dressing","random","raspberry","red_cabbage","red_dye","red_herring","relish","rhubarb","rice","rice_flour","rice_noodles","rock","roe","root_beer","root_vegetable","rose_apple","rosemary","roux","rue","rum","rutabaga","rye","saffron","sage","sake","sakura","salami","salmon","salsa","salt","sand","sardine","sauce","sausage","scallion","scallop","seaweed","seed","seltzer","sesame","shallot","shaved_ice","shellfish","shiitake","shrimp","skewer","smoke","snail","soda","sorghum","sour_cream","soy_milk","soy_sauce","soybean","spam","spice","spider","spinach","sprinkles","squash","squid","squid_ink","star_anise","starfruit","steam","straw","strawberry","sugar","sugar_beet","sugar_cane","sumac","sunflower_seed","support","sweet_and_sour","sweet_potato","swiss_cheese","syrup","szechuan_pepper","tabasco","taco_shell","tamarind","tangerine","tapioca_pearl","tea","tea_leaf","thick_liquid","thyme","tofu","tomato","tomato_sauce","top_bun","truffle","tuber","tuna","turkey","turmeric","turnip","ube","unknown","uranium","utensil","vanilla","vanilla_bean","vanilla_extract","veal","vegetable","vegetable_juice","vegetable_oil","venison","vinegar","vodka","waffle","waffle_cone","walnut","wasabi","wasabi_root","water","water_chestnut","watercress","watermelon","watermelon_slice","wheat","whipped_butter","whipped_cream","whiskey","white_button","white_chocolate","wine","worcestershire_sauce","worm","yam","yeast","yellow_dye","yellow_tomato","yogurt","yolk","yoyleberry","zucchini" ];

  // 2) Create sidebar panel HTML
  const panel = document.createElement("div");
  panel.id = "ingredient-list-panel";
  panel.style.cssText = `
    position: absolute;
    top: 40px;
    right: 0;
    width: 240px;
    height: calc(100% - 40px);
    background: rgba(32,32,32,0.9);
    color: #eee;
    overflow-y: scroll;
    padding: 8px;
    font-family: sans-serif;
    font-size: 13px;
    z-index: 9998;
    display: none;
  `;
  allIDs.sort().forEach(id => {
    const div = document.createElement("div");
    div.textContent = id;
    div.style.margin = "4px 0";
    panel.appendChild(div);
  });
  document.body.appendChild(panel);

  // 3) Add toggle button
  const btn = document.createElement("button");
  btn.id = "ingredient-list-btn";
  btn.textContent = "🍴 Ingredients";
  btn.style.cssText = `
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 4px 8px;
    background: #444;
    color: #eee;
    border: none;
    border-radius: 4px;
    font-size: 13px;
    z-index: 9999;
  `;
  btn.onclick = () => {
    panel.style.display = panel.style.display === "none" ? "block" : "none";
  };
  document.body.appendChild(btn);

  console.log("Ingredient List Sidebar Mod loaded.");
})();
