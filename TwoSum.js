/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var nums = [2, 7, 11, 15];
var target = 9;

var twoSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if(sum == target)
        {
            return [left, right];
        }
        if(sum < target)
        {
            left++;
        
        }
        else
        {
            right--;
        }
    }
    return [];
};
console.log(twoSum(nums, target));