function addUpTo(n) {
  return n * (n + 1) / 2;
}

let t11 = performance.now();
addUpTo(1000000000);
let t22 = performance.now();
console.log(`Time Elapsed: ${(t22 - t11) / 1000} seconds.`)