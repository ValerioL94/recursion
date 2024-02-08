//iteration
function fibs(n) {
  if (n <= 0) return 0;
  if (n == 1) return 1;
  let a = 0;
  let b = 1;
  let array = [];
  for (let i = 0; i <= n; ++i) {
    let c;
    if (i == 0) c = 0;
    else if (i == 1) c = 1;
    else {
      c = a + b;
      a = b;
      b = c;
    }
    array.push(c);
  }
  return array;
}
console.log(fibs(8));

//recursion
function fibsRec(n) {
  if (n <= 0) return [0];
  if (n == 1) return [0, 1];
  const arr = fibsRec(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
}

console.log(fibsRec(8));
