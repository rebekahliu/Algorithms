function edisonNumber(array) {
  let sortedArray = mergeSort(array);
  // if number of elements less than array minimum
  if (sortedArray[0] > array.length) return array.length;
  // if all numbers are 0
  if (sortedArray[array.length - 1] === 0) return 0;

  // all other cases
  for (let i = 0 ; i < array.length ; i++ ) {
    if (array.length - i === sortedArray[i]) return sortedArray[i];
    if (array.length - i < sortedArray[i]) return sortedArray[i - 1];
  }
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let midIdx = Math.floor(array.length/2);
  let leftArray = mergeSort(array.slice(0, midIdx));
  let rightArray = mergeSort(array.slice(midIdx, array.length));
  let merged = [];

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] > rightArray[0]) {
      merged = merged.concat(rightArray.shift());
    } else if (leftArray[0] <= rightArray[0]) {
      merged = merged.concat(leftArray.shift());
    }
  }

  return merged.concat(leftArray).concat(rightArray);
}

console.log(edisonNumber([5,5,6,8,2,3,2]));
console.log(edisonNumber([0, 0]));
console.log(edisonNumber([1, 1, 1, 1]));
console.log(edisonNumber([20, 10, 30, 50]));
