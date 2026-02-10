/*
cool mod made by the best ic modder: mrpotato3119
                                        ⬆︎ yo i know that guy
*/

setTimeout(() => {
  const oldTempCheck = tempCheck;
  tempCheck = function () {
    oldTempCheck();

    let view = viewData[currentView];
    view.temp = Math.min(1000, Math.max(-100, view.temp));
  };
}, 0);

// R74N MAKE THIS WORK PLEASE ^

addIngredient("sword", {
    type: "utensil",
    shape: "sword",
    height: 0.5,
    keywords: ["spear","sharp","cut","blend","cutter","blade"],
    r: [105, 135, 165],
    onCollide: (self, other) => {
        var reactions = ingredientAttr(other.id, "reactions");
        if (reactions && reactions.knife) return; 
        toolData.blend.func(other); 
    },
    keywords:["mod"]
});


addIngredient("repelling_magnet", {
    type: "tool",
    color: "#FF0000",
    shape: "angle_bracket_up_thin_top",
    scale: 1.2,
    height: 0.5,
    adj: "magnetic",
    onPlace: (self) => {
        self.props = { range: 250 };
    },
    onCollide: () => {},
    keywords:["mod"]
});

(function() {
    const oldTickPlaced = tickPlaced;
    tickPlaced = function() {
        oldTickPlaced();
        const view = viewData[currentView];
        for (let magnet of view.total) {
            if (magnet.id !== "repelling_magnet") continue;
            const range = magnet.props?.range || 250;
            for (let other of view.total) {
                if (other === magnet) continue;
                if (other.id === "magnet") continue;
                const dx = other.x - magnet.x;
                const dy = other.y - magnet.y;
                const dist = Math.sqrt(dx*dx + dy*dy) || 1;
                if (dist < range) {
                    other.done = false;
                    other.done2 = false;
                    const force = Math.min(10, 40 / dist);
                    other.vx += (dx / dist) * force;
                    other.vy += (dy / dist) * force;
                }
            }
        }
    };
})();




addIngredient("magnet", {
    type: "tool",
    color: "#00AAFF",
    shape: "angle_bracket_up_thin_top",
    scale: 1.2,
    height: 0.5,
    adj: "magnetic",
    onPlace: (self) => {
        self.props = { range: 250 };
    },
    onCollide: () => {},
    keywords:["mod"]
});

(function() {
    const oldTickPlaced = tickPlaced;
    tickPlaced = function() {
        oldTickPlaced();
        const view = viewData[currentView];
        for (let magnet of view.total) {
            if (magnet.id !== "magnet") continue;
            const range = magnet.props?.range || 250;
            for (let other of view.total) {
                if (other === magnet) continue;
                if (other.id === "repelling_magnet") continue;
                const dx = magnet.x - other.x;
                const dy = magnet.y - other.y;
                const dist = Math.sqrt(dx*dx + dy*dy) || 1;
                if (dist < range) {
                    other.done = false;
                    other.done2 = false;
                    const pullForce = Math.min(15, 50 / dist);
                    other.vx += (dx / dist) * pullForce;
                    other.vy += (dy / dist) * pullForce;
                }
            }
        }
    };
})();





addIngredient("fire", {
    color: "#FF9D00", 
    innerColor: "#FF5C00",
    glow: "#FF7D00",
    shape: "flame",
    adj: "blazing",
    keywords: ["hot", "blaze", "flame", "lava"],
    dropInto: "smoke",
    dropIntoV: 7,
    behavior: 0,
    scale: 1.0,
    temp: 300,
    freezeInto: "smoke",
    freezePoint: 299,
    reactions: {
        water: {set1: "smoke", set2: "steam"},
        ice: {set1: "smoke", set2: "water"}
    },
    keywords:["mod"]
});

addIngredient("plasma", {
    color:"#9A1BA8",
    innerColor:"#AA00FF",
    glow:"#AA00FF",
    shape:"gas",
    adj:"plasmic",
    keywords: ["hot","flame","gas","ion","burn"],
    temp:10000,
    behavior: 3,
    freezeInto: "smoke",
    a: 0.5,
    freezePoint: 299,
    reactions: {
        water: {set2: "steam"},
        ice:{set2:"steam"},
    }
})

