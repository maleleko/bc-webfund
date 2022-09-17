function pizzaOven(crust, sauce, cheese, toppings) {
var pizzaInfo = {};
    pizzaInfo.crust = crust;
    pizzaInfo.sauce = sauce;
    pizzaInfo.cheese = cheese;
    pizzaInfo.toppings = toppings;
    return pizzaInfo;

}
var p1 = pizzaOven("deep dish", "tradtional", "mozzarella", ["pepporoni", "sausage"]);
console.log(p1);

function pizzaOven(crust, sauce, cheese, toppings) {
    var pizzaTwo = {};
    pizzaTwo.crust = crust;
    pizzaTwo.sauce = sauce;
    pizzaTwo.cheese = cheese;
    pizzaTwo.toppings = toppings;
    return pizzaTwo;
}
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

// BONUS PIZZA
function pizzaOven(crust, sauce, cheese, toppings) {
    var pizzaTres = {};
    pizzaTres.crust = crust;
    pizzaTres.sauce = sauce;
    pizzaTres.cheese = cheese;
    pizzaTres.toppings = toppings;
    return pizzaTres;
}
var p3 = pizzaOven("garlic crust", "bbq", "mozzarella", ["chicken", "pineapple"]);
console.log(p3);

function pizzaOven(crust, sauce, cheese, toppings) {
    var myFav = {};
    myFav.crust = crust;
    myFav.sauce = sauce;
    myFav.cheese = cheese;
    myFav.toppings = toppings;
    return myFav;
}
var fav = pizzaOven("dominoes garlic grust", "marinara", "mozzarella", ["pepperoni", "jalepenos", "bacon bits"]);
console.log(fav);

// RANDOMIZER PIZZA

var crustType = [
    "tradtional",
    "garlic crust",
    "deep dish",
    "pizza hut crust lol",
];

var sauceType = [
    "marinara",
    "bbq",
    "spicy marinara",
    "garlic aoili",
    "nacho cheese",
];

var toppingSelec = [
    "pepperoni",
    "jalepeno",
    "chicken",
    "sausage",
    "spinach",
    "red pepper",
    "green pepper",
    "onion",
    "mushroom",
    "anchovies",
    "artichokes",
];

var cheeseType = [
    "mozzarella",
    "feta",
    "cheddar",
    "goat",
    "parmesean",
];

function randomRange(max, min) {
return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return [i];
}

function randomPizza() {
    var random = {};
    random.crustType = randomPick(crustType);
    random.sauceType = randomPick(sauceType);
    random.cheeseType = [];
    random.toppingSelec = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        random.cheeseType.push(randomPick(cheeseType));
    }
    for(var i=0; i<randomRange(4,0); i++) {
        random.toppingSelec.push(randomPick(toppingSelec));
    }
    return random;
}
console.log(randomPizza());


