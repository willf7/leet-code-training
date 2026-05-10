function sortArray(nums: number[]): number[] {
    let numsLength = nums.length
    
    for (let i = 0; i < numsLength - 1; i++) {
        let smallestIndex = i;

        for (let j = i + 1; j < numsLength; j++) {
            if (nums[j] < nums[smallestIndex]) {
                smallestIndex = j;
            }
        }

        [nums[i], nums[smallestIndex]] = [nums[smallestIndex], nums[i]];
    }
 
    return nums;
};

console.log(sortArray([5,2,3,1])); // Expected output: [1,2,3,5]
console.log(sortArray([5,1,1,2,0,0])); // Expected output: [0,0,1,1,2,5]

// O(n^2)