/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var nums = [2, 7, 11, 15];
var target = 9;
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0 ; i<nums.length; i++)
    {
        const num1  = target - nums[i];
        if(map.has(num1))
        {
            return [map.get(num1), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
console.log(twoSum(nums, target));
