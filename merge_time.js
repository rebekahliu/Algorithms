const mergeTime = function(arr) {
  let existingData = [];

  arr.forEach(timeBlock => {
    if (existingData.length === 0) {
      existingData.push(timeBlock);
    }

    let startIdx = binarySearch(existingData, timeBlock[0]);
    let endIdx = binarySearch(existingData, timeBlock[1]);

    // max of existing block containing new timeBlock, or end of new timeBlock
    let endTime = Math.max(existingData[endIdx][1], timeBlock[1]);

    if (startIdx === endIdx) {
      // new timeBlock-start within existing, possibly extend existing
      if (timeBlock[0] < existingData[startIdx][1]) {
        existingData[startIdx][1] = endTime;
      } else {
      // new timeBlock-start outside existing, splice in new timeBlock
        existingData.splice(startIdx + 1, 0, timeBlock);
      }
    } else {
      if (startIdx < existingData[startIdx][1]) {
        // splice in new timeBlock and remove old blocks, including startIdx timeBlock
        existingData.splice(startIdx, endIdx - startIdx + 1, [existingData[startIdx][0], endTime]);
      } else {
        // splice in new timeBlock and remove old blocks, not including startIdx timeBlock
        existingData.splice(startIdx + 1, endIdx - startIdx, [timeBlock[0], endTime]);
      }
    }
  });

  
  return existingData.reduce( (acc, timeBlock) => acc + timeBlock[1] - timeBlock[0] , 0);
};

// will return index n is contained in or index of previous time block
const binarySearch = function(arr, n) {
  if (arr.length === 1) return 0;

  let midIdx = Math.floor(arr.length / 2);
  let midBlock = arr[midIdx];
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx + 1);

  if (n === midBlock[0]) {
    return midIdx;
  } else if (n > midBlock[0]) {
    // check for 1.n within block 2.this is the last block 3.n less than next block
    if (n < midBlock[1] || !arr[(midIdx + 1)] || n < arr[(midIdx + 1)][0]) return midIdx;
    return midIdx + binarySearch(right, n) + 1;
  } else if (n < midBlock[0]) {
    return binarySearch(left, n);
  }

};

const time = [[5, 15], [10, 20], [15, 33], [55, 60], [40, 50], [45, 60], [70, 80]];

console.log(mergeTime(time));
// console.log(searchTime(time, 16));
// console.log(searchTime(time, 34));
// console.log(searchTime(time, 66));