// Characters
var heffalumps = { character: "Heffalumps", greet: function(){
    console.log("Ohhh I change my shape...");
}};
var eyeore = { character: "Eyeore", greet: function(){
    console.log("I am soooo bored...");
}};
var kanga = { character: "Kanga", greet: function(){
    console.log("Do you want a hug?");
} };
var owl = { character: "Owl", greet: function(){
    console.log("I know it all!!");
} };
var christopher = { character: "Christopher Robin", greet: function(){
    console.log("Pooh is my best friend!");
} };
var rabbit = { character: "Rabbit", greet: function(){
    console.log("Have you seen my carrot?");
} };
var gopher = { character: "Gopher", greet: function(){
    console.log("He he he heeello Strager!!");
} };
var piglet = { character: "Piglet", greet: function(){
    console.log("Oh d-d-d-dear! I wasn't expecting company!");
} };
var winnie = { character: "Winnie the Pooh", greet: function(){
    console.log("Oh Bother");
}};
var bees = { character: "Bees", greet: function(){
    console.log("Hope you are not comming for our honey!!");
}};
var tigger = { character: "Tigger", greet: function(){
    console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }};

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
        player.location.greet();
    }
    else {
        console.log("This location is not valid, please try again...")
    }
}
