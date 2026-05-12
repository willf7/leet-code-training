function binarySearch(nums: Array<number>, target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] == target) {
            return middle;
        }

        if (nums[middle] > target) {
            right = middle - 1;
        }

        if (nums[middle] < target) {
            left = middle + 1;
        }
    }

    return -1
}

function binarySearch2(nums: Array<number>, target: number): number {
    let left = 0;
    let right = nums.length;

    do {
        let middle = Math.floor(left + (right - left) / 2);
        let value = nums[middle];

        if (value === target) {
            return middle;
        } else if (value > target) {
            right = middle;
        } else {
            left = middle + 1;
        }
    } while (left < right);

    return -1
}

console.log('With first implementation: ')
console.log(binarySearch([1,2,3,4,5,6,7,8], 6));
console.log(binarySearch([3,5,6,7,9,16,17,28], 28));
console.log(binarySearch([3,5,6,7,9,16,17,28], 4));

console.log('With second implementation: ')
console.log(binarySearch2([1,2,3,4,5,6,7,8], 6));
console.log(binarySearch2([3,5,6,7,9,16,17,28], 28));
console.log(binarySearch2([3,5,6,7,9,16,17,28], 4));

// O(log n)