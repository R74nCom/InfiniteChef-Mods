addIngredient("dead_plant",{
	color:"#663E35",
	shape:"squares_some",
	stackShape:"squares_some_flat",
	hidden:true,
	dissolve:true,
});

addIngredient("growagarden",{
	color:"FF00FF",
	shape:"fruit",
	hidden:true,
	broken:"cut_growagarden"
});

addIngredient("cut_growagarden", {
	shape:"rectangle_thinner_tablet",
	hidden:true,
	height:0.3
});

editIngredient("carrot", {
	keywords:["shop","sam","common"],
});

editIngredient("strawberry", {
	keywords:["shop","sam","common"],
});

editIngredient("blueberry", {
	keywords: ["shop","sam","uncommon"],
});

addIngredient("orange_tulip", {
	color: "#FF9900",
	shape: "flower_rose",
	innerColor: "#FFB100",
	broken:"dead_plant",
	group:"flower",
	keywords: ["shop","sam","flower","uncommon"],});

editIngredient("tomato", {
	keywords: ["shop","sam","rare"]
});

editIngredient("corn", {
	keywords: ["shop","sam","rare"]
});

"jack-o'-lantern,jack o'lantern,jackolantern,jack-o-lantern"

addIngredient("daffodil", {
	broken: "dead_plant",
	group:"flower",
	color: "#FFFF00",
	shape:"flower",
	keywords: ["shop","sam","flower","rare"],});

editIngredient("watermelon", {
	keywords: ["shop","sam","legendary"]
});

editIngredient("pumpkin", {
	keywords: ["jack-o'-lantern,jack o'lantern,jackolantern,jack-o-lantern","sam","shop","legendary"]
});

editIngredient("apple", {
	keywords: ["shop","sam","legendary"],
	color:"E14848"
});

addIngredient("bamboo", {
	color: "#00B100",
	shape:"rectangle_vertical_thinnest",
	brokenShape:"squares_some",
	keywords: ["shop","sam","legendary"],
	scale: 3.0,
	width: 0.15
});

editIngredient("coconut", {
	keywords: ["shop","sam","mythical"]
});

editIngredient("prickly_pear", {
	keywords: ["cactus pear","shop","sam","mythical","prickly_pear"],
	name:"cactus"
});

editIngredient("dragonfruit", {
	keywords: ["pitaya fruit","pitahaya fruit","dragon fruit","shop","sam","mythical"]
});

editIngredient("mango", {
	keywords: ["shop","sam","mythical"]
});

editIngredient("grape", {
	keywords:["shop","sam","divine"],
	shape:"bunch",
});

editIngredient("mushroom",{
	type:"growagarden",
  color: ["#1845B8","#C81818","#8E18B5","#FFE600","#21BD19","#C81818","#1845B8","#21BD19","#8E18B5","#212121","FFE600"],
  keywords: ["shop","sam","divine"],
});

editIngredient("bell_pepper",{
	color: ["#D01414","#D0A714","#309900"],
});

editIngredient("pepper", {
	type:"growagarden",
	shape:"hook_stem",
	color:"D91818",
	keywords: ["shop","sam","divine"],
	hidden:false,
});

editIngredient("cayenne", {
	shape:"hook_stem",
	color:"FF4444",
});

addIngredient("cacao_pod", {
	shape:"lens_vertical",
	broken:"cocoa_bean",
	color:"8F5B00",
	scale:1.5,
	keywords: ["shop","sam","chocolate","cocoa","divine"],});

//beanstalk turns into pea burst when chopped (couldnt find a shape that actually looked like a beanstop so the "chopped" goes both ways ;-;)
addIngredient("beanstalk", {
  shape: "bar_vertical",
  color: "#00AA00",
  keywords: ["shop","sam","pea","pod","prismatic"],
  broken: "pea_burst",
	height:0.4
});

addIngredient("pea_burst", {
  hidden: true,
  shape: "circle_s",
  a: 0.0,
  color: "#00FF00"
});

