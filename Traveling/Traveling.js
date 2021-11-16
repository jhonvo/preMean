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
var tigger = { character: "Tigger"};

// Locations

heffalumps.west = eyeore;
eyeore.south = kanga;
eyeore.east = heffalumps;
kanga.north = eyeore;
kanga.south = christopher;
christopher.north = kanga;
christopher.south = winnie;
christopher.east = rabbit;
christopher.west = owl;
owl.east = christopher;
owl.south = piglet;
piglet.north = owl;
piglet.east = winnie;
winnie.north = christopher;
winnie.south = tigger;
winnie.west = piglet;
winnie.east = bees;
tigger.north = winnie;
bees.west = winnie;
bees.north = rabbit;
rabbit.west = christopher;
rabbit.east = gopher;
gopher.west = rabbit;

// Game

var player = {
    location: tigger
}

function move (dir){

    if (player.location[dir] != null){
        let current = player.location
        player.location = current[dir];
        console.log("You are now at " + player.location.character + " house.");
    }
    else {
        console.log("This location is not valid, please try again...")
    }
}
