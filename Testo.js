addTool("red_dye", {
    func: function(placed) { placed.h = 0; },
    onClick: function(x,y) { console.log(x,y) },
    shape:"bottle_smooth",
    spin: false
})

addTool("orange_dye", {
    func: function(placed) { placed.h = 10; },
    onClick: function(x,y) { console.log(x,y) },
    shape:"bottle_smooth",
    spin: false
})
