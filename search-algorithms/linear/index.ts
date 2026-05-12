function linearSearch(nums: Array<number>, target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }
    }

    return -1
}

console.log(linearSearch([1,2,3,4,5,6,7,8], 6));
console.log(linearSearch([3,5,6,7,9,16,17,28], 28));
console.log(linearSearch([3,5,6,7,9,16,17,28], 4));

// O(n)