var twoSum = function(nums, target) {
    let complements = new Object();
    for (let i = 0; i < nums.length; i++) {
        console.log(complements);
        let num = nums[i].toString();
        console.log('num', num);
        let complement = target - nums[i];
        console.log('complement', complement);
        console.log(complements[num]);
        console.log([complements[num], i]);
        if (complements[num] || complements[num] === 0) return [complements[num], i];
        complements[complement] = i;
    }
};

console.log(twoSum([3,3], 6));