(function () {
  const oldTickPlaced = tickPlaced;
  tickPlaced = function () {
    oldTickPlaced();

    const view = viewData[currentView];
    for (let i = view.total.length - 1; i >= 0; i--) {
      const obj = view.total[i];
      if (obj.id !== "pea_burst") continue;

      for (let j = 0; j < 3; j++) {
        const p = placeIngredient("pea", obj.x + (Math.random() - 0.5) * 10, obj.y);
        p.vx = (Math.random() - 0.5) * 2;
        p.vy = -Math.random() * 2;
      }

      deleteIngredient(obj);
    }
  };
})();

addIngredient("ember_lily",{
	shape:"flower_lipped",
	color:["#C11818","#E05A0B","E0400B"],
	scale:1.2,
	keywords: ["shop","sam","fire","flower","prismatic"],
	broken:"lava",
	temp: 120,});

addIngredient("sugar_apple",{
	broken:"sugar_apple_juice",
	color: "33FF33",
	shape:"fruit_bipod_stem",
	keywords:["shop","sam","prismatic"],});

addIngredient("sugar_apple_juice", {
	type:"sugar_apple",
	shape:"liquid",
	placedShape:"droplets_some",
	landedShape:"liquid_splat",
	behavior:1,
	dissolve:true,
	keywords:["juice","liquid"],
});

addIngredient("burning_bud",{
	shape:"flower_clover",
	color:["FFE100","FFC200","FFDD00"],
	broken:"lava",
	scale:2.0,
	keywords: ["shop","sam","fire","flower","prismatic"],
});

addIngredient("giant_pinecone", {
	shape:"ovoid_scaly",
	color:"#703A00",
	brokenShape:"squares_some",
	keywords:["shop","sam","big","prismatic"],
	scale: 2.0
});

addIngredient("elder_strawberry", {
	shape:"pick",
	scale:1.5,
	color:"A90000",
	broken:"elder_strawberry_juice"
});

addIngredient("elder_strawberry_juice", {
	type:"elder_strawberry",
	color:"A90000",
	shape:"liquid",
	placedShape:"droplets_some",
	landedShape:"liquid_splat",
	behavior:1,
	dissolve:true,
	keywords:["juice","liquid"]
});

addIngredient("romanesco", {
	shape:"circle_leafed",
	brokenShape:"foliage_bar",
	color:"00DF00",
	scale:1.2,
	keywords:["sam","shop","broccoli","prismatic","vegetable"]
});

addIngredient("candy_blossom_tree", {
	shape:"tree",
	color:"FF00FF",
	scale:3.0,
});

addIngredient("candy_blossom", {
	shape:"fungus",
	color:"FF00FF",
	keywords:["divine","easter","event"],
	adj:"candied",
	dissolve:true
});

(function () {
  const oldTickPlaced = tickPlaced;
  tickPlaced = function () {
    oldTickPlaced();

    const view = viewData[currentView];
    for (let i = view.total.length - 1; i >= 0; i--) {
      const obj = view.total[i];
      if (obj.id !== "candy_blossom_tree") continue;
      	if (Math.random() < 0.003) {
      		const c = placeIngredient("candy_blossom", obj.x, obj.y);
      		c.done = false
      		c.done2 = false
      		c.vx = (Math.random() - 0.5) * 3;
      	}
    }
  };
})();

addIngredient("bone_blossom_tree", {
	shape:"tree",
	color:"6E5134",
	scale:3.0
});

addIngredient("bone_blossom", {
	shape:"flower_x",
	color:"A66A46",
	keywords:["transcendent","prehistoric","event"],
	adj:"fossilized",
});

(function () {
  const oldTickPlaced = tickPlaced;
  tickPlaced = function () {
    oldTickPlaced();

    const view = viewData[currentView];
    for (let i = view.total.length - 1; i >= 0; i--) {
      const obj = view.total[i];
      if (obj.id !== "bone_blossom_tree") continue;
      	if (Math.random() < 0.003) {
      		const b = placeIngredient("bone_blossom", obj.x, obj.y);
      		b.done = false
      		b.done2 = false
      		b.vx = (Math.random() - 0.5) * 3;
      	}
    }
  };
})();

