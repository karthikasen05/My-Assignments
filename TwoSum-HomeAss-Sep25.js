const nums = [2,4,7,8,11,14];
const target = 18;
function TwoSum(nums,target) {
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i]+nums[j]===target) {
                results.push([nums[i],nums[j]]);

                
            }
            
        }
       
        
    }
  return results;  
}
console.log(TwoSum(nums,target));