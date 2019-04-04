var listIndex = list.length
return function() {
  listIndex++;
  if (listIndex >= list.length) {
    listIndex = 0
  }
  return list[listIndex];
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6