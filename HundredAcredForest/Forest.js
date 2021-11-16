// Characters
var heffalumps = { character: "Heffalumps"};
var eyeore = { character: "Eyeore"};
var kanga = { character: "Kanga"};
var owl = { character: "Owl"};
var christopher = { character: "Christopher Robin"};
var rabbit = { character: "Rabbit"};
var gopher = { character: "Gopher"};
var piglet = { character: "Piglet"};
var winnie = { character: "Winnie the Pooh"};
var bees = { character: "Bees"};
var tiger = { character: "Tiger"};

// Locations

heffalumps.west = eyeore;
eyeore.south = kanga;
eyeore.east = heffalumps;
kanga.nort = eyeore;
kanga.south = christopher;
christopher.nort = kanga;
christopher.south = winnie;
christopher.east = rabbit;
christopher.west = owl;
owl.east = christopher;
owl.south = piglet;
piglet.nort = owl;
piglet.east = winnie;
winnie.nort = christopher;
winnie.south = tiger;
winnie.west = piglet;
winnie.east = bees;
tiger.nort = winnie;
bees.west = winnie;
bees.nort = rabbit;
rabbit.west = christopher;
rabbit.east = gopher;
gopher.west = rabbit;

// Testing:
console.log(rabbit);


