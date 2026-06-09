/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const array = [];
    var majoritynums = nums.length/2;
    for(let i=0 ;i< nums.length; i++)
    {
        array[nums[i]] = (array[nums[i]] || 0) + 1;
    }
    for(let i=0 ;i< array.length; i++)
    {
        if(array[i]>=majoritynums)
        return i;
    }


    return 0;
    
};
const nums = [2,2,1,1,1,2,2];
console.log(majorityElement(nums));