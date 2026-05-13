function jumpSearch(nums: Array<number>, target: number): number {
    const step = Math.floor(Math.sqrt(nums.length));
    let prev = 0;
    let current = step;

    while (current < nums.length && nums[current - 1] < target) {
        prev = current;
        current += step
    }

    for(let i = prev; i < Math.min(nums.length, current); i++) {
        if (nums[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(jumpSearch([1, 2, 3, 4, 5], 5));
console.log(jumpSearch([100, 200, 300, 400, 500], 500));
console.log(jumpSearch([12, 24, 36, 48, 60, 72, 84], 12));
console.log(jumpSearch([1, 2, 3, 5, 8, 13, 21, 34, 55], 2));

// O(n)
