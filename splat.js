var splataudio = new Audio('https://github.com/electric-moss/electric-moss.github.io/blob/main/splat.js')

window.addEventListener("load", function(){
    for (var i in ingredients) {
        if (ingredients[i].onLand) continue;
        ingredients[i].onLand = splataudio.play;
    }
  })

  