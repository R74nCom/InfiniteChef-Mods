-- Define new food items
local greenPopcorn = ing_new("green_popcorn")
local purpleCarrots = ing_new("purple_carrots") 
local chips = ing_new("chips")

-- Set properties
greenPopcorn.name = "Green Popcorn"
greenPopcorn.dsp_name = "Green Popcorn"
greenPopcorn.dsp_desc = "Popcorn that's been colored green for some reason."
greenPopcorn.dsp_img = "|res://misc/img/greenPopcorn.png|"
greenPopcorn.dsp_calories = 93

purpleCarrots.name = "Purple Carrots" 
purpleCarrots.dsp_name = "Purple Carrots"
purpleCarrots.dsp_desc = "Carrots that have been genetically modified to be purple."
purpleCarrots.dsp_img = "|res://misc/img/purpleCarrots.png|"
purpleCarrots.dsp_calories = 50

chips.name = "Chips"
chips.dsp_name = "Chips" 
chips.dsp_desc = "Thinly sliced potatoes that have been deep fried."
chips.dsp_img = "|res://misc/img/chips.png|"
chips.dsp_calories = 150

-- Add items to the game's food database
ing_register(greenPopcorn)
ing_register(purpleCarrots)
ing_register(chips)
