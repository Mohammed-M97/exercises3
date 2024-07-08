function maps(x) {
  let doubleArray = [];
  for (let i = 0; i < x.length; i++) {
    doubleArray.push(x[i] * 2);
  }
  return doubleArray;
}

console.log(maps([1, 2, 3]));