addIngredient("flare", {
    type:"fire",
    shape: "gas",
    keywords: ["hot", "blaze", "flame", "gas","explosion"],
    dropIntoV: null,
    reactions: {
        water: {set1: "smoke", set2: "steam"},
        ice: {set1: "smoke", set2: "water"}
    },
});



addIngredient("radiation", {
    color: "#00FF00",
    glow: "#00E400",
    shape: "gas",
    dishName: "radiation",
    adj: "radioactive",
    placedShape: "liquid_splat",
    reactions: {
        "meat": {set2: "radiation"}
    },
    keywords:["mod"]
}); 

addIngredient("fallout", {
    color:"344A34",
    shape:"squares_some",
    adj: "radioactive",
    keywords:["mod"]
});

(function () {
    const oldTickPlaced = tickPlaced;
    tickPlaced = function () {
        oldTickPlaced();

        const view = viewData[currentView];

        for (let i = view.total.length - 1; i >= 0; i--) {
            const obj = view.total[i];

            if (obj.id === "fire" || obj.id === "flare") {
                if (Math.random() < 0.01) {
                    const s = placeIngredient("smoke", obj.x, obj.y - 20);
                    s.done = false;
                    s.done2 = false;
                    s.vx = (Math.random() - 0.5) * 2;
                    s.vy = -Math.random() * 2;
                }
                obj.r = 0;

                if (Math.random() < 0.001) {
                    changeIngredient(obj, "smoke");
                }
            }

            if (obj.id === "flare") {
                if (obj.y > canvas.height - 80) {
                    changeIngredient(obj, "fire")
                }
                obj.vy = -6
            }

            if (obj.id === "plasma") {
                obj.vy = (Math.random() - 0.5) * 8;
                obj.vx = (Math.random() - 0.5) * 8;
                if (Math.random() < 0.001) {
                    changeIngredient(obj,"smoke")
                }
            }

            

            if (obj.id === "radiation") {
                if (Math.random() < 0.005) {
                    const g = placeIngredient("gas", obj.x, obj.y - 20);
                    g.done = false;
                    g.done2 = false;
                    g.vx = (Math.random() - 0.5) * 2;
                    g.vy = -Math.random() * 2;
                }

                if (Math.random() < 0.001) {
                    changeIngredient(obj, "gas");
                }
            }

            if (obj.id === "fallout") {
                if (Math.random() < 0.002) {
                    const r = placeIngredient("radiation", obj.x + (Math.random() - 0.5 * 10), obj.y - 20);
                    r.done = false;
                    r.done2 = false;

                }
            }

        }
    };
})();



addIngredient("gunpowder", {
    color:"111111",
    shape:"dots_some_flat",
    reactions: {
        fire: {set1: "explosion_small"},
        plasma: {set1: "explosion_small"},
        radiation: {set1: "explosion_small"}
    },
    meltInto:"explosion_small",
    meltPoint:250
})

addIngredient("bomb", {
  color: "#808080",
  shape: "circle_ms_calyx",
  type: "misc",
  adj: "explosive",
  dropInto: "explosion",
  dropIntoV: 0,    
  keywords: ["bomb","mod","weapon"]
});

addIngredient("explosion", {
  color: "#C2C2C2",
  a: 0.0,
  shape: "circle_ms_calyx",
  hidden: true     
});

addIngredient("nuke", {
    color: "#009400",
    shape: "atom",
    type: "bomb",
    adj: "explosive",
    dropInto: "explosion_n",
    dropIntoV: 0,
    keywords: ["bomb","mod","weapon","nuclear","atom"]
});

addIngredient("explosion_n", {
    color: "#009400",
    type: "explosion",
    shape: "atom",
    reactions: {
        water: { set2:"steam"}
    }
});

addIngredient("napalm_bomb", {
    color:"A58080",
    shape: "circle_ms_calyx",
    type:"misc",
    adj:"explosive",
    dropInto: "explosion_f",
    dropIntoV: 0,
    keywords:["bomb","mod","weapon","fire"]
});

addIngredient("explosion_f", {
    color:"#CC4400",
    type:"explosion",
});

addIngredient("smoke_grenade", {
    type:"bomb",
    color:"808080",
    shape: "circle_ms_calyx",
    dropInto: "explosion_s",
    keywords:["bomb","mod","weapon","smoke"]
});

