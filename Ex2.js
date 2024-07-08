function digitize(n) {
  let x = String(n).split("");
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(Number(x[i]));
  }
  return arr.reverse();
}

console.log(digitize(35231));
