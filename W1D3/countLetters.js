function countLetters(word) {

  var lhlHouse = word.split(" ").join("");
  var outputLetters = {};
  for (var i = 0; i < lhlHouse.length; i++) {
 //console.log(i); //i represent each of the positions
 //console.log(lhlHouse[i]);
 var letter = lhlHouse[i];
    if (letter in outputLetters) {
    outputLetters[letter] += 1;
    } else {
    outputLetters[letter]= 1;
    }
  }
 // console.log("test")
 // console.log(countLetters)
  return outputLetters;
}
console.log(countLetters("Lighthouse in the house"));

// defining var and using if/else statement
// i as previously defined = 0 and is < lhlHouse.length
// split with space, while join without spaces