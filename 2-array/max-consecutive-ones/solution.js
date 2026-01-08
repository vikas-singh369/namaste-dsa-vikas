var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;

    for(let i =0; i< nums.length; i++){
        if(nums[i]===1){
            count++;
            maxCount = Math.max(count, maxCount);
        }else {
            count = 0
        }
    }
    return maxCount;
};