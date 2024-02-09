let array1 = [3, 2, 1, 13, 8, 5, 0, 1];
let array2 = [105, 79, 100, 110];
let array3 = [458, 60];
let array4 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function mergeSort(array) {
  if (array.length <= 1) return array;
  let arrA = mergeSort(array.slice(0, array.length / 2));
  let arrB = mergeSort(array.slice(array.length / 2));
  return merge(arrA, arrB);
}

function merge(arrA, arrB) {
  let sorted = [];
  while (arrA.length && arrB.length) {
    if (arrA[0] < arrB[0]) {
      sorted.push(arrA.shift());
    } else {
      sorted.push(arrB.shift());
    }
  }
  return [...sorted, ...arrA, ...arrB];
}

console.log(mergeSort(array1));
console.log(mergeSort(array2));
console.log(mergeSort(array3));
console.log(mergeSort(array4));
