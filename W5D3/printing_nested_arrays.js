function printItems(array) {
    for (item of array) {
      if (Array.isArray(item)) {
        // Print out all it's items individually
      } else {
        console.log(item);
      }
    }
  }
  
  const array = ["😎", "💩", "🤗", "😼", "😂"];
  printItems(array);