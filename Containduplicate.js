/**
 * @param {number[]} nums
 * @return {boolean}
 */
const nums = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
var containsDuplicate = function(nums) {
     const map = new Map();
    for( let i =0 ; i<= nums.length; i++)
    {
        if(map.has(nums[i]))
        {
            return true;
        }
        map.set(nums[i]);
    }
    return false;
};