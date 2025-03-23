addIngredient("human",{
    type:"meat",
    color:"#b81d32",
    keywords:"cannibal,flesh",
  reactions: {{tumor: {set1:"tumor"}}
});
addIngredient("fetus",{
    color:"#fa8989",
    type:"meat",
    shape:"embryo",
  keywords:"cannibal,human,embryo,baby",
  reactions: {{tumor: {set1:"tumor"}}
});
addIngredient("hand",{
    color:"#ffaf87",
    type:"meat",
    shape:"four_splay",
  keywords:"cannibal,human",
  reactions: {{tumor: {set1:"tumor"}}
});
addIngredient("blood",{
    color:"#fd0000",
    type:"liquid",
  adj:"bloody",
  keywords:"cannibal,human,heart",
  reactions: {
        bacteria: {set1:"infected_blood"},
    infected_blood: {set1:"infected_blood"},
    poison: {set1:"infected_blood"},
    tumor: {set1:"infected_blood"}
  }
});
addIngredient("infected_blood",{
    color:"d40047",
    type:"liquid",
  adj:"infected",
  keywords:"cannibal,human,infection,bacteria",
  reactions: {
        pill: {set1:"blood"}
  }
});
addIngredient("heart",{
    type:"meat",
    color:"e30242",
  shape:"heart",
  adj:"lovely",
    keywords:"cannibal,flesh,human,organ",
  reactions: {{tumor: {set1:"tumor"}}
});
addIngredient("intenstines",{
    type:"meat",
    color:"f71147",
  shape:"noodles",
  keywords:"cannibal,flesh,human,organ",
  reactions: {{tumor: {set1:"tumor"}}
});
addIngredient("brain",{
    type:"meat",
    color:"f23d67",
  shape:"brain",
  adj:"intelligent",
  keywords:"cannibal,flesh,human,organ",
  reactions: {{tumor: {set1:"tumor"}}
});
addIngredient("stomach",{
    type:"meat",
    color:"f23d67",
  shape:"bean_l",
  keywords:"cannibal,flesh,human,organ",
  reactions: {{tumor: {set1:"tumor"}}
});
addIngredient("liver",{
    type:"meat",
    color:"6b1c1c",
  shape:"bean_l",
  keywords:"cannibal,flesh,human,organ",
  reactions: {{tumor: {set1:"tumor"}}
});
addIngredient("kidney",{
    type:"meat",
    color:"7d1111",
  shape:"bean",
  keywords:"cannibal,flesh,human,organ",
  reactions: {{tumor: {set1:"tumor"}}
});
addIngredient("ear",{
    type:"meat",
    color:"ffaf87",
  shape:"ear",
  keywords:"cannibal,flesh,human,organ",
  reactions: {{tumor: {set1:"tumor"}}
});
addIngredient("eye",{
    type:"meat",
    color:"ffadad",
  shape:"ball_strung",
  keywords:"cannibal,flesh,human,organ",
  reactions: {{tumor: {set1:"tumor"}}
});
addIngredient("testicles",{
    type:"meat",
    color:"850056",
  shape:"oval_bi",
  keywords:"cannibal,flesh,human,organ,balls,testes,nuts",
  reactions: {{tumor: {set1:"tumor"}}
});
addIngredient("tumor",{
    type:"bug",
    color:"8a4a61",
  shape:"foliage",
  adj:"cancerous",
  keywords:"cannibal,flesh,human,cancer,",
      reactions: {{pill: {set1:"air"}}
});
addIngredient("pill",{
    type:"candy",
    color:"e6f1ff",
  shape:"circle_scored",
  keywords:"antibiotic,medicine,cure"
});
editIngredient("bacteria",{
    reactions: {{pill: {set1:"air"}}
});
addRecipe("fetus+poison","abortion");
addRecipe("fetus+knife","abortion");
addRecipe("broth+brain","brain_stew");
addRecipe("alcohol+liver","hepatitis");
addRecipe("beer+liver","hepatitis");
addRecipe("hand+hand","high_five!");
