addIngredient('cum',{
name: 'Cum', 
dishName:"Bukakke",
keywords: 'protein,cum,semen,sperm', 
shape: 'liquid',
adj:"Cummy", 
type:"liquid",
boilPoint:100,
boilInto:"spermatozoa",
freezePoint: 0,
freezeInto: "frozen_cum",
placedShape: 'liquid',
landedShape:"liquid_splat",
color: '#fff7c7' 

});

addIngredient('spermatozoa',{
name: 'Spermatozoa', 
dishName:"Bukakke",
keywords: 'protein,cum,semen,sperm', 
shape: 'liquid',
adj:"Cummy", 
type:"liquid",
freezePoint: -196,
freezeInto: "frozen_spermatoza",
placedShape: 'liquid',
landedShape:"liquid_splat",
color: '#fffbe3' 


});

addIngredient('frozen_spermatoza',{
name: 'Frozen Spermatozoa', 
keywords: 'protein,cum,semen,sperm', 
shape:"cube",
adj:"Cummy", 
placedShape: 'cube',
color: '#fffbe3', 
broken:"shaved_spermatoza",
meltPoint:1,
meltInto:"spermatoza"

});

addIngredient('shaved_spermatoza',{
name: 'Shaved Spermatozoa', 
keywords: 'protein,cum,semen,sperm', 
type: "powder",
adj:"Cummy", 
placedShape: 'liquid',
landedShape:"liquid_splat",
color: '#fffbe3',
meltPoint:1,
meltInto:"spermatoza"


});

addIngredient('frozen_cum',{
name: 'Frozen Cum', 
keywords: 'protein,cum,semen,sperm', 
shape:"cube",
adj:"Cummy", 
placedShape: 'cube',
color: '#fffbe3', 
broken:"shaved_cum",
meltPoint:1,
meltInto:"spermatoza"

});

addIngredient('shaved_cum',{
name: 'Shaved Cum', 
keywords: 'protein,cum,semen,sperm', 
type: "powder",
adj:"Cummy", 
placedShape: 'liquid',
landedShape:"liquid_splat",
color: '#fffbe3',
meltPoint:1,
meltInto:"semen"


});