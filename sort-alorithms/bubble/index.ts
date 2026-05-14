function bubbleSort(nums: number[]): number[] {
    let arrayLength = nums.length;

    for (let i = 0; i < nums.length - 1; i++) {
        let swapped = false;
        
        for (let j = 0; j < arrayLength - 1; j++) {
            if ((j + 1 < nums.length) && nums[j] > nums[j + 1]) {
                let assistent = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = assistent
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }

        arrayLength--;
    }
    
    return nums;
};

function bubbleSort2(nums: number[]): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length -1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let tmp = nums[j];
                nums[j] = nums[j + 1];
                nums[j  + 1] = tmp;
            }
        }
    }

    return nums;
}

console.log(bubbleSort([9,4,7,1,3])); // Expected output: [1,3,4,7,9]
console.log(bubbleSort2([10,8,6,4,2])); // Expected output: [2,4,6,8,10]

// O(n^2)

