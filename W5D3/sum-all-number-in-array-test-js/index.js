function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {  // base case
      sum += item;
    }
  });
  return sum;
}

const array = [[[5], [[[4]]], [[3], 2]], 1, []];

console.log(sumItems(array));

module.exports = sumItems;