addIngredient("explosion_s", {
    color:"#898989",
    type:"explosion",
});

addIngredient("explosion_small", {
    color:"#898989",
    type:"explosion",
});

(function () {
  const oldTickPlaced = tickPlaced;
  tickPlaced = function () {
    oldTickPlaced();

    const view = viewData[currentView];
    for (let i = view.total.length - 1; i >= 0; i--) {
      const obj = view.total[i];

      if (obj.id === "explosion") {
        const view = viewData[currentView];
        view.temp = 300;
        for (let j = 0; j < 18; j++) {
          const s = placeIngredient("smoke", obj.x + (Math.random() - 0.5) * 20, obj.y - 10);
          s.done = false;
          s.done2 = false;
          s.vx = (Math.random() - 0.5) * 8;
          s.vy = -Math.random() * 6 - 2;
          s.a = (Math.random() * (0.35 - 0.2) + 0.2);
        }

        for (let j = 0; j < 6; j++) {
          const f = placeIngredient("fire", obj.x + (Math.random() - 0.5) * 25, obj.y - 10);
          f.done = false;
          f.done2 = false;
          f.vx = (Math.random() - 0.5) * 20;
          f.vy = -(Math.random() * 2);
          f.rot = 0;
        }

        deleteIngredient(obj);
      }

      if (obj.id === "explosion_n") {
        const view = viewData[currentView];
        view.temp = 300;
        for (let j = 0; j < 50; j++) {
          const s = placeIngredient("smoke", obj.x + (Math.random() - 0.5) * 250, obj.y - 30);
          s.done = false;
          s.done2 = false;
          s.vx = (Math.random() - 0.5) * 40;  
          s.vy = -(Math.random() * 20 + 5);   
          s.a = (Math.random() * 0.3) + 0.2;  
          s.scale = (Math.random() * 1.5) + 0.5;
        }

        for (let j = 0; j < 40; j++) {
          const f = placeIngredient("fire", obj.x + (Math.random() - 0.5) * 250, obj.y + ((Math.random() -0.5) * 30) - 20);
          f.done = false;
          f.done2 = false;
          f.vx = (Math.random() - 0.5) * 20; 
          f.vy = -(Math.random() * 4.5);      
          f.rot = 0;
          f.scale = (Math.random() * 2) + 1;  
        }

        for (let j = 0; j < 20; j++) {
          const r = placeIngredient("radiation", obj.x + (Math.random() - 0.5) * 400, obj.y + ((Math.random() -0.5) * 20) - 30);
          r.done = false;
          r.done2 = false;
          r.vx = (Math.random() - 0.5) * 30; 
          r.vy = -(Math.random() * 7);
          r.scale = (Math.random() * 1.2) + 0.8;
        }

        for (let j = 0; j < 8; j++) {
            const f = placeIngredient("fallout", obj.x + (Math.random() - 0.5) * 400, obj.y + 20);
            f.done = false
            f.done2 = false
            f.vx = (Math.random() - 0.5) * 3;
            f.vy = -5
            f.scale = 1
        }   

        deleteIngredient(obj);
      }

    if (obj.id === "explosion_small") {
        const view = viewData[currentView];
        temp = view.temp
        view.temp = temp + 50
        if (Math.random() < 0.2) {
            const f = placeIngredient("fire", obj.x + (Math.random() - 0.5), obj.y);
        }
        for (let j = 0; j < 3; j++) {
            const g = placeIngredient("flare", obj.x, obj.y);
            g.done = false;
            g.done2 = false;
            g.vx = (Math.random() - 0.5) * 5
            g.vy = -2;
        }
        deleteIngredient(obj);
    }  

    if (obj.id === "explosion_f") {
        const view = viewData[currentView];
        view.temp = 300;
        if (!obj.didFire) {
            for (let j = 0; j < 15; j++) {
                const f = placeIngredient("fire", obj.x + (Math.random() - 0.5) * 80, obj.y + (Math.random() - 0.5) * 20);
                f.done = false;
                f.done2 = false;
                f.vx = (Math.random() - 0.5) * 10;
                f.vy = -(Math.random() * 2 + 1);
            }
            obj.didFire = true;
        }

        if (!obj.spawnTime) obj.spawnTime = performance.now();
        const elapsed = (performance.now() - obj.spawnTime) / 16.7;

        if (elapsed < 10) {
            for (let j = 0; j < 3; j++) {
                const g = placeIngredient("flare", obj.x + (Math.random() - 0.5) * 80, obj.y - 50);
                g.done = false;
                g.done2 = false;
                g.vx = (Math.random() - 0.5) * 6;
                g.vy = -(Math.random() * 15 + 10);
            }
        } else {
            deleteIngredient(obj);
        }
    }


    if (obj.id === "explosion_s") {
        for (let j = 0; j < 30; j++) {
            const s = placeIngredient("smoke", obj.x + (Math.random() - 0.5) * 50, obj.y + (Math.random() - 0.5) * 50);
            s.done = false;
            s.done2 = false;
        }
        deleteIngredient(obj);
      }
    }
  };
})();






