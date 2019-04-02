// using argument and function


var args = process.argv;
var dice = process.argv[2];
function rollingDice(diceAmount){
    for (var i = 0; i < diceAmount; i++){
        var output = Math.floor(Math.random()*6 + 1);
        console.log(output);
    }
}
rollingDice(dice);