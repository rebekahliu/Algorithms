function binarySearch(arr, n) {
  if (arr.length <= 1) {
    if (arr[0] === n) return 0;
    return -1;
  }

  let midIdx = Math.floor(arr.length/2);
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx + 1);

  if (arr[midIdx] === n) {
    return midIdx;
  } else if (arr[midIdx] > n) {
    return binarySearch(left, n);
  } else if (arr[midIdx] < n) {
    let rightResult = binarySearch(right, n);
    if (rightResult === -1) return -1;
    return rightResult + midIdx + 1;
  }
}

// using binarySearch
function indexEqualsValueSearch(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let idx = Math.floor((end + start) / 2);

    if (arr[idx] === idx && (idx === 0 || arr[idx - 1] - (idx - 1) < 0)) {
      return idx;
    } else if (arr[idx] < idx) {
      start = idx + 1;
    } else {
      end = idx - 1;
    }
  }
  return -1;
}

console.log('answer: ', indexEqualsValueSearch([-8,0,1,3,5]));
console.log('answer: ', indexEqualsValueSearch([-5,0,2,3,10,29]));
console.log('answer: ', indexEqualsValueSearch([1,1,5,3]));