addTool("airburst", {
    shape: "arrow_up",
    color: "#C2C2C2",
    func: () => {
        const range = 200;
        const view = viewData[currentView];
        for (let obj of view.total) {
            const dx = obj.x - mousePos.x;
            const dy = obj.y - mousePos.y;
            const dist = Math.sqrt(dx*dx + dy*dy) || 1;
            if (dist < range) {
                obj.done = false;
                obj.done2 = false;
                obj.vy = -8;
                obj.vx += (dx / dist) * 2;
            }
        }
    },
    target: "many",
    sway: true
});

addTool("insta_freeze", {
  shape: "snowflake",
  color: "#9ED8FF",
  target: "many",
  onClick: function () {
    const view = viewData[currentView];
    view.temp = 20;
    view.tempIncrease = 0;
    view.tempDecrease = 0;
    tempCheck();
  },
  func: () => {},
  sway: true
});

addTool("insta_heat", {
  shape: "flame",
  color: "#FF5C00",
  target: "many",
  onClick: function () {
    const view = viewData[currentView];
    view.temp = 300;
    view.tempIncrease = 0;
    view.tempDecrease = 0;
    tempCheck();
  },
  func: () => {},
  sway:true
});





// --- Black Hole Bomb -> Black Hole
addIngredient("black_hole_bomb", {
  color: "#222222",
  shape: "circle_ms_calyx",
  type: "bomb",
  adj: "explosive",
  dropInto: "black_hole",
  dropIntoV: 0,
  keywords: ["blackhole","bomb","mod","weapon"]
});

addIngredient("black_hole", {
  color: "#010101",
  shape: "fisheye_dark",
  type: "void",
  hidden: true,
  scale: 3
});

(function () {
  const oldTickPlaced = tickPlaced;
  tickPlaced = function () {
    oldTickPlaced();

    const view = viewData[currentView];
    const now = performance.now();

    for (let i = view.total.length - 1; i >= 0; i--) {
      const obj = view.total[i];
      if (obj.id !== "black_hole") continue;

      if (!obj.spawnTime) obj.spawnTime = now;
      const elapsed = now - obj.spawnTime;

      obj.vx = 0;
      obj.vy = Math.sin(elapsed / 300) * 0.3;
      obj.r = 0;
      obj.noCollide = true;
      obj.done = false;
      obj.done2 = false;

      const range = 2000; // huge pull radius
      for (let other of view.total) {
        if (other === obj) continue;

        const dx = obj.x - other.x;
        const dy = obj.y - other.y;
        const dist = Math.sqrt(dx*dx + dy*dy) || 1;

        if (dist < range) {
          other.done = false;
          other.done2 = false;

          const strength = 10 * (150 / dist);
          other.vx += (dx / dist) * strength;
          other.vy += (dy / dist) * strength;

          if (dist < 50) {
            if (other.hide && (ingredientAttr(other.id, "behavior") === 1 || ingredientAttr(other.id, "dissolve") || other.pseudo)) {
              removeLiquid(other.h, other.s, other.l);
              other.hide = false;
            }
            deleteIngredient(other);
          }
        }
      }

      // extra check: directly drain all hidden liquids in the view
      for (let other of view.total) {
        if (other.hide && (ingredientAttr(other.id, "behavior") === 1 || ingredientAttr(other.id, "dissolve") || other.pseudo)) {
          removeLiquid(other.h, other.s, other.l);
          other.hide = false;
          deleteIngredient(other);
        }
      }
    }
  };
})();





addRecipe("fallout+radiation+fire","nuclear_aftermath")