addIngredient("venus_flytrap", {
	shape:"shrimp",
	scale: 3.0,
	color:"#008900",
	glow:"#FF0000",
	keywords:["divine","angry_plant","event"],
});


addIngredient("cursed_fruit", {
	type:"growagarden",
	shape:"oval_leafy",
	color:"#880000",
	scale:1.2,
	adj:"cursed",
	keywords:["divine","event","exotic"],
	glow:"#880000"
});

addIngredient("elephant_ear", {
	type:"growagarden",
	shape:"kite",
	r:180,
	color:"#FFFFFF",
	keywords:["prismatic","event","summer"]
});

addIngredient("dragon_pepper",{
	type:"growagarden",
	shape: "hook_stem",
	color:"#FF0072",
	glow:"#ff0072",
	keywords:["divine","event","bee","crafters","bizzy","bear"],
});

addIngredient("honeysuckle",{
	shape:"flower_hex",
	color:"#FFFF00",
	broken:"dead_plant",
	keywords:["mythical","event","bee","bizzy","bear"]
});

addIngredient("sunflower", {
	shape:"flower_clover",
	color:"#ffff00",
	broken:"dead_plant",
	keywords:["divine","event","bee","flower"]
});

addIngredient("moon_melon", {
	type:"growagarden",
	shape:"oval_thick_horizontal",
	color:"#c21adb",
	keywords:["mythical","event","moon","moonlit"]
});

addIngredient("moon_mango", {
	type:"growagarden",
	shape:"oval_thick",
	color:"#980cf5",
	keywords:["mythical","event","moon","moonlit"]
})

addIngredient("moon_blossom_tree", {
	shape:"tree",
	color:"#ca5ff5",
	scale:3.0
});

addIngredient("moon_blossom", {
	shape:"flower_x",
	color:"#ca5ff5",
	keywords:["divine","moon","blood","event"],
	adj:"moonlit",
	});

(function () {
  const oldTickPlaced = tickPlaced;
  tickPlaced = function () {
    oldTickPlaced();

    const view = viewData[currentView];
    for (let i = view.total.length - 1; i >= 0; i--) {
      const obj = view.total[i];
      if (obj.id !== "moon_blossom_tree") continue;
      	if (Math.random() < 0.003) {
      		const m = placeIngredient("moon_blossom", obj.x, obj.y);
      		m.done = false
      		m.done2 = false
      		m.vx = (Math.random() - 0.5) * 3;
      	}
    }
  };
})();


addIngredient("cherry_blossom_tree", {
	shape:"fungus_pointy",
	color:"#FF88FF",
	scale:3.0
});

addIngredient("cherry_blossom", {
	shape:"flower",
	color:"#FF88FF",
	keywords:["divine","unobtainable"]
});

(function () {
  const oldTickPlaced = tickPlaced;
  tickPlaced = function () {
    oldTickPlaced();

    const view = viewData[currentView];
    for (let i = view.total.length - 1; i >= 0; i--) {
      const obj = view.total[i];
      if (obj.id !== "cherry_blossom_tree") continue;
      	if (Math.random() < 0.003) {
      		const m = placeIngredient("cherry_blossom", obj.x, obj.y);
      		m.done = false
      		m.done2 = false
      		m.vx = (Math.random() - 0.5) * 3;
      	}
    }
  };
})();

addIngredient("grand_tomato", {
	type:"growagarden",
	shape:"fruit_wide_stem",
	scale: 2.0,
	color:"#FF2222",
	keywords:["divine","cooking","event","chef"]
});

addIngredient("maple_apple", {
	type:"growagarden",
	shape:"fruit_wide_stem",
	color:"#c9811c",
	keywords:["divine","zen","event","kitsune","corrupt"]
});

addIngredient("travelers_fruit", {
	type:"growagarden",
	shape:"y",
	color:"#3648c9",
	r:shapeMeta.octRotation,
	keywords:["divine","summer","harvest","event"]
});

addIngredient("hive_fruit", {
	type:"growagarden",
	shape:"gas",
	color:"#3648c9",
	keywords:["divine","bee","bizzy","event"]
});