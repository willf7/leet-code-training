function sortArray(nums: number[]): number[] {
    let orderedNums: number[] = []
    let numsLength = nums.length
    
    for (let i = 0; i < numsLength; i++) {
        let smallestNum = nums[0];
        let smallestIndex = 0;

        for (let j = 1; j < nums.length; j++) {
            if (nums[j] < smallestNum) {
                smallestNum = nums[j];
                smallestIndex = j;
            }
        }

        orderedNums.push(smallestNum);
        nums.splice(smallestIndex, 1);
    }
 
    return orderedNums;
};

console.log(sortArray([5,2,3,1])); // Expected output: [1,2,3,5]
console.log(sortArray([5,1,1,2,0,0])); // Expected output: [0,0,1,1,2,5]

// O(n^2)