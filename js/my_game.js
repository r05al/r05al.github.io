 // U3.W7: Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description:
// Overall mission: Reach the cure before getting bitten.
// Goals: Strategically pass obstactles
// Characters: shero, man, or boy
// Objects: the characters
// Functions: fight, flight, grab, toss, search


// Pseudocode
// Define the three character types
//     properties include speed, items, actions, health
// Functions take args item and action 
//     variation of item and action have different results
//Pass through random array of zombie types to locate cure

// Initial Code



var shero = {
  name: "Thor",
  age: Infinity,
  health: 100,
  weight: 250,
  items: ["hammer"]

}

var man = {
  name: "Jim",
  age: 32,
  health: 8,
  weight: 170,
  items: ["fist"]
}



function Character(name, age, health, weight, items){
  this.name = name;
  this.age = age;
  this.health = health;
  this.weight = weight;
  this.items = items;
};

gnarr = new Character("Gnarr", undefined, 4, 120, ["teeth", "hands"]);
ugga = new Character("Ugga", undefined, 6, 300, ["weight", "feet"]);
cell = new Character("Cell", undefined, 100, 200, ["energy blast", "bear hug"]);
gronk = new Character("Gronk", undefined, 10, 260, ["tackle", "spike"]);

function Tools(name, action, chance, power, good, bad) {
  this.name = name;
  this.action = action;
  this.chance = chance;
  this.power = power;
  this.good = good;
  this.bad = bad;
};

helmet = new Tools("helmet", "jump in", .9, 2, "head-butted it", "its teeth are stuck on");
pipe = new Tools("pipe", "swing for the fences", .9, 3, "bashed it", "it grabbed on");
legos = new Tools("legos", "toss em", .1, 100, "have lodged them in its throat", "bounced off its face");
cape = new Tools("cape", "flick it out", 1, 1, "have it binded", "you got clothes lined");
grillTop = new Tools("grill top", "brace yourself", 1, 0, "are shielded", "dropped on your foot");
scooter = new Tools("scooter", "hop on", 1, 5, "riding is tiring it out", "tripped over a sidewalk crack");
lightningBolt = new Tools("lightning bolt", "Sith hand motion", .1, 1000, "focus then THUNDER CLAP... vaporized", "seriously? What did you think was going to happen?");
cure = new Tools("cure", "apply it", 1, Infinity, "WIN", "WIN");

var boy = {
  name: "Charlie",
  age: 4,
  health: 200,
  weight: 40,
  items: [helmet],//["helmet"],
  grab: grab,
  toss: toss,
  search: search,
  fight: fight,
  hp: hp
}

var actions = {
  action: ["swing","fly","run","cry",""]
}

var gauntlet = [0,1,2,3];
//var things = ["pipe", "legos","cape","grill top","scooter","lightning bolt", "cure"];
var things = [pipe, legos, cape, grillTop, scooter, lightningBolt, cure];
var obstactles = [gnarr, ugga, cell, gronk];
var cross = shuffle(things.concat(gauntlet));

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function fight(item, action, thing) {
  items =  this.items;
  if (items.indexOf(item) >-1) {
    console.log("You take your " + item.name + " and " + item.action + "!");
  }
  else {
    console.log("You don't posses a " + item.name + "...");
  }
}

function flight(item, action) {

}

function grab(thingy) {
  this.items.push(thingy);
  console.log("You have picked up a " + thingy.name + "!");
}

function toss(item) {
  items =  this.items;
  if (items.indexOf(item) >-1) {
    var index = items.indexOf(item);
    this.items.splice(index,1);
    console.log("You tossed a " + item.name + "!");
  }
  else {
    console.log("You don't posses a " + item.name + "...");
  }
}

// function play() {
//    var  r = confirm("The year is 2048. There has been a global viral pandemic that has 
//      wiped out 86% of the world population. Continue?");
//     if (r != true) {
//         alert("Phew! It was just a dream...");    
//     } else {
//         alert("We must find the cure!");
//         search();
//     }
// }
function hp(item, thingy) {
  yourStrike = item.power;
  strike = obstactles[thingy].health / 4;
  while (this.health > 0 && obstactles[thingy].health > 0) {
    if (Math.round(Math.random()) < 1) {
      this.health = this.health - strike;
      console.log("You were struck by its " + obstactles[thingy].items[Math.round(Math.random())] + "! Your health is at " + this.health);
    }
    else {
      if (Math.round(Math.random()) < item.chance) {
        obstactles[thingy].health = obstactles[thingy].health - yourStrike;
        console.log("You " + item.good + "! Its health is at " + obstactles[thingy].health);
      }
      else
        console.log("You used your " + item.name + " and " + item.bad + "! Its health is at " + obstactles[thingy].health + ", yours is " + this.health);
    } 
  }
}

function search() {
  
  for(var i=0; i < cross.length; i) {
    console.log(epic[Math.floor(Math.random()*epic.length)] + "...");
    var thingy = cross.shift();
    
    if (Number.isInteger(thingy)) {
      console.log("You come across a zombie named " + obstactles[thingy].name + "!");
      var item = this.items[Math.floor(Math.random()*this.items.length)];
      this.fight(item,"swing");
      this.hp(item,thingy);
      if (this.health < 1) {
        console.log("Wake up! It was just a dream. Back to coding.");
        return;
      }
      else 
        console.log("You have defeated " + obstactles[thingy].name + "!");
    }
    else if (thingy == cure) {
      console.log("You found a " + thingy.name + "!");
      console.log("You have the cure! The day is won!");
      return;
    }
    else {
      console.log("You found a " + thingy.name + "!");
      this.grab(thingy);

    }
  }
}

var epic = ["You journey through a forest", "You enter a factory", "You come across a college campus",
"You find a supermarket", "You run into an apartment complex", "You find shelter in a shopping mall",
"You climb aboard a aircraft carrier", "You scale a fire escape into an office building",
"You bust through a window into a library", "You jump into the public outdoor pool", 
"You're standing still"];


boy.search();

boy.toss(lightningBolt);
boy.fight(legos,"throw");
// Refactored Code






// Reflection
//
//
//
//
//
//
//
//