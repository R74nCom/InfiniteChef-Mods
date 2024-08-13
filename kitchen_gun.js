var kitchengunbang = new Audio('https://github.com/electric-moss/electric-moss.github.io/raw/main/BANG.mp3')

addTool("kitchen_gun", {
    func: function(placed) { toolData.blend.func(placed); },
    whileOn: function() { console.log("BANG!!!"); },
    onClick: function(x,y) { 
        console.log(x,y)
        kitchengunbang.play();
     },
    //shape:"plus_round",
    spin: false,
    img:"https://raw.githubusercontent.com/electric-moss/electric-moss.github.io/main/crosshair.png"
})