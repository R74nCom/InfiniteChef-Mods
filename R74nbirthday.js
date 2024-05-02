addIngredient('cake',{
name: 'Cake',
dishName: 'Cake for R74n',
shape: 'cylinder_short',
scale: 2.5,
color: '#ffffff'
});
addIngredient('icing', {
name: 'Icing',
dishName: null,
shape: 'dot',
color: '#ff0000'
});
addIngredient('candle', {
name: 'Candle',
dishName: null,
shape: 'bar_vertical',
scale: 0.5,
color: '#ff3333'
});
addIngredient('fire', {
name: 'Fire',
dishName: null,
shape: 'flame',
a: 0.75,
scale: 0.5,
glow: '#ff6a00',
reactions: {
	water: {set1: null, set2: 'steam'}
},
color: '#ff6a00'
})
ingredients.water.reactions.fire = {set1: null, set2: 'steam'};
function randomizeHue() {
    ingredients.icing.h = Math.floor(Math.random() * 360);
}
changeView('stack');
placeIngredient('cake', 316, 275);
randomizeHue();
placeIngredient('icing', 316, 250);
randomizeHue();
placeIngredient('icing', 375, 230);
randomizeHue();
placeIngredient('icing', 366, 250);
randomizeHue();
placeIngredient('icing', 300, 215);
randomizeHue();
placeIngredient('icing', 312, 267);
randomizeHue();
placeIngredient('icing', 263, 232);
placeIngredient('candle', 316, 200);
placeIngredient('candle', 301, 210);
placeIngredient('candle', 331, 210);
placeIngredient('candle', 316, 220);
placeIngredient('candle', 301, 230);
placeIngredient('candle', 331, 230);
placeIngredient('candle', 316, 240);
placeIngredient('fire', 316, 190);
setInterval(randomizeHue, 100);
